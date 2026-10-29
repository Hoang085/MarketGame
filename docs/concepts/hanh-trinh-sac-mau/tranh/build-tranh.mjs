// Luong tu hoa tranh AI (tranh/raw) ve bang mau cua game -> tranh-map.js + anh 256px.
// Chay: node tranh/build-tranh.mjs   (can Microsoft Edge de giai ma PNG qua canvas)
import { readFileSync, writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url));
const N = 96; // do phan giai luoi mau
// Tranh chon: id -> [file raw, cac mau duoc phep]
const PICKS = {
  'bai-cat': ['bai-cat-2', 'TY'], 'doi-cat': ['doi-cat-2', 'TY'], 'song-bien': ['song-bien-2', 'TY'], 'dao-nho': ['dao-nho-2', 'TY'],
  'doi-cat-do': ['doi-cat-do-2', 'YOR'], 'thuyen-do': ['thuyen-do-2', 'TOR'], 'hoang-hon': ['hoang-hon-2', 'TYO'],
  'bai-bien': ['bai-bien-1', 'TYO'], 'lang-chai': ['lang-chai-v2-1', 'YOR'], 'mui-ne': ['mui-ne-v2-1', 'TRYO'], // v2: gen doc theo dang lo
};
const HUE = { T: 182, Y: 45, O: 24, R: 0 };
const LUM = { T: 0.461, Y: 0.614, O: 0.62, R: 0.606 }; // do sang HSL cua mau game

const data = Object.fromEntries(Object.entries(PICKS).map(([id, [f, cols]]) =>
  [id, { cols, src: 'data:image/png;base64,' + readFileSync(join(DIR, 'raw', f + '.png')).toString('base64') }]));

const page = `<pre id="out"></pre><script>
const DATA = ${JSON.stringify(data)}, N = ${N}, HUE = ${JSON.stringify(HUE)}, LUM = ${JSON.stringify(LUM)};
(async () => {
  const res = {};
  for (const [id, d] of Object.entries(DATA)) {
    const img = new Image(); img.src = d.src; await img.decode();
    // anh doc (gen theo dang lo) dat giua mot o vuong; ria trong lay mau mep anh (keo gian anh phia duoi)
    const S = Math.max(img.width, img.height), cv = document.createElement('canvas'); cv.width = cv.height = S;
    const c = cv.getContext('2d'); c.drawImage(img, 0, 0, S, S); c.drawImage(img, (S - img.width) / 2, (S - img.height) / 2);
    const px = c.getImageData(0, 0, S, S).data;
    // phan loai tung pixel theo sac do gan nhat trong cac mau cho phep, roi bau theo khoi
    const B = S / N, votes = Array.from({ length: N * N }, () => ({})), lums = Array.from({ length: N * N }, () => ({}));
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const i = (y * S + x) * 4, r = px[i] / 255, g = px[i + 1] / 255, b = px[i + 2] / 255;
      const mx = Math.max(r, g, b), mn = Math.min(r, g, b), dl = mx - mn;
      // bo qua nen trang / xam ngoai lo (do bao hoa thap): khoi do lay mau khoi ben canh
      if ((mx + mn) / 2 > 0.9 || dl < 0.2) continue;
      let h = 0; if (dl) h = mx === r ? 60 * (((g - b) / dl + 6) % 6) : mx === g ? 60 * ((b - r) / dl + 2) : 60 * ((r - g) / dl + 4);
      let best = null, bd = 1e9;
      for (const k of d.cols) { const dd = Math.min(Math.abs(h - HUE[k]), 360 - Math.abs(h - HUE[k])); if (dd < bd) { bd = dd; best = k; } }
      const bi = Math.floor(y / B) * N + Math.floor(x / B), v = votes[bi]; v[best] = (v[best] || 0) + 1;
      lums[bi][best] = (lums[bi][best] || 0) + (mx + mn) / 2;
    }
    // khoi khong co phieu (toan nen): loang tu khoi ben canh
    for (let empty = true; empty;) { empty = false;
      const fill = [];
      for (let i = 0; i < N * N; i++) if (!Object.keys(votes[i]).length) {
        const y = Math.floor(i / N), x = i % N, nb = [[0, 1], [0, -1], [1, 0], [-1, 0]].map(([dx, dy]) => [x + dx, y + dy]).filter(([a, b]) => a >= 0 && b >= 0 && a < N && b < N).map(([a, b]) => b * N + a).find(j => Object.keys(votes[j]).length);
        if (nb != null) fill.push([i, nb]); else empty = true; }
      for (const [i, j] of fill) { votes[i] = { ...votes[j] }; lums[i] = { ...lums[j] }; }
      if (!fill.length) break; }
    // rows: ma mau moi o; shade: do sang cua chinh mau do trong o, so 0..9 (0.7..1.25 lan mau game)
    const rows = [], shade = [];
    for (let y = 0; y < N; y++) { let s = '', t = '';
      for (let x = 0; x < N; x++) { const v = votes[y * N + x], k = Object.keys(v).sort((a, b) => v[b] - v[a])[0];
        const L = lums[y * N + x][k] / v[k] / LUM[k]; s += k; t += Math.max(0, Math.min(9, Math.round((L - 0.7) / 0.06))); }
      rows.push(s); shade.push(t); }
    const sm = document.createElement('canvas'); sm.width = sm.height = 256;
    const sc = sm.getContext('2d'); sc.imageSmoothingQuality = 'high'; sc.drawImage(cv, 0, 0, 256, 256);
    res[id] = { rows, shade, png: sm.toDataURL('image/png') };
  }
  await fetch('/done', { method: 'POST', body: JSON.stringify(res) });
})();
</script>`;

// Trang chay trong Edge headless, gui ket qua ve server cuc bo
const res = await new Promise(resolve => {
  let edge;
  const srv = createServer((req, rq) => {
    if (req.method === 'GET') { rq.setHeader('content-type', 'text/html'); return rq.end(page); }
    let body = ''; req.on('data', d => body += d); req.on('end', () => { rq.end(); edge.kill(); srv.close(); resolve(JSON.parse(body)); });
  }).listen(0, () => {
    edge = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      ['--headless=new', '--disable-gpu', '--user-data-dir=' + join(tmpdir(), 'tranh-edge'), 'http://127.0.0.1:' + srv.address().port + '/'], { stdio: 'ignore' });
  });
});

const maps = {};
for (const [id, { rows, shade, png }] of Object.entries(res)) {
  maps[id] = { c: rows, s: shade };
  writeFileSync(join(DIR, id + '.png'), Buffer.from(png.split(',')[1], 'base64'));
}
writeFileSync(join(DIR, '..', 'tranh-map.js'),
  `// Sinh boi tranh/build-tranh.mjs: luoi ${N}x${N} (hang tren -> duoi) cua tung tranh: c = ma mau, s = do sang 0..9 (0.7 + 0.06*s lan mau game).\n` +
  `(function (root) {\n  const MAPS = ${JSON.stringify(maps, null, 1).replace(/\n/g, '\n  ')};\n` +
  `  if (typeof module !== 'undefined') module.exports = MAPS; else root.TranhMap = MAPS;\n})(this);\n`);
console.log('ok', Object.keys(maps).length);
