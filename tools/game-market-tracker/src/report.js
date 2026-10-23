// Tao bao cao so sanh cheo giua cac thi truong tu du lieu da thu thap.
// Dung: node src/report.js [--db data/market.db] [--out reports] [--days 7]
import fs from 'node:fs';
import path from 'node:path';
import { openDb } from './db.js';
import { genreLabel } from './genres.js';

const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
const cfg = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const db = openDb(arg('--db', 'data/market.db'));
const outDir = arg('--out', 'reports');
const days = Number(arg('--days', cfg.report.lookbackDays));
const minC = cfg.report.minCountriesForTrend;
const maxRows = cfg.report.maxRowsPerSection;
const cut = cfg.report.trendRankCutoff ?? 50;

const latest = db.prepare('SELECT MAX(date) d FROM chart_snapshots').get().d;
if (!latest) { console.error('Chua co du lieu. Hay chay: npm run collect'); process.exit(1); }
const target = new Date(Date.parse(latest) - days * 864e5).toISOString().slice(0, 10);
const baseline = db.prepare('SELECT MAX(date) d FROM chart_snapshots WHERE date <= ?').get(target).d
  ?? db.prepare('SELECT MIN(date) d FROM chart_snapshots').get().d;
const hasHistory = baseline && baseline !== latest;

const LABEL = { TOP_GROSSING_IOS: 'Grossing', GROSSING: 'Grossing', TOP_FREE_IOS: 'Free', TOP_FREE: 'Free',
  TOP_PAID_IOS: 'Paid', TOP_PAID: 'Paid', NEW_IOS: 'New', NEW_FREE_IOS: 'New free' };
const kind = (c) => LABEL[c] ?? c;
const STORE = { apple: 'iOS', google: 'Android' };

function links(store, id, country = 'us') {
  const out = [store === 'apple'
    ? `[Store](https://apps.apple.com/${country}/app/id${id})`
    : `[Store](https://play.google.com/store/apps/details?id=${id}&gl=${country.toUpperCase()})`];
  for (const [name, key] of [['AppMagic', `appmagic_${store}`], ['SensorTower', `sensortower_${store}`]]) {
    const t = cfg.links?.[key];
    if (t) out.push(`[${name}](${t.replaceAll('{id}', encodeURIComponent(id)).replaceAll('{country}', country)})`);
  }
  return out.join(' · ');
}
const esc = (s) => String(s ?? '').replaceAll('|', '\\|');
const table = (head, rows) => rows.length
  ? [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.map(esc).join(' | ')} |`)].join('\n')
  : '_Không có kết quả._';

const candidates = new Map();
const addCand = (store, id, title, developer, reason, country) => {
  const k = `${store}:${id}`;
  const c = candidates.get(k) ?? { store, id, title, developer, reasons: new Set(), country };
  c.reasons.add(reason); candidates.set(k, c);
};

const md = [`# Báo cáo thị trường game mobile — ${latest}`, '',
  `Thị trường: ${cfg.countries.map((c) => c.toUpperCase()).join(', ')}. ` +
  (hasHistory ? `So sánh với mốc ${baseline} (${days} ngày).` : 'Mới có 1 ngày dữ liệu nên chưa có phần biến động; chạy thu thập thêm vài ngày.'), ''];

// 1. Game co mat o nhieu nuoc cung luc
md.push('## 1. Game có mặt ở nhiều thị trường', '',
  `Game nằm trong top ${cut} của ít nhất ${minC} nước. Grossing ở nhiều nước = mô hình kiếm tiền đã được chứng minh xuyên văn hóa.`, '');
const spread = db.prepare(`
  SELECT store, collection, app_id, MAX(title) title, MAX(developer) developer,
         COUNT(DISTINCT country) n, MIN(rank) best,
         GROUP_CONCAT(UPPER(country) || '#' || rank, ' ') detail
  FROM chart_snapshots WHERE date = ? AND rank <= ? GROUP BY store, collection, app_id
  HAVING n >= ? ORDER BY n DESC, AVG(rank) ASC LIMIT ?`).all(latest, cut, minC, maxRows);
md.push(table(['Store', 'BXH', 'Game', 'Nhà phát triển', 'Số nước', 'Hạng theo nước', 'Kiểm tra'],
  spread.map((r) => [STORE[r.store], kind(r.collection), r.title, r.developer, r.n, r.detail, links(r.store, r.app_id)])), '');
spread.filter((r) => kind(r.collection) === 'Grossing').slice(0, 10)
  .forEach((r) => addCand(r.store, r.app_id, r.title, r.developer, `Grossing ở ${r.n} nước`));

if (hasHistory) {
  // 2. Leo hang manh
  md.push('## 2. Leo hạng mạnh nhất', '', `Hạng ${baseline} → ${latest}, theo từng nước.`, '');
  const climb = db.prepare(`
    SELECT n.store, n.country, n.collection, n.app_id, n.title, n.developer, o.rank old_rank, n.rank new_rank,
           o.rank - n.rank delta
    FROM chart_snapshots n JOIN chart_snapshots o
      ON o.date = ? AND o.store = n.store AND o.country = n.country AND o.collection = n.collection
     AND o.category = n.category AND o.app_id = n.app_id
    WHERE n.date = ? AND o.rank - n.rank >= 10 ORDER BY delta DESC LIMIT ?`).all(baseline, latest, maxRows);
  md.push(table(['Nước', 'Store', 'BXH', 'Game', 'Hạng cũ → mới', 'Tăng', 'Kiểm tra'],
    climb.map((r) => [r.country.toUpperCase(), STORE[r.store], kind(r.collection), r.title,
      `${r.old_rank} → ${r.new_rank}`, `+${r.delta}`, links(r.store, r.app_id, r.country)])), '');
  climb.slice(0, 10).forEach((r) => addCand(r.store, r.app_id, r.title, r.developer,
    `+${r.delta} hạng ${kind(r.collection)} ${r.country.toUpperCase()}`, r.country));

  // 3. Moi vao bang xep hang
  md.push('## 3. Mới lọt vào bảng xếp hạng', '', 'Game có mặt hôm nay nhưng không có ở mốc so sánh. Lọt mới ở nhiều nước cùng lúc là tín hiệu xu hướng mạnh.', '');
  const fresh = db.prepare(`
    SELECT n.store, n.collection, n.app_id, MAX(n.title) title, MAX(n.developer) developer,
           COUNT(DISTINCT n.country) nc, GROUP_CONCAT(UPPER(n.country) || '#' || n.rank, ' ') detail
    FROM chart_snapshots n
    WHERE n.date = ? AND NOT EXISTS (SELECT 1 FROM chart_snapshots o WHERE o.date = ? AND o.store = n.store
      AND o.country = n.country AND o.collection = n.collection AND o.app_id = n.app_id)
    GROUP BY n.store, n.collection, n.app_id ORDER BY nc DESC, MIN(n.rank) LIMIT ?`).all(latest, baseline, maxRows);
  md.push(table(['Store', 'BXH', 'Game', 'Nhà phát triển', 'Số nước mới vào', 'Chi tiết', 'Kiểm tra'],
    fresh.map((r) => [STORE[r.store], kind(r.collection), r.title, r.developer, r.nc, r.detail, links(r.store, r.app_id)])), '');
  fresh.filter((r) => r.nc >= 2).slice(0, 10).forEach((r) => addCand(r.store, r.app_id, r.title, r.developer,
    `Mới vào ${kind(r.collection)} ở ${r.nc} nước`));

  // 5. Tang luot cai Android
  md.push('## 4. Tăng lượt cài nhanh nhất (Android, toàn cầu)', '',
    '`maxInstalls` là tổng lượt cài toàn cầu do Google Play hiển thị, không tách theo nước. Chênh lệch chỉ mang tính ước lượng.', '');
  const growth = db.prepare(`
    SELECT n.app_id, n.title, n.developer, o.max_installs old_i, n.max_installs new_i,
           n.max_installs - o.max_installs delta, n.ratings - o.ratings d_ratings
    FROM app_metrics n JOIN app_metrics o ON o.store = n.store AND o.app_id = n.app_id AND o.date = ?
    WHERE n.date = ? AND n.store = 'google' AND n.max_installs > 0 AND o.max_installs > 0
    ORDER BY delta DESC LIMIT ?`).all(baseline, latest, maxRows);
  const per = Math.max(1, (Date.parse(latest) - Date.parse(baseline)) / 864e5);
  const fmt = (n) => Number(n).toLocaleString('vi-VN');
  md.push(table(['Game', 'Nhà phát triển', 'Lượt cài tăng', '≈ /ngày', 'Rating tăng', 'Kiểm tra'],
    growth.map((r) => [r.title, r.developer, fmt(r.delta), fmt(Math.round(r.delta / per)), fmt(r.d_ratings ?? 0), links('google', r.app_id)])), '');
  growth.slice(0, 10).forEach((r) => addCand('google', r.app_id, r.title, r.developer, `+${fmt(Math.round(r.delta / per))} cài/ngày`));
}

// Ho so tung thi truong: overlap free vs grossing
md.push(`## ${hasHistory ? 5 : 2}. Hồ sơ kiếm tiền theo thị trường`, '',
  'Tỷ lệ game top Free cũng nằm trong top Grossing. Tỷ lệ cao: người chơi sẵn sàng nạp tiền (IAP). Tỷ lệ thấp: thị trường thiên về kiếm tiền bằng quảng cáo.', '');
const prof = db.prepare(`
  SELECT f.store, f.country, COUNT(*) total,
         SUM(EXISTS (SELECT 1 FROM chart_snapshots g WHERE g.date = f.date AND g.store = f.store AND g.country = f.country
             AND g.collection IN ('TOP_GROSSING_IOS','GROSSING') AND g.app_id = f.app_id)) overlap
  FROM chart_snapshots f WHERE f.date = ? AND f.collection IN ('TOP_FREE_IOS','TOP_FREE')
  GROUP BY f.store, f.country ORDER BY f.store, overlap * 1.0 / total DESC`).all(latest);
md.push(table(['Store', 'Nước', 'Top Free cũng ở Grossing', 'Tỷ lệ'],
  prof.map((r) => [STORE[r.store], r.country.toUpperCase(), `${r.overlap}/${r.total}`, `${Math.round((100 * r.overlap) / r.total)}%`])), '');

// Ty trong the loai: gop iOS + Android, chi tinh bang xep hang chung (GAMES/GAME) de khong dem trung.
const gCut = cfg.report.genreRankCutoff ?? 100;
md.push(`## ${hasHistory ? 6 : 3}. Tỷ trọng thể loại theo thị trường`, '',
  `Tỷ lệ game thuộc mỗi thể loại trong top ${gCut} (gộp iOS + Android), tính trên số game đã biết thể loại. ` +
  'Free = đang được **tải** nhiều, Grossing = đang **kiếm tiền** nhiều. Đây là số đếm thứ hạng, không phải số người chơi thực tế.', '');
const genreCounts = (date) => {
  const out = { Free: new Map(), Grossing: new Map() }; // kind -> country -> genre -> n
  db.prepare(`
    SELECT c.country, CASE WHEN c.collection IN ('TOP_FREE_IOS','TOP_FREE') THEN 'Free' ELSE 'Grossing' END kind,
           g.genre_key genre, COUNT(*) n
    FROM chart_snapshots c LEFT JOIN app_genres g ON g.store = c.store AND g.app_id = c.app_id
    WHERE c.date = ? AND c.rank <= ? AND c.category IN ('GAMES','GAME')
      AND c.collection IN ('TOP_FREE_IOS','TOP_FREE','TOP_GROSSING_IOS','GROSSING')
    GROUP BY 1, 2, 3`).all(date, gCut).forEach((r) => {
    const byC = out[r.kind].get(r.country) ?? new Map();
    byC.set(r.genre, r.n); out[r.kind].set(r.country, byC);
  });
  return out;
};
// share[genre][country | '*'] = ty le trong so game da biet the loai
const shares = (byCountry) => {
  const res = new Map(); let allKnown = 0; const all = new Map();
  for (const [country, byG] of byCountry) {
    const known = [...byG].filter(([g]) => g).reduce((s, [, n]) => s + n, 0);
    allKnown += known;
    for (const [g, n] of byG) if (g) {
      const row = res.get(g) ?? {}; row[country] = known ? n / known : 0; res.set(g, row);
      all.set(g, (all.get(g) ?? 0) + n);
    }
  }
  for (const [g, n] of all) res.get(g)['*'] = allKnown ? n / allKnown : 0;
  return res;
};
const pct = (v) => (v ? `${Math.round(v * 100)}%` : '–');
const nowG = genreCounts(latest);
const oldG = hasHistory ? genreCounts(baseline) : null;
const countries = cfg.countries.filter((c) => nowG.Free.has(c) || nowG.Grossing.has(c));
for (const kindName of ['Free', 'Grossing']) {
  const byCountry = nowG[kindName];
  if (!byCountry.size) continue;
  const total = [...byCountry.values()].flatMap((m) => [...m]).reduce((s, [, n]) => s + n, 0);
  const unknown = [...byCountry.values()].reduce((s, m) => s + (m.get(null) ?? 0), 0);
  const cur = shares(byCountry);
  const prev = oldG ? shares(oldG[kindName]) : null;
  const rows = [...cur].sort((a, b) => b[1]['*'] - a[1]['*']).slice(0, maxRows);
  md.push(`### Top ${kindName === 'Free' ? 'Free (lượt tải)' : 'Grossing (doanh thu)'}`, '');
  const lead = countries.map((c) => {
    const [g, row] = [...cur].sort((a, b) => (b[1][c] ?? 0) - (a[1][c] ?? 0))[0] ?? [];
    return g ? `${c.toUpperCase()}: ${genreLabel(g)} (${pct(row[c])})` : null;
  }).filter(Boolean);
  md.push(`Dẫn đầu từng nước: ${lead.join(' · ')}`, '');
  md.push(table(['Thể loại', 'Tất cả', ...countries.map((c) => c.toUpperCase()), ...(prev ? [`Δ từ ${baseline}`] : [])],
    rows.map(([g, row]) => {
      const d = prev ? Math.round(((row['*'] ?? 0) - (prev.get(g)?.['*'] ?? 0)) * 100) : null;
      return [`${genreLabel(g)} (${g})`, pct(row['*']), ...countries.map((c) => pct(row[c])),
        ...(prev ? [d > 0 ? `+${d} điểm` : d < 0 ? `${d} điểm` : '0'] : [])];
    })), '');
  if (unknown) md.push(`_${unknown}/${total} lượt xuất hiện chưa có thể loại (chưa tra xong hoặc tra không ra), không tính vào tỷ lệ._`, '');
}

md.push('## Danh sách cần kiểm tra trên AppMagic / Sensor Tower', '',
  `Tổng hợp ${candidates.size} game đáng chú ý từ các mục trên. Bản CSV nằm cùng thư mục.`, '');
md.push(table(['Store', 'Game', 'Nhà phát triển', 'Lý do', 'Kiểm tra'],
  [...candidates.values()].map((c) => [STORE[c.store], c.title, c.developer, [...c.reasons].join('; '), links(c.store, c.id, c.country)])));
if (!Object.values(cfg.links ?? {}).some(Boolean))
  md.push('', '> Chưa cấu hình link AppMagic/Sensor Tower. Xem hướng dẫn trong README để thêm vào `config.json`.');

fs.mkdirSync(outDir, { recursive: true });
const mdFile = path.join(outDir, `report-${latest}.md`);
fs.writeFileSync(mdFile, md.join('\n') + '\n');
const csv = ['store,app_id,title,developer,reasons',
  ...[...candidates.values()].map((c) => [c.store, c.id, c.title, c.developer, [...c.reasons].join('; ')]
    .map((v) => `"${String(v ?? '').replaceAll('"', '""')}"`).join(','))].join('\n');
fs.writeFileSync(path.join(outDir, `candidates-${latest}.csv`), '\uFEFF' + csv + '\n');
console.log(`Đã tạo ${mdFile} (${candidates.size} game cần kiểm tra)`);
