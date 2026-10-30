# Bloom Corner: chốt style theo Travel Town (bản nháp 30/10/2026)

Mục tiêu: Bloom Corner trông **gần Travel Town nhất có thể**: gọn, 3D, cute, chất liệu như thật. Chỉ học cách vẽ; nhân vật, item và bố cục phải là của mình.

Ảnh mẫu (cắt cận từ ảnh store):
- Item: `docs/market/style-refs/merge-glossy-cartoon/crops/ref-tt-items-beach.png`, `ref-tt-items-jungle.png`
- Nhân vật + thanh tài nguyên: `crops/ref-tt-characters.png`
- Màn hình đầy đủ: `docs/market/style-refs/merge-glossy-cartoon/travel-town-1.jpg`, `travel-town-2.jpg`

Travel Town (Moon Active, ra 2021): Grossing iOS GB hạng 7–10, AppMagic ước tính trên 10 triệu USD (xem `docs/market/style-refs/styles.json`).

---

## 1. Tinh thần chung

**Mô hình 3D thu nhỏ như đồ chơi, chụp dưới ánh sáng studio mềm.** Không phải tranh vẽ có viền, cũng không phải ảnh thật. Mọi thứ mập, tròn, bóng vừa phải, màu tươi.

## 2. Item merge (quan trọng nhất)

| Yếu tố | Chốt |
|---|---|
| Cách dựng | Như mô hình 3D **vẽ tay** (không phải render CG): có khối, mặt quay về phía đèn sáng, mặt quay đi tối dần, góc khuất có bóng tối mềm |
| Viền | **Không có viền.** Mép chỉ tối hơn một chút, cùng màu với item |
| Ánh sáng | Một nguồn sáng mềm, **ấm** (nắng vàng nhẹ), từ trên bên trái, giống nhau cho mọi item. Vệt bóng **rộng và mềm**, không có điểm sáng nhỏ gắt |
| Chất liệu | **Mỗi vật liệu một kiểu bề mặt:** cánh hoa mịn như nhung, lá hơi bóng, giấy kraft mờ, ruy băng satin bóng, gốm men sáng, mây đan có sợi, kim loại phản chiếu |
| Tỉ lệ | Mập, tròn, ngắn hơn thật: bông hoa to, cành ngắn và dày, góc cạnh bo tròn |
| Dáng trong ô | **Gọn, gần vuông**, lấp đầy ô vuông. Món dài (thuyền, kỳ lân) phải thu gọn, cong lại hoặc nhìn chéo |
| Cảm giác chung | **3D vẽ tay**, mềm, hơi giống tranh; không phải render CG sạch kiểu icon sản phẩm |
| Chi tiết | Ít, khối lớn. Không hoa văn nhỏ, không lấp lánh thừa. Lấp lánh và hào quang chỉ dành cho cấp cao nhất |
| Màu | Tươi nhưng **ấm và hài hòa với màu bàn chơi**, không dùng màu cơ bản gắt (đỏ tươi, trắng tinh, vàng chanh), không pastel. **Vẫn phải nổi trên bàn:** đừng để cả chuỗi cùng tông với màu bàn (lỗi bản gen lại 30/10: phao cam, vàng trên bàn cát bị chìm). **Mỗi chuỗi một màu chủ đạo** để nhìn lướt là nhận ra |
| Cỡ trong ô | Item chiếm 80–90% ô |
| Góc nhìn | Hơi nhìn từ trên xuống (3/4), giống nhau cho mọi item |
| Bóng đổ | Một vệt bóng mềm nhỏ dưới chân item |
| Cách lên cấp | **Cùng một món to dần hoặc nhiều dần** (1 bông, 3 bông, bó nhỏ, bó to...), không đổi sang món khác hẳn ở mỗi cấp |

**Đề xuất màu chủ đạo cho từng chuỗi** (cần chốt):

| Chuỗi | Màu chủ đạo | Lý do |
|---|---|---|
| Hoa | Đỏ hồng, xanh lá | Màu nhận diện của Bloom Corner |
| Thời trang | Tím hoặc xanh dương | Tách hẳn khỏi hoa, tránh mọi thứ đều hồng |
| Café, bánh | Nâu caramel, cam | Gợi cảm giác "ngon" |
| Nguồn sinh item (generator) | Vàng hoặc gỗ | Dễ tìm trên bàn chơi |

## 3. Nhân vật

| Yếu tố | Chốt |
|---|---|
| Kiểu | Cartoon bán thực: tỉ lệ người gần thật, đầu hơi to, **không kiểu chibi hay mắt to kiểu anime** |
| Mặt | Có xương mặt rõ (gò má, cằm, mũi có khối), biểu cảm mạnh, cười rộng, mắt có ánh sáng phản chiếu |
| Đổ bóng | Như 3D vẽ lại: da mịn, tóc thành từng lọn có khối và bóng, không viền |
| Đa dạng | Nhiều tuổi, nhiều dáng người, nhiều màu da; người lớn tuổi, mập, trẻ con đều đẹp và có duyên |
| Trang phục | Đúng vai và bối cảnh (Travel Town: đồ đi rừng), chi tiết vải và phụ kiện thật |
| Khung hình | Nửa người, tư thế có cử chỉ (cầm ống nhòm, giơ tay), không đứng thẳng |

Clara v2 (bản c) đang nghiêng về kiểu mắt to dễ thương. Theo Travel Town thì cần mặt thật hơn và có tuổi hơn.

## 4. Bàn chơi và UI

| Yếu tố | Chốt |
|---|---|
| Bàn chơi | Ô vuông caro hai tông **màu đục, nhạt** (Travel Town: xanh rêu ở rừng, nâu cát ở biển), để item tươi nổi lên |
| Màu bàn theo khu | Đổi theo khu vực (Bloom Corner: gỗ sáng ở tiệm hoa, kem ở quán café, ...) |
| Thanh tài nguyên | Thanh bo tròn màu kem, icon 3D to (tia sét, xu, đá quý) đè một nửa lên thanh |
| Thẻ đơn hàng | Thẻ trắng bo góc, chân dung nhân vật đứng phía trên thẻ, phần thưởng ở góc |
| Chữ | Chữ trắng có viền, font tròn đậm |

## 5. Nền

| Yếu tố | Chốt |
|---|---|
| Kiểu | Vẽ tay mềm, **mờ và ít chi tiết hơn item và nhân vật**, để không tranh chú ý |
| Màu | Trời xanh, ánh sáng ban ngày ấm |
| Vai trò | Chỉ là phông phía sau; bàn chơi chiếm gần hết màn hình |

## 6. Không làm

- Không viền nâu kiểu sticker (lỗi của bản 27/10)
- Không tông kem và pastel cho mọi thứ (lỗi của bản 28/10)
- Không nhiều chi tiết nhỏ, nhiều lấp lánh ở item cấp thấp
- Không render CG sạch: bóng gắt, tương phản cao, màu cơ bản tươi, ánh sáng lạnh (lỗi của chuỗi phao bơi bản đầu, 30/10)
- Không để item dài nằm ngang tràn ô
- Không chép item, nhân vật, logo hay bố cục của Travel Town

## 7. Khác gì so với bản v2 (28/10)

| | v2 hiện tại | Theo style này |
|---|---|---|
| Item | Tranh vẽ, phẳng, pastel, mỗi cấp một món khác | Như mô hình 3D, chất liệu thật, màu tươi, cùng món to dần |
| Nhân vật | Mắt to dễ thương | Bán thực, mặt có khối, biểu cảm mạnh |
| Nền | Pastel hồng kem, nhiều đồ | Mờ, ít chi tiết, làm phông cho bàn chơi |

## 8. Cần chốt

1. Đổi style của Bloom Corner từ "glossy cartoon chung" sang **"theo sát Travel Town"**?
2. Màu chủ đạo cho từng chuỗi (bảng ở mục 2).
3. Nhân vật theo kiểu bán thực của Travel Town, hay giữ kiểu dễ thương của Clara v2?
4. Lên cấp theo kiểu "cùng món to dần": áp dụng cho mọi chuỗi?
5. Rủi ro: nhìn giống Travel Town thì creative quảng cáo khó nổi bật. Cần một điểm riêng (bảng màu, dáng nhân vật hoặc chủ đề hoa) để người chơi nhận ra Bloom Corner.
