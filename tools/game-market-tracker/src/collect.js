// Thu thap bang xep hang + so lieu Google Play cho moi quoc gia trong config.json.
// Chay moi ngay 1 lan (vd: cron), du lieu luu vao data/market.db.
import fs from 'node:fs';
import gplayMod from 'google-play-scraper';
import appStore from 'app-store-scraper';
import { openDb, today } from './db.js';
import { appleGenre, googleGenreKey } from './genres.js';

const gplay = gplayMod.default ?? gplayMod;
const cfg = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const db = openDb(process.argv.includes('--db') ? process.argv[process.argv.indexOf('--db') + 1] : undefined);
const date = today();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function withRetry(label, fn, tries = 3) {
  for (let i = 1; i <= tries; i++) {
    try { return await fn(); }
    catch (e) {
      console.warn(`  ! ${label} (lan ${i}/${tries}): ${e.message}`);
      if (i === tries) return null;
      await sleep(cfg.delayMs * 3 * i);
    }
  }
}

const insertChart = db.prepare(`INSERT OR REPLACE INTO chart_snapshots
  (date, store, country, collection, category, rank, app_id, title, developer)
  VALUES (@date, @store, @country, @collection, @category, @rank, @app_id, @title, @developer)`);
const saveChart = db.transaction((rows) => rows.forEach((r) => insertChart.run(r)));

const insertMetric = db.prepare(`INSERT OR REPLACE INTO app_metrics
  (date, store, app_id, title, developer, genre, released, min_installs, max_installs, ratings, score, offers_iap, iap_range)
  VALUES (@date, @store, @app_id, @title, @developer, @genre, @released, @min_installs, @max_installs, @ratings, @score, @offers_iap, @iap_range)`);

const insertGenre = db.prepare(`INSERT OR REPLACE INTO app_genres
  (store, app_id, genre_key, genre_name, sub_genres, source_country, updated_at)
  VALUES (@store, @app_id, @genre_key, @genre_name, @sub_genres, @source_country, datetime('now'))`);
// Da co the loai roi, hoac tra that bai trong 7 ngay qua, thi bo qua.
const hasGenre = db.prepare(`SELECT 1 FROM app_genres WHERE store = ? AND app_id = ?
  AND (genre_key IS NOT NULL OR updated_at >= datetime('now', '-7 day'))`);
const saveGoogleGenre = (appId, a, country) => insertGenre.run({ store: 'google', app_id: appId,
  genre_key: googleGenreKey(a?.genreId), genre_name: a?.genre ?? null, sub_genres: null, source_country: country });

// Nuoc dau tien thay moi game: dung de tra the loai (co game khong phat hanh o US).
const seen = { apple: new Map(), google: new Map() };
const markSeen = (store, country, ids) => ids.forEach((id) => { if (!seen[store].has(id)) seen[store].set(id, country); });

const googleDetailIds = new Set(cfg.watchlist?.google ?? []);
let ok = 0, fail = 0;

for (const country of cfg.countries) {
  console.log(`\n=== ${country.toUpperCase()} ===`);

  for (const collection of cfg.apple.collections) for (const category of cfg.apple.categories) {
    const list = await withRetry(`apple ${collection}/${category}`, () => appStore.list({
      collection: appStore.collection[collection], category: appStore.category[category],
      country, num: Math.min(cfg.topN, 200),
    }));
    await sleep(cfg.delayMs);
    if (!list?.length) { fail++; continue; }
    saveChart(list.map((a, i) => ({ date, store: 'apple', country, collection, category, rank: i + 1,
      app_id: String(a.id), title: a.title, developer: a.developer })));
    markSeen('apple', country, list.map((a) => String(a.id)));
    console.log(`  apple  ${collection.padEnd(18)} ${category}: ${list.length} game`);
    ok++;
  }

  for (const collection of cfg.google.collections) for (const category of cfg.google.categories) {
    const list = await withRetry(`google ${collection}/${category}`, () => gplay.list({
      collection: gplay.collection[collection], category: gplay.category[category],
      country, num: Math.min(cfg.topN, 500),
    }));
    await sleep(cfg.delayMs);
    if (!list?.length) { fail++; continue; }
    saveChart(list.map((a, i) => ({ date, store: 'google', country, collection, category, rank: i + 1,
      app_id: a.appId, title: a.title, developer: a.developer })));
    markSeen('google', country, list.map((a) => a.appId));
    if (collection === 'GROSSING') list.slice(0, cfg.googleDetailsTopN).forEach((a) => googleDetailIds.add(a.appId));
    console.log(`  google ${collection.padEnd(18)} ${category}: ${list.length} game`);
    ok++;
  }
}

// maxInstalls la so toan cau, nen moi app chi can lay 1 lan/ngay.
console.log(`\n=== Chi tiet Google Play: ${googleDetailIds.size} game ===`);
for (const appId of googleDetailIds) {
  const a = await withRetry(`google app ${appId}`, () => gplay.app({ appId, country: 'us' }));
  await sleep(cfg.delayMs);
  if (!a) continue;
  insertMetric.run({ date, store: 'google', app_id: appId, title: a.title, developer: a.developer,
    genre: a.genre, released: a.released ?? null, min_installs: a.minInstalls ?? null,
    max_installs: a.maxInstalls ?? null, ratings: a.ratings ?? null, score: a.score ?? null,
    offers_iap: a.offersIAP ? 1 : 0, iap_range: a.IAPRange ?? null });
  saveGoogleGenre(appId, a, 'us');
}

// The loai cho moi game trong bang xep hang. Chi tra game chua co trong cache.
// iOS: API lookup cua iTunes nhan toi 100 id/lan, phai goi dung nuoc vi lookup chi tra game co ban o nuoc do.
const appleTodo = new Map();
for (const [id, country] of seen.apple) if (!hasGenre.get('apple', id)) appleTodo.set(country, [...(appleTodo.get(country) ?? []), id]);
const appleTotal = [...appleTodo.values()].reduce((n, ids) => n + ids.length, 0);
console.log(`\n=== The loai iOS: ${appleTotal} game moi ===`);
for (const [country, ids] of appleTodo) for (let i = 0; i < ids.length; i += 100) {
  const chunk = ids.slice(i, i + 100);
  const res = await withRetry(`apple lookup ${country}`, async () => {
    const r = await fetch(`https://itunes.apple.com/lookup?id=${chunk.join(',')}&country=${country}`);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return (await r.json()).results ?? [];
  });
  await sleep(cfg.delayMs);
  if (!res) continue;
  const found = new Map(res.map((r) => [String(r.trackId), r]));
  for (const id of chunk) {
    const g = appleGenre(found.get(id)?.genreIds, found.get(id)?.genres);
    insertGenre.run({ store: 'apple', app_id: id, genre_key: g.key, genre_name: g.name, sub_genres: g.subs, source_country: country });
  }
}

// Android: moi game 1 lan goi chi tiet. Lan dau co the nhieu, nen gioi han moi lan chay; phan con lai de lan sau.
const googleTodo = [...seen.google].filter(([id]) => !hasGenre.get('google', id));
const maxGoogle = cfg.genreLookupMaxPerRun ?? 400;
console.log(`\n=== The loai Android: ${googleTodo.length} game moi${googleTodo.length > maxGoogle ? `, lan nay tra ${maxGoogle}` : ''} ===`);
for (const [appId, country] of googleTodo.slice(0, maxGoogle)) {
  const a = await withRetry(`google genre ${appId}`, () => gplay.app({ appId, country }), 2);
  await sleep(cfg.delayMs);
  saveGoogleGenre(appId, a, country);
}

console.log(`\nXong ${date}: ${ok} bang thanh cong, ${fail} bang loi.`);
if (fail) console.log('Bang loi thuong do store doi cau truc hoac chan tam thoi; thu tang delayMs hoac chay lai sau.');
