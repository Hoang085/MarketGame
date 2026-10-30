---
name: gen-art
description: Gen ảnh concept art cho game (nhân vật, bộ item merge, nền, màn chơi, icon, ảnh store/ads) bằng fal, bám theo một art style và ảnh mẫu. Trước khi gen, chốt đủ thông tin: game nào, loại asset, style, ảnh mẫu, số bản và ngân sách; thiếu cái gì thì hỏi người dùng. Dùng khi người dùng gõ /gen-art, hoặc nhờ vẽ, gen, làm concept, làm lại ảnh, đổi style, thêm biến thể cho bất kỳ asset game nào, kể cả khi họ không nhắc tới fal hay "skill".
---

# /gen-art

Cách dùng:
- `/gen-art` : hỏi từ đầu
- `/gen-art nhân vật bà bán hoa cho Bloom Corner, style glossy` : gen luôn nếu đủ thông tin
- `/gen-art làm lại chuỗi item café giống bộ hoa v2` : dùng ảnh đã duyệt làm mẫu

Ảnh concept dùng để duyệt hướng. Sai style là tốn tiền mà không dùng được, nên skill này **chốt thông tin trước, gen sau**.

## 0. Các game trong repo

| Game | Thư mục concept | Style đang dùng | Ảnh đã duyệt / file prompt |
|---|---|---|---|
| Bloom Corner (vỏ mới của Keepsake Lane: hoa + café + thời trang, merge-2) | `docs/concepts/keepsake-lane/concept-store/` | `merge-glossy-cartoon` (người dùng chốt 28/10/2026) | `style-concepts/merge-glossy-cartoon/v2/` (README ghi bản chọn); `tools/concept-gen/prompts-bloom-glossy-v2.json` |
| Keepsake Lane vintage bí ẩn (bản cũ, giữ để so sánh) | `docs/concepts/keepsake-lane/concept-art/`, brief v1 ở `docs/concepts/tiem-do-co/` | 2D vintage | `tools/concept-gen/prompts-keepsake-lane.json` |
| Hành Trình Sắc Màu (puzzle khay cát + đồ thủy tinh) | `docs/concepts/hanh-trinh-sac-mau/` | Theo Sand Blocks | `tools/concept-gen/prompts-hanh-trinh-sac-mau.json` |
| Về Quê Làm Giàu (farm + kinh doanh làng quê) | `docs/concepts/que-len-pho/` | 2D isometric cozy | `tools/concept-gen/prompts-lang-*.json`, `prompts-que-len-pho.json` |
| Demo clone ads A Travel Town (nội bộ, demo kỹ thuật/FX/art, chủ đề bãi biển) | `docs/concepts/keepsake-lane/concept-store/ads-clone-travel-town/` (ảnh ở `art/`) | Theo Travel Town (`concept-store/style-guide-travel-town.md`) | `danh-sach-gen.md`; `tools/concept-gen/prompts-tt-clone-demo.json` |

Game mới chưa có trong bảng thì tạo `docs/concepts/<slug>/` và thêm một dòng vào bảng này.

## 1. Chốt 5 thông tin

| # | Thông tin | Lấy từ đâu trước khi hỏi |
|---|---|---|
| 1 | **Game** | Lời người dùng, ngữ cảnh hội thoại, bảng mục 0, memory dự án |
| 2 | **Loại asset + mô tả** | Nhân vật, bộ item (chuỗi merge), nền, màn chơi mockup, icon, ảnh store/ads (xem `references/asset-types.md`). Nhân vật cần vai trò, tuổi, ngoại hình, trang phục, đạo cụ. Đọc brief và README của game để lấy nhân vật đã có. |
| 3 | **Art style** | Cột "Style đang dùng" ở mục 0. Nếu chưa có thì lấy từ `docs/market/style-refs/styles.json` |
| 4 | **Ảnh mẫu** | Ảnh người dùng gửi (đường dẫn, link, ảnh đính kèm), ảnh đã duyệt của game, `docs/market/style-refs/<slug>/` và ảnh cắt cận trong `<slug>/crops/` |
| 5 | **Số bản + ngân sách** | Mặc định 2 bản cho nhân vật, 1 bản cho item sheet, nền và màn chơi. Không cần hỏi, chỉ báo chi phí (mục 4). |

Cái gì đã rõ từ lời người dùng, hội thoại hoặc file dự án thì **dùng luôn, không hỏi lại**. Cái gì còn thiếu thì hỏi bằng `AskUserQuestion`, mỗi lần tối đa 4 câu, có gợi ý sẵn để người dùng chỉ cần bấm chọn:

- **Chưa biết game:** hỏi game trước, gộp chung với những câu không phụ thuộc game (ví dụ mô tả nhân vật). Khi đã biết game, style và ảnh mẫu thường có sẵn ở mục 0. Lúc đó mới hỏi vòng 2 nếu còn thiếu. Tối đa 2 vòng hỏi. Không viết sẵn lựa chọn cho một game mà người dùng chưa chọn.
- **Thiếu style:** đưa 3–4 style trong `styles.json` (`name_vi` + 1 dòng nhận diện). Bỏ các style vướng ràng buộc art của người dùng (3D, bán hiện thực), trừ khi người dùng hỏi tới.
- **Thiếu ảnh mẫu:** gợi ý 2–3 ảnh hợp loại asset nhất. Ưu tiên ảnh đã duyệt của game, sau đó đến ảnh store. Người dùng cũng có thể gửi ảnh hoặc link riêng. Chưa có ảnh mẫu thì không gen, trừ khi người dùng nói "không cần mẫu".
- **Mô tả quá mơ hồ** (ví dụ "vẽ nhân vật"): gợi ý các nhân vật trong brief chưa có art, hoặc để người dùng tự tả.
- **Trùng với asset đã có** (ví dụ chuỗi bánh ngọt trùng cupcake trong chuỗi café): hỏi người dùng muốn tách riêng, thay chuỗi cũ hay chấp nhận trùng.

**Ràng buộc art:** style người dùng đã chốt cho một game (cột "Style đang dùng") được ưu tiên hơn feedback chung trong memory. Ví dụ, Bloom Corner dùng glossy semi-3D dù memory chung ghi "không 3D". Chỉ cảnh báo khi style sắp dùng **chưa được chốt** và vướng ràng buộc.

## 2. Chọn ảnh mẫu cho đúng

Ảnh mẫu quyết định chất lượng nhiều hơn prompt. Bài học từ Bloom Corner (28/10/2026):

- **Nhân vật:** cắt cận nhân vật trong ảnh store bằng `scripts/crop.ps1`, lưu vào `docs/market/style-refs/<slug>/crops/` để lần sau dùng lại. Nếu đưa cả màn hình làm mẫu, model sẽ bắt layout và ra kiểu "minh họa AI chung chung".
- **Item:** dùng ảnh store có board merge rõ, item to và nổi bật.
- **Item kiểu "3D, như thật" (Travel Town):** chữ "3D", "render", "glossy", "specular" làm model ra icon CG sạch, bóng gắt, màu cơ bản tươi, khác hẳn Travel Town (lỗi chuỗi phao bơi 30/10). Prompt phải ghi rõ: hand-painted 3D (không phải CG product render), ánh sáng ấm, vệt bóng rộng và mềm, màu ấm hài hòa với màu bàn chơi, dáng gọn gần vuông vừa ô. Gen trên nền trơn **cùng màu bàn chơi** của game để model tự chỉnh tông cho hợp.
- **Đồng bộ một bộ asset:** khi đã có một ảnh được chọn, đưa ảnh đó làm **ảnh 1** cho các asset sau ("match EXACTLY the same rendering, lighting, camera angle, scale"). Nhờ vậy các chuỗi item và các nhân vật trông như cùng một người vẽ.
- Mỗi lần gen dùng 2–4 ảnh mẫu, ảnh quan trọng nhất đặt đầu. Upload bản `web/*.jpg`; bản này nhẹ và đủ cho model.

## 3. Viết prompt

Prompt viết bằng tiếng Anh, theo khung dưới đây. Mẫu đầy đủ cho từng loại asset nằm trong `references/asset-types.md`.

1. **Vai trò từng ảnh mẫu:** "Image 1 is our approved …", "The other images are STYLE references only… do NOT copy their characters, items, layout, logos or text."
2. **RENDER:** tả cụ thể kỹ thuật vẽ: đổ bóng, có viền hay không, độ bão hòa, ánh sáng, bề mặt. Không dùng tính từ chung chung kiểu "beautiful, high quality".
3. **SUBJECT:** nội dung asset, tên game, bối cảnh ngắn. Liệt kê những món cần tránh nếu dễ trùng với chuỗi đã có.
4. **BACKGROUND / bố cục:** nền trơn để tách (nhân vật, item); chừa chỗ cho UI (nền, màn chơi).
5. **Loại trừ:** "No text, no watermark" (trừ mockup màn chơi).

Ghi prompt vào file của đợt đang làm (cột "file prompt" ở mục 0). Đợt mới thì tạo `tools/concept-gen/prompts-<game>-<chủ-đề>.json`, ghi kèm model, ảnh mẫu và aspect ratio để gen lại được.

## 4. Báo chi phí và gen

1. Model mặc định là `fal-ai/nano-banana-pro/edit`, resolution `2K`. Model này nhận ảnh mẫu và đã cho kết quả tốt nhất (28/10/2026, 0,15 USD/ảnh theo giá niêm yết).
2. Gọi `get_pricing` một lần mỗi phiên, rồi báo một dòng, ví dụ "5 ảnh × 0,15 USD ≈ 0,75 USD". Phần này là để người dùng biết, không cần chờ trả lời. Chỉ hỏi trước khi chạy khi vượt ngân sách người dùng đặt, hoặc khi tổng trên 2 USD mà chưa ai đặt ngân sách.
3. Upload ảnh mẫu local: gọi `upload_file` với `prepare_upload: true`, rồi `curl -X PUT -H "Content-Type: <mime>" --upload-file <file> "<upload_url>"`. Chỉ dùng `file_url` sau khi PUT trả 200.
4. Gửi các asset độc lập trong một lần `submit_jobs`, rồi `wait_for_jobs`. Asset nào cần ảnh đã chọn làm mẫu thì đợi đợt trước xong và người dùng chọn xong mới gửi.
5. Nếu fal báo hết credit: dừng mọi job, gửi link nạp một lần, lưu prompt còn lại và chờ người dùng.

## 5. Lưu, xem lại, báo cáo

1. Tải ảnh về thư mục của game (mục 0), đặt tên theo asset (`CH-clara-a.png`, `FLW-chain.png`...). Không ghi đè bản cũ; bản làm lại để trong `v2/`, `v3/`.
2. Chạy `scripts/toweb.ps1 -Dir <thư mục>` để tạo `web/*.jpg` (cạnh dài 1100 px).
3. **Tự xem từng ảnh** (Read bản `web/`) đặt cạnh ảnh mẫu, **ghép thành 1 ảnh so sánh** (ảnh game gốc bên trái, bản mới bên phải) rồi mới đánh giá; đừng chỉ nhìn bản mới riêng lẻ. Với item, so cả độ bóng, tông màu so với màu bàn chơi và dáng có vừa ô vuông không. Ghi thẳng chỗ chưa đạt: lệch style, chữ lỗi, tay hỏng, bố cục, không đồng bộ với bộ đã chọn. Bản lỗi rõ thì gen lại một lần với prompt đã sửa, không đưa cho người dùng như bản đạt.
4. Viết hoặc cập nhật `README.md` trong thư mục: model, ảnh mẫu, chi phí. Trạng thái từng ảnh ghi tách bạch: **"Claude đánh giá đạt"** khác với **"người dùng đã chọn"**. Chỉ ghi "đã chọn" khi người dùng nói vậy.
5. Báo người dùng: bản nên chọn, điểm còn yếu, chi phí đã dùng, đường dẫn file. Nếu có nhiều bản hoặc cần so với ảnh store, đề nghị làm trang HTML so sánh 3 cột (bản cũ / bản mới / ảnh store).
