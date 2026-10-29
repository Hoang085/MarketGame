# Lọ 2D ghép lớp (2026-10-27)

Chốt hướng: lọ trong game là 2D (camera cố định, lọ chỉ trượt ngang), nhưng ảnh được render từ model 3D trong `../3d/` để ánh sáng và kích thước khớp với cảnh 3D.

Sinh lại: `blender -b --factory-startup -P tools/blender/lo-2d-layers.py -- docs/concepts/hanh-trinh-sac-mau/2d-lo docs/concepts/hanh-trinh-sac-mau/tranh`

Mỗi dáng 3 lớp, vẽ theo thứ tự:
1. `lo-<dáng>-sau.png`: thân kính (cả 2 thành), nền trong suốt.
2. Cát tranh: ảnh tranh hiện theo vùng màu (lưới ô từ `../tranh-lo.js`), cắt bằng `lo-<dáng>-mat-na.png`.
3. `lo-<dáng>-truoc.png`: vệt sáng mặt trước + vành miệng.

`layers.json`: kích thước ảnh, điểm gốc (tâm đáy lọ, pixel), số pixel/cm ngang (`sx`) và dọc (`sy`, đã tính góc nghiêng 10°). 5 px/cm.

`thu-do-cat.html`: thử anim. Khay bay tới miệng lọ, nghiêng, cát rơi thành hạt vào vùng màu, dồn thành đống dưới miệng rồi dâng lên; đổ xong lọ nảy, vệt sáng lướt, tia sáng. Món đặc biệt đổ sai lớp thì khay rung. Mở thẳng file trong trình duyệt (cần các file cạnh nó và trong thư mục cha).
