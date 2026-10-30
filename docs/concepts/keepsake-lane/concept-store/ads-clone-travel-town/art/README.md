# Art cho demo clone ads A (30/10/2026)

Danh sách asset: [../danh-sach-gen.md](../danh-sach-gen.md). Prompt: `tools/concept-gen/prompts-tt-clone-demo.json`.

Model `fal-ai/nano-banana-pro/edit`, 2K. Ảnh mẫu: `docs/market/style-refs/merge-glossy-cartoon/crops/ref-tt-items-beach.png`, `ref-tt-items-jungle.png`.

`web/*.jpg` là bản nén, cạnh dài 1100 px.

## ITEM-float: chuỗi phao bơi (2 bản, 0,30 USD)

Phao tay → phao tròn sọc → phao vịt → phao kỳ lân → thuyền chuối.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `ITEM-float-a.png` | Đạt style. Phao tay dính thành một khối, khó nhận ra là 2 chiếc; vịt mắt chấm đơn giản; kỳ lân có thêm cánh | Chưa chọn |
| `ITEM-float-b.png` | **Nên chọn.** Phao tay rõ 2 chiếc có quai; vịt và kỳ lân có mắt to, dễ thương hơn; cấp 5 có hào quang rõ | Chưa chọn |

Nhận xét chung so với item Travel Town:
- Đạt: dựng như mô hình 3D, không viền, chất nhựa phao bóng có đường hàn và van, khối mập tròn, ít chi tiết, nền sáng trơn dễ tách.
- Khác: bóng và độ thật cao hơn Travel Town một chút (Travel Town mềm hơn, hơi giống tranh vẽ). Khi đặt trên bàn chơi cần xem lại có bị lạc tông không.
- Cấp 3 (vịt) và cấp 5 (chuối) cùng màu vàng; nhìn nhỏ trên bàn vẫn phân biệt được nhờ hình dáng.

### So với art trong ads A (ảnh ghép: `web/compare-tt-vs-float-b.jpg`)

| | Travel Town | Bản b | Kết luận |
|---|---|---|---|
| Cách dựng | 3D vẽ tay: khối rõ nhưng mềm, hơi giống tranh | Render 3D sạch, sắc nét như icon CG | Giống hướng, nhưng bản b "máy" hơn |
| Độ bóng | Bóng rộng, mềm, không chói | Bóng nhỏ, gắt, tương phản cao | Cần giảm |
| Màu | Ấm, hài hòa với bàn cát (tím nhạt, hồng đào, cát, vàng kim) | Màu cơ bản rất tươi (đỏ, trắng, vàng chanh), ánh sáng trung tính | Cần ấm và dịu hơn |
| Hình khối trong ô | Gọn, gần vuông, lấp đầy ô | Kỳ lân và thuyền chuối dài, nằm ngang | Cần dáng gọn hơn |
| Chi tiết bề mặt | Có vân nhẹ (gân vỏ sò, hình cây dừa trên xu) | Mặt nhựa trơn, có đường hàn và van | Đạt |
| Viền | Không | Không | Đạt |

Đặt lên bàn cát của ads, bản b dễ bị nổi và chói hơn các item xung quanh.

## ITEM-float v2: gen lại (2 bản, 0,30 USD) trong `v2/`

Prompt sửa theo bảng trên: 3D vẽ tay, không phải render CG; ánh sáng ấm, bóng rộng và mềm; màu ấm hợp bàn cát; dáng gọn; gen trên nền màu cát. Prompt nằm ở mục `ITEM-float-v2` trong `tools/concept-gen/prompts-tt-clone-demo.json`. Ảnh so sánh: `v2/web/compare-tt-v1-v2.jpg`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `v2/ITEM-float-a.png` | Gần Travel Town hơn hẳn bản đầu. Mép có nét viền nâu mảnh, hơi giống tranh minh họa; thuyền chuối dựng gần đứng | Chưa chọn |
| `v2/ITEM-float-b.png` | **Nên chọn.** Mềm và giống cách dựng của Travel Town nhất, vịt và kỳ lân dễ thương, thuyền chuối có hào quang. Phao tay dính thành một khối, khó nhận ra là 2 chiếc | Chưa chọn |

So với Travel Town:
- Đạt: cách dựng mềm như vẽ tay, ánh sáng ấm, bóng rộng, hết cảm giác icon CG.
- Sửa quá tay: màu hơi đục, và cả chuỗi cam, vàng gần tông với bàn cát nên item bị chìm. Travel Town vẫn có màu nổi trên bàn (tím nhạt, hồng, vàng kim). Đã ghi vào style guide. Các chuỗi sau nên thêm vào prompt: ánh sáng ấm, bóng mềm và rộng, màu hơi dịu cho hợp bàn cát, dáng gọn gần vuông.

## ITEM-float v3: chỉnh màu (2 bản, 0,30 USD) trong `v3/`

Ảnh 1 là v2 bản b (giữ cách dựng), thêm 2 ảnh mẫu Travel Town. Chỉ đổi màu cho nổi trên bàn cát (phao tay xanh ngọc, phao tròn hồng san hô, kỳ lân bờm hồng tím xanh), phao tay tách rõ 2 chiếc. Prompt ở mục `ITEM-float-v3` trong `tools/concept-gen/prompts-tt-clone-demo.json`. Ảnh so sánh: `v3/web/compare-tt-v2-v3.jpg`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `v3/ITEM-float-a.png` | **Nên chọn.** Màu nổi rõ trên bàn cát, gần độ tươi của Travel Town; phao tay rõ 2 chiếc; kỳ lân có vành hồng nên tách nền tốt. Thuyền chuối lại dài và nằm ngang | **Đã chọn (30/10)**, làm mẫu cho các asset sau |
| `v3/ITEM-float-b.png` | Phao tay rõ nhất (có lỗ xỏ tay). Thuyền chuối mất tay cầm, trông như nải chuối thật chứ không phải phao | Chưa chọn |

Tổng chi phí chuỗi phao bơi: 6 ảnh, 0,90 USD.

## ITEM-fruit: chuỗi trái cây (1 bản, 0,15 USD)

Lát dưa hấu → nửa quả dưa hấu → trái dừa có ống hút → giỏ trái cây → xe kem trái cây. Ảnh 1 là phao bơi v3 a (đã chọn), thêm 2 ảnh mẫu Travel Town. Prompt ở mục `ITEM-fruit` trong `tools/concept-gen/prompts-tt-clone-demo.json`. Ảnh so sánh: `web/compare-tt-float-fruit.jpg`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `ITEM-fruit.png` | **Đạt.** Cùng cách vẽ, ánh sáng và cỡ với phao bơi; màu đỏ, xanh lá nổi trên bàn cát; dáng gọn vừa ô. Điểm yếu: giỏ mây và miệng trái dừa gần màu cát; xe kem nhiều chi tiết nhỏ (cột, lỗ thông gió) và tông hơi pastel so với phần còn lại | **Đã chọn (30/10)** |

## ITEM-misc: item phụ rải trên bàn (1 bản, 0,15 USD)

Ô dù, dép xỏ ngón, khăn tắm cuộn, con cua, chai kem chống nắng, kính râm tim. Ảnh 1 là phao bơi v3 a, thêm 2 ảnh mẫu Travel Town. Prompt ở mục `ITEM-misc` trong `tools/concept-gen/prompts-tt-clone-demo.json`. Ảnh so sánh cả 3 sheet item: `web/compare-tt-all-items.jpg`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `ITEM-misc.png` | **Đạt.** Cùng cách vẽ với 2 chuỗi trước; màu xanh ngọc, hồng, tím, đỏ nổi rõ trên bàn cát; dáng gọn. Điểm yếu: cán ô dù mảnh và gò cát dưới chân trùng màu bàn; con cua có mặt cười, trong khi item Travel Town không có mặt | **Đã chọn (30/10)** |

## CH-customers: 4 khách (2 bản, 0,30 USD)

Cô bé ôm ván lướt sóng, anh cứu hộ, ông cụ đi câu, bà bán kem. Ảnh mẫu: `crops/ref-tt-characters.png`, `crops/ref-tt1-faces.png` (nhân vật Travel Town), cộng phao bơi v3 a để lấy ánh sáng và độ tươi. Tỉ lệ 16:9. Prompt ở mục `CH-customers` trong `tools/concept-gen/prompts-tt-clone-demo.json`. Ảnh so sánh: `web/compare-tt-customers.jpg`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `CH-customers-a.png` | **Nên chọn cho demo.** 4 người đứng tách rời, cắt ra từng thẻ đơn hàng dễ. Đúng kiểu bán thực của Travel Town: mặt có khối, cười rộng, nhiều tuổi và màu da. Đổ bóng hơi phẳng, nét vẽ tay rõ hơn Travel Town | **Đã chọn (30/10)** |
| `CH-customers-b.png` | Khối và ánh sáng giống Travel Town hơn bản a. Nhưng 4 người chồng lên nhau (ván lướt sóng đè tay anh cứu hộ, bà bán kem sát ông cụ), cắt riêng từng người khó | Chưa chọn |

## ICON-res: icon tài nguyên (1 bản, 0,15 USD)

Tia sét năng lượng, đồng xu, ngọc trai. Ảnh mẫu: phao bơi v3 a, `crops/ref-tt-characters.png` (chỉ để lấy cỡ và độ đậm của icon trên thanh tài nguyên). Prompt ở mục `ICON-res` trong `tools/concept-gen/prompts-tt-clone-demo.json`. Ảnh so sánh: `web/compare-tt-icons.jpg`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `ICON-res.png` | **Đạt.** Cùng cách vẽ với item; dáng mập, đọc rõ ở cỡ nhỏ như icon Travel Town. Đồng xu dùng mặt trời cười thay cây dừa, ngọc trai trong vỏ sò hồng thay đá quý, nên không trùng thiết kế. Tia sét và đồng xu cùng tông vàng, nhưng khác dáng nên vẫn phân biệt được | **Đã chọn (30/10)** |

## BG-beach: nền trời, biển, hàng dừa (2 bản, 0,30 USD)

Ảnh mẫu: `docs/market/style-refs/merge-glossy-cartoon/travel-town-2.jpg` (chỉ lấy cách vẽ nền), phao bơi v3 a (ánh sáng, độ tươi). Tỉ lệ 9:16. Prompt ở mục `BG-beach` trong `tools/concept-gen/prompts-tt-clone-demo.json`. Ảnh so sánh: `web/compare-tt-bg.jpg`.

| File | Claude đánh giá | Người dùng |
|---|---|---|
| `BG-beach-a.png` | **Nên chọn.** Đường chân trời cao (khoảng 45%), nên phần biển vẫn lộ ra giữa khách và bàn chơi. Trời trống phía trên để đặt thanh tài nguyên và khách. Vẽ mềm, ít chi tiết, không tranh với item | **Đã chọn (30/10)** |
| `BG-beach-b.png` | Cùng chất lượng, nhiều dừa hơn hai bên. Chân trời thấp (khoảng 60%), bàn chơi sẽ che gần hết biển | Chưa chọn |

## Lưu ý: vài item trùng loại với Travel Town

Ảnh store khu bãi biển của Travel Town (`travel-town-2.jpg`) cũng có **phao tròn sọc**, **dép xỏ ngón** và **ngọc trai trong vỏ sò**. Màu và cách vẽ của mình khác (phao hồng san hô và kem, dép hồng, ngọc trai xanh ngọc trong vỏ hồng), nhưng cùng loại đồ. Với demo nội bộ thì chấp nhận được; nếu muốn khác hẳn thì đổi 3 món này.
