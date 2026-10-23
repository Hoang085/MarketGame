# Cài đặt agent market-analyst vào dự án CCGS

## 1. Chép file vào dự án

Giải nén và chép vào **gốc dự án game** (cùng cấp với thư mục `.claude/` của CCGS):

```
.claude/agents/market-analyst.md
.claude/skills/market-scan/SKILL.md
tools/game-market-tracker/
docs/market/
```

Không ghi đè file nào của CCGS: đây đều là file mới.

## 2. Cài công cụ thu thập dữ liệu

```bash
cd tools/game-market-tracker
npm install
npm run collect     # lần đầu, khoảng 5–10 phút
npm run report
```

Sau đó đặt lịch chạy `npm run collect && npm run report` mỗi ngày (xem README trong thư mục này). Nên thêm `tools/game-market-tracker/data/` vào `.gitignore`.

## 3. Bật trình duyệt để agent đọc AppMagic

1. Cài tiện ích Claude in Chrome trên Chrome hoặc Edge.
2. Mở trình duyệt, **đăng nhập AppMagic** bằng tài khoản của bạn.
3. Khởi động Claude Code bằng: `claude --chrome`
4. (Khuyến nghị) Lấy mẫu link AppMagic điền vào `config.json` → `links`, xem README.

Agent sẽ không bao giờ tự đăng nhập hay nhập mật khẩu. Nếu không bật trình duyệt, agent vẫn chạy được: nó sẽ đưa danh sách link để bạn tự mở và dán số liệu lại.

## 4. Sử dụng

```
/market-scan
/market-scan puzzle
/market-scan rpg br mx in
/market-scan com.abc.game
```

Hoặc nói chuyện bình thường: "Nhờ market-analyst đánh giá cơ hội của game nông trại ở Ấn Độ và Brazil."

Báo cáo được lưu tại `docs/market/`.

## Lưu ý

- Số AppMagic là **ước tính**, không phải số thật.
- Điều khoản sử dụng của AppMagic có thể hạn chế truy cập tự động. Agent được giới hạn ở mức xem tối đa 10 trang mỗi phiên như người dùng bình thường, nhưng bạn nên tự đọc điều khoản và chịu trách nhiệm với tài khoản của mình. Cách an toàn nhất là dùng API chính thức nếu bạn có gói hỗ trợ.
- Cần ít nhất 7 ngày dữ liệu để phần xu hướng có ý nghĩa.
