import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';

export function openDb(file = 'data/market.db') {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const db = new Database(file);
  db.pragma('journal_mode = WAL');
  db.exec(`
    CREATE TABLE IF NOT EXISTS chart_snapshots (
      date TEXT NOT NULL, store TEXT NOT NULL, country TEXT NOT NULL,
      collection TEXT NOT NULL, category TEXT NOT NULL, rank INTEGER NOT NULL,
      app_id TEXT NOT NULL, title TEXT, developer TEXT,
      PRIMARY KEY (date, store, country, collection, category, rank)
    );
    CREATE INDEX IF NOT EXISTS idx_chart_app ON chart_snapshots(app_id, date);

    -- So lieu chi tiet Google Play. maxInstalls la tong luot cai TOAN CAU (khong tach theo nuoc).
    CREATE TABLE IF NOT EXISTS app_metrics (
      date TEXT NOT NULL, store TEXT NOT NULL, app_id TEXT NOT NULL,
      title TEXT, developer TEXT, genre TEXT, released TEXT,
      min_installs INTEGER, max_installs INTEGER, ratings INTEGER, score REAL,
      offers_iap INTEGER, iap_range TEXT,
      PRIMARY KEY (date, store, app_id)
    );

    -- So uoc tinh doc tu AppMagic / Sensor Tower / Appfigures (agent hoac nguoi ghi lai).
    CREATE TABLE IF NOT EXISTS market_estimates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      recorded_at TEXT NOT NULL, source TEXT NOT NULL, store TEXT NOT NULL, app_id TEXT NOT NULL,
      title TEXT, country TEXT NOT NULL, period TEXT NOT NULL,
      downloads INTEGER, revenue_usd REAL, url TEXT, note TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_est_app ON market_estimates(app_id, country);

    -- The loai cua moi game (cache, moi game chi tra 1 lan). genre_key chuan hoa chung 2 store: PUZZLE, ACTION...
    -- genre_key NULL = tra khong ra (game go khoi store...), se thu lai sau 7 ngay.
    CREATE TABLE IF NOT EXISTS app_genres (
      store TEXT NOT NULL, app_id TEXT NOT NULL,
      genre_key TEXT, genre_name TEXT, sub_genres TEXT, source_country TEXT, updated_at TEXT NOT NULL,
      PRIMARY KEY (store, app_id)
    );
  `);
  return db;
}

export const today = () => new Date().toISOString().slice(0, 10);
