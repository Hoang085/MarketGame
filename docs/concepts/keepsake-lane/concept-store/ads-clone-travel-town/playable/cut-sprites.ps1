# Cắt từng item/nhân vật ra khỏi các sheet đã chọn thành PNG nền trong suốt cho playable.
# Nền sheet là một màu trơn: lấy màu ở 4 góc, loang từ mép ảnh qua các điểm gần màu nền rồi xóa dần (giữ bóng mềm),
# sau đó tách từng hình theo các dải trống ngang/dọc. Chạy lại được bất cứ lúc nào:
#   powershell -ExecutionPolicy Bypass -File cut-sprites.ps1
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$art = Join-Path $here '..\art'
$out = Join-Path $here 'assets'
New-Item -ItemType Directory -Force $out | Out-Null

Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @'
using System; using System.Collections.Generic; using System.Drawing; using System.Drawing.Imaging; using System.Runtime.InteropServices;
public static class Cutter {
  // t0: dưới ngưỡng này là nền hẳn (alpha 0); t1: trên ngưỡng này không còn là nền
  public static List<Bitmap> Cut(string path, int t0, int t1, int maxSide, int minW, int colGap) {
    var src = new Bitmap(path); int W = src.Width, H = src.Height;
    var bmp = src.Clone(new Rectangle(0, 0, W, H), PixelFormat.Format32bppArgb); src.Dispose();
    var bd = bmp.LockBits(new Rectangle(0, 0, W, H), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
    var px = new byte[W * H * 4]; Marshal.Copy(bd.Scan0, px, 0, px.Length);
    // màu nền = trung bình 4 ô 12x12 ở góc
    long r = 0, g = 0, b = 0, n = 0;
    foreach (var c in new[] { new[] { 4, 4 }, new[] { W - 16, 4 }, new[] { 4, H - 16 }, new[] { W - 16, H - 16 } })
      for (int y = c[1]; y < c[1] + 12; y++) for (int x = c[0]; x < c[0] + 12; x++) { int i = (y * W + x) * 4; b += px[i]; g += px[i + 1]; r += px[i + 2]; n++; }
    double br = r / (double)n, bg = g / (double)n, bb = b / (double)n;
    Func<int, double> dist = i => Math.Sqrt(Math.Pow(px[i + 2] - br, 2) + Math.Pow(px[i + 1] - bg, 2) + Math.Pow(px[i] - bb, 2));
    var seen = new bool[W * H]; var q = new Queue<int>();
    for (int x = 0; x < W; x++) { q.Enqueue(x); q.Enqueue((H - 1) * W + x); }
    for (int y = 0; y < H; y++) { q.Enqueue(y * W); q.Enqueue(y * W + W - 1); }
    while (q.Count > 0) {
      int p = q.Dequeue(); if (seen[p]) continue; double d = dist(p * 4); if (d >= t1) continue;
      seen[p] = true; px[p * 4 + 3] = (byte)(d <= t0 ? 0 : 255 * (d - t0) / (t1 - t0));
      int x = p % W, y = p / W;
      if (x > 0) q.Enqueue(p - 1); if (x < W - 1) q.Enqueue(p + 1); if (y > 0) q.Enqueue(p - W); if (y < H - 1) q.Enqueue(p + W);
    }
    Marshal.Copy(px, 0, bd.Scan0, px.Length); bmp.UnlockBits(bd);
    Func<int, int, bool> solid = (x, y) => px[(y * W + x) * 4 + 3] > 160;
    var res = new List<Bitmap>();
    foreach (var rowBand in Bands(H, W, (i, j) => solid(j, i), 30, 60)) {
      foreach (var colBand in Bands(W, rowBand[1] - rowBand[0], (i, j) => solid(i, rowBand[0] + j), colGap, minW)) {
        // ôm sát hình trong ô (cả phần bóng mờ), chừa lề 8px
        int x0 = colBand[1], x1 = colBand[0], y0 = rowBand[1], y1 = rowBand[0];
        for (int y = rowBand[0]; y < rowBand[1]; y++) for (int x = colBand[0]; x < colBand[1]; x++)
          if (px[(y * W + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
        x0 = Math.Max(0, x0 - 8); y0 = Math.Max(0, y0 - 8); x1 = Math.Min(W - 1, x1 + 8); y1 = Math.Min(H - 1, y1 + 8);
        int cw = x1 - x0 + 1, ch = y1 - y0 + 1; double k = Math.Min(1.0, maxSide / (double)Math.Max(cw, ch));
        var o = new Bitmap((int)Math.Round(cw * k), (int)Math.Round(ch * k), PixelFormat.Format32bppArgb);
        using (var gr = Graphics.FromImage(o)) { gr.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic; gr.DrawImage(bmp, new Rectangle(0, 0, o.Width, o.Height), new Rectangle(x0, y0, cw, ch), GraphicsUnit.Pixel); }
        res.Add(o);
      }
    }
    bmp.Dispose(); return res;
  }
  // các dải liên tục có hình theo một trục; gộp khe hẹp hơn minGap, bỏ dải mảnh hơn minLen (lấp lánh lẻ)
  static List<int[]> Bands(int len, int across, Func<int, int, bool> hit, int minGap, int minLen) {
    var on = new bool[len];
    for (int i = 0; i < len; i++) { int c = 0; for (int j = 0; j < across; j += 2) if (hit(i, j) && ++c > 3) break; on[i] = c > 3; }
    var bands = new List<int[]>();
    for (int i = 0; i < len; i++) if (on[i]) {
      int s = i; while (i < len && on[i]) i++;
      if (bands.Count > 0 && s - bands[bands.Count - 1][1] < minGap) bands[bands.Count - 1][1] = i; else bands.Add(new[] { s, i });
    }
    return bands.FindAll(bd => bd[1] - bd[0] >= minLen);
  }
}
'@

# sheet => tên từng hình theo thứ tự đọc (trái sang phải, trên xuống dưới)
$jobs = @(
  @{ src = 'v3\ITEM-float-a.png'; names = 'float1','float2','float3','float4','float5'; t0 = 22; t1 = 62; max = 176 },
  @{ src = 'ITEM-fruit.png'; names = 'fruit1','fruit2','fruit3','fruit4','fruit5'; t0 = 22; t1 = 62; max = 176 },
  @{ src = 'ITEM-misc.png'; names = 'umbrella','flipflops','towel','crab','sunscreen','sunglasses'; t0 = 22; t1 = 62; max = 176 },
  @{ src = 'ICON-res.png'; names = 'energy','coin','pearl'; t0 = 18; t1 = 50; max = 160 },
  @{ src = 'CH-customers-a.png'; names = 'cust1','cust2','cust3','cust4'; t0 = 26; t1 = 80; max = 360; gap = 4 }
)
foreach ($j in $jobs) {
  $parts = [Cutter]::Cut((Join-Path $art $j.src), $j.t0, $j.t1, $j.max, 120, $(if ($j.gap) { $j.gap } else { 40 }))
  if ($parts.Count -ne $j.names.Count) { Write-Warning "$($j.src): tách được $($parts.Count) hình, cần $($j.names.Count)" }
  for ($i = 0; $i -lt [Math]::Min($parts.Count, $j.names.Count); $i++) {
    $parts[$i].Save((Join-Path $out "$($j.names[$i]).png"), [System.Drawing.Imaging.ImageFormat]::Png)
    "{0,-11} {1}x{2}" -f $j.names[$i], $parts[$i].Width, $parts[$i].Height
    $parts[$i].Dispose()
  }
}
# tay hướng dẫn lấy từ playable Bloom Corner (nền trắng)
$hand = [Cutter]::Cut((Join-Path $here '..\..\playable\assets\hand.png'), 12, 40, 160, 40, 40)
$hand[0].Save((Join-Path $out 'hand.png'), [System.Drawing.Imaging.ImageFormat]::Png); "hand       $($hand[0].Width)x$($hand[0].Height)"
# nền: thu về 576x1032 (cùng cỡ playable cũ), JPEG 82%
Add-Type -AssemblyName System.Drawing
$bg = [System.Drawing.Image]::FromFile((Join-Path $art 'BG-beach-a.png'))
$o = New-Object System.Drawing.Bitmap 576, 1032
$g = [System.Drawing.Graphics]::FromImage($o); $g.InterpolationMode = 'HighQualityBicubic'; $g.DrawImage($bg, 0, 0, 576, 1032); $g.Dispose(); $bg.Dispose()
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1; $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 82L
$o.Save((Join-Path $out 'bg.jpg'), $enc, $ep); $o.Dispose()
'bg         576x1032'



