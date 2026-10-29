# Concept Bloom Corner theo 5 style merge-2 (27/10/2026)

Mỗi style vẽ cùng 7 asset demo để so sánh: `SCREEN-board` (màn chơi), `CH-clara`, `CH-leo`, `FLW-chain` (chuỗi hoa 6 cấp), `FSH-chain` (chuỗi thời trang), `CAF-chain` (chuỗi café), `BG-store` (nền tiệm ban ngày).

| Thư mục | Style | Ảnh mẫu style |
|---|---|---|
| `merge-glossy-cartoon/` | Cartoon vẽ màu bóng bẩy | Tasty Travels, Hotel Legacy |
| `cute-doodle-merge/` | Doodle/chibi dễ thương | Hello Town, Starbrew Cafe |
| `warm-painterly-storybook/` | Truyện tranh vẽ màu ấm | Love & Pies, Merge Inn |
| `drama-3d-cinematic/` | 3D điện ảnh (vướng ràng buộc "không 3D") | Gossip Harbor, Hollywood Merge |
| `webtoon-semireal-drama/` | Webtoon bán hiện thực (vướng "tránh bán hiện thực") | Fallen Beauty, Merge Fashion |

- File `.png` là bản gốc 1K; `web/*.jpg` là bản nén dùng cho trang so sánh.
- Model: `google/nano-banana-2.1/edit`, `image_urls` = 2 ảnh store mẫu (trong `docs/market/style-refs/`). Prompt: `tools/concept-gen/prompts-bloom-styles.json` (prefix + style + asset).
- Ảnh AI, chỉ để chọn hướng. Chưa tách nền, chưa đồng nhất gương mặt giữa các asset.
- Trang so sánh và chọn style: https://claude.ai/artifact/GP1rAvnavFZvRTGYyTYvbP (mục "So sánh 5 style trên asset demo").
