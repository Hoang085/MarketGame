# Art concept: Khách sạn đêm

Model: `fal-ai/nano-banana-pro/edit`, 2K, 0,15 USD/ảnh. Prompt và ảnh mẫu ở `tools/concept-gen/prompts-khach-san-dem.json` (v1) và ghi chú v2 bên dưới. Danh sách asset: [../danh-sach-gen.md](../danh-sach-gen.md). Style: `merge-glossy-cartoon` theo Travel Town (chốt 07/11/2026).

## CH-nora: nữ chính Nora (07/11/2026, 4 ảnh, 0,60 USD)

**v1** (`CH-nora-a.png`, `CH-nora-b.png`). Ảnh mẫu: khách hàng đã chọn của demo clone Travel Town (`CH-customers-a`) làm ảnh 1, cộng `crops/ref-tt-characters.png`, `ref-tt2-heroine.png`, `ref-hl-heroine.png`.

**v2** (`v2/CH-nora-a.png`, `v2/CH-nora-b.png`). Ảnh mẫu: `ref-tt2-heroine.png`, `ref-hl-heroine.png`, `ref-tt-characters.png`, cộng `web/CH-nora-a.jpg` (v1) chỉ để giữ thiết kế nhân vật. Prompt nhấn mạnh render bóng bẩy, mắt to, màu tươi; nói rõ không theo cách vẽ của ảnh 4.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `CH-nora-a.png` (v1) | Thiết kế đúng brief (áo len kem, khăn mù tạt, quần xanh rêu, vali dán sticker, chìa khóa cổ có thẻ). **Lệch style**: màu xỉn, kiểu tranh vẽ tay phẳng, mắt nhỏ, gần `warm-painterly-storybook` hơn Travel Town | Chưa chọn |
| `CH-nora-b.png` (v1) | Như bản a, cầm chìa khóa trước ngực. Cùng lỗi lệch style | Chưa chọn |
| `v2/CH-nora-a.png` | **Claude đánh giá đạt, nên chọn.** Đúng style Travel Town/Hotel Legacy: da sáng bóng, mắt to có catchlight, tóc khối bóng, màu tươi ấm, cười tự tin. Vẫn là phụ nữ trưởng thành. Điểm yếu: chìa khóa thành chìa hiện đại nhỏ (brief là chìa đồng cổ to có thẻ); vali trơn, mất sticker | **Đã chọn (07/11)** |
| `v2/CH-nora-b.png` | Gần như chép lại v1 a (cùng dáng, cùng nét vẽ phẳng). Không đạt | Chưa chọn |

## CH-aldric: ma cà rồng Lord Aldric (09/11/2026, 2 ảnh, 0,30 USD)

Ảnh mẫu: Nora đã chọn (`v2/web/CH-nora-a.jpg`) làm ảnh 1 để cùng nét vẽ, cộng `crops/ref-tt-characters.png`, `crops/ref-tt1-faces.png`. Prompt ở mục `CH-aldric` trong `tools/concept-gen/prompts-khach-san-dem.json`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `CH-aldric-a.png` | Đạt. Cùng style bóng bẩy với Nora; áo khoác nhung đen lót đỏ rượu, gile đỏ, dây đồng hồ, găng đen, gậy đầu bạc, không răng nanh, không giống Dracula trong phim. Mặt hiền, cười rộng, trông như ông chú tốt bụng khoảng 55 tuổi; cravat thành nơ ren trắng thay vì lụa đen | Chưa chọn |
| `CH-aldric-b.png` | **Claude đánh giá đạt, nên chọn.** Đúng brief hơn: cravat lụa đen + ghim đá đỏ, nụ cười kín bí ẩn, dáng thẳng, lịch lãm kiểu "quý ông tóc bạc" hợp tệp nữ trưởng thành. Điểm yếu: trông khoảng 50–55 thay vì 45; ánh tím viền phía sau khá nhẹ. **Nhìn không nhận ra là ma cà rồng** | **Đã chọn làm thiết kế gốc (09/11)**, sửa thành v2 |

**v2** (`v2/CH-aldric-a.png`, `v2/CH-aldric-b.png`, 09/11, 0,30 USD). Giữ nguyên Aldric b, thêm dấu hiệu ma cà rồng theo yêu cầu người dùng. Ảnh mẫu: `web/CH-aldric-b.jpg` (ảnh 1), Nora v2 a, `crops/ref-tt-characters.png`, `crops/ref-tt1-faces.png`. Ghi chú prompt ở mục `CH-aldric-v2`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `v2/CH-aldric-a.png` | **Claude đánh giá đạt, nên chọn.** Nhận ra ngay là ma cà rồng: mắt đỏ phát sáng, tai nhọn, 2 chóp răng nanh, áo choàng lót đỏ, ghim dơi bạc, sương dưới chân. Giữ đúng mặt, tóc bạc, trang phục bản b. Da nhợt nhưng còn má hồng, vẫn hấp dẫn. **Lệch prompt:** cổ áo choàng dựng cao (đã dặn cổ thấp), là dấu hiệu Dracula kinh điển; khác Dracula của Hotel Transylvania nhờ tóc bạc, râu, trang phục, nhưng nên hạ cổ khi vẽ bản thật | Chưa chọn |
| `v2/CH-aldric-b.png` | Gần giống bản a, thêm dây xích nối hai vạt áo choàng. Da xám tím hơn, mặt lạnh và già hơn, kém hấp dẫn hơn a. Cùng lỗi cổ dựng cao | **Đã chọn (09/11)** |

## BG-exterior-dusk, BG-lobby-ruined: nền mặt tiền và sảnh (09/11/2026, 2 ảnh, 0,30 USD)

Ảnh mẫu: `style-refs/merge-glossy-cartoon/hotel-legacy-2.jpg` (cách vẽ nội thất), `travel-town-2.jpg`, Nora đã chọn (ánh sáng, độ tươi). Tỉ lệ 9:16. Ghi chú prompt ở mục `BG-exterior-dusk`, `BG-lobby-ruined`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `BG-exterior-dusk.png` | **Claude đánh giá đạt.** Đủ ý brief: nhà Victorian xanh lam bong sơn, 2 tháp nhọn, hiên, cửa sổ vỡ và đóng ván, dây leo, biển treo, cổng sắt mở hé, biển bất động sản có băng đỏ chéo, trời hoàng hôn cam tím. Không có chữ. Buồn mà không đáng sợ. Điểm yếu: nét vẽ chi tiết, có viền mảnh, gần tranh minh họa hơn kiểu khối tròn bóng của Travel Town; nhà chiếm gần hết khung, vùng dưới (hàng rào, cổng) khá rối nếu đặt Nora lên | Chưa chọn |
| `BG-lobby-ruined.png` | **Claude đánh giá đạt.** Bố cục đúng để làm nền playable: chi tiết dồn ở nửa trên (cầu thang cong, cửa sổ vòm có nắng, đồng hồ quả lắc, quầy lễ tân có chuông, tủ chìa khóa, lò sưởi, đèn chùm rơi, ghế phủ vải), nửa dưới là sàn gỗ trống cho bàn ghép. Điểm yếu: tông nâu sepia, ít bão hòa và ít bóng hơn Hotel Legacy (hợp trạng thái đổ nát; bản sảnh đã sửa #3 cần tươi hơn hẳn); đèn chùm rơi khá nhỏ | Chưa chọn |

## Nền v2, v3: vẽ lại theo phác thảo (09/11/2026, 4 ảnh, 0,60 USD)

Lý do: người dùng thấy bản v1 không giống khách sạn. Đã tìm ảnh mẫu khách sạn (`../refs/`), vẽ phác thảo bố cục (`../sketch/`), người dùng duyệt phác thảo rồi mới gen.

- **v2**: ảnh 1 là phác thảo sạch (`sketch/*-layout.png`), cộng `refs/hotel-legacy-*.jpg` và `style-refs/merge-glossy-cartoon/hotel-legacy-2.jpg`.
- **v3**: lấy v2 làm ảnh 1, chỉ tô lại theo style Hotel Legacy (thu hẹp mặt đường, sửa số phòng trùng).

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `v2/BG-exterior-dusk.png` | Ra đúng khách sạn: 5 tầng đối xứng, 2 tháp, hàng cửa sổ có ban công, biển "H TEL" trên nóc, mái che đỏ rách, bậc thềm, 2 đèn cột, cổng sắt, biển SOLD. Nét phẳng kiểu vector, mặt đường xám trống chiếm ~20% dưới | Chưa chọn |
| `v3/BG-exterior-dusk.png` | **Claude đánh giá đạt, nên chọn.** Giữ nguyên bố cục v2; ánh hoàng hôn ấm hơn, có viền sáng, thêm lá rơi, báo cũ, vết nứt trên đường. Điểm yếu: vẫn là tranh 2D mềm, chưa có khối 3D bóng như Hotel Legacy; nhìn thẳng chính diện; mặt đường vẫn rộng | **Chốt tạm (10/11)** |
| `v2/BG-lobby-ruined.png` | Đúng phác thảo v4, đọc ra sảnh khách sạn: tủ chìa khóa có số phòng và thẻ đồng, biển RECEP ION, thang máy cổ có kim tầng, quầy lễ tân có chuông và sổ khách, biển ROOMS, xe đẩy hành lý, đèn chùm rơi, huy hiệu HL giữa sàn, sofa tròn phủ vải, vali + hộp mũ, giá treo áo choàng + mũ chóp, cọ chậu, xô hứng nước, dây chắn đổ. Lỗi: số phòng "13" bị lặp | Chưa chọn |
| `v3/BG-lobby-ruined.png` | **Claude đánh giá đạt, nên chọn.** Gần như giống v2, đã sửa số phòng (1–15 không trùng). Điểm yếu: tranh 2D mềm, tông nâu đỏ, ít khối và ít bóng hơn Hotel Legacy; góc nhìn chính diện thay vì 3/4 | **Chốt tạm (10/11)** |

Ghi chú: lượt v3 (tô lại style) chỉ đổi ánh sáng và chi tiết nhỏ, không đẩy được sang kiểu 3D bóng của Hotel Legacy. Nếu cần khớp hẳn style thì nên để họa sĩ vẽ lại bản thật từ bố cục này.

## BG-lobby-restored, BG-exterior-night: sảnh đã sửa và mặt tiền ban đêm (10/11/2026, 3 ảnh, 0,45 USD)

Ảnh mẫu: nền đã chốt tạm (`v3/web/BG-lobby-ruined.jpg`, `v3/web/BG-exterior-dusk.jpg`) làm ảnh 1 để giữ bố cục; Nora đã chọn làm ảnh 2 để kéo về style bóng bẩy `merge-glossy-cartoon`; ảnh Hotel Legacy (`style-refs/.../hotel-legacy-2.jpg`, `refs/hotel-legacy-*.jpg`). Prompt nhấn mạnh style đã chốt (người dùng nhắc 10/11).

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `BG-lobby-restored.png` | Đúng bố cục sảnh đã chốt, sáng và bóng hơn hẳn bản đổ nát, gần style Hotel Legacy hơn: đèn chùm treo sáng, đèn bàn, lò sưởi cháy, cửa sổ thấy trăng, thảm đỏ viền vàng mới. Lỗi: sàn vẫn nứt, sofa tròn vẫn phủ vải, 1 ghế trắng, xe đẩy trống, biển RECEPTION bị đèn chùm che | Không dùng |
| `v2/BG-lobby-restored.png` | **Claude đánh giá đạt, nên chọn.** Đã sửa: sàn gỗ bóng phản chiếu đèn, hết vết nứt; sofa tròn bỏ vải lộ nhung đỏ; xe đẩy có vali + hộp mũ hồng. Còn sót: 1 ghế bành vẫn màu trắng kem; biển RECEPTION vẫn bị đèn chùm che chữ N (đọc "RECEPTIO") | **Đã chọn (11/11)** |
| `BG-exterior-night.png` | **Claude đánh giá đạt, nên chọn.** Cùng bố cục mặt tiền: biển HOTEL đủ chữ, có bóng đèn sáng; mọi cửa sổ sáng vàng có rèm; 3 bóng khách đêm sau rèm (quý bà đội mũ, người đội mũ chóp, mũ phù thủy); trăng tròn, sao, đèn lồng sân, cổng mở, hết biển SOLD; sương dưới đường. Màu tươi hơn bản hoàng hôn. Lỗi nhỏ: mái che cửa vẫn rách (brief là mái mới), dây leo còn rậm; chỗ cho logo phía trên khá hẹp (biển HOTEL chiếm giữa trời) | Chưa chọn |

## BG-exterior-dusk v4: theo bố cục Mansion Tale (11/11/2026, 2 ảnh, 0,30 USD)

Người dùng chọn mẫu Mansion Tale (`refs/mansion-tale-before-after.jpg`, đã cắt banner chữ thành `refs/mansion-tale-crop.jpg`) sau khi bản nhìn thẳng (v3) và 3 phác thảo isometric chưa ổn. Ảnh 1 = mẫu Mansion Tale (chỉ lấy góc máy và bố cục), ảnh 2–3 = Hotel Legacy (style), ảnh 4 = Nora (giữ độ tươi). Không có Nora trong nền (nhân vật đặt chồng lên khi làm playable).

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `v4/BG-exterior-dusk-a.png` | Đúng góc máy Mansion Tale: góc lối vào trên phải, cầu thang đá cong đôi, đài phun nước tượng dơi, ghế đổ, đèn cột, cổng sắt. Biển "H TEL" + chữ O rơi trên bậc thềm. Điểm yếu: zoom quá gần, chỉ thấy 2 tầng nên khó nhận ra khách sạn; 2 biển SOLD bị lặp | Chưa chọn |
| `v4/BG-exterior-dusk-b.png` | **Claude đánh giá đạt, nên chọn.** Thấy được nhiều khách sạn hơn: tháp tròn, 3 tầng cửa sổ vòm (vỡ, đóng ván, một ô sáng), mái có cửa sổ áp mái, biển "H TEL" + chữ O rơi trên bậc, mái che đỏ rách, cầu thang cong đôi ôm vườn, đài phun nước tượng dơi, ghế đá, đèn cột, vali + thùng, cổng sắt + 1 biển SOLD, trời chiều. Điểm yếu: tông vàng nâu mùa thu hơi đục, ít bóng hơn Hotel Legacy | Chưa chọn |
| `v4/BG-exterior-dusk-b2.png` | Bản b sửa theo yêu cầu người dùng (11/11, 0,15 USD): ô cửa sổ tầng 3 đang sáng đèn đã thành cửa tối, kính vỡ, không còn quầng sáng. Phần còn lại giữ nguyên | **Đã chọn (11/11)** |

## BG-exterior-night v4: mặt tiền ban đêm cho end card (11/11/2026, 1 ảnh, 0,15 USD)

Ảnh 1 = mặt tiền đã chọn `v4/BG-exterior-dusk-b2.png` (giữ bố cục), ảnh 2 = Nora (giữ độ tươi). Thay bản `BG-exterior-night.png` ngày 10/11 (bố cục cũ).

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `v4/BG-exterior-night.png` | **Claude đánh giá đạt.** Đúng bố cục mặt tiền đã chọn. Biển "HOTEL" đủ chữ, viền bóng đèn sáng; mọi cửa sổ sáng vàng có rèm; bóng khách đêm sau rèm (mũ phù thủy, người đội mũ, quý bà); mái che đỏ mới, đèn tường; cầu thang sạch có đèn lồng nhỏ trên lan can; đài phun nước chảy, tượng dơi; hàng rào xanh có hoa, đèn lồng dọc lối, đèn cột sáng; hết biển SOLD, hết thùng/vali; trăng tròn + sao góc trên trái, sương mỏng. Điểm nhỏ: cổng sắt vẫn khép hờ (brief là mở); khoảng trời trống cho logo khá nhỏ (trăng nằm ở đó) | **Đã chọn làm end card (11/11)** |

## ITEM-LGT: chuỗi ánh sáng 6 cấp (11/11/2026, 2 ảnh, 0,30 USD)

Ảnh mẫu: phao bơi đã chọn của demo Travel Town (`ads-clone-travel-town/art/v3/web/ITEM-float-a.jpg`) làm ảnh 1 để giữ cách vẽ item; `crops/ref-tt-items-beach.png`, `ref-tt-items-jungle.png`, `hotel-legacy-1.jpg`. Màu chủ đạo xanh teal (màu tường khách sạn) + đồng thau + lửa vàng, để nổi trên bàn gỗ sẫm ô kem. Tỉ lệ 3:2, lưới 3×2.

Chuỗi: mẩu nến trên đĩa → nến cao có quai → đèn dầu chụp kính → đèn bão → đèn tường 2 nhánh → đèn chùm pha lê.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `ITEM-LGT-a.png` | **Claude đánh giá đạt, nên chọn.** Cùng cách vẽ với phao bơi Travel Town (3D vẽ tay, bóng mềm, không viền). Xanh teal đậm khớp màu khách sạn, đồng thau ấm, lên cấp rõ. Nền kem trơn, dễ tách. Điểm yếu: đèn chùm cấp 6 dáng vòng tròn rộng và mảnh, chưa gọn vuông như các món khác; cấp 4 và 5 to gần bằng nhau | **Đã chọn (11/11)** |
| `ITEM-LGT-b.png` | Item tươi hơn (teal sáng ngả ngọc), đèn chùm cấp 6 gọn và sang hơn bản a. Lỗi: vẽ thêm nền ô vuông caro sau từng món (prompt dặn không có ô), khó tách nền; teal sáng hơi lệch màu tường khách sạn | Chưa chọn |

## ITEM-SRV: chuỗi phục vụ phòng 6 cấp (11/11/2026, 2 ảnh, 0,30 USD)

Ảnh mẫu: chuỗi ánh sáng đã chọn (`web/ITEM-LGT-a.jpg`) làm ảnh 1; `crops/ref-tt-items-beach.png`, `ref-tt-items-jungle.png`, `hotel-legacy-1.jpg`. Màu chủ đạo bạc + sứ trắng + đỏ rượu để khác hẳn chuỗi ánh sáng (teal).

Chuỗi: tách trà → tách có đĩa + thìa → ấm trà → khay trà bạc (ấm + 2 tách + khăn đỏ) → nắp chuông bạc + hoa hồng → xe đẩy phục vụ (khăn trắng, chuông bạc, ly vang, bình hoa hồng).

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `ITEM-SRV-a.png` | **Claude đánh giá đạt, nên chọn.** Cùng cách vẽ, ánh sáng, cỡ và nền với chuỗi ánh sáng; hai chuỗi đặt cạnh nhau phân biệt rõ màu. Tách có trà bên trong nên đọc ra món ăn uống ngay. Lên cấp rõ, cấp 6 có quầng vàng + lấp lánh. Điểm yếu: cấp 1 và 2 cùng là tách, khác nhau ít (thêm đĩa + thìa); xe đẩy cấp 6 hơi cao, bánh xe to | **Đã chọn (11/11)** |
| `ITEM-SRV-b.png` | Gần như giống a. Ấm trà nắp đỏ đậm màu hơn, xe đẩy gọn hơn. Tách rỗng (không có trà) nên cấp 1–2 trông nhạt hơn | Chưa chọn |

## Đợt cuối: đạo cụ, tấm lấp bàn, biểu cảm (11/11/2026, 4 ảnh, 0,60 USD)

Item dùng ảnh 1 = `web/ITEM-LGT-a.jpg`, ảnh 2 = `ITEM-SRV-a`. Biểu cảm dùng ảnh 1 = bản nhân vật đã chọn (Nora v2 a, Aldric v2 b). Mỗi asset 1 bản.

Tấm lấp bàn (`ITEM-FILLER`) là cấp 1–3 của 2 chuỗi phụ, chỉ để lấp bàn 7×7 cho đỡ đơn điệu. Màu chọn để không trùng 2 chuỗi chính (teal + đồng thau, sứ trắng + đỏ rượu): ghế **nhung tím mận + gỗ óc chó**, chìa khóa **đồng đỏ + thẻ cam san hô**.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `PROPS-a.png` | **Claude đánh giá đạt.** Cùng cách vẽ với 2 chuỗi đã chọn. Hộp đồ cũ (thành rương nắp vòm, mạng nhện, lấp lánh), xe đẩy bạc 2 tầng có chuông, khác hẳn xe đẩy cấp 6. Ô khóa là **ghế phủ vải trắng**, khớp chuỗi ghế. Danh thiếp đúng chữ "VICTOR CRANE / Real Estate", bản cũ có "1923". Đồng vàng có hình dơi. Điểm yếu: **đồng hồ chỉ khoảng 11:55, chưa đúng 12 giờ** (sửa bằng kim vẽ code hoặc 1 lần edit); ô khóa có một làn khói thừa ở góc trên trái | Chưa chọn |
| `ITEM-FILLER-a.png` | **Claude đánh giá đạt.** Ghế tím mận và chìa khóa đồng đỏ khác màu rõ với 2 chuỗi chính, lên cấp rõ: đôn → ghế tựa → ghế bành; 1 chìa → chìa có thẻ → chùm chìa. Dáng gọn, vừa ô. Điểm yếu: ghế bành có một làn khói thừa (giống hơi trà ở chuỗi phục vụ phòng), cần xóa khi cắt | Chưa chọn |
| `CH-nora-expr-a.png` | **Claude đánh giá đạt.** Giữ đúng gương mặt, tóc, khăn, áo len của Nora. 4 biểu cảm đọc ngay: thất thần (tóc rủ, mắt trống), quyết tâm (cười nhếch, kéo tay áo), bất ngờ (miệng chữ O, giơ tay), sững người (mặt tái, tay áp má, giọt mồ hôi). Điểm yếu: khung không đều (hàng trên cắt ngang ngực, bản quyết tâm lệch phải, mất tay trái) | Chưa chọn |
| `CH-aldric-expr-a.png` | **Claude đánh giá đạt, có lưu ý.** Giữ đúng gương mặt, mắt đỏ, tai nhọn, răng nanh, ghim dơi. Nâng ly vang và "suỵt, bí mật" rất rõ. Điểm yếu: **bản cúi chào gần như đứng thẳng** (tay đặt ngực + gậy), đọc ra là "chào" nhưng không phải cúi người; cổ áo choàng vẫn dựng cao giống bản b đã chọn (đã ghi cần hạ khi vẽ bản thật) | Chưa chọn |

### Sửa lỗi theo yêu cầu người dùng (11/11/2026, 3 ảnh, 0,45 USD)

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `v2/PROPS-a2.png` | **Claude đánh giá đạt, nên dùng thay `PROPS-a`.** Sửa từ `PROPS-a`: 2 kim đồng hồ chỉ thẳng XII, đã bỏ làn khói trên ô khóa. Các món khác giữ nguyên, kể cả chữ danh thiếp | Chưa chọn |
| `v2/CH-aldric-expr-b.png` | Sửa từ `CH-aldric-expr-a`: bản trái nghiêng đầu, tóc rủ, mắt ngước lên, nhưng thân vẫn gần thẳng. Cổ áo choàng **vẫn dựng cao** | Chưa chọn |
| `v2/CH-aldric-expr-c.png` | **Claude đánh giá nên chọn.** Như bản b, và **cổ áo choàng đã hạ** thành cổ lật nằm trên vai ở cả 3 tư thế, vẫn thấy lót đỏ. Bản trái thành **cúi đầu chào khiêm tốn**, không phải cúi gập người: model giữ dáng gốc dù prompt yêu cầu nghiêng 30 độ | Chưa chọn |

### Người dùng duyệt, dùng trong playable (11/11/2026)
Người dùng nhận bản Aldric c và cho ghép vào playable: `v2/CH-aldric-expr-c.png`, `v2/PROPS-a2.png`, `CH-nora-expr-a.png`, `ITEM-FILLER-a.png` đều **đã dùng trong [../playable/](../playable/README.md)**. `PROPS-a.png`, `v2/CH-aldric-expr-b.png`, `CH-aldric-expr-a.png` không dùng.

## CH-nora-sad: Nora buồn cho cảnh mở đầu (11/11/2026, 2 ảnh, 0,30 USD)
Người dùng thấy Nora ở hook (thất thần rồi chuyển sang cười quyết tâm) chưa đúng: phải buồn. Ảnh mẫu: `CH-nora-expr-a.png` (ảnh 1), Nora v2 a. Tỉ lệ 3:4, nền kem.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `CH-nora-sad-a.png` | **Claude đánh giá đạt, đã ghép vào playable.** Buồn rõ: lông mày chau, mắt ngấn lệ, một giọt nước mắt, môi trễ; cầm điện thoại nhìn xuống, khớp cảnh đọc tin nhắn của Victor. Đúng gương mặt, tóc, áo, khăn. Điểm yếu: vẽ tới hông (các biểu cảm khác tới ngực), mặt hơi trẻ hơn bảng biểu cảm | Chưa chọn |
| `CH-nora-sad-b.png` | Cười gượng, mắt ngấn lệ, tay nắm khăn, nhìn người xem. Đọc ra "buồn mà cố mạnh mẽ" hơn là buồn, kém hợp với hook | Chưa chọn |

## Mặt đồng hồ không kim (11/11/2026, 1 ảnh, 0,15 USD)
`v2/PROPS-a3-nohands.png`: sửa từ `v2/PROPS-a2.png`, bỏ 2 kim đồng hồ, giữ chốt giữa. Playable chỉ cắt lấy mặt đồng hồ (`clock-face`) và vẽ kim bằng CSS để quay từ 9 giờ tới 12 giờ. **Claude đánh giá đạt**: mặt số, khung, quầng tím giữ nguyên, không còn vết kim.

## Ô khóa hộp giấy (11/11/2026, 1 ảnh, 0,15 USD)
Người dùng thấy ô khóa hình ghế phủ vải mà mở ra lại thành chìa khóa hoặc món khác thì không hợp lý; đổi sang hộp giấy bám mạng nhện. `v2/PROPS-a4-lockbox.png`: sửa từ `v2/PROPS-a2.png`, thay ghế phủ vải (góc trên phải) bằng hộp giấy cũ dán băng keo, phủ mạng nhện. **Claude đánh giá đạt**: đọc rõ là hộp đóng kín, cùng cách vẽ; màu xám be hơi giống đá, nhưng băng keo và mạng nhện làm rõ là hộp giấy. Đã ghép vào playable (`lockbox`).

## Danh thiếp tên mới (12/11/2026, 1 ảnh, 0,15 USD)
Kiểm tra trùng ([../check-trung-2026-11-12.md](../check-trung-2026-11-12.md)) cho thấy tên Victor Crane đọc giống Victor Krane (phản diện phim *Lab Rats*) và gợi tới *Sleepy Hollow*; người dùng chốt tên mới **Victor Sterling**. Cắt phần danh thiếp từ `v2/PROPS-a2.png` thành `v2/src/cards-crop-from-PROPS-a2.png`, rồi gen sửa chỉ đổi chữ: `v2/src/cards-sterling-a.png`. **Claude đánh giá đạt:** cả 2 thẻ ghi đúng "VICTOR STERLING", giữ "Real Estate" và "1923"; giấy, vết ố, góc cong, cách vẽ giữ nguyên. Thẻ hơi to hơn bản cũ trong khung và tên dài hơn nên chữ sát mép phải hơn, vẫn đủ lề. Playable cắt sprite `cards` từ ảnh này (480 px, trước là 220 px, nên chữ nét hơn khi phóng to ở cảnh twist). Chữ "VICTOR CRANE" trong `PROPS-a.png`, `v2/PROPS-a2.png` và các mô tả cũ ở trên giữ nguyên vì là bản đã gen.

## Bỏ chữ lồng HL trên thảm sảnh (12/11/2026, 2 ảnh, 0,30 USD)
Chữ "HL" trên huy hiệu giữa thảm trùng chữ đầu của *Hotel Legacy* (ảnh sảnh lại sinh từ ảnh mẫu Hotel Legacy); người dùng chọn bỏ chữ, giữ huy hiệu trơn. Cách làm: cắt vùng huy hiệu 960x640 từ mỗi ảnh (`v3/src/medallion-crop-from-BG-lobby-ruined.png`, `v2/src/medallion-crop-from-BG-lobby-restored.png`), gen sửa chỉ xóa chữ (`*/src/medallion-noletters-*-a.png`), rồi chỉ ghép phần elip giữa huy hiệu (mép làm mờ, nằm trong viền vàng) vào ảnh gốc. Kết quả: `v3/BG-lobby-ruined-nomark.png`, `v2/BG-lobby-restored-nomark.png`; ngoài vùng elip, pixel giống hệt ảnh gốc. **Claude đánh giá đạt:** không còn chữ, không thấy mối nối; bản đổ nát giữ vết nứt và bụi, bản đã sửa giữ vệt nắng chéo. Playable dùng 2 ảnh này làm `bg-ruined`, `bg-restored`.

