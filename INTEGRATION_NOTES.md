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

### Cập nhật tiến trình giáo án chi tiết
- Hoạt động có chủ đích được triển khai theo từng bước của sườn chuyên môn đã nhận diện.
- Mỗi bước có: Hoạt động của cô; Hoạt động của trẻ; Câu hỏi mở; Dự kiến phản hồi; Tình huống/cách hỗ trợ; Minh chứng quan sát.
- Bài thử “Tìm hiểu về trường mầm non của bé” có tình huống thực tế “bạn mới đến trường”, nhiệm vụ khám phá nhóm nhỏ, thử thách hướng dẫn bạn mới và thay đổi điều kiện để trẻ giải quyết vấn đề/thích ứng.
- Không thay đổi mã/mục tiêu 388 và không thay đổi logic phân tầng 4 phẩm chất – 5 năng lực.

### Cập nhật kế hoạch giáo dục cả ngày
- Liên kết 9 thời điểm trong ngày theo một mạch trải nghiệm nhưng không ép mọi hoạt động lặp cùng chủ đề/đối tượng.
- Tăng tính cụ thể cho đón trẻ, thể dục sáng, ngoài trời, hoạt động góc và hoạt động chiều.
- Hoạt động chiều chỉ củng cố một nội dung cần thiết, không dạy lại nguyên hoạt động có chủ đích.
- Bổ sung lưu ý cân bằng động – tĩnh, trong lớp – ngoài trời và phương án theo thời tiết.
- Giữ nguyên dữ liệu mục tiêu 388, sườn hoạt động có chủ đích và logic phân tầng 4 phẩm chất – 5 năng lực.

### Cập nhật kế hoạch giáo dục tuần
- Kế hoạch tuần hiển thị theo bảng 5 ngày × 9 thời điểm trong ngày, thay cho các thẻ tóm tắt rời.
- Mỗi ngày có trọng tâm hoạt động có chủ đích, lĩnh vực và mục tiêu gợi ý từ bộ mục tiêu 5–6 tuổi đã nạp.
- Nút “Soạn chi tiết” chuyển ngày, chủ đề, nội dung, lĩnh vực, hoạt động và mục tiêu sang biểu mẫu Kế hoạch ngày.
- Mạch tuần đi từ khơi kinh nghiệm → mở rộng → vận dụng/tự nhận xét; không ép các ngày lặp cùng một đối tượng.
- Có lưu kế hoạch tuần trên thiết bị và in trực tiếp; chưa thay đổi logic mục tiêu 388, sườn giáo án và 4 phẩm chất – 5 năng lực.

### Cập nhật phân bổ mục tiêu toàn ngày và lĩnh vực
- Gợi ý mục tiêu 388 cho các thời điểm trong ngày, không chỉ Hoạt động có chủ đích; mỗi thời điểm lấy 1–3 mục tiêu phù hợp và giáo viên vẫn cần kiểm tra theo cơ hội thực tế.
- Bổ sung/chuẩn hóa lĩnh vực: Thể chất, Nhận thức, Ngôn ngữ, Tình cảm – Xã hội, Nghệ thuật – Âm nhạc, Nghệ thuật – Tạo hình; giữ Tìm hiểu môi trường xung quanh như lựa chọn tương thích.
- Âm nhạc/Tạo hình được ánh xạ về nhóm Nghệ thuật; Tình cảm – Xã hội ánh xạ về nhóm mục tiêu TX.
- Sửa xử lý ngày tuần theo ngày địa phương để tránh lùi một ngày do UTC.
- Làm sạch mã mục tiêu khi chuyển từ Kế hoạch tuần sang Kế hoạch ngày, tránh dạng NT 2.1. NT 2.1...

## Cập nhật giáo viên chủ động chọn kế hoạch tuần
- Trước khi soạn tuần, giáo viên chọn lĩnh vực và loại hoạt động cho từng ngày, đồng thời nhập tên đề tài riêng.
- App chỉ gợi ý chu kỳ: Nghệ thuật luân phiên Âm nhạc/Tạo hình; PTNN luân phiên Thơ → Kể chuyện → Làm quen chữ cái. Giáo viên có thể đổi bất kỳ ngày nào.
- Tên đề tài giáo viên nhập được dùng cùng loại hoạt động, lĩnh vực và chủ đề để gợi ý mục tiêu 388.
- Khi bấm “Soạn chi tiết”, dữ liệu đề tài + lĩnh vực + mục tiêu được chuyển sang kế hoạch ngày; loại hoạt động được giữ trong tên hoạt động để nhận diện đúng sườn chuyên môn khi tài liệu SƯỜN GA có sườn tương ứng.
- Không tự nhận là có sườn chuyên môn cho Âm nhạc/Tạo hình nếu tài liệu đã nạp chưa cung cấp sườn đó.

## Vá lỗi nhập tên đề tài kế hoạch tuần
- Tách dữ liệu giáo viên đang gõ (`lessonInputs`) khỏi dữ liệu dùng để sinh kế hoạch (`appliedLessonInputs`).
- Khi gõ tên đề tài, App chỉ cập nhật ô nhập; không chạy lại toàn bộ gợi ý mục tiêu 388 cho 5 ngày × các thời điểm trong ngày.
- Chỉ khi bấm **Soạn kế hoạch tuần** mới chốt dữ liệu đề tài và tính mục tiêu/kế hoạch.
- Mục đích: tránh giật, reload hoặc văng trang khi nhập tên đề tài, đồng thời giữ quyền chủ động của giáo viên.
