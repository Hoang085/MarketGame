# Concept art: playable A (vòng 1, 2026-10-26)
Sinh bằng fal.ai `fal-ai/flux-pro/v1.1`, 2 phương án mỗi asset. Prompt gốc: `tools/concept-gen/prompts-keepsake-lane.json`.

> **Chỉ dùng nội bộ.** Ảnh AI dùng để định hướng và làm mockup test CTR. Asset trong playable chạy thật và trong game phải do họa sĩ vẽ (xem `concept-brief.md` mục 7).

## Đánh giá và chọn bản
| Asset | Chọn | Ổn | Cần sửa khi vẽ lại |
|---|---|---|---|
| BG-01 gian tiệm tối mưa | **BG01-shop-night-1** | Đèn bàn vàng, cửa kính mưa, kệ đồng hồ; tông đúng cozy mystery. Bản 2 đẹp nhưng màu gắt hơn. | Quầy chiếm khá thấp; cần chừa chỗ cho nhân vật và bàn ghép ở nửa dưới. |
| BG-03 mặt tiền | **BG03-shopfront-rain-1** | Bố cục đẹp, gác mái sáng đèn, phố đá ướt; hợp end card. | Bảng hiệu bị AI ghi chữ sai ("ANTIQUE ANTIQUE SHOP"): xóa, thay bằng "Bell & Keys Antiques". Bản 2 cũng lỗi chữ và bị cắt khung. |
| IT-CLK-5 đồng hồ mở nắp | **IT-CLK5-watch-open-2** | Nắp mở, mẩu giấy nằm trong nắp, chìa khóa rơi ra ngoài; đọc rõ. | Có 2 chìa khóa (một trên giấy, một dưới sàn): chỉ giữ 1. Bản 1 có ánh xanh ngọc đẹp hơn nhưng giấy bị xé vụn, không ra "mẩu giấy gấp". Nên lấy ánh sáng bản 1 cho bản 2. |
| Clara | **CH-clara-1** | Biểu cảm sững người rõ; áo len, tạp dề có đồ nghề đúng brief. | Trông trẻ hơn 32 tuổi; mắt to kiểu hoạt hình 3D. Cần già dặn hơn một chút. |
| Henry | **CH-henry-2** | Liếc sang bên, lo lắng, đúng ý "sợ ai đó"; áo khoác dính mưa. | Bản 1 tốt cho biểu cảm "buồn" khi đưa đồng hồ (cảnh hook). |
| Victor | **CH-victor-2** | Nụ cười khó đoán đúng nhân vật; vest, khăn túi đỏ rượu. | AI tự thêm kính và dây chuyền mặt tròn thay dây đồng hồ: bỏ kính, đổi thành dây đồng hồ quả quýt. Bản 1 không cười (cau mày), nhưng tư thế cầm ô ở cửa hợp cảnh 5. |

## Vòng 2–3: sinh lại chân dung (2026-10-26)
| Vòng | File | Hướng | Kết quả |
|---|---|---|---|
| v1 | `CH-*-1/2.jpg` | "cartoon" chung chung | Ra kiểu hoạt hình 3D (mắt to, mũi đỏ), lệch với nền. **Loại.** |
| v2 | `CH-*-v2-*.jpg` | tranh sơn dầu bán hiện thực | Gần ảnh thật, không hợp làm game. **Loại** (người dùng nhận xét). |
| v3 | `CH-*-v3-*.jpg` | nhân vật 2D game: nét gọn, khối đơn giản, đổ bóng mềm, nền phẳng để tách | **Dùng hướng này.** |

**Bản chọn ở v3**
| Nhân vật | Chọn | Ổn | Cần sửa khi vẽ lại |
|---|---|---|---|
| Clara | **CH-clara-v3-1** | Sững người, cầm mẩu giấy vàng, áo len và tạp dề đúng brief; nền phẳng dễ tách. | Môi đỏ quá đậm, nên nhạt lại. v3-2 (búi tóc) cũng dùng được nếu muốn trông gọn hơn. |
| Henry | **CH-henry-v3-2** | Liếc sang bên, lo lắng, đúng cảnh hé lộ. | Mũi đỏ hơi biếm họa, nét đậm hơn Clara: cần cân lại để cùng một bộ. v3-1 hợp cảnh hook (nhìn lên, buồn). |
| Victor | **CH-victor-v3-1** | Không kính, cầm ô, ánh mắt tính toán, đúng vai. | Chưa thấy dây đồng hồ quả quýt: thêm vào. Bộ ria hơi "phản diện cổ điển"; nụ cười cần lịch sự hơn. v3-2 lại có dây chuyền, quá dữ: loại. |

**Người dùng chốt: dùng cả 3 bản v3-1** (CH-clara-v3-1, CH-henry-v3-1, CH-victor-v3-1).

## Mockup ghép thử (2026-10-26)
- File: `mockup-playable.html` (3 màn: hook, hé lộ, lựa chọn). Bản tách nền nằm trong `cutout/` (fal `birefnet/v2`).
- Ảnh có đường dẫn tương đối, nên mở qua một server tĩnh (ví dụ `npx http-server` trong thư mục này), không mở thẳng file.
- **Kết quả:** nhân vật 2D v3 đặt lên nền BG01 khớp tông và ánh sáng, đọc rõ ở cỡ màn điện thoại. Nền chi tiết hơn nhân vật một chút nhưng không lệch.
- **Người dùng duyệt chân dung và bố cục:** các cảnh có nhân vật được trình bày như **đoạn hội thoại**: chân dung nửa người đứng ở mép màn hình, bong bóng thoại bên cạnh, giống màn thoại của game merge-story. Vì vậy chân dung cắt ngang ở mép dưới là đúng quy ước, không cần sửa.
- **Còn cần làm:** chỉnh tỉ lệ đầu Clara và Victor cho đều khi đứng chung; tách nền ảnh đồng hồ; thay emoji trên bàn ghép bằng icon thật.

## Vòng 4: icon và bàn ghép (2026-10-26)
Theo danh sách item đã duyệt (`../merge-items.md`), áp bài học từ Merge Museum: bàn sáng, icon viền rõ.

| File | Nội dung | Đánh giá |
|---|---|---|
| `IT-GEN-TOOL-sheet-1.jpg` | Hộp thiếc của bà, giỏ đồ nghề, giẻ, chổi, lọ dầu, thùng các-tông | **Đúng phong cách icon cần có:** khối rõ, màu ấm, đọc tốt trên nền kem. Dùng làm mốc phong cách cho mọi icon. Bản 2 nét vẽ tay hơn, cũng đẹp nhưng kém rõ ở cỡ nhỏ. |
| `IT-CLK-chain-1/2.jpg` | Chuỗi đồng hồ 6 cấp | **Chưa đạt.** AI không giữ đúng 6 bước: bản 1 chỉ ra 5 món, bản 2 ra 8 món lẫn lộn. Phong cách còn gần ảnh thật, chưa có viền đậm như tấm đồ nghề. Vẫn có ý dùng được: bộ máy lộ trong vỏ mở, mặt số khung xương, đồng hồ nứt kính phát sáng (bản 2). Cần sinh từng cấp riêng theo phong cách `IT-GEN-TOOL-sheet-1`, hoặc để họa sĩ vẽ từ danh sách. |
| `BOARD-screen-1/2.jpg` | Màn bàn ghép | **Đúng hướng:** bàn giấy da sáng nổi bật giữa tiệm tối ấm, đọc rõ. Bản 2 có khăn phủ bụi trắng trên ô (đúng cơ chế ô khóa) và mèo Biscuit ngủ trên bàn, rất hợp. Lỗi: lưới chỉ 5 cột (cần 7), icon quá nhỏ và chi tiết, chữ AI vô nghĩa trên UI. |

## Vòng 5: icon kiểu game casual (2026-10-26)
Người dùng nhận xét vòng 4 "bán thực tế quá, không giống item trong game" và gửi ảnh icon Travel Town làm chuẩn: khối tròn đơn giản, màu tươi, đổ bóng gradient mềm, ít chi tiết.

| Thử | File | Kết quả |
|---|---|---|
| Recraft v3 (`digital_illustration`) | `icons-v2/`, xem `icons-v2.html` | **Loại.** AI tự thêm mặt cho đồ vật, có chữ vô nghĩa, nét phác nhạt màu. |
| Nano Banana 2.1 edit, dùng ảnh Travel Town làm **mẫu phong cách** | `icons-v3/` | **Đạt.** Đúng chất icon merge casual. |

**Bản chọn**
- **`icons-v3/CLK-sheet-1.png`**: chuỗi đồng hồ 6 cấp, đọc đúng từng bước phục chế (bánh răng gỉ → cụm bánh răng → bộ máy trần → bộ máy có mặt số → đồng hồ nứt kính → đồng hồ vàng phát sáng xanh ngọc). Phong cách đồng đều. Bản 2 có cấp 4 che mất bộ máy nên kém hơn.
- **`icons-v3/GEN-TOOL-sheet-1.png`**: hộp thiếc hoa của bà, giỏ giẻ, giẻ lau, bàn chải, lọ dầu, thùng các-tông. Bản 2 cũng dùng được.

**Cách làm (để sinh tiếp các chuỗi khác):** model `google/nano-banana-2.1/edit`, `image_urls` = ảnh mẫu phong cách, prompt bắt đầu bằng "Use the attached image ONLY as an art-style reference... Do NOT copy any of its objects", rồi mô tả tấm 3×2 ô kem với 6 món. Sinh cả chuỗi trong một ảnh để giữ phong cách đồng đều.

**Lưu ý bản quyền:** ảnh mẫu là ảnh chụp từ Travel Town, chỉ dùng để định hướng nội bộ. Không đưa ảnh sinh ra vào game hay quảng cáo chạy thật; họa sĩ vẽ lại từ danh sách và mốc phong cách này.

## Vấn đề chung
- **Phong cách:** hướng v3 khớp với game hơn. Nền BG-01/BG-03 là tranh vẽ chi tiết hơn nhân vật một chút, nhưng đặt cạnh nhau vẫn chấp nhận được; khi chốt art style nên làm thêm 1 ảnh ghép thử (nhân vật trên nền) để kiểm.
- AI hay sinh chữ sai trên bảng hiệu và giấy: mọi chữ trong playable phải đặt bằng UI, không vẽ vào ảnh.
- Kích thước gốc nhỏ (576×1024 cho nền, 768×1024 cho chân dung): đủ cho mockup, chưa đủ cho bản chạy thật 1080×1920.

## Vòng 6: hướng "tiệm vintage" cho người chơi nữ (2026-10-27)
Phản hồi của sếp về demo: gameplay mượt, giữ mystery, nhưng hình ảnh chưa hấp dẫn; cần target người chơi nữ. Hướng xử lý: giữ gameplay và cốt truyện, đổi "tiệm đồ cổ" thành **tiệm đồ vintage của bà**, sáng màu, thêm tuyến romance.

File nằm trong `vintage-v1/`. Trang so sánh cũ và mới: `vintage-v1/compare.html` (mở qua server tĩnh).

| Asset | File | Model | Đánh giá |
|---|---|---|---|
| Clara mới (~26 tuổi, tea dress, cầm locket) | **CH-clara-v4-1** | `google/nano-banana-2.1/edit`, mẫu phong cách `cutout/CH-clara.png` | Xinh, có gu, đúng nét 2D v3. Lưu ý: tóc nâu + nơ dễ gợi Belle (Disney); họa sĩ nên đổi kiểu tóc hoặc màu nơ khi vẽ lại. |
| Victor mới (~30 tuổi, đối thủ kiêm tình cảm) | **CH-victor-v4-1** | như trên | Đẹp trai, nụ cười trêu, có dây đồng hồ quả quýt. |
| Nền tiệm vintage ban ngày | **BG-boutique-day-1** | `fal-ai/flux-pro/v1.1` | Sáng, hồng kem, có ma-nơ-canh, gương, kệ hộp. Mất hẳn chất bí ẩn (không có ánh xanh ngọc): cần thêm chi tiết bí ẩn khi vẽ lại, ví dụ ngăn kéo hé sáng. |
| Chuỗi locket | **LOC-sheet-2** | nano-banana edit, mẫu `icons-v3/CLK-sheet-1.png` | Cấp 6 có ảnh cũ trong locket, đúng vai manh mối. |
| Chuỗi nước hoa | **PRF-sheet-1** | như trên | Cấp 6 có mẩu thư cuộn ở cổ chai. |
| Chuỗi váy | **DRS-sheet-2** | như trên | Cấp 6 có ánh xanh ngọc, khớp hai chuỗi kia. |

Ảnh tách nền cho mockup: `vintage-v1/cutout/` (fal `birefnet/v2`).

### Vòng 6b: thêm lại không khí bí ẩn (2026-10-27)
Người dùng nhận xét bản vintage sáng "không còn thấy mystery". Hướng sửa: giữ nhân vật và căn tiệm, chuyển sang chạng vạng kiểu romance bí ẩn (tham chiếu June's Journey): trăng, ánh nến, sương; thêm tín hiệu manh mối trong cảnh.

| Asset | Chọn | Ghi chú |
|---|---|---|
| Nền chạng vạng (sửa từ BG-boutique-day-1 bằng nano-banana edit) | **BG-boutique-dusk-1** | Giữ bố cục cũ; có trăng, bóng người đội mũ ngoài cửa sổ, ngăn kéo phát sáng xanh ngọc, thư niêm phong sáp đỏ dưới sàn. Bản 2 đổi váy ma-nơ-canh sang xanh lục, cũng đẹp. |
| Nền đêm mới (FLUX) | dự phòng: BG-boutique-night-2 | Sang, nhiều tím xanh, nhưng không còn là cùng căn tiệm; bản 1 có thành phố kiểu lâu đài, lệch bối cảnh. |
| Clara ánh nến (sửa từ CH-clara-v4-1) | **CH-clara-v5-1** | Giật mình, liếc ngang; locket phát sáng hắt lên mặt. |
| Victor ánh nến (sửa từ CH-victor-v4-1) | **CH-victor-v5-1** | Nửa mặt trong bóng, cầm chìa khóa đồng, cười bí hiểm. |

Trang `vintage-v1/compare.html` nay có 3 cột: cũ, vintage sáng, vintage bí ẩn (đề xuất).

### Vòng 6c: sửa Clara cho bản vintage bí ẩn (2026-10-27)
Người dùng: nhân vật CH-clara-v4/v5 ổn, nhưng biểu cảm há miệng và ánh xanh từ locket hắt lên mặt làm hỏng ảnh. Sau đó yêu cầu bỏ hẳn món đồ trên tay và chỉnh ánh sáng khớp nền.

| Bước | File | Ghi chú |
|---|---|---|
| Thử 4 nữ chính khác (A tóc đỏ, B trench, C búi tóc, D bob) | `CH-heroine-*` | Người dùng không cần đổi nhân vật; giữ lại để tham khảo. |
| Sửa biểu cảm + glow nhỏ quanh locket | `CH-clara-v6-*` | Mặt sạch, nhưng người dùng muốn bỏ locket. |
| **Bỏ locket, ánh sáng chạng vạng** (sửa từ v6-glance-1) | **CH-clara-v7-down-1** (chọn), `CH-clara-v7-hand-1` (phụ) | Liếc ngang, môi khép; nến ấm bên phải, viền trăng tím bên trái; khớp `BG-boutique-dusk-1`. |

Trang so sánh dùng `cutout/CH-clara-v7-down.png` ở cột vintage bí ẩn.

### Vòng 6d: hướng nhìn và một nguồn sáng (2026-10-27)
Người dùng: cho Clara nhìn sang phải, căn phòng chỉ cần một đèn.

| Asset | Chọn | Ghi chú |
|---|---|---|
| Nền một đèn (sửa từ BG-boutique-dusk-1) | **BG-boutique-dusk-1lamp-1** | Chỉ đèn lồng góc phải sáng; nến còn nhưng đã tắt. Giữ trăng, bóng người, ngăn kéo xanh ngọc, thư niêm phong. Bản 2 gần như giống hệt. |
| Clara nhìn sang phải (sửa từ CH-clara-v7-down-1) | **CH-clara-v8-right-4** | Cả hai con ngươi ở góc phải, nhìn về phía Victor. Lần sửa đầu (`v8-right-1/2`) chỉ lệch nhẹ, chưa đạt; `v8-turn-*` xoay đầu thêm nhưng mắt chưa rõ. |

Trang so sánh dùng `cutout/CH-clara-v8-right.png` và nền `BG-boutique-dusk-1lamp-1.png` cho cột vintage bí ẩn.
