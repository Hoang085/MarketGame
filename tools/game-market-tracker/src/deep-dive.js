// Dao sau 1 game hoac 1 tu khoa bang scraper. Xuat JSON gon de agent doc.
// node src/deep-dive.js <lenh> <store> <id|tu-khoa> [--country vn] [--lang vi] [--num 40]
// lenh: app | reviews | similar | developer | search | suggest
// store: google | apple   (apple: id la so App Store ID; developer: devId)
import gplayMod from 'google-play-scraper';
import appStore from 'app-store-scraper';

const gplay = gplayMod.default ?? gplayMod;
const [cmd, store, target] = process.argv.slice(2);
const opt = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
const country = opt('--country', 'us');
const lang = opt('--lang', 'en');
const num = Number(opt('--num', 40));
if (!cmd || !store || !target) {
  console.error('Dung: node src/deep-dive.js <app|reviews|similar|developer|search|suggest> <google|apple> <id|tu-khoa> [--country vn] [--lang vi] [--num 40]');
  process.exit(1);
}
const G = store === 'google';
const isNum = /^\d+$/.test(target);
const brief = (a) => ({ id: G ? a.appId : a.id, title: a.title, developer: a.developer, score: a.score,
  installs: a.installs, free: a.free, genre: a.genre ?? a.primaryGenre });

const run = {
  async app() {
    const a = G ? await gplay.app({ appId: target, country, lang })
                : await appStore.app({ ...(isNum ? { id: target } : { appId: target }), country, lang, ratings: true });
    return G ? {
      id: a.appId, title: a.title, developer: a.developer, developerId: a.developerId, genre: a.genre,
      released: a.released, updated: new Date(a.updated).toISOString().slice(0, 10), version: a.version,
      installs: a.installs, minInstalls: a.minInstalls, maxInstalls: a.maxInstalls, score: a.score,
      ratings: a.ratings, reviews: a.reviews, histogram: a.histogram, free: a.free, price: a.price,
      offersIAP: a.offersIAP, IAPRange: a.IAPRange, adSupported: a.adSupported, contentRating: a.contentRating,
      summary: a.summary, description: a.description?.slice(0, 1500), recentChanges: a.recentChanges, url: a.url,
    } : {
      id: a.id, appId: a.appId, title: a.title, developer: a.developer, developerId: a.developerId,
      genres: a.genres, released: a.released, updated: a.updated, version: a.version, score: a.score,
      ratings: a.ratings, histogram: a.histogram, free: a.free, price: a.price, contentRating: a.contentRating,
      description: a.description?.slice(0, 1500), releaseNotes: a.releaseNotes, url: a.url,
    };
  },
  async reviews() {
    if (G) {
      const r = await gplay.reviews({ appId: target, country, lang, sort: gplay.sort.NEWEST, num });
      return (r.data ?? r).map((x) => ({ date: String(x.date).slice(0, 10), score: x.score, thumbsUp: x.thumbsUp, text: x.text?.slice(0, 600) }));
    }
    const out = [];
    for (let page = 1; page <= Math.min(10, Math.ceil(num / 50)); page++) {
      const r = await appStore.reviews({ id: target, country, sort: appStore.sort.RECENT, page }).catch(() => []);
      if (!r.length) break; out.push(...r);
    }
    return out.slice(0, num).map((x) => ({ date: String(x.updated ?? '').slice(0, 10), score: x.score, title: x.title, text: x.text?.slice(0, 600) }));
  },
  async similar() {
    const r = G ? await gplay.similar({ appId: target, country, lang })
                : await appStore.similar({ ...(isNum ? { id: target } : { appId: target }), country });
    return r.slice(0, num).map(brief);
  },
  async developer() {
    const r = G ? await gplay.developer({ devId: target, country, lang, num })
                : await appStore.developer({ devId: target, country });
    return r.slice(0, num).map(brief);
  },
  async search() {
    const r = G ? await gplay.search({ term: target, country, lang, num })
                : await appStore.search({ term: target, country, num });
    return r.map((a, i) => ({ rank: i + 1, ...brief(a) }));
  },
  async suggest() {
    const r = G ? await gplay.suggest({ term: target, country, lang })
                : await appStore.suggest({ term: target, country });
    return r.map((x) => (typeof x === 'string' ? x : x.term));
  },
};

if (!run[cmd]) { console.error(`Lenh khong hop le: ${cmd}`); process.exit(1); }
try {
  console.log(JSON.stringify({ cmd, store, target, country, lang, data: await run[cmd]() }, null, 1));
} catch (e) {
  console.error(`Loi ${cmd} ${store} ${target} (${country}): ${e.message}`);
  process.exit(2);
}
