# Style frame vòng 2: theo ngôn ngữ hình Sand Blocks (2026-10-26)

Quyết định: bàn trượt, cát, khay, buồng cát theo ngôn ngữ hình của Sand Blocks: Drop Puzzle (Rollic): nền tím, ô lưới xanh đậm lõm, khay trong suốt viền màu bóng có nhãn %, cát hạt pixel vuông. Chỉ **băng chuyền** và **đồ thủy tinh** thiết kế riêng. Theo ngôn ngữ hình, không chép asset.

Ảnh AI chỉ dùng nội bộ. Prompt: `tools/concept-gen/prompts-hanh-trinh-sac-mau.json` (các mục SF2-*, IT-*). Model: `fal-ai/nano-banana-pro`.
Vòng 1 (pastel / Mũi Né / đồ chơi) ở `../style-frame/` đã bị thay bằng hướng này.

| File | Băng chuyền | Nhận xét |
|---|---|---|
| SF2-full-belt-1.png | Băng thẳng, đốt nhựa lavender | Đủ cấu trúc: 3 món, 5 chỗ đổ, 4 buồng cát, khay có %, khối băng có số. Cát trong bình bị xéo, không thành lớp |
| SF2-full-belt-2.png | Băng thẳng | **Gần bản chốt nhất**: cát trong bình thành lớp ngang, nhãn chấm màu dưới món, khay ở chỗ đổ có %, khối băng 3 và 5, dòng cát chảy vào khay |
| SF2-full-shelf-1.png | Ray cong hình vòng cung, món đứng trên đế tròn | Ý hay: bong bóng màu cần trên đầu món, viền nét đứt cho lớp kế tiếp của món đặc biệt, chỗ đổ là cốc tròn. Bàn chỉ 4 cột, buồng cát chiếm hàng trên |
| SF2-full-shelf-2.png | Ray cong | Bong bóng hiện hình món thay vì màu (sai mục đích). Khay rỗng mà ghi 100%, sai logic |
| IT-glass-sheet-1.png | (bảng đồ thủy tinh) | Dáng rõ: chai nút bần, hồ lô, đèn lồng nắp đồng, chai sake, món đặc biệt viền vàng + nét đứt, lọ hoa văn Chăm, bình hoàn thành thành tranh biển, bình rỗng |
| IT-glass-sheet-2.png | (bảng đồ thủy tinh) | Cát trong bình có sóng đẹp hơn; món đặc biệt viền xanh phát sáng; bình hoàn thành tranh biển và đồi cát |

## Chốt (2026-10-26)
Người dùng chốt **SF2-full-belt-2.png** làm style frame chính, băng chuyền thẳng. Bước tiếp theo: gen từng asset chi tiết, bám theo ảnh này.

## Đề xuất ghép (trước khi chốt)
- Bố cục và bàn: theo **SF2-full-belt-2**.
- Băng chuyền: chọn giữa băng thẳng (belt) và ray cong (shelf). Ray cong có cá tính riêng hơn, khác Sand Blocks rõ hơn.
- Chỗ đổ dạng cốc tròn và viền nét đứt cho lớp kế tiếp: lấy từ **SF2-full-shelf-1**.
- Đồ thủy tinh: dáng theo **IT-glass-sheet-1**, cát gợn sóng theo **IT-glass-sheet-2**.
