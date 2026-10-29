param([string]$Dir, [int]$Max = 1100)
Add-Type -AssemblyName System.Drawing
$out = Join-Path $Dir 'web'
New-Item -ItemType Directory -Force $out | Out-Null
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ps = New-Object System.Drawing.Imaging.EncoderParameters 1
$ps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]86)
Get-ChildItem $Dir -Filter *.png | ForEach-Object {
  $src = [System.Drawing.Image]::FromFile($_.FullName)
  $s = [Math]::Min(1.0, $Max / [Math]::Max($src.Width, $src.Height))
  $w = [int]($src.Width * $s); $h = [int]($src.Height * $s)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'; $g.SmoothingMode = 'HighQuality'; $g.PixelOffsetMode = 'HighQuality'
  $g.DrawImage($src, 0, 0, $w, $h)
  $bmp.Save((Join-Path $out ($_.BaseName + '.jpg')), $enc, $ps)
  $g.Dispose(); $bmp.Dispose(); $src.Dispose()
  Write-Output "$($_.BaseName).jpg ${w}x${h}"
}
