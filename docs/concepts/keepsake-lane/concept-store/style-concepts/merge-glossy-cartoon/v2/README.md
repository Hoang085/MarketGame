# Bloom Corner, style cartoon vẽ màu bóng bẩy, bản v2 (28/10/2026)

Gen lại bộ `merge-glossy-cartoon` vì bản 27/10 chưa đạt chất lượng.

## Bản 27/10 lỗi ở đâu
- Nhân vật trông như tranh minh họa AI chung chung: viền mực nâu, màu đục, mặt kiểu công chúa, chưa ra khuôn mặt "semi-3D" của Tasty Travels hay Hotel Legacy.
- Item có viền nâu dày và tô phẳng như sticker, thiếu khối và highlight bóng.
- Ảnh 1K, ảnh mẫu là cả màn hình store nên model bắt layout nhiều hơn bắt style.

## Bản v2 sửa gì
- Model `fal-ai/nano-banana-pro/edit`, ảnh 2K.
- Nhân vật: ảnh mẫu là ảnh crop cận nữ chính (Tasty Travels, Hotel Legacy). Prompt tả rõ cách dựng mặt: mắt hạnh nhân to, mi dày, mũi nhỏ hếch, cười mở. Không viền mực, da có ánh hồng.
- Item: tả rõ khối tròn, highlight bóng, không viền tối. Chuỗi FSH và CAF lấy FLW-chain làm mẫu để cả 3 chuỗi cùng góc nhìn, ánh sáng và tỉ lệ.

## File
| File | Trạng thái |
|---|---|
| `CH-clara-c.png` | Bản chọn cho Clara |
| `CH-clara-a/b/d.png` | Bản phụ: a, b còn kiểu minh họa cũ; d bó hoa bị cắt |
| `FLW-chain.png`, `FSH-chain.png`, `CAF-chain.png` | Đạt |
| `BG-store.png` | Dùng được, tông pastel nhạt hơn ảnh mẫu |
| `CH-leo`, `SCREEN-board` | Chưa gen (tài khoản fal hết credit) |

`web/*.jpg` là bản nén, cạnh dài 1100 px. Prompt đầy đủ nằm ở `tools/concept-gen/prompts-bloom-glossy-v2.json`.
