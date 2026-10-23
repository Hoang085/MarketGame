// Tao du lieu GIA LAP 8 ngay de xem thu bao cao (khong goi store). Dung: npm run demo
import fs from 'node:fs';
import { openDb } from './db.js';

fs.rmSync('data/demo.db', { force: true });
const db = openDb('data/demo.db');
const countries = ['vn', 'us', 'gb', 'in', 'br', 'mx', 'tr'];
const games = Array.from({ length: 160 }, (_, i) => ({ id: `com.demo.game${i}`, title: `Demo Game ${i}`, dev: `Studio ${i % 23}` }));
let seed = 42; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const ins = db.prepare('INSERT INTO chart_snapshots VALUES (?,?,?,?,?,?,?,?,?)');
const met = db.prepare('INSERT INTO app_metrics VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)');

for (let d = 0; d < 8; d++) {
  const date = new Date(Date.UTC(2026, 9, 11 + d)).toISOString().slice(0, 10);
  for (const c of countries) for (const [store, cols] of [['google', ['GROSSING', 'TOP_FREE']], ['apple', ['TOP_GROSSING_IOS', 'TOP_FREE_IOS']]])
    for (const col of cols) {
      const score = games.map((g, i) => {
        let s = i + rnd() * 60;
        if (i === 120) s -= d * 18;                    // game dang len o moi nuoc
        if (i === 140 && d >= 5 && c !== 'vn') s = -1; // game moi bung no ngoai VN
        if (col.includes('FREE')) s += (i % 7) * 15;
        return { g, s };
      }).sort((a, b) => a.s - b.s).slice(0, 100);
      score.forEach(({ g }, r) => ins.run(date, store, c, col, store === 'apple' ? 'GAMES' : 'GAME', r + 1,
        store === 'apple' ? String(900000 + Number(g.id.slice(13))) : g.id, g.title, g.dev));
    }
  games.slice(0, 40).concat(games[120], games[140]).forEach((g, i) => met.run(date, 'google', g.id, g.title, g.dev, 'Puzzle', null,
    1e6, 2e6 + i * 5e4 + d * (g === games[120] ? 90000 : g === games[140] ? 150000 : 3000 + i * 400), 50000 + d * 300, 4.3, 1, '$0.99 - $99.99'));
}
// The loai gia lap: PUZZLE va CASUAL nhieu nhat, mot so game de trong (gia lap tra khong ra).
const pool = ['PUZZLE', 'PUZZLE', 'CASUAL', 'CASUAL', 'ACTION', 'STRATEGY', 'ROLE_PLAYING', 'SIMULATION', 'ARCADE', 'CASINO', 'SPORTS', 'WORD'];
const gen = db.prepare(`INSERT INTO app_genres VALUES (?,?,?,?,?,?,datetime('now'))`);
games.forEach((g, i) => {
  if (i % 37 === 5) return;
  const key = i === 120 ? 'PUZZLE' : i === 140 ? 'SIMULATION' : pool[(i * 7) % pool.length];
  gen.run('google', g.id, key, key, null, 'us');
  if (key !== 'ARCADE') gen.run('apple', String(900000 + i), key, key, key, 'us'); // iOS khong co ARCADE
});
console.log('Da tao du lieu gia lap: data/demo.db');
