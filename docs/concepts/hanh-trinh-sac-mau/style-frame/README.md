# Style frame màn chơi 2.5D, vòng 1 (2026-10-26)

Mục đích: chọn **hướng hình** (chất liệu, bảng màu, không khí). Ảnh AI chỉ dùng nội bộ.
Prompt: `tools/concept-gen/prompts-hanh-trinh-sac-mau.json`. Model: `fal-ai/flux-pro/v1.1`, 576×1024.

| Hướng | File | Nhận xét |
|---|---|---|
| A. Pastel thủy tinh | SF-A-pastel-glass-1.png, -2.png | Sạch, nhẹ nhàng, thủy tinh đẹp; bản 1 có đủ 3 tầng. Thiếu điểm nhấn, dễ lẫn với các game sort pastel khác |
| B. Mũi Né hoàng hôn | SF-B-muine-sunset-1.png, -2.png | Có bản sắc nhất: chai cát nhiều lớp thành tranh phong cảnh, đúng chất liệu nghề tranh cát. Nền cát nhiều chi tiết, có thể làm rối khi chơi |
| C. Đồ chơi đậm màu | SF-C-toy-bold-1.png, -2.png | Màu bão hòa, đọc nhanh nhất, gần màn hình game top grossing nhất (bản 2 có băng chuyền, chỗ đổ, bàn lưới, số màn). Ít bản sắc riêng |

## Giới hạn của vòng này
- Model không theo đúng cơ chế: thiếu buồng cát có miệng xả ở mép trên bàn, thiếu khối băng có số, khay trên bàn chưa rõ là khay 1 ô hay 2 ô.
- Chỉ dùng để chọn hướng hình. Sau khi chọn, vòng 2 sẽ lấy bố cục từ `../../khay-cat-mockup.html` làm ảnh gốc, dùng model sửa ảnh để giữ đúng vị trí các vùng.
