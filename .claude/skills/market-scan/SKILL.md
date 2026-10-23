---
name: market-scan
description: Quét thị trường game mobile đa quốc gia và đánh giá cơ hội cho một thể loại hoặc ý tưởng game, có kiểm chứng lượt tải/doanh thu trên AppMagic. Dùng khi người dùng gõ /market-scan, hoặc hỏi về cơ hội thị trường, đối thủ, xu hướng game mobile.
---

# /market-scan

Cách dùng:
- `/market-scan` : tổng quan xu hướng ở tất cả thị trường đang theo dõi
- `/market-scan puzzle` : đánh giá một thể loại
- `/market-scan puzzle br mx` : giới hạn thị trường
- `/market-scan com.abc.game` hoặc App Store ID : phân tích sâu một đối thủ

## Thực hiện

1. Đọc tham số người dùng đưa ra (thể loại, nước, hoặc mã game).
2. Chạy `cd tools/game-market-tracker && node src/query.js --status`. Nếu chưa có database, hướng dẫn người dùng chạy `npm run collect` rồi dừng.
3. Chạy `npm run report` để có báo cáo mới nhất.
4. Giao việc cho agent **market-analyst** với câu hỏi đã làm rõ, kèm đường dẫn báo cáo vừa tạo. Nhắc agent: nếu phiên đang có công cụ trình duyệt thì kiểm chứng tối đa 10 game trên AppMagic; nếu không, đưa danh sách link để người dùng tự mở.
5. Khi agent xong, trình bày cho người dùng: kết luận chính, đường dẫn file trong `docs/market/`, và bước tiếp theo.
