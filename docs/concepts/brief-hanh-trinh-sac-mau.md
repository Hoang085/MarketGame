# Brief: "Hành Trình Sắc Màu" (tên tạm)
Phiên bản: v1, 2026-10-23 | Giai đoạn: đã chốt luật và mockup 2D một màn, chưa có bản chơi được

> Ghi chú chi tiết đi kèm bộ slide [Hành Trình Sắc Màu – Đề xuất dự án](https://claude.ai/artifact/VHVDwMcxASHLscsHgpHMYr). Mockup: [khay-cat-mockup.html](khay-cat-mockup.html). Các bản nháp cũ (prototype băng chuyền khối màu, concept 2D, băng chuyền ảnh du lịch) đã bị xóa ngày 2026-10-23.

## 1. Tóm tắt game (để cả đội hiểu bối cảnh)
Game puzzle theo lượt. Người chơi trượt khay trên một bàn lưới, len qua các khối băng để tới dưới miệng buồng cát và hứng đầy một màu. Khay đầy tự bay vào một trong 5 chỗ đổ, rồi đổ cát vào những món đồ thủy tinh đang chờ trên băng chuyền. Món đồ đủ cát thì rời đi, băng chuyền nhích một nấc và đưa món mới vào.

Có hai lớp câu đố:
1. **Bàn trượt:** mở đường cho khay, chọn buồng cát nào hứng trước.
2. **Đơn hàng:** chọn màu để phục vụ món nào trước, giữ cho 5 chỗ đổ không bị khay dư chiếm hết.

Người chơi mục tiêu: người chơi puzzle casual ở thị trường quốc tế (Mỹ, Anh, Brazil là nơi puzzle có doanh thu). Đội 3–6 người, ngân sách UA thấp, nên mọi lựa chọn phải vừa sức sản xuất và dễ làm nhiều màn.

## 2. Các quyết định đã chốt
| Mục | Quyết định |
|---|---|
| Thể loại | Puzzle theo lượt, cụm "băng chuyền + màu" có thêm cát |
| Bố cục màn hình | Từ trên xuống: băng chuyền món đồ, 5 chỗ đổ, bàn trượt khay (bàn trượt nằm trong vùng ngón cái) |
| Bàn trượt | Lưới kiểu Klotski theo ảnh tham khảo nội bộ. Buồng cát cố định ở hàng trên, có miệng xả ở đáy |
| Khay | Khay trống, hứng màu gì thì thành màu đó. Cát chảy tới khi khay đầy dung tích |
| Khối băng | Chắn đường và trượt được như khay. Con số là số lượt còn lại trước khi tan |
| Chỗ đổ | 5 chỗ. Khay chỉ đổ khi món đang chờ cần đúng màu của nó. Không khớp thì khay nằm yên, không có animation. Khay còn dư cát thì ở lại chiếm chỗ |
| Animation đổ | Khay nhấc khỏi chỗ đổ, bay lên trên món đồ rồi nghiêng đổ xuống |
| Băng chuyền | 3 món chờ ở khu giao hàng. Chỉ chạy khi một món xong |
| Món đồ | Đồ thủy tinh, nhiều hình dáng (chai, lọ, đèn lồng, bình hồ lô...) |
| Món thường | Đổ màu nào trước cũng được, chỉ cần đủ số cát mỗi màu |
| Món đặc biệt | Viền vàng, phải đổ đúng thứ tự lớp từ đáy lên |
| Đồng hồ | Không có ở màn thường |
| Số khay của màn | Tùy level design: có màn khay rời bàn thì sinh khay mới, có màn số khay cố định |
| Góc nhìn và art | 2.5D: mô hình 3D, camera cố định nhìn từ trên, hơi nghiêng. Logic game vẫn là lưới 2D (đề xuất, chờ người dùng xác nhận lần cuối) |

## 3. Đề xuất chưa chốt, chờ thử trên prototype
| Mục | Đề xuất |
|---|---|
| Dung tích khay | Khay to (2 ô) 8 phần cát, khay nhỏ (1 ô) 4 phần |
| Khối băng | Mỗi lượt trượt bất kỳ làm mọi khối giảm 1 |
| Thắng | Hoàn thành đủ số món của màn |
| Thua | Cả 5 chỗ đổ có khay dư mà không món nào đang chờ cần các màu đó, hoặc bàn trượt không còn nước đi |
| Số màu mỗi món | Tối đa 3 |
| Món đặc biệt | Xuất hiện từ chương 2, khoảng 1 trong mỗi 4–5 món, thưởng nhiều xu hơn. Lớp kế tiếp có viền sáng, các lớp sau chỉ hiện vạch mờ |
| Vật phẩm hỗ trợ | Phá một khối băng, đổ bỏ một khay dư, thêm chỗ đổ thứ 6 trong một lượt |
| Gợi ý màu | Làm sáng màu còn thiếu trên nhãn món đồ, để người chơi biết vì sao khay không đổ |
| Nhịp dạy | Các màn đầu dạy từng lớp một: bàn trượt đơn giản và món một màu trước, sau đó mới thêm khối băng và món nhiều màu |

## 4. Đối thủ tham khảo
Chỉ tham khảo cảm giác và cách kiếm tiền. **Không sao chép bố cục, hình ảnh, tên gọi cụ thể.**

| Game | Học theo | Làm khác |
|---|---|---|
| Pixel Flow! (Loom Games) | Bàn chơi cố định, màn khó nhưng giải được; bộ khung tác nhân + sức chứa + ô chờ | Không chèn quảng cáo sau mỗi màn; không dùng kỹ năng tay "slinging" |
| Yarn Loop (Combo Games) | Chủ đề ấm áp, điểm review cao hơn nhóm | Không giấu màu bằng dấu "?"; không đặt tường độ khó ép trả tiền |
| Colony Flow! (ABI Games, VN) | Bằng chứng đội Việt làm được, top Grossing iOS cả 7 nước | Tránh quảng cáo lừa đảo; điểm review 2,4 là bài học |
| Sand Loop (Voodoo) | Cát + băng chuyền, không đồng hồ | Cát chỉ là vật liệu; khác biệt nằm ở bàn trượt và đơn hàng nhiều màu |
| Sand Blocks (Rollic) | Cảm giác cát chảy "đã mắt" | Không làm game xếp khối rơi |
| Sand Fill / Fill Sand: Block Puzzle (Stormborn) | **Trùng cơ chế gần nhất:** bàn trượt khối kiểu Klotski, mỗi khối hứng cát và hiện % đầy, ra mắt 08/2026 và đã vượt $200K. Học cách game hiển thị % đầy rõ ràng trên từng khối. Screenshot còn có một khối xám mang số đếm (9), có thể giống khối băng của mình, nên khối băng **không được tính là điểm khác biệt** | Khay đầy **không lấp vào một bức tranh pixel cố định** mà đổ vào **đơn hàng đồ thủy tinh trên băng chuyền**. Có thêm lớp quyết định: 5 chỗ đổ có thể bị khay dư chiếm, phải chọn món nào phục vụ trước, món đặc biệt đổ theo lớp. Hình ảnh 2.5D thủy tinh và cát dâng, không dùng tranh pixel. Cần chơi thử Sand Fill để kiểm tra lại điểm trùng |

Lời chê chung của người chơi (200 review Google Play Mỹ mỗi game): quảng cáo ép xem dù đã chọn bỏ qua phần thưởng, và các màn "không trả tiền thì không qua". Pixel Flow 3,4 sao, Yarn Loop 4,1 sao trên review mới nhất.

### Số liệu game cát mới ra (AppMagic, ghi ngày 2026-10-23)
| Game (studio) | Ra mắt | Doanh thu (ước tính) | Lượt tải (ước tính) | Hạng gần nhất (19–23/10) |
|---|---|---|---|---|
| **Jam Bus: Sandfall** (Nova Games Technology) | 17/09/2026 | > $1.000.000 | > 1.000.000 | Top Grossing iOS: BR 98 → 80, MX 100 → 83, GB 95–100 |
| **Sand Fill / Fill Sand: Block Puzzle** (Stormborn Inc.) | Google 05/08, iOS 16/08/2026 | > $200.000 | > 200.000 | Top Free iOS: GB 94 → 63, mới vào TR #96 |

- Nguồn: ảnh chụp ô tìm kiếm AppMagic do người dùng gửi, gộp Google + Apple. Đây là **ngưỡng dưới** ("> X"), không ghi kỳ và nước (nhiều khả năng là toàn cầu).
- Ý nghĩa: Jam Bus: Sandfall ra mắt chưa tới 6 tuần mà đã vượt $1 triệu, cho thấy **game cát kết hợp cơ chế "jam" mới ra vẫn kiếm được tiền nhanh**. Sand Fill nhỏ hơn nhiều, nhưng tỷ lệ doanh thu trên lượt tải của hai game tương đương nhau (khoảng $1 mỗi lượt tải, tính theo ngưỡng dưới).
- Số đã ghi vào bảng `market_estimates` của `tools/game-market-tracker`.

## 5. Hướng art: 2.5D
- **Camera cố định**, nhìn từ trên hơi nghiêng. Câu đố trượt cần đọc rõ ô nào trống, khối nào chắn.
- **Thủy tinh:** mô hình đơn giản, dùng chung một shader thủy tinh giả (viền sáng, độ trong), không khúc xạ thật.
- **Cát:** mô phỏng bằng shader hoặc lưới hạt giả. Mức cát trong bình là một tham số. Dòng cát chảy là hiệu ứng hạt ngắn. Không dùng vật lý thật, để chạy được trên Android cấu hình thấp.
- **Bàn trượt:** khối băng và khay có hình khối rõ, màu khay theo màu cát bên trong.
- **Nhân sự:** cần ít nhất một họa sĩ 3D làm mô hình đơn giản. Nếu chỉ có họa sĩ 2D, phương án dự phòng là dựng 3D rồi xuất ra ảnh 2D, nhưng mất hiệu ứng cát dâng mượt.

## 6. Chủ đề và nội dung
- Mỗi chương là một điểm đến. Chương Việt Nam lấy chất liệu nghề tranh cát và chai cát nhiều lớp ở Phan Thiết, Mũi Né.
- Dáng đồ thủy tinh theo vùng, ví dụ: bình hồ lô, lọ gốm Chăm, đèn lồng Hội An (Việt Nam); bình sake (Nhật); bình thủy tinh Murano (Ý).
- Dễ làm sự kiện theo mùa: Tết, Trung thu, Halloween.

## 7. Sản phẩm cần cho giai đoạn tiếp theo
1. Prototype chơi được 15–20 màn: đủ bàn trượt, 5 chỗ đổ, món thường và món đặc biệt.
2. Công cụ dựng màn và công cụ kiểm màn giải được mà không cần booster.
3. Style frame 2.5D: một màn hoàn chỉnh với thủy tinh, cát và bàn trượt.

## 8. Câu hỏi còn mở
- Tên game chính thức.
- Cách kiếm tiền: IAP + sự kiện hay quảng cáo nhẹ.
- Thị trường thử đầu tiên: [__]. Gợi ý: thử ở nơi chi phí thấp như Brazil, Thổ Nhĩ Kỳ; nhắm doanh thu ở Mỹ, Anh.
- Thời gian và ngân sách prototype: [__].
- Xác nhận lần cuối hướng art 2.5D.

## 9. Tài liệu liên quan
- [Xu hướng puzzle 22/10/2026](../market/puzzle-trends-2026-10-22.md)
- [Mổ xẻ Yarn Loop và Pixel Flow](../market/yarn-loop-pixel-flow-teardown-2026-10-22.md)
- [Thể loại sand block](../market/sand-block-2026-10-22.md)
- [Băng chuyền bản trơn so với bản có chủ đề](../market/conveyor-sort-plain-vs-themed-2026-10-20.md)

Lưu ý độ tin cậy: bảng xếp hạng có 5 ngày (19–23/10/2026); số AppMagic là ngưỡng dưới đọc từ ô tìm kiếm, không rõ kỳ.
