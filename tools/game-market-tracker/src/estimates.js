// Ghi va xem so uoc tinh doc duoc tu AppMagic / Sensor Tower / Appfigures.
// node src/estimates.js add --source appmagic --store google --id com.abc.game --country vn \
//      --period 30d --downloads 120000 --revenue 45000 [--title "Ten game"] [--url ...] [--note "..."]
// node src/estimates.js list [--id com.abc.game] [--country vn]
// period: 30d | 7d | 2026-09 (thang) | lifetime ...  — revenue tinh bang USD.
// country: ma nuoc, hoac "ww" cho toan cau.
import { openDb } from './db.js';

const [cmd] = process.argv.slice(2);
const opt = (k) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : undefined);
const num = (v) => (v === undefined || v === '' ? null : Number(String(v).replace(/[^\d.]/g, '')));
const db = openDb(opt('--db'));

if (cmd === 'add') {
  const need = ['--source', '--store', '--id', '--country', '--period'];
  const miss = need.filter((k) => !opt(k));
  if (miss.length) { console.error(`Thieu: ${miss.join(', ')}`); process.exit(1); }
  if (opt('--downloads') === undefined && opt('--revenue') === undefined) { console.error('Can it nhat --downloads hoac --revenue'); process.exit(1); }
  const info = db.prepare(`INSERT INTO market_estimates (recorded_at, source, store, app_id, title, country, period, downloads, revenue_usd, url, note)
    VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(opt('--source'), opt('--store'), opt('--id'), opt('--title') ?? null,
    opt('--country').toLowerCase(), opt('--period'), num(opt('--downloads')), num(opt('--revenue')), opt('--url') ?? null, opt('--note') ?? null);
  console.log(`Da ghi #${info.lastInsertRowid}`);
} else if (cmd === 'list') {
  const where = []; const p = [];
  if (opt('--id')) { where.push('app_id = ?'); p.push(opt('--id')); }
  if (opt('--country')) { where.push('country = ?'); p.push(opt('--country').toLowerCase()); }
  const rows = db.prepare(`SELECT recorded_at, source, store, app_id, title, country, period, downloads, revenue_usd, note
    FROM market_estimates ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY recorded_at DESC LIMIT 100`).all(...p);
  if (!rows.length) console.log('(chua co so lieu)');
  rows.forEach((r) => console.log(Object.values(r).map((v) => v ?? '').join(' | ')));
} else {
  console.error('Dung: node src/estimates.js add|list ...'); process.exit(1);
}
