# Tích hợp 4 tài liệu chuyên môn

Bản này đã tích hợp dữ liệu cấu trúc từ 4 tài liệu giáo viên cung cấp:

1. MỤC TIÊU lớp lá 388.docx — 131 mục tiêu/mã đã chuẩn hóa cho 5–6 tuổi.
2. dự kien chu đề 2026- 2027 LÁ.doc — lịch chủ đề theo tuần năm học 2026–2027.
3. SƯỜN GA.docx — mapping sườn Khám phá/Toán, Hoạt động góc, Thơ/ca dao/đồng dao, Kể chuyện, Kể lại chuyện, Làm quen chữ cái, Tiết thể dục.
4. NGỌC TUAN 1 lá 13.doc — dùng tham khảo cấu trúc kế hoạch tuần/ngày, ngoài trời, sinh hoạt chiều, nêu gương và trả trẻ.

Các thay đổi chính:
- Soạn ngày tự gợi ý chủ đề theo ngày, có nguồn.
- Gợi ý mục tiêu thật từ bộ mục tiêu 5–6 tuổi và cho chọn bằng checkbox.
- Không dùng bộ mục tiêu 5–6 tuổi cho độ tuổi khác; có cảnh báo.
- Hoạt động học tự nhận diện sườn chuyên môn và hiển thị nguồn; nếu không nhận diện được thì đánh dấu AI đề xuất.
- Hoạt động góc theo đúng sườn 5 bước trong tài liệu.
- Thêm Kho tài liệu chuyên môn.
- Soạn kế hoạch tuần hoạt động được, bám lịch chủ đề và có nút mở chi tiết từng ngày.
- Kiểm tra kế hoạch hoạt động được, kiểm tra tuổi/chủ đề/mã mục tiêu/sườn/mạch/nguồn.
- Giữ localStorage và luồng hiện có.

Lưu ý kỹ thuật: môi trường chỉnh sửa ngoại tuyến không hoàn tất được npm install từ mạng, nhưng toàn bộ file TS/TSX đã được kiểm tra cú pháp bằng TypeScript transpiler và không phát hiện lỗi cú pháp.

## Cập nhật 4 phẩm chất – 5 năng lực
- Từ mục tiêu đã chọn, hệ thống phát triển thành 4 phẩm chất: Yêu thương, Tôn trọng, Trung thực, Trách nhiệm.
- 5 năng lực nền tảng: Giao tiếp, Hợp tác, Giải quyết vấn đề, Tự lực, Thích ứng.
- Không mặc định gắn cả 9: chỉ đánh dấu yếu tố phù hợp theo mục tiêu/nội dung/hoạt động.
- Mỗi yếu tố có biểu hiện mong đợi và cơ hội tổ chức cụ thể; phần Hoạt động có chủ đích phải hiện cách thực hiện.
- Trang Kiểm tra kế hoạch bổ sung kiểm tra việc có phẩm chất/năng lực và có cơ hội thực tế trong hoạt động.

### Cập nhật phân tầng 4 phẩm chất – 5 năng lực
- Không còn đánh dấu gần đủ 9 yếu tố theo từ khóa rộng.
- Ưu tiên bằng chứng trong mục tiêu gốc; bối cảnh hoạt động chỉ bổ trợ.
- Phân tầng: Trọng tâm / Phối hợp / Không trọng tâm.
- Tối đa 2 phẩm chất và 3 năng lực được đưa vào tiến trình; yếu tố thiếu căn cứ không tự gắn.
- Phần kết quả hiển thị rõ mức độ cạnh từng phẩm chất/năng lực.
