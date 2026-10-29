# Mẫu prompt theo loại asset

Các khối `RENDER` dưới đây viết cho style glossy cartoon (merge-2 mainstream). Đổi style thì thay khối RENDER bằng đặc điểm của style đó, lấy từ `traits` trong `docs/market/style-refs/styles.json`, viết lại thành kỹ thuật vẽ cụ thể. Các khối còn lại giữ nguyên.

| Loại | Aspect ratio | Số bản mặc định | Ảnh mẫu nên dùng |
|---|---|---|---|
| Nhân vật (CH) | 3:4 | 2 | Ảnh cắt cận nhân vật từ ảnh store; nhân vật đã duyệt của game |
| Bộ item / chuỗi merge (ITEM) | 3:2 (6 icon, lưới 3×2) | 1 | Ảnh store có board rõ; item sheet đã duyệt |
| Nền (BG) | 9:16 | 1 | Ảnh store có cảnh nội thất/ngoại cảnh |
| Màn chơi mockup (SCREEN) | 9:16 | 1–2 | Nhân vật + item sheet + nền đã duyệt, cộng 1 ảnh store để lấy layout |
| Icon app / ảnh store / ads | 1:1 hoặc 9:16 | 2 | Ảnh store của game cùng style |

## Nhân vật

```
The attached images are close-up STYLE references of characters from top-grossing mobile games. Reproduce their exact character rendering and face design language, but create a NEW original character: do NOT copy their faces, hair, outfits, jewelry, props or poses.

RENDER: stylized semi-3D painted look, as if a 3D character were rendered then painted over: smooth airbrushed volumetric shading, soft subsurface glow on skin, glossy specular highlights on hair, lips and eyes, NO ink outlines, very bright clean high-saturation colors, warm key light plus soft rim light. FACE: large almond-shaped glossy eyes with big irises, thick upper lashes, bright catchlights, small upturned nose, wide joyful smile. Energetic charming pose, App Store screenshot quality.

CHARACTER: <tên>, <tuổi>, <vai trò trong game <tên game>>. <tóc, mắt>. <trang phục>. <đạo cụ>. Half-body, three-quarter view, <tư thế>.

BACKGROUND: solid plain pale warm cream color, nothing else, for easy cutout. No text, no watermark, no UI.
```

Nhân vật thứ hai trở đi: thêm nhân vật đã duyệt làm ảnh 1 và câu "Image 1 is our approved main character: match her rendering, proportions and face style exactly so both look drawn by the same artist."

## Bộ item (chuỗi merge 6 cấp)

```
The attached images are ART STYLE references only. Match the rendering of their BOARD ITEMS exactly, but do NOT copy their items, layout, logos or text.

RENDER: premium merge-2 item icons, soft semi-3D painted look: chunky rounded volumetric shapes, smooth airbrushed gradients, strong glossy specular highlights, soft ambient occlusion, NO heavy dark outlines, high saturation, warm top-left light. Each icon reads clearly at 100 px: one bold silhouette, simplified details.

CONTENT: an item sheet of 6 separate icons in a clean 3 x 2 grid on a plain pale warm cream background, same scale and camera angle (slight top-down 3/4 view), soft contact shadow under each. The <TÊN CHUỖI> merge chain of the game <tên game>, level 1 to 6, each level visibly bigger, richer and more valuable: 1) … 6) … with golden glow and sparkles. No text, no numbers, no labels.
```

Chuỗi thứ hai trở đi: đưa sheet đã duyệt làm ảnh 1 và mở đầu bằng "Image 1 is our approved <X> item sheet. Create a matching sheet in EXACTLY the same rendering, lighting, camera angle, icon scale and cell layout."

## Nền

```
The attached images are ART STYLE references only. Match their painted environment rendering exactly, but do NOT copy their scenes, layout, logos or text.

RENDER: premium mobile game background, soft semi-3D painted look, smooth gradients, rounded friendly shapes, glossy highlights, bright high-key saturated colors, warm sunlight with soft bloom, slightly simplified detail, no heavy outlines.

SCENE: vertical 9:16, <địa điểm>, slight elevated front view. Left: … Back: … Right: … Keep the lower-center area open for characters and UI. No people, no text, no signage letters.
```

## Màn chơi mockup

Đưa ảnh đã duyệt (nhân vật, item sheet, nền) làm ảnh mẫu, thêm 1 ảnh store để lấy layout. Prompt tả từ trên xuống: thanh tài nguyên (năng lượng, xu, đá quý), thẻ đơn hàng có chân dung nhân vật, board <cột × hàng> với item lấy từ các sheet, ô khóa, một cặp item đang merge phát sáng, thanh nút dưới. Cho phép chữ UI ngắn bằng tiếng Anh. Nói rõ "use the exact characters and items from the attached approved images".
