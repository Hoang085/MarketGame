# Playable demo clone ads A Travel Town (v0.1, 30/10/2026)

Demo kỹ thuật, FX và art cho đoạn 0–12 s của ads A (xem [../README.md](../README.md)), làm bằng HTML5, không dùng thư viện. Art lấy từ các bản đã chọn trong [../art/README.md](../art/README.md).

> **Chỉ dùng nội bộ.** Ảnh là concept AI; không đưa lên mạng quảng cáo.

## Cách mở

- **Một file duy nhất:** `dist/beach-merge-demo.html` (khoảng 2,6 MB, ảnh và âm thanh đã nhúng sẵn). Mở thẳng bằng trình duyệt hoặc gửi qua điện thoại.
- **Bản để sửa code:** `index.html` cùng `assets/`, `audio/`. Cần server tĩnh: chạy `node tools/docs-server.mjs` ở thư mục gốc repo, rồi mở `http://localhost:8770/concepts/keepsake-lane/concept-store/ads-clone-travel-town/playable/index.html`.

Sửa xong thì chạy `node build.mjs` để tạo lại file trong `dist/`.

## Luồng chơi

1. Mở màn: thanh tài nguyên (năng lượng 600, xu 3.900, ngọc trai 55), 2 khách trên thẻ đơn hàng. **Mỗi khách cần món cấp cuối của một chuỗi:** cô bé lướt sóng cần thuyền chuối (phao cấp 5), bà bán kem cần xe kem (trái cây cấp 5), mỗi đơn thưởng 60 xu.
2. Bàn 7×7: mỗi chuỗi có sẵn một "thang" cấp 1, 1, 2, 3, 4 (cộng một cặp cấp 1 dư), còn lại là đồ trang trí. Sau 1 giây, tay hướng dẫn kéo giữa 2 phao tay.
3. Gộp từ cấp 1 lên dần: cấp 2 **"Nice!"**, cấp 3 **"Great!"**, cấp 4 **"Amazing!"**, cấp 5 **"Awesome!"**. Mỗi lần gộp: ô sáng xanh, item mới nảy, tia sáng theo màu chuỗi.
4. Có món cấp 5 thì thẻ hiện dấu tích, nút **GO** bật lên trên đầu khách. Bấm GO: món bay lên thẻ, xu nổ ra rồi bay từng đồng về thanh xu, khách rời đi, khách còn lại trượt sang.
5. **Đồ trang trí** (ô dù, dép, khăn, cua, kem chống nắng, kính): 2 món giống nhau gộp lại thì biến mất và **ra 5 xu**.
6. Giao đủ 2 đơn thì hiện end card "Your beach shop is waiting!" với nút PLAY NOW.

Kéo một món vào ô trống hoặc ô khác loại thì đổi chỗ. Tay hướng dẫn ưu tiên chuỗi mà khách đang cần, cấp thấp trước, đồ trang trí sau cùng.

## FX đã có

| FX | Cách làm |
|---|---|
| Nhấc item, item bám ngón tay | Ảnh kéo to hơn, đổ bóng; ô gốc mờ đi |
| Ô đích sáng xanh khi kéo đúng cặp | Đổi màu ô (CSS) |
| Merge | Item mới nảy (scale 0,2 → 1,3 → 1), ô nháy xanh, vòng sáng, tia sáng theo màu chuỗi, lấp lánh |
| Chữ khen theo cấp | Nice! / Great! / Amazing! / Awesome!, bật to rồi trôi lên mờ dần |
| Nút GO | Bật ra, nhún liên tục; khách nhún vui khi đơn đủ đồ |
| Giao hàng | Item bay theo đường cong có vệt sáng; xu nổ ra, dừng một nhịp, bay về thanh xu từng đồng, thanh xu nảy, số xu đếm lên |
| Đổi khách | Khách cũ trượt ra và mờ đi, khách khác trượt sang, khách mới trượt vào có độ nảy |
| Tay hướng dẫn | Sau 2,6 giây không chạm. Có nút GO thì tay đi vào từ góc dưới phải và bấm (nút lún xuống, vòng sáng). Không có thì đầu ngón tay đặt đúng tâm item, kéo kèm bản mờ của item sang món cùng loại; ưu tiên cặp mà khách đang cần, sau đó mới đến đồ trang trí |

Âm thanh dùng lại bộ của playable Bloom Corner (`../../playable/audio/`), mở sau lần chạm đầu.

## Sự kiện đo

Ghi ra console và `window.__events`: `load`, `ready`, `merge` (kèm item), `go_shown` (kèm khách), `deliver`, `endcard_seen` (kèm số xu), `cta_click`. Nút PLAY NOW gọi `mraid.open` nếu có, không thì hiện thông báo.

## File

| File | Nội dung |
|---|---|
| `index.html` | Toàn bộ code (CSS + JS trong một file) |
| `cut-sprites.ps1` | Cắt từng item, khách, icon ra khỏi các sheet trong `../art/` thành PNG nền trong suốt, thu nền về 576×1032 |
| `build.mjs` | Nhúng `assets/` và `audio/` vào `dist/beach-merge-demo.html` |
| `assets/` | Sprite đã cắt (item 176 px, khách cao 360 px, icon 160 px) và nền |
| `audio/` | 12 file âm thanh |

## Chưa làm / chưa kiểm tra

- Mới chạy thử trên trình duyệt máy tính (thao tác giả lập); chưa thử trên điện thoại thật, chưa nghe thử âm thanh.
- Chưa có năng lượng tiêu hao, máy sinh đồ, ô khóa.
- Chưa đóng gói theo yêu cầu riêng của từng mạng quảng cáo (MRAID đầy đủ, giới hạn dung lượng).
