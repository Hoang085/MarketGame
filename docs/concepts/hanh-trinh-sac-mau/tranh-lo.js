// Tranh cat trong lo: dang lo + tranh chia vung mau tren luoi pixel.
// Dung chung cho mockup (trinh duyet) va script dem o (node).
(function (root) {
  const CELL = 1.25;  // kich thuoc 1 o cat de ve (cm = px mockup): nho de tranh min, it rang cua
  const ROW_H = 2.5;  // chieu cao 1 hang cua luat lap (gom 2 hang o)

  const PALETTE = {
    T: '#22c3c9', // xanh ngoc: bien, troi
    Y: '#ffcf3a', // vang cat: doi cat, bai, mat troi
    O: '#ff8a3d', // cam: troi hoang hon
    R: '#f04545', // do: thuyen, mai nha, mat troi do
  };

  // Than lo trong toa do cuc bo: x tu -w/2..w/2, y tu 0 (day) len h (dinh than)
  const SHAPES = {
    bottle: { w: 76, h: 76, inside: (x, y) => x * x + (y - 38) ** 2 <= 38 * 38 },
    gourd: { w: 66, h: 99, inside: (x, y) => x * x + (y - 32) ** 2 <= 33 * 33 || x * x + (y - 78) ** 2 <= 21 * 21 },
    jar: { w: 66, h: 80, inside: (x, y) => { const dx = Math.max(Math.abs(x) - 17, 0), dy = Math.max(16 - y, y - 64, 0); return Math.abs(x) <= 33 && y <= 80 && dx * dx + dy * dy <= 256; } },
    lantern: { w: 72, h: 88, inside: (x, y) => (x / 36) ** 2 + ((y - 44) / 44) ** 2 <= 1 },
  };

  // Tranh: luoi mau sinh tu anh AI (tranh/build-tranh.mjs). img = anh goc de ve phan da do.
  const MAPS = typeof module !== 'undefined' ? require('./tranh-map.js') : root.TranhMap;
  const PICTURES = {
    // Man 1: 2 mau (vang cat Y, xanh ngoc T)
    'bai-cat': { name: 'Bãi cát' }, 'doi-cat': { name: 'Đồi cát' }, 'song-bien': { name: 'Sóng biển' }, 'dao-nho': { name: 'Đảo nhỏ' },
    // Man 2: Mui Ne, 4 mau (T, Y, O, R)
    'doi-cat-do': { name: 'Đồi cát đỏ' }, 'thuyen-do': { name: 'Thuyền đỏ' }, 'hoang-hon': { name: 'Hoàng hôn biển', special: true },
    'bai-bien': { name: 'Bãi biển' }, 'lang-chai': { name: 'Làng chài', minBlob: 10 } /* giu cua va cua so */, 'mui-ne': { name: 'Mũi Né', special: true },
  };
  for (const id in PICTURES) PICTURES[id].img = 'tranh/' + id + '.png';

  // Anh vuong phu kin hop than lo (cover), canh giua: tra ve toa do anh 0..1 (fy tinh tu tren xuong)
  function cover(s, x, y) { const S = Math.max(s.w, s.h); return [(x + S / 2) / S, 1 - (y + (S - s.h) / 2) / S]; }

  // Lam sach luoi: loc da so 3x3 roi gop cac dom mau nho (< MIN_BLOB o) vao mau xung quanh,
  // de khi do theo trong luc khong phai do vun tung o le.
  const MIN_BLOB = 40;
  function clean(cells, minBlob = MIN_BLOB) {
    const at = new Map(cells.map(cl => [cl.x + ',' + cl.y, cl]));
    const nb = (cl, d8) => (d8 ? [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]] : [[0, -1], [-1, 0], [1, 0], [0, 1]])
      .map(([dx, dy]) => at.get((cl.x + dx * CELL) + ',' + (cl.y + dy * CELL))).filter(Boolean);
    for (let pass = 0; pass < 2; pass++) {
      const next = cells.map(cl => { const n = {}; for (const o of [cl, ...nb(cl, true)]) n[o.c] = (n[o.c] || 0) + 1;
        const best = Object.keys(n).sort((p, q) => n[q] - n[p])[0]; return n[best] > n[cl.c] ? best : cl.c; });
      cells.forEach((cl, i) => { cl.c = next[i]; });
    }
    for (let changed = true; changed;) {
      changed = false; const seen = new Set();
      for (const cl of cells) {
        if (seen.has(cl)) continue;
        const comp = [cl]; seen.add(cl);
        for (let i = 0; i < comp.length; i++) for (const o of nb(comp[i])) if (!seen.has(o) && o.c === cl.c) { seen.add(o); comp.push(o); }
        if (comp.length >= minBlob) continue;
        const n = {}; for (const o of comp) for (const p of nb(o)) if (p.c !== cl.c) n[p.c] = (n[p.c] || 0) + 1;
        const to = Object.keys(n).sort((p, q) => n[q] - n[p])[0];
        if (to) { for (const o of comp) o.c = to; changed = true; }
      }
    }
    return cells;
  }

  // Luoi o cua 1 lo: mang {x, y, c, s} (x, y la goc duoi-trai o, toa do cuc bo)
  const memo = {};
  function grid(shape, picId) {
    const key = shape + '|' + picId;
    if (memo[key]) return memo[key].map(cl => ({ ...cl }));
    const s = SHAPES[shape], cells = [];
    for (let y = 0; y < s.h; y += CELL) for (let x = -s.w / 2; x < s.w / 2; x += CELL) {
      const cx = x + CELL / 2, cy = y + CELL / 2;
      if (!s.inside(cx, cy)) continue;
      const [fx, fy] = cover(s, cx, cy), m = MAPS[picId], N = m.c.length;
      const i = Math.min(N - 1, Math.floor(fy * N)), j = Math.min(N - 1, Math.floor(fx * N));
      cells.push({ x, y, c: m.c[i][j], s: 0.7 + 0.06 * +m.s[i][j] }); // s: do sang so voi mau game
    }
    memo[key] = clean(cells, PICTURES[picId].minBlob);
    return memo[key].map(cl => ({ ...cl }));
  }

  // Dien tich tung mau -> so phan cat (boi so cua 4, toi thieu 4), tong = total
  function need(shape, picId, total) {
    const cells = grid(shape, picId), area = {};
    for (const c of cells) area[c.c] = (area[c.c] || 0) + 1;
    const cols = Object.keys(area), n = cells.length;
    const units = Object.fromEntries(cols.map(c => [c, Math.max(4, 4 * Math.round(area[c] / n * total / 4))]));
    let diff = total - Object.values(units).reduce((a, b) => a + b, 0);
    const byArea = cols.sort((a, b) => area[b] - area[a]);
    for (let i = 0; diff !== 0; i++) { const c = byArea[i % byArea.length]; if (diff > 0) { units[c] += 4; diff -= 4; } else if (units[c] > 4) { units[c] -= 4; diff += 4; } }
    // thu tu lop tu day len (cho mon dac biet): theo do cao trung binh cua vung mau
    const sumY = {}; for (const c of cells) sumY[c.c] = (sumY[c.c] || 0) + c.y;
    const order = Object.keys(units).sort((a, b) => sumY[a] / area[a] - sumY[b] / area[b]);
    return { units, order, area, cells: n };
  }

  // ---- Lap theo hang: lo day tung hang tu day len ----
  // Do mau k chi lap cac o mau k cua hang dang lap (hang thap nhat con trong). Hang chua du het cac mau
  // thi chua len hang tren, cat con lai nam trong khay (khay du ve cho do). Lap du hang thi cat chay tiep len.
  // Lo: { cells, rows: [[chi so o]], units, order, cpu: so o / 1 phan, filled: Set chi so o }
  function vessel(shape, picId, total) {
    const cells = grid(shape, picId), nd = need(shape, picId, total), byY = new Map();
    cells.forEach((cl, i) => { cl.i = i; const r = Math.floor(cl.y / ROW_H + 1e-6); if (!byY.has(r)) byY.set(r, []); byY.get(r).push(i); });
    // trong 1 hang: o thap truoc, roi gan mieng truoc
    const rows = [...byY.keys()].sort((p, q) => p - q).map(r => byY.get(r).sort((p, q) => cells[p].y - cells[q].y || Math.abs(cells[p].x + CELL / 2) - Math.abs(cells[q].x + CELL / 2)));
    rows.forEach((r, ri) => r.forEach(i => { cells[i].row = ri; }));
    const count = {}; for (const cl of cells) count[cl.c] = (count[cl.c] || 0) + 1;
    const cpu = Object.fromEntries(Object.keys(nd.units).map(k => [k, count[k] / nd.units[k]]));
    return { cells, rows, units: nd.units, order: nd.order, count, cpu, special: !!PICTURES[picId].special, filled: new Set() };
  }
  const left = (v, k) => v.cells.filter(cl => cl.c === k && !v.filled.has(cl.i)).length; // so o mau k con trong
  const curRow = (v, f = v.filled) => v.rows.findIndex(r => r.some(i => !f.has(i)));     // hang dang lap
  // O se lap khi do toi da maxCells o mau k (theo thu tu lap)
  function planPour(v, k, maxCells = Infinity) {
    const tmp = new Set(v.filled), list = [];
    for (let ri = curRow(v, tmp); ri >= 0 && list.length < maxCells; ri = curRow(v, tmp)) {
      const need = v.rows[ri].filter(i => v.cells[i].c === k && !tmp.has(i));
      if (!need.length) break;                       // hang nay dang cho mau khac
      for (const i of need) { if (list.length >= maxCells) break; tmp.add(i); list.push(i); }
      if (v.rows[ri].some(i => !tmp.has(i))) break;  // hang chua du: dung, cho mau khac
    }
    return list;
  }
  function applyPour(v, list) { for (const i of list) v.filled.add(i); }
  const isDone = v => v.filled.size === v.cells.length;
  // Mau lo dang nhan: cac mau con trong o hang dang lap
  const accepts = v => { const ri = curRow(v); return ri < 0 ? [] : [...new Set(v.rows[ri].filter(i => !v.filled.has(i)).map(i => v.cells[i].c))]; };

  const api = { CELL, PALETTE, SHAPES, PICTURES, grid, need, cover, vessel, left, curRow, planPour, applyPour, isDone, accepts };
  if (typeof module !== 'undefined') module.exports = api; else root.TranhLo = api;
})(this);
