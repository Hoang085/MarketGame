// Gop 4 model lo + 10 tranh thanh mot file HTML tu chua de review: node build-xem-lo.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url));
const b64 = (p, mime) => `data:${mime};base64,` + readFileSync(p).toString('base64');
const LO = [
  ['bottle', 'Bình cầu', 'bai-cat'], ['gourd', 'Hồ lô', 'mui-ne'],
  ['jar', 'Lọ thẳng', 'hoang-hon'], ['lantern', 'Lọ bầu dục', 'thuyen-do'],
];
const TRANH = {
  'bai-cat': 'Bãi cát', 'doi-cat': 'Đồi cát', 'song-bien': 'Sóng biển', 'dao-nho': 'Đảo nhỏ',
  'doi-cat-do': 'Đồi cát đỏ', 'thuyen-do': 'Thuyền đỏ', 'hoang-hon': 'Hoàng hôn biển',
  'bai-bien': 'Bãi biển', 'lang-chai': 'Làng chài', 'mui-ne': 'Mũi Né',
};
const models = Object.fromEntries(LO.map(([id]) => [id, b64(join(DIR, `lo-${id}.glb`), 'model/gltf-binary')]));
const pics = Object.fromEntries(Object.keys(TRANH).map(id => [id, b64(join(DIR, '..', 'tranh', id + '.png'), 'image/png')]));

const html = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lọ thủy tinh 3D</title>
<script type="module" src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js"></script>
<style>
  :root { --bg: #1b1240; --card: #2d1d66; --ink: #ece8ff; --muted: #b7aee6; --line: #4a3699; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font-family: system-ui, sans-serif; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: 24px 16px 40px; }
  h1 { font-size: 22px; margin: 0 0 4px; }
  .lead { color: var(--muted); font-size: 14px; margin: 0 0 18px; line-height: 1.5; }
  .bar { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center; margin-bottom: 18px; font-size: 14px; }
  .bar label { display: flex; gap: 6px; align-items: center; color: var(--muted); }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 16px; }
  .card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
  model-viewer { width: 100%; height: 380px; background: radial-gradient(circle at 50% 35%, #5b3cc0, #2a1868 75%); --poster-color: transparent; }
  .info { padding: 10px 14px 14px; display: flex; justify-content: space-between; align-items: center; gap: 8px; }
  .info b { font-size: 15px; }
  select, button { font: inherit; font-size: 13px; background: #3b2a80; color: var(--ink); border: 1px solid var(--line); border-radius: 8px; padding: 5px 8px; }
  input[type=range] { width: 120px; }
  .note { margin-top: 20px; color: var(--muted); font-size: 13px; line-height: 1.6; }
</style>
</head>
<body>
<div class="wrap">
  <h1>Lọ thủy tinh 3D, vòng 1</h1>
  <p class="lead">Kéo để xoay, cuộn để phóng to. Model dựng bằng tools/blender/lo-thuy-tinh.py, kích thước khớp dáng lọ trong tranh-lo.js (1 px mockup = 1 cm). Đổi tranh ở từng lọ để xem lõi cát.</p>
  <div class="bar">
    <label><input type="checkbox" id="core" checked> Hiện lõi tranh (tắt = lọ rỗng)</label>
    <label><input type="checkbox" id="spin" checked> Tự xoay</label>
    <label>Độ sáng <input type="range" id="expo" min="0.4" max="2" step="0.05" value="1"></label>
    <button id="front">Về góc nhìn game</button>
  </div>
  <div class="grid" id="grid"></div>
  <p class="note">Mỗi model có 3 mesh: thân kính (dày 1,6 cm), vành miệng, lõi tranh (UV chiếu chính diện). Viền vàng và sao của món đặc biệt sẽ làm bằng material trong Unity, chưa có ở đây. Trình xem dùng model-viewer nên cần mạng để tải thư viện.</p>
</div>
<script type="module">
const MODELS = ${JSON.stringify(models)};
const PICS = ${JSON.stringify(pics)};
const TRANH = ${JSON.stringify(TRANH)};
const LO = ${JSON.stringify(LO)};
const ORBIT = '0deg 65deg auto'; // camera game: nhin chinh dien, hoi tu tren xuong

const grid = document.getElementById('grid'), viewers = [];
for (const [id, name, pic] of LO) {
  const card = document.createElement('div'); card.className = 'card';
  const opts = Object.entries(TRANH).map(([k, v]) => '<option value="' + k + '"' + (k === pic ? ' selected' : '') + '>' + v + '</option>').join('');
  card.innerHTML = '<model-viewer camera-controls auto-rotate auto-rotate-delay="0" rotation-per-second="20deg" shadow-intensity="1" exposure="1" environment-image="neutral" tone-mapping="neutral" camera-orbit="' + ORBIT + '" interaction-prompt="none" alt="' + name + '"></model-viewer>'
    + '<div class="info"><b>' + name + '</b><select aria-label="Tranh">' + opts + '</select></div>';
  grid.appendChild(card);
  const mv = card.querySelector('model-viewer'), sel = card.querySelector('select');
  mv.src = MODELS[id];
  viewers.push(mv);
  const core = () => mv.model && mv.model.materials.find(m => m.name.startsWith('tranh'));
  async function setPic(k) {
    const m = core(); if (!m) return;
    const tex = await mv.createTexture(PICS[k]);
    m.pbrMetallicRoughness.baseColorTexture.setTexture(tex);
    if (m.emissiveTexture) m.emissiveTexture.setTexture(tex);
  }
  mv.addEventListener('load', () => { setPic(sel.value); applyCore(mv); });
  sel.addEventListener('change', () => setPic(sel.value));
}

function applyCore(mv) {
  const on = document.getElementById('core').checked;
  const m = mv.model && mv.model.materials.find(x => x.name.startsWith('tranh'));
  if (!m) return;
  m.setAlphaMode(on ? 'OPAQUE' : 'BLEND');
  const c = m.pbrMetallicRoughness.baseColorFactor; m.pbrMetallicRoughness.setBaseColorFactor([c[0], c[1], c[2], on ? 1 : 0]);
  m.setEmissiveFactor(on ? [0.15, 0.15, 0.15] : [0, 0, 0]);
}
document.getElementById('core').addEventListener('change', () => viewers.forEach(applyCore));
document.getElementById('spin').addEventListener('change', e => viewers.forEach(v => v.autoRotate = e.target.checked));
document.getElementById('expo').addEventListener('input', e => viewers.forEach(v => v.exposure = e.target.value));
document.getElementById('front').addEventListener('click', () => viewers.forEach(v => { v.autoRotate = false; v.resetTurntableRotation(); v.cameraOrbit = ORBIT; v.fieldOfView = 'auto'; document.getElementById('spin').checked = false; }));
</script>
</body>
</html>
`;
writeFileSync(join(DIR, 'xem-lo-3d.html'), html);
console.log('xem-lo-3d.html', (html.length / 1e6).toFixed(1) + ' MB');
