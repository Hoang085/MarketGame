// Chay truy van SQL CHI-DOC tren database. Dung cho agent va nguoi dung.
// node src/query.js "SELECT ..." [--db data/market.db] [--json]
//   node src/query.js --schema      (xem cau truc bang)
//   node src/query.js --status      (xem du lieu da co bao nhieu ngay)
import Database from 'better-sqlite3';
import fs from 'node:fs';

const args = process.argv.slice(2);
const opt = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : undefined);
const file = opt('--db') ?? 'data/market.db';
if (!fs.existsSync(file)) { console.error(`Khong tim thay ${file}. Chay "npm run collect" truoc.`); process.exit(1); }
const db = new Database(file, { readonly: true, fileMustExist: true });

let sql = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--db');
if (args.includes('--schema')) sql = "SELECT name, sql FROM sqlite_master WHERE type='table'";
if (args.includes('--status')) sql = `SELECT store, COUNT(DISTINCT date) so_ngay, MIN(date) tu_ngay, MAX(date) den_ngay,
  COUNT(DISTINCT country) so_nuoc, GROUP_CONCAT(DISTINCT country) nuoc FROM chart_snapshots GROUP BY store`;
if (!sql) { console.error('Thieu cau SQL.'); process.exit(1); }
if (!/^\s*(select|with|pragma)\b/i.test(sql)) { console.error('Chi cho phep SELECT / WITH / PRAGMA.'); process.exit(1); }

const rows = db.prepare(sql).all();
if (args.includes('--json')) { console.log(JSON.stringify(rows, null, 1)); process.exit(0); }
if (!rows.length) { console.log('(khong co dong nao)'); process.exit(0); }
const cols = Object.keys(rows[0]);
const show = rows.slice(0, 200);
console.log(cols.join(' | '));
show.forEach((r) => console.log(cols.map((c) => String(r[c] ?? '').replace(/\s+/g, ' ').slice(0, 120)).join(' | ')));
if (rows.length > show.length) console.log(`... con ${rows.length - show.length} dong, hay them LIMIT hoac loc hep hon.`);
