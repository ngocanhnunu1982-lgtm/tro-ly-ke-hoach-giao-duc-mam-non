import type { AgeGroup } from '@/types';

export interface CurriculumGoal { code: string; domain: string; goal: string; content: string; activities: string; ageGroup: AgeGroup; sourceDocument: string; }

export interface ThemeScheduleItem { mainTheme: string; subTheme: string; startDate: string; endDate: string; schoolYear: string; ageGroup: AgeGroup; sourceDocument: string; }

export interface LessonFramework { id: string; activityType: string; keywords: string[]; title: string; steps: string[]; sourceDocument: string; }

export const GOAL_SOURCE = 'MỤC TIÊU lớp lá 388.docx';
export const THEME_SOURCE = 'dự kien chu đề 2026- 2027 LÁ.doc';
export const FRAMEWORK_SOURCE = 'SƯỜN GA.docx';
export const SAMPLE_SOURCE = 'NGỌC TUAN 1  lá 13.doc';

export const CURRICULUM_GOALS: CurriculumGoal[] = [
  {
    "code": "TC 1.1",
    "domain": "Thể chất",
    "goal": "TC 1.1. Trẻ chủ động, hào hứng tham gia các hoạt động thể chất hằng ngày.",
    "content": "- Trẻ biết lợi ích của hoạt động thể chất đối với sức khỏe. | - Chủ động tham gia các hoạt động vận động, tích cực thực hiện các bài tập, trò chơi vận động phù hợp. | - Lựa chọn và tham gia hoạt động vận động theo khả năng, sở thích; duy trì hứng thú và cố gắng hoàn thành nhiệm vụ vận động.",
    "activities": "Thể dục sáng, Hoạt động học, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 1.2",
    "domain": "Thể chất",
    "goal": "TC 1.2. Trẻ kiên trì hoàn thành bài tập vận động, không bỏ cuộc giữa chừng.",
    "content": "- Trẻ biết yêu cầu, trình tự và cách thực hiện bài tập vận động. |  - Biết một số khó khăn có thể gặp khi thực hiện và hiểu rằng cần cố gắng, kiên trì để hoàn thành nhiệm vụ.  | - Duy trì vận động đến khi hoàn thành bài tập; biết cố gắng thực hiện lại khi chưa thành công, điều chỉnh cách thực hiện hoặc nghỉ ngắn rồi tiếp tục.",
    "activities": "Hoạt động học, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 1.3",
    "domain": "Thể chất",
    "goal": "TC 1.3. Trẻ chủ động phối hợp với bạn, nhóm bạn trong quá trình hoạt động.",
    "content": "- Trẻ cùng bạn tham gia hoạt động chung; biết trao đổi, thống nhất cách thực hiện nhiệm vụ. | - Biêt phân công và thực hiện phần việc của mình | - Chờ đợi, chia sẻ đồ dùng, hỗ trợ bạn khi cần, phối hợp với bạn để hoàn thành nhiệm vụ chung của nhóm.",
    "activities": "Hoạt động ngoài trời, Hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 1.4",
    "domain": "Thể chất",
    "goal": "TC 1.4. Trẻ tự tin tham gia các bài tập vận động có độ khó tăng dần.",
    "content": "- Trẻ biết lựa chọn và tham gia các bài tập, trò chơi vận động có mức độ từ dễ đến khó. | - Tự tin tham gia các bài tập, cố gắng hoàn thành bài tập.",
    "activities": "Hoạt động học, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 1.5",
    "domain": "Thể chất",
    "goal": "TC 1.5. Trẻ chủ động tìm kiếm và thử nghiệm các cách khác nhau để thực hiện nhiệm vụ vận động khi có nhiều cách thực hiện hoặc cần điều chỉnh cách chơi.",
    "content": "-Trẻ biết một nhiệm vụ vận động có thể thực hiện bằng nhiều cách khác nhau. | - Quan sát, lựa chọn cách thực hiện phù hợp với khả năng, điều kiện và yêu cầu của nhiệm vụ. | - Thực hiện nhiệm vụ vận động bằng nhiều cách, thay đổi tư thế, hướng di chuyển, tốc độ, lực hoặc cách phối hợp vận động khi cách thực hiện ban đầu chưa phù hợp.",
    "activities": "Hoạt động học, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 2.1",
    "domain": "Thể chất",
    "goal": "TC 2.1. Trẻ chủ động thực hiện đáp ứng yêu cầu hoạt động thể chất, sinh hoạt khi thay đổi thời gian hoặc địa điểm trong các hoạt động ở lớp, sân trường, khu vui chơi hoặc khi lịch sinh hoạt thay đổi.",
    "content": "-Trẻ biết thời gian, địa điểm và một số quy định cần thực hiện khi tham gia hoạt động thể chất, sinh hoạt | - Thực hiện các yêu cầu của hoạt động thể chất và sinh hoạt khi thay đổi thời gian, địa điểm. | - Biết chuyển đổi hoạt động theo hiệu lệnh, di chuyển đến khu vực mới, sử dụng đồ dùng – dụng cụ phù hợp và điều chỉnh cách thực hiện theo điều kiện mới.",
    "activities": "Sinh hoạt hằng ngày, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 2.2",
    "domain": "Thể chất",
    "goal": "TC 2.2. Trẻ hào hứng, tự tin tham gia vào các hoạt động thể chất với nhóm bạn chơi mới, môi trường không gian mới.",
    "content": "- Trẻ biết một số quy định, cách tham gia và phối hợp khi chơi cùng nhóm bạn mới. | - Chủ động làm quen, trao đổi và phối hợp với bạn mới trong các hoạt động thể chất. | - Thực hiện các vận động theo hướng dẫn, mạnh dạn tham gia và biết điều chỉnh cách vận động phù hợp với không gian mới.",
    "activities": "Hoạt động ngoài trời, Hoạt động tập thể",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 3.1",
    "domain": "Thể chất",
    "goal": "TC 3.1. Trẻ chủ động thực hiện linh hoạt các vận động đi, chạy, nhảy; điều chỉnh tốc độ, kiểm soát hướng, nhịp độ, duy trì vận động phù hợp và giữ thăng bằng khi tham gia các bài tập, đường vận động và địa hình khác nhau.",
    "content": "- Đi trên dây ( dây đặt trên sàn) | - Đi lên xuống trên ván dốc.( dài 2m, rộng 0,3m) một đầu kê cao 0,3m. | - Đi nối bàn chân tiến lùi  | - Đi bằng mép ngoài bàn chân, đi khụy gối. | - Đi ngang bước dồn trên ghế thể dục. | - Đi, chạy thay đổi tốc độ, hướng dích dắc theo hiệu lệnh. | - Chạy chậm khoảng 100-120m. | - Chạy 18m trong khoảng 10 giây. | - Chạy liên tục 150m liên tục không hạn chế thời gian. | - Nhảy lò cò 5m | - Nhảy lò cò được ít nhất 5 bước liên tục đổi chân theo yêu cầu.",
    "activities": "Hoạt động học, Thể dục sáng, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 3.2",
    "domain": "Thể chất",
    "goal": "TC3.2: Trẻ chủ động phối hợp các vận động đập và bắt bóng bằng hai tay, ném và bắt bóng với người khác, ném bóng trúng đích, đá bóng đang lăn, bật, bò, trườn, trèo lên và xuống mô hình trong các bài tập và trò chơi vận động.",
    "content": "| -Biết cách thực hiện và phối hợp các vận động: đập – bắt bóng, ném – bắt bóng, ném trúng đích, đá bóng, bật, bò, trườn, trèo. | - Thực hành ném bóng trúng đích, đá bóng đang lăn.  | - Thực hành bật, bò, trườn, trèo lên – xuống mô hình.  | -  Phối hợp các vận động trong bài tập liên hoàn và trò chơi vận động.  | -  Điều chỉnh lực, hướng và cách thực hiện để hoàn thành vận động. |",
    "activities": "Hoạt động học, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 3.3",
    "domain": "Thể chất",
    "goal": "TC3.3: Trẻ biết thực hiện  các vận động tại chỗ và giữ thăng bằng tĩnh: đứng trên 1 chân trong tối thiểu 10 giây, xoay tròn tại chỗ và giữ thăng bằng khi dừng lại",
    "content": "- Trẻ biết  cách thực hiện một số vận động tại chỗ, tư thế đứng trên một chân, xoay tròn tại chỗ và cách giữ thăng bằng khi dừng lại.  | - Trẻ biết  đứng thăng bằng trên một chân tối thiểu 10 giây; xoay tròn tại chỗ theo một hướng và dừng lại đúng tư thế. | - Điều chỉnh tư thế, trọng tâm và phối hợp tay – chân để duy trì thăng bằng.",
    "activities": "Thể dục sáng, Hoạt động học",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 3.4",
    "domain": "Thể chất",
    "goal": "TC3.4: Trẻ chủ động thực hiện liền mạch, nhịp nhàng chuỗi 3–4 vận động liên tiếp trong bài tập tổng hợp, đường vận động và trò chơi có chuỗi vận động.",
    "content": "- Trẻ biết tên, trình tự và cách thực hiện một số vận động cơ bản. | - Biết phối hợp từ 3–4 vận động liên tiếp theo yêu cầu, giữ nhịp độ và đảm bảo an toàn khi vận động.  | - Thực hiện liên tục, nhịp nhàng chuỗi 3–4 vận động như đi, chạy, bò, trườn, trèo, bật, nhảy, ném, bắt… theo trình tự, chuyển đổi từ vận động này sang vận động khác phù hợp.",
    "activities": "Hoạt động học, Hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 3.5",
    "domain": "Thể chất",
    "goal": "TC3.5: Trẻ chủ động thực hiện khéo léo các vận động thô cần thiết trong sinh hoạt hằng ngày như đi, chạy, mang, kéo, đẩy, bê, leo, xuống hoặc di chuyển đồ dùng an toàn.",
    "content": "- Trẻ biết các vận động thô cần thiết trong sinh hoạt hằng ngày như đi, chạy, mang, kéo, đẩy, bê, leo, xuống và di chuyển đồ dùng; biết cách thực hiện phù hợp, đúng tư thế và đảm bảo an toàn. | - Thực hiện đi, chạy, mang, kéo, đẩy, bê, leo, xuống và di chuyển đồ dùng với sự phối hợp của các bộ phận cơ thể. | - Điều chỉnh lực và tốc độ khi thực hiện; giữ thăng bằng và di chuyển an toàn.",
    "activities": "Sinh hoạt hằng ngày, Hoạt động lao động",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 4.1",
    "domain": "Thể chất",
    "goal": "TC4.1: Trẻ chủ động thao tác, xếp, ghép, nặn, gắn đính, đan tết, cắt đường bao thẳng và cong, vẽ với khả năng kiểm soát và phối hợp tay–mắt trong hoạt động tạo hình, xây dựng và thao tác với vật liệu đa dạng.",
    "content": "- Trẻ chủ động lựa chọn và sử dụng các đồ vật, vật liệu phù hợp với nhiệm vụ.  | - Trẻ biết phối hợp, lắp ghép, sắp xếp và biến đổi các vật liệu để tạo sản phẩm.  | - Linh hoạt thử nghiệm nhiều cách thao tác với đồ vật, vật liệu để hoàn thành nhiệm vụ.",
    "activities": "Hoạt động học, Hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 4.2",
    "domain": "Thể chất",
    "goal": "TC 4.2: Trẻ thực hiện thành thạo các hoạt động trong sinh hoạt, vui chơi và học tập có yêu cầu sự khéo léo của bàn tay, ngón tay, chủ động phối hợp các ngón tay linh hoạt, thực hiện chính xác và độc lập, không cần người lớn hỗ trợ.",
    "content": "- Trẻ thực hiện khéo léo các thao tác cầm, nắm, xoay, gấp, xé, cắt, dán.  | - Phối hợp linh hoạt các ngón tay khi thực hiện nhiệm vụ tạo hình và thao tác với đồ vật.  | - Sử dụng các dụng cụ phù hợp để hoàn thành nhiệm vụ cần sự khéo léo của bàn tay, ngón tay.",
    "activities": "Hoạt động góc, Sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 5.1",
    "domain": "Thể chất",
    "goal": "TC5.1: Trẻ nhận biết và phân biệt 4 nhóm chất dinh dưỡng, thực phẩm có lợi và có hại, nêu được một số biểu hiện và lợi ích của việc ăn uống hợp lý trong các tình huống ăn uống và lựa chọn thực phẩm, chủ động thực hiện và không cần người lớn hỗ trợ.",
    "content": "- Nhận biết và phân loại các thực phẩm  thông thường theo 4 nhóm:  | + Các loại thực phẩm giàu chất đạm | + Các loại thực phẩm giàu chất béo. | + Các loại thực phẩm giàu chất tinh bột. | + Các loại thực phẩm giàu vitamin và muối khoáng. | - Phân biệt được thực phẩm có lợi và không có lợi cho sức khỏe.  | - Lựa chọn thực phẩm và thực hiện thói quen ăn uống hợp lý, có lợi cho sức khỏe.",
    "activities": "Hoạt động học, Giờ ăn",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 5.2",
    "domain": "Thể chất",
    "goal": "TC 5.2: Trẻ chủ động thực hiện thuần thục các hành vi ăn uống văn minh như mời ăn, không đùa nghịch  trong các bữa ăn và hoạt động thực hành kỹ năng tự phục vụ.",
    "content": "- Trẻ thực hiện đúng các hành vi văn minh (Mời cô, mời bạn khi ăn và ăn từ tốn. Tự ăn, uống. Không đùa nghich, không làm đổ vãi thức ăn..)trước, trong và sau khi ăn.  | - Trẻ chủ động sử dụng đồ dùng ăn uống đúng cách, gọn gàng, lịch sự.  | - Trẻ biết giữ vệ sinh, trật tự và có ý thức trong giờ ăn.",
    "activities": "Giờ ăn, Sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 5.3",
    "domain": "Thể chất",
    "goal": "TC 5.3: Trẻ chủ động lựa chọn và ăn đa dạng thực phẩm, hạn chế bánh kẹo và nước ngọt trong bữa ăn, hoạt động đóng vai cửa hàng và các tình huống lựa chọn thực phẩm.",
    "content": "-  Trẻ ăn đa dạng các nhóm thực phẩm phù hợp với nhu cầu cơ thể.  | -  Lựa chọn thực phẩm có lợi cho sức khỏe.  | - Trẻ biết hạn chế các thực phẩm không có lợi cho sức khỏe.",
    "activities": "Giờ ăn, Trò chuyện sáng",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 5.4",
    "domain": "Thể chất",
    "goal": "TC 5.4: Trẻ tự giác tự thực hiện các món ăn, đồ uống đơn giản như trộn hoa quả, pha nước , bóc trứng và thu dọn sau hoạt động trải nghiệm chế biến.",
    "content": "- Trẻ tự thực hiện một số món ăn, đồ uống đơn giản (trộn hoa quả, pha nước , bóc trứng)  với sự hướng dẫn của người lớn.  | - Sử dụng dụng cụ phù hợp, an toàn khi chế biến món ăn, đồ uống.  | - Chủ động thu dọn, vệ sinh khu vực và dụng cụ sau khi hoạt động.",
    "activities": "Hoạt động trải nghiệm, Hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 5.5",
    "domain": "Thể chất",
    "goal": "TC 5.5: Trẻ chủ động nói rõ với người lớn về thực phẩm hoặc món ăn mình bị dị ứng trước khi ăn trong các bữa ăn, hoạt động trải nghiệm và tình huống được mời ăn.",
    "content": "-  Trẻ biết nói tên một số món ăn, thực phẩm mình không được ăn.  | -  Chủ động thông báo cho cô giáo, cha mẹ khi được hỏi hoặc khi chuẩn bị ăn.  | -  Từ chối món ăn không phù hợp và tìm sự hỗ trợ của người lớn.",
    "activities": "Giờ ăn, Trò chuyện sáng",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 6.1",
    "domain": "Thể chất",
    "goal": "TC 6.1: Trẻ chủ động thực hiện thuần thục các hành vi vệ sinh cá nhân hằng ngày trước khi ăn, sau khi đi vệ sinh, sau hoạt động ngoài trời và trong sinh hoạt hằng ngày.",
    "content": "- Trẻ chủ động thực hiện vệ sinh cá nhân đúng thời điểm và đúng cách.  | - Thuần thục các thao tác rửa tay, lau mặt, đánh răng, sử dụng khăn và đồ dùng cá nhân.  | - Giữ vệ sinh cơ thể, quần áo và đồ dùng cá nhân sạch sẽ.",
    "activities": "Sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 6.2",
    "domain": "Thể chất",
    "goal": "TC 6.2: Trẻ chủ động giải thích mối quan hệ giữa luyện tập, vệ sinh, phòng bệnh với sức khỏe và thực hiện hành vi chăm sóc sức khỏe trong sinh hoạt hằng ngày, hoạt động khám phá sức khỏe và các tình huống phòng bệnh.",
    "content": "- Tập luyện một số thói quen tốt về giữ gìn sức khỏe. | - Ăn các loại thức ăn đã được nấu chín. | - Nhận biết sự liên quan giữa ăn uống với bệnh tật (ỉa chảy, sâu răng, suy dinh dưỡng, béo phì...) | - Giữ gìn vệ sinh thân thể, vệ sinh môi trường đối với sức khỏe con người. | - Lựa chọn và sử dụng trang phục phù hợp thời tiết. | - Ra nắng đội mũ; đi tất, mặc áo ấm khi trời lạnh. |",
    "activities": "Hoạt động học, Sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 6.3",
    "domain": "Thể chất",
    "goal": "TC 6.3: Trẻ nhận biết được một số biểu hiện thường gặp khi bị bệnh và thực hiện các quy tắc phòng dịch, bệnh đã được hướng dẫn trong sinh hoạt hằng ngày, chủ động và tương đối độc lập, không cần người lớn nhắc nhở thường xuyên. |",
    "content": "- Trẻ nhận biết một số biểu hiện thường gặp khi cơ thể không khỏe.  | - Thực hiện các quy tắc vệ sinh và phòng bệnh phù hợp.  | - Củ động báo cho người lớn khi cảm thấy không khỏe và thực hiện các hướng dẫn phòng bệnh. |",
    "activities": "Trò chuyện sáng, Sinh hoạt lớp",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 6.4",
    "domain": "Thể chất",
    "goal": "TC6.4: Trẻ chủ động giữ vệ sinh môi trường và nhắc nhở người khác cùng thực hiện trong lớp học, sân trường, khu vui chơi và các hoạt động chăm sóc môi trường.",
    "content": "- Chủ động giữ gìn vệ sinh môi trường xung quanh.  | - Trẻ biết bỏ rác đúng nơi quy định, giữ gìn đồ dùng và không gian chung sạch sẽ.  | - Trẻ biết nhắc nhở, vận động bạn cùng giữ gìn vệ sinh môi trường.",
    "activities": "Hoạt động ngoài trời, Hoạt động lao động",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 7.1",
    "domain": "Thể chất",
    "goal": "TC 7.1: Trẻ nhận biết và chỉ ra được các tình huống nguy hiểm, lựa chọn và thực hiện cách xử lý phù hợp trong các tình huống giả định và sinh hoạt hằng ngày, chủ động tìm kiếm sự hỗ trợ khi cần và không thực hiện hành vi nguy hiểm. |",
    "content": "- Trẻ biết nhận diện tình huống nguy hiểm như cháy, ngạt, ngã, giật điện, những nơi không an toàn… | - Tránh xa và không thực hiện những hành vi nguy hiểm.  | - Báo cho người lớn hoặc tìm kiếm sự giúp đỡ khi gặp tình huống nguy hiểm.",
    "activities": "Hoạt động học, Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 7.2",
    "domain": "Thể chất",
    "goal": "TC 7.2: Trẻ chủ động thực hiện đúng quy tắc an toàn giao thông, sinh hoạt và giải thích lý do khi đi bộ, sang đường, ngồi trên phương tiện giao thông và trong sinh hoạt hằng ngày.",
    "content": "- Trẻ biết đội mũ bảo hiểm, đi bên phải đường, không chạy nhảy khi ăn uống. | - Tránh một số trường hợp không an toàn:  | + Khi người lạ bế, ẵm, cho bánh kẹo, uống nước ngọt rủ đi chơi. | + Ra khỏi nhà, khu vực trường lớp không được phép của người lớn, cô giáo. | - Không đi theo, không nhận quà của người lạ khi chưa được người thân cho phép. | - Nói được địa chỉ nơi ở, số điện thoại gia đình, người thân và khi bị lạc biết hỏi, gọi người lớn giúp đỡ.",
    "activities": "Hoạt động học, Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 7.3",
    "domain": "Thể chất",
    "goal": "TC 7.3: Trẻ chủ động xác định đúng người lớn có thể trợ giúp trong từng tình huống nguy hiểm như lạc đường, tai nạn, cháy hoặc cần trợ giúp.",
    "content": "-  Trẻ nhận biết được những người lớn có thể giúp đỡ khi gặp nguy hiểm.  | -  Tìm đến và báo cho người lớn khi gặp tình huống không an toàn.  | - Nói rõ sự việc hoặc yêu cầu giúp đỡ khi cần thiết.",
    "activities": "Hoạt động học, Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TC 7.4",
    "domain": "Thể chất",
    "goal": "TC 7.4: Trẻ nhận biết, bày tỏ thái độ không đồng tình và nhắc nhở khi thấy bản thân hoặc người khác thực hiện những hành vi gây mất an toàn trong các tình huống vui chơi, sinh hoạt và hoạt động hằng ngày, biết lựa chọn cách ứng xử phù hợp.",
    "content": "-  Nhận biết được một số hành vi gây mất an toàn.  | -  Nói hoặc thể hiện thái độ không đồng tình với hành vi không an toàn.  | - Nhắc nhở bạn thực hiện hành vi an toàn phù hợp. | - Lựa chọn cách ứng xử phù hợp với các hành vi không an toàn",
    "activities": "Trò chuyện sáng, Sinh hoạt lớp",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 1.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 1.1: Trẻ biết gọi tên, mô tả đặc điểm, sở thích, điểm mạnh và điều cần cố gắng của bản thân trong giao tiếp và hoạt động khám phá bản thân.",
    "content": "-Trẻ biết tên, tuổi, giới tính; nhận biết và gọi tên một số đặc điểm của bản thân; biết sở thích, khả năng, điểm mạnh và một số điều bản thân cần cố gắng. | - Quan sát, suy nghĩ và mô tả bản thân bằng lời nói, tranh vẽ hoặc các hình thức phù hợp. | - Chia sẻ về sở thích, khả năng, điểm mạnh và điều mình cần cố gắng",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 1.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 1.2: Trẻ chủ động, tự tin thể hiện nhu cầu, ý kiến và điểm mạnh của bản thân bằng lời nói, tranh vẽ hoặc biểu diễn trong giao tiếp và hoạt động nhóm.",
    "content": "- Trẻ biết nhận diện và diễn đạt nhu cầu, mong muốn, ý kiến và điểm mạnh của bản thân |  - Thể hiện bản thân bằng lời nói, tranh vẽ, sản phẩm, cử chỉ hoặc biểu diễn. | - Chủ động nói lên nhu cầu, trình bày ý kiến, chia sẻ khả năng và thể hiện điểm mạnh trước cô, bạn hoặc nhóm; biết lựa chọn cách thể hiện phù hợp",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 1.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 1.3: Trẻ biết thể hiện điều thích hoặc không thích và nói lý do phù hợp khi lựa chọn đồ chơi, hoạt động, món ăn và cách tham gia.",
    "content": "- Nhận ra và phân biệt điều mình thích, không thích; biết một số cách lựa chọn đồ chơi, hoạt động, món ăn và cách tham gia phù hợp; biết nói lý do cho lựa chọn của mình. | - Lựa chọn đồ chơi, hoạt động, món ăn hoặc cách tham gia; nói rõ điều thích hoặc không thích và giải thích lý do phù hợp, không áp đặt lựa chọn của mình cho người khác |",
    "activities": "Hoạt động góc; hoạt động học; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 2.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 2.1: Trẻ chủ động gọi tên, mô tả cảm xúc và nêu nguyên nhân cảm xúc của bản thân trong các tình huống giao tiếp và trải nghiệm hằng ngày; biết diễn đạt khi gặp khó khăn.",
    "content": "- Trẻ nhận biết và gọi tên một số cảm xúc như vui, buồn, tức giận, sợ hãi, lo lắng, ngạc nhiên | - Một số nguyên nhân có thể làm nảy sinh cảm xúc; biết cảm xúc có thể thay đổi theo tình huống. | - Quan sát và mô tả cảm xúc của bản thân, nói được nguyên nhân khiến mình vui, buồn, tức giận, sợ hãi…; biết nói với cô, bạn hoặc người lớn khi gặp khó khăn, cần giúp đỡ.",
    "activities": "Hoạt động học; trò chuyện; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 2.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX2.2: Trẻ chủ động diễn đạt mạch lạc suy nghĩ, cảm xúc và ý kiến cá nhân bằng lời nói lịch sự, phù hợp trong giao tiếp với cô, bạn và người lớn ở các tình huống khác nhau.",
    "content": "- Trẻ biết cách diễn đạt suy nghĩ, cảm xúc, nhu cầu và ý kiến cá nhân | - Trẻ biết một số từ ngữ, cách xưng hô và lời nói lịch sự, phù hợp khi giao tiếp với cô, bạn và người lớn; biết điều chỉnh cách nói theo từng tình huống. | - Nói rõ ràng, đủ ý; trình bày suy nghĩ, cảm xúc và ý kiến của mình bằng lời nói lịch sự; biết lắng nghe, chờ lượt và phản hồi phù hợp khi trao đổi với người khác.",
    "activities": "Trò chuyện; hoạt động học; hoạt động nhóm",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 2.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 2.3: Trẻ chủ động nhận ra được cảm xúc và hành vi của mình có thể làm người khác vui hoặc buồn trong giao tiếp, chơi cùng bạn và giải quyết sự việc.",
    "content": "- Trẻ biết một số lời nói, hành động có thể làm người khác vui, buồn, sợ, tức giận hoặc được yêu thương. |  - Trẻ biết cảm xúc của người khác có thể thay đổi theo cách mình giao tiếp và ứng xử. | - Nhận ra và nói được cảm xúc của người khác trước, trong và sau khi mình có lời nói hoặc hành động | - Lựa chọn, điều chỉnh lời nói và hành vi để phù hợp với cảm xúc của người khác",
    "activities": "Hoạt động góc; trò chuyện; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 2.4",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 2.4: Trẻ chủ động bình tĩnh, điều chỉnh cảm xúc và hành vi khi gặp điều không như ý, phải chờ đợi, bị từ chối, thua trò chơi hoặc xảy ra mâu thuẫn.",
    "content": "- Trẻ biết một số tình huống dễ làm mình buồn, tức giận, thất vọng như phải chờ đợi, bị từ chối, thua trò chơi, không được đáp ứng mong muốn hoặc xảy ra mâu thuẫn | -  Một số cách bình tĩnh và điều chỉnh cảm xúc, hành vi. | - Nhận biết cảm xúc của bản thân, sử dụng các cách phù hợp để bình tĩnh như hít thở, chờ đợi, nói ra cảm xúc, tìm sự hỗ trợ; biết kiềm chế hành vi, không đánh, la hét hoặc làm tổn thương người khác.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 2.5",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 2.5. Trẻ chủ động nhận lỗi, xin lỗi chân thành và đề xuất việc làm để sửa lỗi sau khi mắc lỗi trong giao tiếp, vui chơi hoặc thực hiện nhiệm vụ.",
    "content": "-  Trẻ biết một số hành vi, lời nói chưa phù hợp có thể làm ảnh hưởng đến người khác hoặc nhiệm vụ chung. | - Ý nghĩa của việc nhận lỗi, xin lỗi và sửa lỗi; biết một số cách khắc phục lỗi phù hợp với tình huống. | - Nhận ra và nói được lỗi của mình, chủ động xin lỗi người bị ảnh hưởng bằng lời nói và thái độ phù hợp |  - Đề xuất và thực hiện việc làm để khắc phục hoặc sửa lỗi.",
    "activities": "Hoạt động góc; sinh hoạt hằng ngày; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 2.6",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 2.6. Trẻ chủ động kể lại trung thực hành động và sự việc mình đã thực hiện khi được hỏi trong học tập, vui chơi và sinh hoạt.",
    "content": "- Trẻ nhận biết và ghi nhớ hành động, sự việc bản thân đã thực hiện | - Thực hành kể lại đúng sự thật, rõ ràng theo trình tự và trả lời câu hỏi về việc đã làm. | - Trải nghiệm chia sẻ, kể lại quá trình và kết quả hoạt động trong học tập, vui chơi và sinh hoạt.",
    "activities": "Trò chuyện; hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 3.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 3.1. Trẻ biết vai trò của bản thân trong gia đình và trường lớp, lựa chọn cách ứng xử phù hợp trong hoạt động gia đình, lớp học và đóng vai.",
    "content": "- Trẻ biết vai trò và trách nhiệm của trẻ trong gia đình, trường lớp. | - Thực hành các việc vừa sức và lựa chọn cách ứng xử phù hợp với từng vai trò | - Trải nghiệm hoạt động tự phục vụ, giúp đỡ gia đình, chăm sóc lớp, hoạt động nhóm và đóng vai gia đình, trường lớp.",
    "activities": "Hoạt động góc; hoạt động học; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 3.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 3.2. Trẻ chủ động mô tả vị trí, vai trò của thành viên trong gia đình, nhóm lớp và cộng đồng; nêu cách ứng xử phù hợp trong khám phá xã hội, trò chuyện và đóng vai.",
    "content": "- Trẻ biết các thành viên trong gia đình, nhóm lớp và một số người trong cộng đồng | - Vị trí, vai trò, công việc và mối quan hệ của họ, một số cách ứng xử phù hợp với từng người và từng hoàn cảnh.  | – Gọi tên, mô tả vị trí, vai trò và công việc của các thành viên. | - Lựa chọn cách giao tiếp, ứng xử phù hợp với ông bà, cha mẹ, cô giáo, bạn bè và một số người trong cộng đồng.",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 3.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 3.3. Trẻ chủ động nói về ý nghĩa của các ngày lễ, ngày hội truyền thống của gia đình, trường và địa phương trong hoạt động tìm hiểu lễ hội, ngày kỷ niệm và sự kiện địa phương.",
    "content": "| - Trẻ biết tên một số ngày lễ, ngày hội, ngày kỷ niệm và sự kiện quen thuộc của gia đình, trường học và địa phương; | - Ý nghĩa, hoạt động, phong tục hoặc nét đặc trưng của các ngày lễ, ngày hội.  | - Quan tâm đến di tích lịch sử, cảnh đẹp, lễ hội của quê hương đất nước. | - Tham gia tìm hiểu, trò chuyện, xem tranh ảnh, nghe kể chuyện, xem video, làm sản phẩm, hát múa, trang trí.",
    "activities": "Hoạt động học; hoạt động ngoài trời; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 3.4",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 3.4. Trẻ chủ động gọi tên nghề của người thân, mô tả công việc, ý nghĩa, sản phẩm và dụng cụ lao động trong khám phá nghề nghiệp, trò chuyện và đóng vai.",
    "content": "-Trẻ biết tên nghề của một số người thân (bác sĩ, cô giáo, công nhân kĩ sư…); biết công việc, nơi làm việc, dụng cụ, sản phẩm và ý nghĩa của nghề đối với gia đình và xã hội. | - Biết sử dụng từ ngữ phù hợp để trao đổi, đặt câu hỏi và chia sẻ hiểu biết về nghề của người thân. | - Tìm hiểu dụng cụ và sản phẩm nghề nghiệp. | - Trải nghiệm đóng vai các nghề quen thuộc và thực hiện một số thao tác nghề nghiệp đơn giản, an toàn.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 3.5",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 3.5. Trẻ chủ động gọi tên một số nghề phổ biến, nói về giá trị lao động và thể hiện thái độ tôn trọng người lao động trong khám phá xã hội, tham quan và đóng vai nghề nghiệp.",
    "content": "- Trẻ biết tên và một số đặc điểm của các nghề phổ biến trong xã hội; biết công việc, sản phẩm, lợi ích của một số nghề và hiểu mỗi nghề đều có giá trị, đóng góp cho gia đình và xã hội. | - Sử dụng lời nói, hành động phù hợp để thể hiện sự tôn trọng, biết ơn người lao động.",
    "activities": "Hoạt động học; hoạt động ngoài trời; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 4.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX4.1: Trẻ chủ động bắt chuyện, làm quen và đề xuất trò chơi với bạn trong giờ chơi, hoạt động góc và khi tham gia nhóm mới. |",
    "content": "- Trẻ biết cách chào hỏi, giới thiệu bản thân, bắt chuyện và làm quen với bạn. |  - Đề xuất trò chơi, mời bạn cùng chơi và thỏa thuận cách chơi phù hợp. | - Đề xuất trò chơi, mời bạn tham gia, lắng nghe ý kiến và cùng thống nhất cách chơi, vai chơi.",
    "activities": "Hoạt động góc; hoạt động ngoài trời; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 4.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 4.2. Trẻ chủ động sử dụng lời nói, hành vi văn minh, lịch sự, tôn trọng và thân thiện khi giao tiếp với cô, bạn, nhân viên trường và khách đến trường.",
    "content": "- Trẻ biết một số lời nói, hành vi văn minh, lịch sự trong giao tiếp như chào hỏi, cảm ơn, xin lỗi, xin phép, thưa gửi, mời và biết lắng nghe người khác |  - Tôn trọng, thân thiện với cô, bạn, nhân viên trường và khách đến trường. | - Sử dụng lời nói lễ phép, giọng điệu phù hợp. | - Chào hỏi, cảm ơn, xin lỗi, xin phép, mời, nhường lượt và hỗ trợ người khác trong các tình huống giao tiếp.",
    "activities": "Trò chuyện; hoạt động góc; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 4.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 4.3. Trẻ chủ động trình bày ý kiến và thể hiện sự tự tin khi tham gia thảo luận nhóm, hoạt động chung và chia sẻ trước tập thể.",
    "content": "- Trẻ biết cách trình bày suy nghĩ, ý kiến của mình; biết chờ đến lượt, lắng nghe ý kiến của người khác và tôn trọng sự khác biệt trong thảo luận. | - Giải thích ý tưởng và chia sẻ kết quả thực hiện trước nhóm hoặc tập thể bằng lời nói rõ ràng, phù hợp.",
    "activities": "Hoạt động học; hoạt động nhóm; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 4.4",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 4.4. Trẻ chủ động lắng nghe, hợp tác, hỗ trợ bạn và thống nhất cách thực hiện nhiệm vụ trong hoạt động nhóm, trò chơi hợp tác và nhiệm vụ chung.",
    "content": "- Lắng nghe ý kiến của bạn, biết chia sẻ nhiệm vụ, đồ dùng và học liệu. |  - Phối hợp, hỗ trợ nhau và thống nhất cách thực hiện nhiệm vụ chung. | - Trao đổi, phân công, phối hợp với bạn; lắng nghe và tôn trọng ý kiến của bạn, hỗ trợ bạn khi cần và cùng thống nhất cách thực hiện nhiệm vụ.",
    "activities": "Hoạt động góc; hoạt động ngoài trời; hoạt động học",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 4.5",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 4.5. Trẻ chủ động thương lượng, lắng nghe ý kiến bạn và giải quyết mâu thuẫn bằng lời nói, không dùng bạo lực khi tranh chấp đồ chơi, vai chơi hoặc cách thực hiện nhiệm vụ.",
    "content": "- Nguyên nhân thường xảy ra mâu thuẫn khi chơi và hoạt động nhóm như tranh chấp đồ chơi, vai chơi, lượt chơi hoặc cách thực hiện nhiệm vụ | - Cách giải quyết mâu thuẫn bằng lời nói như trao đổi, lắng nghe, đề xuất, thỏa thuận, nhường lượt hoặc cùng tìm giải pháp; không đánh, xô đẩy, giành giật hoặc làm tổn thương bạn. | - Thực hành các bước trao đổi – lắng nghe – đề xuất – thỏa thuận – cùng thực hiện.",
    "activities": "Hoạt động góc; hoạt động chiều; trò chuyện",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 5.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 5.1. Trẻ chủ động quan sát nét mặt, ánh mắt, điệu bộ và gọi đúng tên cảm xúc của người khác trong giao tiếp, tranh ảnh và các tình huống đóng vai.",
    "content": "- Dấu hiệu thể hiện cảm xúc qua nét mặt, ánh mắt, giọng nói, tư thế và điệu bộ | - Biết gọi tên một số cảm xúc cơ bản của người khác như vui, buồn, tức giận, sợ hãi, ngạc nhiên, lo lắng. | - Quan sát, nhận diện và gọi đúng tên cảm xúc của người khác dựa vào nét mặt, ánh mắt, điệu bộ, giọng nói và hành vi.",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 5.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 5.2. Trẻ chủ động thể hiện tình cảm chân thành bằng hành vi chăm sóc, lời quan tâm hoặc sản phẩm trong hoạt động chăm sóc bạn, gia đình và các dịp đặc biệt.",
    "content": "- Thể hiện tình cảm, sự quan tâm và yêu thương như hỏi han, chăm sóc, giúp đỡ, động viên, chúc mừng, tặng quà hoặc làm sản phẩm | - Thể hiện tình cảm phù hợp với từng người và từng hoàn cảnh. | - Chủ động sử dụng lời nói, hành động hoặc sản phẩm để thể hiện sự yêu thương, quan tâm; biết lựa chọn cách thể hiện phù hợp với bạn bè, người thân và những dịp đặc biệt.",
    "activities": "Hoạt động tạo hình; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 5.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 5.3. Trẻ chủ động hỏi han, chia sẻ, giúp đỡ và thể hiện sự đồng cảm khi thấy bạn khó khăn trong hoạt động nhóm, vui chơi và các tình huống cần hỗ trợ.",
    "content": "- Nhận ra một số biểu hiện cho thấy bạn đang gặp khó khăn, buồn, mệt, lo lắng hoặc cần được hỗ trợ | - Trẻ biết một số cách hỏi han, chia sẻ, động viên và giúp đỡ bạn phù hợp với khả năng. | - Chủ động hỏi thăm, lắng nghe, chia sẻ, động viên và hỗ trợ bạn khi bạn gặp khó khăn. | - Lựa chọn cách giúp đỡ phù hợp, an toàn và không làm bạn cảm thấy khó chịu",
    "activities": "Hoạt động góc; hoạt động ngoài trời; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 5.4",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 5.4. Trẻ chủ động nhận ra sự thay đổi thái độ, cảm xúc của người khác và điều chỉnh cách ứng xử phù hợp trong hội thoại, vui chơi và giải quyết tình huống xã hội.",
    "content": "- Dấu hiệu thay đổi về cảm xúc, thái độ của người khác qua nét mặt, ánh mắt, giọng nói, cử chỉ và hành vi. |  - Nguyên nhân có thể làm người khác vui, buồn, tức giận, lo lắng hoặc không thoải mái |  -Cách ứng xử phù hợp khi cảm xúc của người khác thay đổi.",
    "activities": "Trò chuyện; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 5.5",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 5.5. Trẻ chú ý lắng nghe người khác khi giao tiếp; biết thể hiện cử chỉ, thái độ tôn trọng và có phản hồi tích cực, phù hợp trong hội thoại.",
    "content": "- Lắng nghe khi người khác nói; biết một số cử chỉ, thái độ thể hiện sự tôn trọng như nhìn người nói, không chen ngang, chờ đến lượt, giữ khoảng cách phù hợp. | - Trẻ biết một số cách phản hồi tích cực như trả lời câu hỏi, đặt câu hỏi, thể hiện đồng tình hoặc chia sẻ ý kiến. | - Trẻ biết trả lời, đặt câu hỏi, thể hiện sự quan tâm và phản hồi phù hợp với nội dung hội thoại",
    "activities": "Trò chuyện; hoạt động học; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 6.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 6.1. Trẻ chủ động nêu một số quyền của trẻ em, bổn phận của bản thân và tôn trọng quyền của bạn trong hoạt động tìm hiểu quyền trẻ em, sinh hoạt lớp và tình huống giao tiếp.",
    "content": "- Một số quyền cơ bản của trẻ em như được yêu thương, chăm sóc, bảo vệ, vui chơi, học tập, được lắng nghe và được tôn trọng.  | - Trẻ biết một số bổn phận phù hợp với lứa tuổi như yêu thương, lễ phép, giữ gìn đồ dùng, thực hiện nội quy và có trách nhiệm với việc mình làm. | - Tôn trọng quyền của bạn, không tranh giành, trêu chọc hoặc xâm phạm đồ dùng, không gian riêng của bạn.  | - Trẻ  biết nói với người lớn khi quyền của mình hoặc của bạn không được tôn trọng.",
    "activities": "Hoạt động học; trò chuyện; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 6.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 6.2. Trẻ chủ động thể hiện thái độ tôn trọng, vui vẻ chấp nhận sự khác biệt, không trêu chọc hoặc xa lánh bạn trong hoạt động nhóm, vui chơi và các tình huống có sự khác biệt.",
    "content": "- Trẻ  biết mỗi người có đặc điểm, sở thích, khả năng và hoàn cảnh khác nhau; biết sự khác biệt cần được tôn trọng, không trêu chọc, chê bai hoặc xa lánh bạn. | - Giao tiếp, vui chơi, hợp tác với bạn có sự khác biệt. | - Sử dụng lời nói, hành vi thân thiện, tôn trọng và không loại bạn khỏi hoạt động chung.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 6.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 6.3. Trẻ chủ động chia sẻ học liệu, hướng dẫn và hỗ trợ bạn hoàn thành nhiệm vụ trong hoạt động học tập, chơi góc và nhiệm vụ nhóm.",
    "content": "- Chia sẻ, đoàn kết với bạn khi sử dụng đồ dùng, học liệu. | - Hướng dẫn cách thực hiện và hỗ trợ bạn hoàn thành nhiệm vụ trong hoạt động học tập, chơi góc và hoạt động nhóm. |",
    "activities": "Hoạt động góc; hoạt động học; hoạt động nhóm",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 6.4",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX6.4. Trẻ biết chờ đến lượt, lựa chọn hoặc nhận phần việc, trao đổi, chia sẻ vật liệu và phối hợp với bạn để hoàn thành sản phẩm chung; biết điều chỉnh cách phối hợp khi cần.",
    "content": "- Biết chờ đến lượt, lựa chọn hoặc nhận phần việc | - Trao đổi, chia sẻ vật liệu và phối hợp với bạn để hoàn thành nhiệm vụ chung. biết khi nào cần điều chỉnh cách phối hợp.",
    "activities": "Hoạt động góc; hoạt động ngoài trời; hoạt động nhóm",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 6.5",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 6.5. Trẻ chủ động tìm người giúp đỡ khi cần và hỗ trợ người khác phù hợp với khả năng trong sinh hoạt, học tập và vui chơi; cơ bản không cần nhắc hoặc hỗ trợ trực tiếp của giáo viên.",
    "content": "- Nhận ra khi bản thân hoặc bạn gặp khó khăn, cần được giúp đỡ |  - Trẻ biết những người có thể hỗ trợ và biết cách giúp đỡ người khác phù hợp với khả năng, đảm bảo an toàn. | - Quan tâm, hỗ trợ bạn trong học tập, vui chơi và sinh hoạt mà không chờ cô nhắc.",
    "activities": "Sinh hoạt hằng ngày; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 7.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 7.1. Trẻ chủ động thực hiện các hành vi ứng xử chuẩn mực, phù hợp với từng bối cảnh trong lớp học, gia đình, nơi công cộng và các tình huống giao tiếp.",
    "content": "- Một số quy tắc, hành vi ứng xử phù hợp trong gia đình, lớp học, nơi công cộng và khi giao tiếp với người khác. | - Lựa chọn và thực hiện lời nói, cử chỉ, hành vi lịch sự, phù hợp với từng người, từng hoàn cảnh và bối cảnh giao tiếp.",
    "activities": "Trò chuyện; hoạt động góc; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 7.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 7.2. Trẻ chủ động lựa chọn trang phục và hoạt động phù hợp với thời tiết, thời gian khi chuẩn bị đi học, hoạt động ngoài trời và các tình huống thay đổi thời tiết.",
    "content": "- Đặc điểm thời tiết (nắng, mưa, nóng, lạnh) và mối liên hệ giữa thời tiết, thời gian với việc lựa chọn trang phục, hoạt động phù hợp. | - Lựa chọn trang phục, đồ dùng và hoạt động phù hợp với thời tiết, thời gian. |  - Điều chỉnh lựa chọn khi thời tiết thay đổi.",
    "activities": "Hoạt động ngoài trời; trò chuyện; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 7.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 7.3. Trẻ chủ động thực hiện kỹ năng tự lập trong sinh hoạt, ngồi học đúng tư thế và chuẩn bị tâm thế sẵn sàng vào lớp 1 trong sinh hoạt cá nhân, hoạt động học tập và trải nghiệm làm quen trường tiểu học.",
    "content": "- Một số kỹ năng tự lập trong sinh hoạt; biết tư thế ngồi học đúng, cách chuẩn bị đồ dùng cá nhân và những việc cần chuẩn bị để sẵn sàng vào lớp 1. | - Thực hiện các công việc cá nhân phù hợp; ngồi học đúng tư thế, giữ gìn đồ dùng, tập trung thực hiện nhiệm vụ và chủ động chuẩn bị tâm thế khi tham gia hoạt động học tập.",
    "activities": "Hoạt động học; hoạt động chiều; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 8.1",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX8.1: Trẻ chủ động thực hiện các nội quy của trường, lớp, gia đình và nơi công cộng trong sinh hoạt hằng ngày, giờ học, giờ chơi và khi tham gia nơi công cộng.",
    "content": "- Trẻ biết một số nội quy, quy định cơ bản của trường, lớp, gia đình và nơi công cộng. |  - Ý nghĩa của việc thực hiện nội quy để đảm bảo an toàn, trật tự và tôn trọng mọi người.  | - Tự giác thực hiện nội quy trong giờ học, giờ chơi, sinh hoạt gia đình và khi tham gia nơi công cộng; biết điều chỉnh hành vi khi được nhắc nhở hoặc khi hoàn cảnh thay đổi.",
    "activities": "Sinh hoạt hằng ngày; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 8.2",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 8.2. Trẻ chủ động thực hiện các việc chăm sóc, bảo vệ cây trồng và vật nuôi gần gũi trong hoạt động chăm sóc và trải nghiệm ngoài trời.",
    "content": "- Đặc điểm, nhu cầu sống cơ bản của cây trồng và vật nuôi gần gũi; biết cây, con vật cần được chăm sóc và bảo vệ. | - Trẻ biết tưới cây, chăm sóc cây, cho vật nuôi ăn, giữ vệ sinh khu vực nuôi trồng và thực hiện các hành vi bảo vệ cây, vật nuôi phù hợp với khả năng.",
    "activities": "Hoạt động ngoài trời; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "TX 8.3",
    "domain": "Tình cảm – Xã hội",
    "goal": "TX 8.3. Trẻ chủ động thực hiện hành vi bảo vệ môi trường như tiết kiệm điện, nước, phân loại rác và nhắc nhở bạn trong các hoạt động bảo vệ môi trường.",
    "content": "- Một số hành vi bảo vệ môi trường như tiết kiệm điện, nước, bỏ rác đúng nơi quy định, phân loại rác và giữ gìn môi trường sạch đẹp. | - Tác hại của việc lãng phí và xả rác bừa bãi.  | - Tự giác tắt điện, khóa vòi nước khi không sử dụng, bỏ và phân loại rác đúng nơi quy định; biết nhắc nhở bạn cùng thực hiện hành vi bảo vệ môi trường.",
    "activities": "Hoạt động ngoài trời; hoạt động học; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 1.1",
    "domain": "Ngôn ngữ",
    "goal": "NN 1.1. Trẻ chủ động lắng nghe, chỉ ra hoặc tách đúng từng tiếng trong câu gồm 5–7 tiếng qua trò chơi nghe – nhận biết tiếng, thơ, đồng dao và giao tiếp hằng ngày.",
    "content": "- Trẻ biết câu gồm nhiều tiếng; biết mỗi tiếng là một đơn vị lời nói có thể nghe và tách riêng; biết số lượng tiếng trong câu từ 5–7 tiếng. | - Biết lắng nghe, chỉ ra hoặc tách đúng từng tiếng trong câu 5–7 tiếng. |  - Biết đếm số tiếng trong câu qua lời nói, thơ, đồng dao và giao tiếp hằng ngày. |",
    "activities": "- Trò chuyện sáng- Hoạt động học- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 1.2",
    "domain": "Ngôn ngữ",
    "goal": "NN 1.2. Trẻ chủ động trao đổi, thảo luận và trình bày ý kiến về thông tin, chủ đề hoặc câu chuyện đã nghe sau khi nghe kể chuyện, đọc thơ, xem tranh hoặc khám phá.",
    "content": "- Trẻ biết nội dung chính, thông tin, nhân vật, sự việc hoặc vấn đề được nghe, xem, khám phá; nêu ý kiến, nhận xét và trao đổi về nội dung đó. | - Trả lời câu hỏi, đặt câu hỏi, trao đổi, thảo luận và trình bày suy nghĩ, ý kiến của mình rõ ràng, phù hợp về câu chuyện, bài thơ, tranh ảnh hoặc nội dung đã khám phá. | - Thực hành chia sẻ ý kiến, nhận xét và trình bày trước nhóm, lớp.",
    "activities": "- Trò chuyện- Hoạt động học- Hoạt động ngoài trời- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 1.3",
    "domain": "Ngôn ngữ",
    "goal": "NN 1.3. Trẻ chủ động nghe và thực hiện đúng hướng dẫn gồm 2–3 bước bằng lời nói trong hoạt động học, chơi, vệ sinh và sinh hoạt hằng ngày.",
    "content": "- Trẻ biết lắng nghe và ghi nhớ hướng dẫn gồm 2–3 bước; hiểu trình tự thực hiện các bước trong một nhiệm vụ. | - Trẻ biết hỏi lại khi chưa hiểu yêu cầu. | - Trải nghiệm thực hiện hướng dẫn 2–3 bước trong hoạt động học, vui chơi, vệ sinh, tự phục vụ và sinh hoạt hằng ngày.",
    "activities": "- Hoạt động học- Hoạt động góc- Vệ sinh, sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 2.1",
    "domain": "Ngôn ngữ",
    "goal": "NN 2.1. Trẻ biết diễn đạt rõ ràng, mạch lạc và đủ ý khi nêu ý kiến hoặc nhu cầu trong giao tiếp với cô, bạn và người lớn ở các tình huống quen thuộc.",
    "content": "- Luyện phát âm rõ ràng, nói đủ nghe, đủ ý.  | - Diễn đạt nhu cầu, mong muốn, suy nghĩ và ý kiến của bản thân.  | - Trả lời câu hỏi đầy đủ, phù hợp với nội dung trao đổi.  | - Thực hành nói về người, vật, sự việc và những trải nghiệm gần gũi.",
    "activities": "- Trò chuyện- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 2.2",
    "domain": "Ngôn ngữ",
    "goal": "NN 2.2: Trẻ chủ động sử dụng linh hoạt từ loại đa dạng, câu ghép và câu cảm thán phù hợp trong kể chuyện, trò chuyện, mô tả và thảo luận.",
    "content": "- Mở rộng vốn từ về người, sự vật, hiện tượng và các hoạt động gần gũi.  | - Sử dụng từ chỉ người, sự vật, hoạt động, đặc điểm, tính chất, trạng thái.  | - Sử dụng câu đơn, câu có từ nối và một số kiểu câu phù hợp trong giao tiếp.  | - Lựa chọn từ ngữ phù hợp với nội dung muốn diễn đạt.",
    "activities": "- Trò chuyện- Hoạt động học- Hoạt động ngoài trời- Hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 2.3",
    "domain": "Ngôn ngữ",
    "goal": "NN 2.3. Trẻ chủ động kể lại trọn vẹn câu chuyện hoặc sự việc theo trình tự mở đầu, diễn biến và kết thúc sau khi nghe truyện, trải nghiệm hoặc chứng kiến sự việc.",
    "content": "- Trẻ kể lại câu chuyện quen thuộc dựa vào tranh, hình ảnh hoặc trí nhớ.  | - Kể lại các sự việc trẻ đã trải nghiệm theo trình tự trước – sau.  | - Xác định và kể các sự việc chính: mở đầu, diễn biến, kết thúc.  | - Sắp xếp tranh và kể nội dung theo đúng trình tự.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 2.4",
    "domain": "Ngôn ngữ",
    "goal": "NN2.4: Trẻ chủ động kết hợp lời nói với cử chỉ, điệu bộ và ánh mắt để thể hiện ý kiến, cảm xúc trong kể chuyện, giao tiếp và trình bày trước nhóm.",
    "content": "- Trẻ biết sử dụng nét mặt, ánh mắt, cử chỉ và điệu bộ phù hợp khi giao tiếp.  | - Kết hợp lời nói với các phương tiện phi ngôn ngữ để thể hiện vui, buồn, ngạc nhiên, yêu thích, không đồng ý…  | - Thực hành thể hiện cảm xúc trong các tình huống giao tiếp, kể chuyện, đóng vai.",
    "activities": "- Trò chuyện- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 2.5",
    "domain": "Ngôn ngữ",
    "goal": "NN 2.5: Trẻ chủ động sử dụng từ ngữ nghi thức và cách xưng hô tôn trọng, chuẩn mực phù hợp với tình huống khi giao tiếp với người lớn, bạn bè và trong đóng vai.",
    "content": "- Sử dụng lời chào, lời cảm ơn, xin lỗi, xin phép, thưa gửi, mời, chúc mừng…  | - Thực hành cách xưng hô phù hợp với người giao tiếp.  | - Sử dụng lời nói lịch sự trong gia đình, trường lớp và nơi công cộng.  | - Biết sử dụng lời nói phù hợp với từng tình huống giao tiếp.",
    "activities": "- Trò chuyện- Hoạt động góc- Hoạt động ngoài trời- Sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 2.6",
    "domain": "Ngôn ngữ",
    "goal": "NN2.6: Trẻ chủ động điều chỉnh ngữ điệu, âm lượng và tốc độ nói phù hợp với đối tượng, tình huống trong trò chuyện, kể chuyện, phát biểu và giao tiếp ở các không gian khác nhau.",
    "content": "- Luyện nói với âm lượng phù hợp trong từng không gian và tình huống.  | - Trẻ biết điều chỉnh tốc độ nói: không quá nhanh, không quá chậm.  | - Thay đổi ngữ điệu khi hỏi, trả lời, kể chuyện, thể hiện cảm xúc.  | - Thực hành cách nói phù hợp khi giao tiếp với cô, bạn bè, người thân và người lạ.",
    "activities": "- Trò chuyện- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 3.1",
    "domain": "Ngôn ngữ",
    "goal": "NN 3.1: Trẻ chủ động sáng tạo cách kể về sự vật hoặc câu chuyện bằng lời nói kết hợp cử chỉ, điệu bộ hoặc tranh vẽ trong kể chuyện sáng tạo, xem tranh và đóng vai.",
    "content": "- Quan sát tranh, hình ảnh, đồ vật, hiện tượng và kể lại theo cách hiểu của trẻ.  | -  Trẻ biết kể chuyện theo tranh, kể chuyện sáng tạo, kể tiếp đoạn kết của câu chuyện.  | - Kết hợp lời kể với nét mặt, cử chỉ, điệu bộ, tranh vẽ hoặc đồ dùng hỗ trợ.  | - Khuyến khích trẻ lựa chọn cách kể, nội dung và hình thức thể hiện riêng.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 3.2",
    "domain": "Ngôn ngữ",
    "goal": "NN 3.2. Trẻ chủ động sử dụng ngôn ngữ biểu cảm và nhập vai phù hợp khi đọc thơ, kể chuyện, đóng kịch hoặc biểu diễn trước nhóm, lớp.",
    "content": "-  Trẻ biết đọc thơ, kể chuyện với giọng điệu phù hợp nội dung. | - Thể hiện ngữ điệu, âm lượng, tốc độ và sắc thái tình cảm khi đọc thơ, kể chuyện. | - Sử dụng lời thoại, giọng nói và cách diễn đạt phù hợp với nhân vật khi đóng kịch. | - Thực hành thể hiện cảm xúc qua giọng nói trong các hoạt động biểu diễn.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 4.1",
    "domain": "Ngôn ngữ",
    "goal": "NN 4.1. Trẻ chủ động lựa chọn, xem và đọc sách, truyện, tạp chí phù hợp trong góc thư viện, giờ chơi và thời gian đọc sách tự chọn.",
    "content": "- Làm quen với các loại sách, truyện tranh, tạp chí, tranh ảnh và ấn phẩm phù hợp với trẻ.  | - Tự lựa chọn sách, truyện theo sở thích.  | - Xem tranh, nhận biết nhân vật, sự vật và nội dung trong sách.  | - Chia sẻ với cô và bạn về cuốn sách, truyện mà trẻ yêu thích.",
    "activities": "- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 4.2",
    "domain": "Ngôn ngữ",
    "goal": "NN 4.2. Trẻ chủ động tập trung lắng nghe người lớn đọc sách, thể hiện hứng thú và trao đổi về nội dung đã nghe trong giờ đọc sách, kể chuyện và hoạt động thư viện.",
    "content": "- Nghe cô, cha mẹ hoặc người lớn đọc thơ, truyện, sách.  | - Tập trung chú ý và thể hiện hứng thú khi nghe đọc.  | - Trao đổi, trả lời câu hỏi về nội dung sách sau khi nghe đọc.  | - Chia sẻ cảm xúc, suy nghĩ về nhân vật, sự việc hoặc nội dung được nghe",
    "activities": "- Hoạt động học- Hoạt động chiều- Trò chuyện",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 4.3",
    "domain": "Ngôn ngữ",
    "goal": "NN 4.3. Trẻ biết giữ gìn, bảo vệ, sắp xếp và sửa trang sách đúng cách, đồng thời nhắc bạn cùng thực hiện trong góc thư viện và khi sử dụng sách, ấn phẩm.",
    "content": "- Hướng dẫn cách cầm, mở, lật và đặt sách đúng cách.  | - Không vò, xé, vẽ bậy hoặc làm bẩn sách.  | - Biết sắp xếp sách đúng nơi quy định sau khi sử dụng.  | - Biết giữ gìn sách của lớp và của bản thân.",
    "activities": "- Hoạt động góc- Hoạt động chiều- Sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 5.1",
    "domain": "Ngôn ngữ",
    "goal": "NN 5.1. Trẻ chủ động nhận diện và gọi đúng 29 chữ cái tiếng Việt cùng các ký hiệu, biểu tượng quen thuộc trong hoạt động làm quen chữ viết và môi trường xung quanh.",
    "content": "- Làm quen và nhận biết một số chữ cái tiếng Việt.  | - Nhận biết đặc điểm, hình dạng của chữ cái qua các trò chơi.  | - Làm quen với cách phát âm một số chữ cái.  | - Nhận biết một số kí hiệu, biểu tượng quen thuộc: biển báo, kí hiệu nhà vệ sinh, lối ra, đồ dùng cá nhân, khu vực trong lớp…  | - Phân biệt chữ cái với số, hình ảnh và các kí hiệu khác.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 5.2",
    "domain": "Ngôn ngữ",
    "goal": "NN 5.2. Trẻ chủ động cầm, giở sách đúng cách và theo dõi nội dung từ trên xuống dưới, trái sang phải, từ đầu đến cuối khi xem và nghe đọc sách.",
    "content": "- Luyện cách cầm sách, mở sách và lật từng trang. | - Nhận biết mặt trước, mặt sau, trang đầu, trang cuối của sách. | - Theo dõi tranh, chữ và nội dung sách theo hướng từ trên xuống dưới, từ trái sang phải. | - Nhận biết trình tự các trang và theo dõi nội dung từ đầu đến cuối sách.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 6.1",
    "domain": "Ngôn ngữ",
    "goal": "NN 6.1. Trẻ chủ động tham gia vẽ, viết và duy trì tập trung đến khi hoàn thành sản phẩm trong hoạt động tạo hình, viết tên, ký hiệu và các nhiệm vụ tiền viết..",
    "content": "- Tạo cơ hội cho trẻ tham gia tự nguyện các hoạt động vẽ, viết.  | - Vẽ, tô màu, đồ nét, tạo hình và viết theo ý thích.  | - Thực hiện các hoạt động trên giấy, bảng, cát, đất, vật liệu khác.  | - Rèn khả năng tập trung và duy trì hoạt động đến khi hoàn thành sản phẩm.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 6.2",
    "domain": "Ngôn ngữ",
    "goal": "NN 6.2. Trẻ chủ động bảo quản dụng cụ vẽ, viết bằng cách đậy nắp, cất đúng nơi và giữ ngăn nắp sau khi sử dụng.",
    "content": "- Làm quen và sử dụng đúng cách bút chì, bút màu, sáp màu, giấy và các dụng cụ hỗ trợ.  | - Biết lấy, sử dụng và cất dụng cụ đúng nơi quy định.  | - Giữ dụng cụ sạch sẽ, không làm gãy, hỏng hoặc vứt bỏ tùy tiện.  | - Có ý thức bảo quản đồ dùng cá nhân và đồ dùng chung.",
    "activities": "- Hoạt động góc- Hoạt động chiều- Sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 7.1",
    "domain": "Ngôn ngữ",
    "goal": "NN 7.1. Trẻ chủ động nói về vai trò của chữ viết trong biểu thị lời nói, đọc, giao tiếp và ghi nhớ trong hoạt động làm quen chữ viết và đời sống.",
    "content": "- Làm quen với chữ viết thông qua tên của trẻ, tên bạn, tên đồ vật và các từ quen thuộc.  | - Nhận biết chữ viết dùng để ghi lại lời nói và truyền đạt thông tin.  | - Nhận biết một số chữ, từ quen thuộc trong môi trường lớp học và cuộc sống.  | - Trải nghiệm việc sử dụng chữ viết để ghi tên, nhắn tin, làm kí hiệu hoặc truyền đạt nội dung đơn giản.",
    "activities": "- Trò chuyện- Hoạt động học- Hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 7.2",
    "domain": "Ngôn ngữ",
    "goal": "NN 7.2. Trẻ chủ động cầm bút bằng ba ngón, giữ giấy và sử dụng bút chì, sáp màu đúng tư thế trong hoạt động vẽ, tô, viết và nhiệm vụ tiền viết.",
    "content": "- Luyện tư thế ngồi, cách cầm bút và cách giữ giấy khi vẽ, viết.  | - Sử dụng bút chì, bút màu, sáp màu để vẽ và viết.  | - Luyện các nét cơ bản phục vụ hoạt động vẽ, viết.  | - Phối hợp tay thuận cầm bút và tay còn lại giữ giấy.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NN 7.3",
    "domain": "Ngôn ngữ",
    "goal": "NN 7.3. Trẻ chủ động chép chính xác tên mình và tên bạn theo hướng từ trái sang phải, từ trên xuống dưới trong hoạt động viết tên, làm thẻ tên và các tình huống sử dụng chữ viết.",
    "content": "- Làm quen với việc chép tên của bản thân, người thân, bạn bè và một số đồ vật quen thuộc.  | - Chép lại chữ, tên hoặc từ quen thuộc theo mẫu.  | - Luyện viết theo hướng từ trái sang phải, từ trên xuống dưới.  | - Nhận biết và thực hành khoảng cách, vị trí tương đối giữa các chữ khi chép.",
    "activities": "- Hoạt động học- Hoạt động góc- Hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 1.1",
    "domain": "Nhận thức",
    "goal": "NT 1.1. Trẻ chủ động tham gia và duy trì hứng thú trong hoạt động trải nghiệm, khám phá con người, sự vật và hiện tượng trong khoa học, xã hội, thiên nhiên và trải nghiệm thực tế.",
    "content": "- Đặc điểm, tính chất, sự thay đổi của con người, sự vật và hiện tượng gần gũi.  | - Quan sát, đặt câu hỏi, dự đoán và tìm hiểu để khám phá. | - Tham gia các hoạt động khám phá khoa học, xã hội, thiên nhiên và trải nghiệm thực tế.  | - Chủ động lựa chọn, tham gia và duy trì hoạt động khám phá.",
    "activities": "Hoạt động học; trò chuyện; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 1.2",
    "domain": "Nhận thức",
    "goal": "NT 1.2. Trẻ chủ động đặt câu hỏi có suy luận để tìm hiểu bản chất hoặc nguyên nhân của sự vật, hiện tượng khi quan sát, thử nghiệm và trao đổi về vấn đề quan tâm.",
    "content": "- Đặt câu hỏi để tìm hiểu bản chất, đặc điểm hoặc nguyên nhân của sự vật, hiện tượng. | - Biết một số từ để đặt câu hỏi có suy luận: Vì sao? Tại sao? Như thế nào? Điều gì xảy ra nếu…? | - Trao đổi, suy luận và đưa ra dự đoán về nguyên nhân, kết quả.  | - Thử nghiệm để kiểm chứng dự đoán và chia sẻ điều trẻ phát hiện.",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 1.3",
    "domain": "Nhận thức",
    "goal": "NT 1.3. Trẻ chủ động thể hiện tâm thế tự tin, thoải mái và sẵn sàng nhận nhiệm vụ tìm tòi khi khám phá, thử nghiệm hoặc giải quyết câu hỏi.",
    "content": "- Mạnh dạn, tự tin khi tham gia hoạt động khám phá, thử nghiệm.  | - Biết lắng nghe, tiếp nhận nhiệm vụ và sẵn sàng tìm cách thực hiện. | - Chủ động nhận nhiệm vụ khám phá, thử nghiệm hoặc giải quyết vấn đề.  | - Thử nghiệm, tìm tòi và điều chỉnh cách thực hiện khi gặp khó khăn.",
    "activities": "Hoạt động học; hoạt động góc; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 2.1",
    "domain": "Nhận thức",
    "goal": "NT 2.1. Trẻ chủ động lựa chọn sự vật, hiện tượng cần tìm hiểu và đề xuất cách thức khám phá trong hoạt động khám phá mở, trải nghiệm và dự án nhỏ.",
    "content": "- Lựa chọn sự vật, hiện tượng mà mình muốn tìm hiểu.  | - Biết một số cách thức khám phá, tìm hiểu phù hợp với đối tượng. | -  Đề xuất cách khám phá: quan sát, so sánh, thử nghiệm, tìm kiếm thông tin…  | -  Thực hiện khám phá trong hoạt động mở, trải nghiệm và dự án nhỏ.",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 2.2",
    "domain": "Nhận thức",
    "goal": "NT 2.2. Trẻ kiên trì thực hiện trọn vẹn quá trình khám phá đến khi có kết quả trong thí nghiệm, quan sát dài ngày và nhiệm vụ tìm hiểu có nhiều bước.",
    "content": "-Trẻ biết cần kiên trì thực hiện và theo dõi đến khi có kết quả. | -  Thực hiện đầy đủ các bước của thí nghiệm, quan sát dài ngày hoặc nhiệm vụ nhiều bước.  | - Theo dõi, ghi nhận sự thay đổi và kết quả trong quá trình khám phá.  | -  Tiếp tục thực hiện khi gặp khó khăn, biết điều chỉnh cách làm khi cần.",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 2.3",
    "domain": "Nhận thức",
    "goal": "NT2.3: Trẻ chủ động hợp tác với bạn và nhờ hỗ trợ đúng lúc khi thực hiện hoạt động khám phá, thí nghiệm và nhiệm vụ trải nghiệm.",
    "content": "- Phối hợp, phân công và chia sẻ nhiệm vụ với bạn. | - Trao đổi, phân công và hỗ trợ nhau khi thực hiện.  | - Chủ động nhờ cô hoặc bạn giúp đỡ khi gặp khó khăn.  | - Chia sẻ kết quả và nhận xét cùng bạn.  |",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 3.1",
    "domain": "Nhận thức",
    "goal": "NT 3.1. Trẻ chủ động mô tả chi tiết, chính xác đặc điểm, tính chất và sự thay đổi của sự vật sau khi quan sát, trải nghiệm hoặc thực hiện thí nghiệm.",
    "content": "- Đặc điểm, tính chất và sự thay đổi của sự vật, hiện tượng.  | - Sử dụng từ ngữ phù hợp để mô tả những gì quan sát, trải nghiệm được.  | - Quan sát, trải nghiệm hoặc thực hiện thí nghiệm với sự vật.  | - So sánh kết quả trước và sau khi trải nghiệm, thí nghiệm.  | - Trình bày, chia sẻ những điều trẻ quan sát và phát hiện được. |",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 3.2",
    "domain": "Nhận thức",
    "goal": "NT 3.2. Trẻ chủ động giải thích mối quan hệ nguyên nhân – kết quả của con người, sự vật và hiện tượng bằng lời nói trong hoạt động khám phá, thí nghiệm và thảo luận.",
    "content": "- Mối quan hệ nguyên nhân – kết quả đơn giản, gần gũi. | - Nhận xét được các mối quan hệ đó. | - Quan sát, thử nghiệm để nhận biết nguyên nhân và kết quả. | - Giải thích bằng lời mối quan hệ nguyên nhân – kết quả.",
    "activities": "Trò chuyện; hoạt động góc; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 3.3",
    "domain": "Nhận thức",
    "goal": "NT 3.3. Trẻ chủ động mô tả đúng trình tự các bước tạo ra sản phẩm sau khi thực hiện hoạt động tạo sản phẩm, thí nghiệm hoặc quy trình đơn giản.",
    "content": "- Các bước cơ bản để tạo ra một sản phẩm hoặc thực hiện một quy trình đơn giản. | - Quan sát, ghi nhớ và sắp xếp đúng trình tự các bước.  | - Mô tả bằng lời trình tự thực hiện từ bắt đầu đến hoàn thành.  | - Trao đổi về kết quả sau khi hoàn thành.",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 3.4",
    "domain": "Nhận thức",
    "goal": "NT 3.4. Trẻ chủ động xác định số lượng trong phạm vi 10, nhận biết và gọi đúng hình dạng, kích thước của các đối tượng trong hoạt động toán học, vui chơi và khám phá.",
    "content": "- Đếm, thêm, bớt và xác định số lượng đối tượng trong phạm vi 10.  | - Nhận biết, gọi đúng tên một số hình dạng, kích thước của đối tượng.  | - So sánh kích thước: to – nhỏ, dài – ngắn, cao – thấp… | - So sánh, phân loại đối tượng theo hình dạng và kích thước. |",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 3.5",
    "domain": "Nhận thức",
    "goal": "NT 3.5. Trẻ chủ động nhận ra và tiếp tục thực hiện đúng một số quy tắc hoặc mẫu lặp trong trò chơi, hoạt động toán và sắp xếp đồ vật.",
    "content": "- Tạo ra quy tắc sắp xếp. | - So sánh phát hiện quy tắc sắp xếp và sắp xếp theo quy tắc. | - Vận dụng quy tắc, mẫu lặp khi sắp xếp đồ vật và chơi.  |",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 4.1",
    "domain": "Nhận thức",
    "goal": "NT 4.1. Trẻ biết so sánh và phân tích điểm giống, khác nhau của 2–3 đối tượng trong hoạt động khám phá, toán học và phân loại đồ vật.",
    "content": "- Đặc điểm có thể dùng để so sánh: màu sắc, hình dạng, kích thước, cấu tạo, công dụng… | - Nhận ra điểm giống và khác nhau giữa 2–3 đối tượng. | - Phân loại, sắp xếp đối tượng dựa trên đặc điểm giống và khác nhau.  | - Diễn đạt kết quả so sánh bằng lời.",
    "activities": "Hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 4.2",
    "domain": "Nhận thức",
    "goal": "NT 4.2. Trẻ chủ động lựa chọn tiêu chí và phân loại đối tượng theo dấu hiệu chung trong hoạt động khám phá, toán học và sắp xếp đồ dùng.",
    "content": "- Tiêu chí để phân loại: màu sắc, hình dạng, kích thước, chất liệu, công dụng… | - Phân loại các loại thực phẩm để ăn, để uống, các loại thực phẩm có lợi và có hại cho cơ thể | - Phân loại được các đối tượng theo nhu cầu của trẻ. | - Phân loại, sắp xếp đồ vật thành các nhóm theo dấu hiệu chung.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 4.3",
    "domain": "Nhận thức",
    "goal": "NT 4.3. Trẻ chủ động thu thập thông tin và trình bày kết quả bằng lời nói, bảng, sơ đồ hoặc tranh sau khi quan sát, khảo sát, trải nghiệm hoặc thực hiện nhiệm vụ nhóm..",
    "content": "- Cách thu thập thông tin: quan sát, hỏi, khảo sát, đếm, ghi nhận. | - Ghi lại, sắp xếp thông tin bằng ký hiệu, bảng, tranh hoặc sơ đồ đơn giản.  | - Trình bày kết quả bằng lời nói, bảng, sơ đồ hoặc tranh.",
    "activities": "Hoạt động góc; hoạt động chiều; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 4.4",
    "domain": "Nhận thức",
    "goal": "NT 4.4. Trẻ biết đếm, tách – gộp, thêm – bớt trong phạm vi 10 và đặt thẻ số tương ứng trong hoạt động toán và các tình huống sử dụng số lượng..",
    "content": "- Đếm các chữ số, đếm các số lượng và thứ tự trong phạm vi 10 và đếm theo khả năng. | - Đặt câu hỏi về số lượng, chữ số. | - Ôn số lượng từ 5-10 | - Gộp /Tách các đối tượng nhóm trong phạm vi 5- 10 bằng các cách khác nhau và đếm. | - So sánh 3 nhóm trong phạm vi 5- 10 bằng các cách khác nhau và nói lên được kết quả mình vừa so sánh: bằng nhau, nhiều nhất, ít hơn, ít nhất.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 4.5",
    "domain": "Nhận thức",
    "goal": "NT4.5: Trẻ biết sử dụng thước, ca đong để đo độ dài, dung tích và biểu thị kết quả trong hoạt động toán, khám phá và các nhiệm vụ đo lường thực tế.",
    "content": "- Đo độ dài một vật bằng các đơn vị đo khác nhau. | - Đo độ dài các vật, so sánh diễn đạt kết quả đo. | - Đong đo dung tích các vật, so sánh và diễn đạt kết quả đo.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 4.6",
    "domain": "Nhận thức",
    "goal": "NT4.6: Trẻ biết xác định chính xác vị trí của đối tượng trong không gian so với vật làm chuẩn trong hoạt động định hướng không gian, vận động và sắp xếp đồ vật.",
    "content": "- Xác định vị trí của đồ vật (phía trước - phía sau; phía trên- phía dưới; phía phải- phía trái) so với bản thân trẻ. | - Xác định vị trí của đồ vật (phía trước - phía sau; phía trên- phía dưới; phía phải- phía trái) với một vật nào đó làm chuẩn, so với bạn khác.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 4.7",
    "domain": "Nhận thức",
    "goal": "NT 4.7. Trẻ biết sử dụng đúng các mốc hôm qua, hôm nay, ngày mai, thứ và ngày gắn với hoạt động cụ thể trong sinh hoạt hằng ngày, xem lịch và trò chuyện về kế hoạch.",
    "content": "- Nhận biết hôm qua, hôm nay, ngày mai. | - Gọi tên các thứ trong tuần. | - Nhận biết ngày trên lịch.",
    "activities": "Hoạt động học; hoạt động góc; sinh hoạt hằng ngày",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 5.1",
    "domain": "Nhận thức",
    "goal": "NT 5.1. Trẻ chủ động quan sát, thu thập thông tin và phát hiện vấn đề cần giải quyết trong hoạt động khám phá, chơi xây dựng và các tình huống thực tế.",
    "content": "- Quan sát, phán đoán mối liên hệ đơn giản giữa cây với môi trường sống. | - Cho trẻ xem các sách báo, tranh ảnh, ghi hình về chủ đề sau đó trẻ trò chuyện, thảo luận và đưa ra nội dung chung. | - Trẻ thu thập thông tin về đối tượng bằng nhiều cách khác nhau: xem sách, tranh ảnh, băng hình, trò chuyện và thảo luận về sự khác nhau giữa ngày và đêm, mặt trời, mặt trăng, không khí, các nguồn ánh sáng và sự cần thiết của chúng với cuộc sống con người, con vật và cây. | - Một vài đặc điểm, tính chất của đất, đá, cát, sỏi…",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 5.2",
    "domain": "Nhận thức",
    "goal": "NT 5.2. Trẻ chủ động phán đoán và lựa chọn giải pháp phù hợp để giải quyết vấn đề khi gặp nhiệm vụ có khó khăn hoặc có nhiều cách giải quyết.",
    "content": "- Nhận ra vấn đề, khó khăn trong quá trình thực hiện nhiệm vụ. | - So sánh, phân loại, phán đoán các vấn đề. | - Giải quyết các vấn đề đơn giản bằng các cách khác nhau.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 5.3",
    "domain": "Nhận thức",
    "goal": "NT 5.3. Trẻ chủ động vận dụng đếm, đo lường, kiến thức khoa học và công nghệ đơn giản để giải quyết vấn đề trong nhiệm vụ thực tế, trò chơi và hoạt động STEAM.",
    "content": "- Đếm, so sánh, đo chiều dài, chiều cao, số lượng trong các nhiệm vụ thực tế.  | - Vận dụng kiến thức khoa học, công nghệ đơn giản để thử nghiệm và giải quyết vấn đề.  | - Thực hành qua trò chơi, hoạt động STEAM và các tình huống thực tế.  | - Kiểm tra kết quả và điều chỉnh cách thực hiện khi cần.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 6.1",
    "domain": "Nhận thức",
    "goal": "NT 6.1. Trẻ chủ động lựa chọn và thực hiện cách ứng xử phù hợp với con người, sự vật và hiện tượng trong các tình huống thực tế, hoạt động khám phá và sinh hoạt.",
    "content": "- Một số cách ứng xử phù hợp với người khác, sự vật và hiện tượng xung quanh.  | - Biết lựa chọn cách ứng xử phù hợp với từng tình huống. | - Thực hành giao tiếp, hợp tác, giữ gìn và bảo vệ sự vật, môi trường.  | - Xử lý các tình huống thực tế trong sinh hoạt, vui chơi và hoạt động khám phá",
    "activities": "Hoạt động học; trò chuyện; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NT 6.2",
    "domain": "Nhận thức",
    "goal": "NT 6.2. Trẻ chủ động điều chỉnh hành vi linh hoạt theo yêu cầu của bối cảnh thực tế khi điều kiện, luật chơi, thời gian hoặc môi trường hoạt động thay đổi.",
    "content": "- Một số cách điều chỉnh hành vi phù hợp với tình huống.  | - Thực hiện nhiệm vụ khi thay đổi luật chơi, thời gian, không gian hoặc điều kiện.  | - Linh hoạt thay đổi cách chơi, cách thực hiện khi tình huống thay đổi.  | -Điều chỉnh hành vi phù hợp với yêu cầu và hoàn cảnh thực tế. |",
    "activities": "Hoạt động học; trò chuyện; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 1.1",
    "domain": "Nghệ thuật",
    "goal": "NgT 1.1. Trẻ chủ động thể hiện cảm xúc thẩm mỹ qua lời nói, hành động, cử chỉ, điệu bộ và nét mặt khi thưởng thức, nhận xét và tham gia hoạt động nghệ thuật.",
    "content": "- Quan sát, khám phá và nhận biết vẻ đẹp của thiên nhiên, con người, cuộc sống xung quanh.  | - Thưởng thức tranh ảnh, âm nhạc, múa, hát, thơ, truyện, kịch và các sản phẩm nghệ thuật.  | - Bày tỏ cảm xúc trước cái đẹp bằng lời nói, nét mặt, cử chỉ, điệu bộ và hành động.  | - Chia sẻ điều trẻ thích, không thích và lý do khi tham gia các hoạt động nghệ thuật.",
    "activities": "Hoạt động học; hoạt động ngoài trời; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 1.2",
    "domain": "Nghệ thuật",
    "goal": "NgT 1.2. Trẻ biết nói điều mình yêu thích và thực hiện hành vi giữ gìn sản phẩm nghệ thuật truyền thống của Việt Nam và các nền văn hóa khác khi xem, trải nghiệm và tham gia hoạt động nghệ thuật.",
    "content": "- Làm quen với tranh dân gian, đồ thủ công mỹ nghệ, trang phục, nhạc cụ, làn điệu dân ca và một số loại hình nghệ thuật truyền thống Việt Nam.  | - Làm quen với một số sản phẩm nghệ thuật, âm nhạc, trang phục, điệu múa",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 1.3",
    "domain": "Nghệ thuật",
    "goal": "NgT 1.3. Trẻ chủ động nhận ra nét đẹp độc đáo trong sản phẩm của bạn và thể hiện thái độ tôn trọng khi quan sát, chia sẻ và nhận xét sản phẩm nghệ thuật.",
    "content": "- Quan sát, nhận xét vẻ đẹp, màu sắc, đường nét, hình ảnh, cách thể hiện trong sản phẩm của bạn và của người khác.  | - Khuyến khích trẻ nói điều mình thích ở sản phẩm của bạn.  | - Hình thành thái độ tôn trọng sự khác biệt trong cách thể hiện nghệ thuật.  | - Biết giữ gìn, không làm hỏng hoặc tự ý lấy sản phẩm của người khác.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 1.4",
    "domain": "Nghệ thuật",
    "goal": "NgT 1.4. Trẻ chủ động nhận xét, đánh giá màu sắc và bố cục sản phẩm bằng lời nói khi quan sát, trao đổi và trưng bày sản phẩm tạo hình.",
    "content": "- Trò chuyện, thảo luận về tranh, sản phẩm tạo hình, tiết mục âm nhạc, vở kịch.  | - Bày tỏ cảm xúc, suy nghĩ và ý kiến cá nhân bằng lời nói, nét mặt, cử chỉ, điệu bộ.  | - Tập sử dụng các từ ngữ đơn giản để nhận xét về màu sắc, hình dáng, nội dung, âm thanh, cách thể hiện.  | - Biết lắng nghe và tôn trọng ý kiến của bạn.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.1",
    "domain": "Nghệ thuật",
    "goal": "NgT2.1: Trẻ biết gọi đúng tên bài hát, bản nhạc và nói nội dung bài hát sau khi nghe, hát hoặc thưởng thức âm nhạc.",
    "content": "- Nghe và làm quen với các bài hát, bản nhạc phù hợp lứa tuổi.  | - Nhớ tên, tên tác giả và nội dung chính của bài hát, bản nhạc.  | - Trò chuyện về nhân vật, sự vật, tình huống, tình cảm được thể hiện trong bài hát.",
    "activities": "Hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.2",
    "domain": "Nghệ thuật",
    "goal": "NgT 2.2. Trẻ biết phân biệt các sắc thái, tính chất âm nhạc đa dạng khi nghe các bài hát, bản nhạc có sắc thái khác nhau.",
    "content": "- Nghe và phân biệt các bài hát, bản nhạc có tính chất khác nhau.  | - Nhận biết âm nhạc nhẹ nhàng, êm dịu, vui tươi, rộn ràng, sôi động.  | - Thể hiện tính chất âm nhạc bằng vận động, nét mặt và cảm xúc.",
    "activities": "Hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.3",
    "domain": "Nghệ thuật",
    "goal": "NgT 2.3. Trẻ chủ động nhận biết nhịp điệu, tiết tấu, giai điệu của bài hát, bản nhạc quen thuộc và thể hiện nhịp nhàng khi nghe, hát, vận động và gõ đệm.",
    "content": "- Nghe, cảm nhận và phân biệt nhịp điệu, tiết tấu, giai điệu của bài hát quen thuộc.  | - Vỗ tay, nhún nhảy, vận động theo nhịp điệu, tiết tấu.  | - Nhận biết đoạn nhạc nhanh –chậm.",
    "activities": "Hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.4",
    "domain": "Nghệ thuật",
    "goal": "NgT 2.4. Trẻ biết phân biệt âm thanh cao – thấp, dài – ngắn, to – nhỏ, âm sắc nhạc cụ và giọng hát, giọng nói trong hoạt động nghe và khám phá âm thanh.",
    "content": "- Nghe và phân biệt âm thanh cao – thấp, dài – ngắn, to – nhỏ.  | - Nghe đoán tên một số nhạc cụ quen thuộc.  | - Phân biệt âm thanh của các loại nhạc cụ qua nghe và trải nghiệm.  | - Nhận biết sự khác nhau giữa giọng hát và giọng nói.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.5",
    "domain": "Nghệ thuật",
    "goal": "NgT 2.5. Trẻ biết hát rõ lời, đúng giai điệu, diễn cảm và thể hiện trọn vẹn sắc thái tình cảm trong hoạt động âm nhạc cá nhân, nhóm và tập thể.",
    "content": "- Hát rõ lời, đúng giai điệu, lời ca và thể hiện sắc thái, tình cảm của bài hát. | - Nghe và nhận biết các thể loại âm nhạc khác nhau (nhạc thiếu nhi, dân ca, nhạc cổ điển). | - Nghe và nhận ra sắc thái (vui, buồn, tình cảm tha thiết) của các bài hát, bản nhạc",
    "activities": "Hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.6",
    "domain": "Nghệ thuật",
    "goal": "NgT 2.6. Trẻ biết vận động nhịp nhàng phù hợp với sắc thái, nhịp điệu bài hát, bản nhạc với các hình thức(vỗ tay theo các loại tiết tấu, múa) trong vận động theo nhạc và biểu diễn.",
    "content": "- Vận động nhịp nhàng theo giai điệu, nhịp điệu và thể hiện sắc thái phù hợp với các bài hát, bản nhạc  | - Sử dụng các dụng cụ gõ đệm theo phách, nhịp, tiết tấu | - Vận động nhịp nhàng theo bài hát",
    "activities": "Hoạt động học; hoạt động ngoài trời; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.7",
    "domain": "Nghệ thuật",
    "goal": "NgT 2.7. Trẻ biết sử dụng đa dạng nhạc cụ gõ đệm chính xác theo phách, nhịp và tiết tấu trong hoạt động âm nhạc cá nhân, nhóm và biểu diễn.",
    "content": "- Làm quen với cách gõ đệm bằng tay và một số dụng cụ âm nhạc.  | - Sử dụng các dụng cụ gõ đệm theo tiết tấu như: phách, nhịp, tiết tấu. | - Phối hợp nghe nhạc và gõ đệm theo nhóm.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 2.8",
    "domain": "Nghệ thuật",
    "goal": "NgT 2.8. Trẻ chủ động, tự tin và tự nhiên biểu diễn tiết mục âm nhạc trước đông người trong chương trình, ngày hội, giao lưu và hoạt động biểu diễn của lớp.",
    "content": "- Tham gia biểu diễn hát, múa, vận động theo nhạc.  | - Biểu diễn cá nhân, nhóm, tổ và tập thể.  | - Luyện sự mạnh dạn, tự tin, tư thế và phong thái khi biểu diễn.  | - Biết chào, giới thiệu và kết thúc tiết mục phù hợp.",
    "activities": "Hoạt động học; hoạt động chiều; hoạt động lễ hội",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 3.1",
    "domain": "Nghệ thuật",
    "goal": "NgT 3.1: Trẻ chủ động khám phá, phối hợp sáng tạo nhiều loại nguyên vật liệu và cách thức tạo hình trong hoạt động tạo hình mở, hoạt động góc và dự án nghệ thuật.",
    "content": "- Khám phá các nguyên vật liệu tạo hình: giấy, màu, đất nặn, lá cây, hột hạt, que, len, vải, vật liệu tái chế…  | - Thử nghiệm các cách vẽ, tô màu, in, chấm màu, xé, cắt, dán, nặn, gấp, ghép.  | - Khuyến khích trẻ lựa chọn vật liệu và cách thực hiện theo ý thích.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động ngoài trời",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 3.2",
    "domain": "Nghệ thuật",
    "goal": "NgT 3.2. Trẻ biết phối hợp các đường nét, màu sắc, bố cục, nguyên liệu và kỹ năng tạo hình để tạo sản phẩm theo ý tưởng trong hoạt động tạo hình và nhiệm vụ nghệ thuật mở.",
    "content": "- Lựa chọn, phối hợp các nguyên vật liệu tạo hình, vật liệu trong thiên nhiên, phế liệu để tạo ra các sản phẩm. | - Biết sử dụng các vật liệu khác nhau để làm một sản phẩm đơn giản. | - Tạo sản phẩm theo đề tài, theo mẫu hoặc theo ý tưởng riêng. |",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 3.3",
    "domain": "Nghệ thuật",
    "goal": "NgT 3.3. Trẻ chủ động thuyết trình, chia sẻ cảm nhận về ý tưởng và bố cục sản phẩm khi giới thiệu sản phẩm với cô, bạn và khách tham quan.",
    "content": "- Biết cách giới thiệu, chia sẻ cảm nhận về sản phẩm. | - Quan sát, lựa chọn và trình bày ý tưởng, bố cục sản phẩm.  | - Thuyết trình, giới thiệu sản phẩm trước cô, bạn và khách tham quan.  | - Chia sẻ cảm nhận, điều trẻ thích và lý do lựa chọn cách thể hiện.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 4.1",
    "domain": "Nghệ thuật",
    "goal": "NgT 4.1. Trẻ chủ động bày tỏ suy nghĩ và cảm nhận về nhân vật, âm thanh, ánh sáng, sân khấu, trang phục và diễn xuất sau khi xem kịch, múa rối hoặc hoạt động sân khấu.",
    "content": "- Biết một số yếu tố trong hoạt động sân khấu: nhân vật, âm thanh, ánh sáng, sân khấu, trang phục, diễn xuất.  | -  Bày tỏ suy nghĩ, cảm nhận và nhận xét về những điều trẻ quan sát được. | - Quan sát, xem và cảm nhận các hoạt động kịch, múa rối, sân khấu. | - Chia sẻ điều trẻ thích, chưa thích và lý do.",
    "activities": "Hoạt động học; hoạt động chiều; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 4.2",
    "domain": "Nghệ thuật",
    "goal": "NgT 4.2. Trẻ biết thể hiện vai diễn bằng giọng điệu, nét mặt, cử chỉ, điệu bộ, lời nói và lời thoại biểu cảm trong đóng kịch, đóng vai và biểu diễn.",
    "content": "- Đóng vai nhân vật trong truyện, thơ, câu chuyện quen thuộc.  | - Sử dụng lời nói, lời thoại, giọng điệu, nét mặt, cử chỉ, điệu bộ phù hợp với nhân vật.  | - Luyện thể hiện cảm xúc của nhân vật: vui, buồn, ngạc nhiên, tức giận, sợ hãi…  | - Phối hợp với bạn khi tham gia diễn kịch.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 5.1",
    "domain": "Nghệ thuật",
    "goal": "NgT 5.1. Trẻ chủ động kết hợp sáng tạo các vật dụng để tạo chuỗi âm thanh có giai điệu hoặc tiết tấu trong hoạt động khám phá âm thanh và sáng tạo âm nhạc.",
    "content": "- Khám phá khả năng tạo âm thanh bằng cơ thể: vỗ tay, búng tay, dậm chân, gõ tay…  | - Sử dụng các đồ vật, nhạc cụ đơn giản để tạo âm thanh.  | - Thử nghiệm tạo âm thanh to – nhỏ, nhanh – chậm, cao – thấp.  | - Khuyến khích trẻ tự nghĩ ra cách tạo âm thanh và phối hợp thành tiết tấu đơn giản.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 5.2",
    "domain": "Nghệ thuật",
    "goal": "NgT 5.2. Trẻ chủ động nhảy múa ngẫu hứng, sáng tạo và giải thích ý tưởng vận động trong hoạt động vận động tự do theo nhạc.",
    "content": "- Vận động tự do theo bài hát, bản nhạc.  | - Sáng tạo động tác vận động, múa theo cảm xúc cá nhân.  | - Kết hợp nhiều động tác thành một chuỗi vận động.  | - Trình bày, chia sẻ ý tưởng hoặc câu chuyện mà trẻ muốn thể hiện qua vận động.",
    "activities": "Hoạt động học; hoạt động ngoài trời; hoạt động góc",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 6.1",
    "domain": "Nghệ thuật",
    "goal": "NgT 6.1. Trẻ chủ động tạo sản phẩm độc đáo mang dấu ấn cá nhân và đặt tên cho sản phẩm trong hoạt động tạo hình mở và dự án nghệ thuật.",
    "content": "-Sử dụng nguyên vật liệu, màu sắc, hình dạng và cách thể hiện để tạo sản phẩm.  | - Biết sản phẩm có thể thể hiện ý tưởng, sở thích và dấu ấn riêng của mình. | - Kết hợp các nguyên vật liệu, kỹ thuật khác nhau để tạo sản phẩm.  | -  Tự do thể hiện ý tưởng và tạo sản phẩm theo cách riêng.  | - Đặt tên và giới thiệu ý tưởng, điểm đặc biệt của sản phẩm.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 6.2",
    "domain": "Nghệ thuật",
    "goal": "NgT 6.2. Trẻ biết lấy cảm hứng từ nghệ thuật dân gian để sáng tạo sản phẩm theo tưởng tượng trong hoạt động khám phá nghệ thuật truyền thống và tạo hình.",
    "content": "- Làm quen với một số họa sĩ, nghệ nhân và sản phẩm nghệ thuật, thủ công.  | - Quan sát tranh dân gian, đồ gốm, đồ thủ công, họa tiết truyền thống…  | - Thử nghiệm sáng tạo tranh, đồ chơi, đồ trang trí lấy cảm hứng từ nghệ thuật truyền thống.  | - Khuyến khích trẻ biến đổi, sáng tạo theo cảm xúc và trí tưởng tượng của mình.",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 6.3",
    "domain": "Nghệ thuật",
    "goal": "NgT 6.3: Trẻ chủ động sử dụng sản phẩm cá nhân hoặc nhóm để trang trí không gian lớp học sau khi hoàn thành sản phẩm nghệ thuật và trong hoạt động trang trí lớp",
    "content": "- Lựa chọn sản phẩm tạo hình để trang trí lớp học, góc nghệ thuật, góc thiên nhiên, hành lang…  | - Tham gia thiết kế, sắp xếp, trang trí môi trường theo ý tưởng của trẻ.  | - Biết phối hợp màu sắc, hình ảnh và bố cục khi trang trí.  | - Có ý thức giữ gìn môi trường",
    "activities": "Hoạt động học; hoạt động góc; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 7.1",
    "domain": "Nghệ thuật",
    "goal": "NgT 7.1. Trẻ chủ động lựa chọn trang phục, dụng cụ và phương tiện phù hợp để thể hiện vai diễn trong đóng vai, sân khấu hóa và trò chơi kịch.",
    "content": "- Lựa chọn trang phục, mũ, mặt nạ, đạo cụ và đồ dùng phù hợp với nhân vật.  | - Biết kết hợp nhiều loại đạo cụ để tạo hình tượng nhân vật.  | - Khuyến khích trẻ tự quyết định cách thể hiện vai diễn theo ý tưởng riêng.",
    "activities": "Hoạt động góc; hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 7.2",
    "domain": "Nghệ thuật",
    "goal": "NgT 7.2. Trẻ chủ động biến tấu lời thoại và tự thiết kế, lựa chọn trang phục phù hợp với vai diễn trong hoạt động đóng kịch sáng tạo.",
    "content": "- Khuyến khích trẻ thay đổi lời thoại, cách nói, giọng điệu và cử chỉ theo tình huống.  | - Sáng tạo, thay đổi trang phục, đạo cụ phù hợp với vai diễn.  | - Xử lý những tình huống phát sinh trong khi đóng kịch.  | - Biết ứng biến và tiếp tục vai diễn khi có thay đổi.",
    "activities": "Hoạt động góc; hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  },
  {
    "code": "NgT 7.3",
    "domain": "Nghệ thuật",
    "goal": "NgT 7.3. Trẻ chủ động độc lập hoặc phối hợp với bạn sáng tác câu chuyện mới và biểu diễn trong sân khấu hóa, đóng kịch và dự án kể chuyện.",
    "content": "- Tưởng tượng và xây dựng câu chuyện, tình huống, nhân vật theo ý thích.  | - Đặt tên câu chuyện, lựa chọn nhân vật và xây dựng lời thoại đơn giản.  | - Phối hợp với bạn để phân vai, chuẩn bị đạo cụ và cùng diễn xuất.  | - Khuyến khích trẻ sáng tạo kết thúc khác nhau cho câu chuyện.",
    "activities": "Hoạt động góc; hoạt động học; hoạt động chiều",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "MỤC TIÊU lớp lá 388.docx"
  }
];

export const THEME_SCHEDULE: ThemeScheduleItem[] = [
  {
    "mainTheme": "Trường MN Hạnh phúc",
    "subTheme": "Bé vui đến trường",
    "startDate": "2026-09-07",
    "endDate": "2026-09-11",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Trường MN Hạnh phúc",
    "subTheme": "Lớp học của bé",
    "startDate": "2026-09-14",
    "endDate": "2026-09-18",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Trường MN Hạnh phúc",
    "subTheme": "Lễ hội trăng rằm",
    "startDate": "2026-09-21",
    "endDate": "2026-09-25",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Bản thân tự lập, tự tin",
    "subTheme": "Tôi và bạn có gì khác nhau",
    "startDate": "2026-09-28",
    "endDate": "2026-10-02",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Bản thân tự lập, tự tin",
    "subTheme": "Quản lý cảm xúc của bản thân",
    "startDate": "2026-10-05",
    "endDate": "2026-10-09",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Bản thân tự lập, tự tin",
    "subTheme": "Bé cần gì lớn lên và khỏe mạnh",
    "startDate": "2026-10-12",
    "endDate": "2026-10-16",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Gia đình điểm tựa yêu thương",
    "subTheme": "Ngôi nhà bé yêu",
    "startDate": "2026-10-19",
    "endDate": "2026-10-23",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Gia đình điểm tựa yêu thương",
    "subTheme": "Tổ ấm gia đình",
    "startDate": "2026-10-26",
    "endDate": "2026-10-30",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Gia đình điểm tựa yêu thương",
    "subTheme": "Đồ dùng gia đình bé",
    "startDate": "2026-11-02",
    "endDate": "2026-11-06",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Nghề quanh bé",
    "subTheme": "Bác sĩ tí hon",
    "startDate": "2026-11-09",
    "endDate": "2026-11-13",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Nghề quanh bé",
    "subTheme": "Cô giáo em",
    "startDate": "2026-11-16",
    "endDate": "2026-11-20",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Nghề quanh bé",
    "subTheme": "Công nhân cạo mủ",
    "startDate": "2026-11-23",
    "endDate": "2026-11-27",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Nghề quanh bé",
    "subTheme": "Bác nông dân",
    "startDate": "2026-11-30",
    "endDate": "2026-12-04",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Giao thông an toàn",
    "subTheme": "PTGT đường bộ",
    "startDate": "2026-12-07",
    "endDate": "2026-12-11",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Giao thông an toàn",
    "subTheme": "PTGT đường thủy, đường không",
    "startDate": "2026-12-14",
    "endDate": "2026-12-18",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Giao thông an toàn",
    "subTheme": "Em thích làm bộ đội",
    "startDate": "2026-12-21",
    "endDate": "2026-12-25",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Giao thông an toàn",
    "subTheme": "Bé học luật giao thông",
    "startDate": "2026-12-28",
    "endDate": "2027-01-01",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Tết Việt văn hóa Việt",
    "subTheme": "Xuân chia sẻ",
    "startDate": "2027-01-04",
    "endDate": "2027-01-08",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Tết Việt văn hóa Việt",
    "subTheme": "Bản sắc Tết Việt",
    "startDate": "2027-01-11",
    "endDate": "2027-01-15",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Tết Việt văn hóa Việt",
    "subTheme": "Lễ hội Xuân yêu thương",
    "startDate": "2027-01-18",
    "endDate": "2027-01-22",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới thực vật",
    "subTheme": "Sắc hoa mùa xuân",
    "startDate": "2027-01-25",
    "endDate": "2027-01-29",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới thực vật",
    "subTheme": "Hạt nẩy mầm cây lớn lên",
    "startDate": "2027-02-15",
    "endDate": "2027-02-19",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới thực vật",
    "subTheme": "Chung tay bảo vệ rừng",
    "startDate": "2027-02-22",
    "endDate": "2027-02-26",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới thực vật",
    "subTheme": "Ngày hội bà, mẹ và cô giáo",
    "startDate": "2027-03-01",
    "endDate": "2027-03-05",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới động vật",
    "subTheme": "Thú cưng nhà bé",
    "startDate": "2027-03-08",
    "endDate": "2027-03-12",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới động vật",
    "subTheme": "Tôm cua cá thi tài",
    "startDate": "2027-03-15",
    "endDate": "2027-03-19",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới động vật",
    "subTheme": "Lễ hội thú rừng",
    "startDate": "2027-03-22",
    "endDate": "2027-03-26",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Thế giới động vật",
    "subTheme": "Tiết kiệm tài nguyên nước và điện",
    "startDate": "2027-03-29",
    "endDate": "2027-04-02",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Quê hương tươi đẹp & trái đất xanh",
    "subTheme": "Bản sắc văn hóa dân tộc",
    "startDate": "2027-04-05",
    "endDate": "2027-04-09",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Quê hương tươi đẹp & trái đất xanh",
    "subTheme": "Lễ hội quả điều vàng",
    "startDate": "2027-04-12",
    "endDate": "2027-04-16",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Quê hương tươi đẹp & trái đất xanh",
    "subTheme": "Phân loại rác bảo vệ môi trường",
    "startDate": "2027-04-19",
    "endDate": "2027-04-23",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Quê hương tươi đẹp & trái đất xanh",
    "subTheme": "Kỹ năng sinh tồn thích ứng thiên tai",
    "startDate": "2027-04-26",
    "endDate": "2027-04-30",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Hành trang vững bước vào lớp 1",
    "subTheme": "Quản lý dụng cụ học tập",
    "startDate": "2027-05-03",
    "endDate": "2027-05-07",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Hành trang vững bước vào lớp 1",
    "subTheme": "Khám phá Trường tiểu học giao tiếp với cô và bạn",
    "startDate": "2027-05-10",
    "endDate": "2027-05-14",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  },
  {
    "mainTheme": "Hành trang vững bước vào lớp 1",
    "subTheme": "Tri ân trường MN Bé vào lớp 1",
    "startDate": "2027-05-17",
    "endDate": "2027-05-21",
    "schoolYear": "2026-2027",
    "ageGroup": "5-6 tuổi",
    "sourceDocument": "dự kien chu đề 2026- 2027 LÁ.doc"
  }
];

export const LESSON_FRAMEWORKS: LessonFramework[] = [
  {
    "id": "explore-math",
    "activityType": "Khám phá – Toán",
    "keywords": [
      "khám phá",
      "tìm hiểu",
      "toán",
      "đếm",
      "so sánh",
      "phân loại",
      "đo",
      "số lượng",
      "hình dạng"
    ],
    "title": "Chu trình Khám phá – Toán 5 bước",
    "steps": [
      "Bước 1. Khởi động – Tạo tình huống/nhiệm vụ có ý nghĩa",
      "Bước 2. Khám phá – Trải nghiệm",
      "Bước 3. Chia sẻ – Thảo luận",
      "Bước 4. Vận dụng – Mở rộng",
      "Bước 5. Đánh giá – Điều chỉnh"
    ],
    "sourceDocument": "SƯỜN GA.docx"
  },
  {
    "id": "corners",
    "activityType": "Hoạt động góc",
    "keywords": [
      "góc",
      "phân vai",
      "xây dựng",
      "nghệ thuật",
      "học tập"
    ],
    "title": "Hoạt động góc 5 bước",
    "steps": [
      "Bước 1. Gợi hứng thú – Hình thành và lựa chọn ý tưởng chơi",
      "Bước 2. Thỏa thuận – Lập kế hoạch chơi",
      "Bước 3. Thực hiện hoạt động chơi",
      "Bước 4. Mở rộng và phát triển trò chơi",
      "Bước 5. Chia sẻ – Đánh giá – Kết thúc chơi"
    ],
    "sourceDocument": "SƯỜN GA.docx"
  },
  {
    "id": "poetry",
    "activityType": "Đọc thơ, ca dao, đồng dao",
    "keywords": [
      "thơ",
      "ca dao",
      "đồng dao"
    ],
    "title": "Đọc thơ, ca dao, đồng dao",
    "steps": [
      "Khởi động – Gợi hứng thú",
      "Giới thiệu tác phẩm/tác giả ngắn gọn",
      "Trẻ nghe giáo viên đọc diễn cảm",
      "Đàm thoại về tác phẩm",
      "Hướng dẫn trẻ đọc thuộc, diễn cảm và lựa chọn hình thức thể hiện"
    ],
    "sourceDocument": "SƯỜN GA.docx"
  },
  {
    "id": "story-listen",
    "activityType": "Kể chuyện cho trẻ nghe",
    "keywords": [
      "kể chuyện",
      "nghe truyện",
      "truyện"
    ],
    "title": "Kể chuyện cho trẻ nghe",
    "steps": [
      "Khởi động – Gợi hứng thú",
      "Giới thiệu câu chuyện",
      "Giáo viên kể kết hợp cử chỉ/đồ dùng trực quan",
      "Đàm thoại về câu chuyện",
      "Củng cố bằng trò chơi/hoạt động nghe hiểu"
    ],
    "sourceDocument": "SƯỜN GA.docx"
  },
  {
    "id": "story-retell",
    "activityType": "Hướng dẫn trẻ kể lại chuyện",
    "keywords": [
      "kể lại",
      "kể chuyện sáng tạo",
      "đóng vai truyện"
    ],
    "title": "Hướng dẫn trẻ kể lại chuyện",
    "steps": [
      "Giới thiệu truyện",
      "Giáo viên kể/tóm tắt phù hợp",
      "Đàm thoại theo trình tự và cảm nhận",
      "Trẻ kể lại: cá nhân/phân đoạn/phân vai, khuyến khích sáng tạo"
    ],
    "sourceDocument": "SƯỜN GA.docx"
  },
  {
    "id": "letters",
    "activityType": "Làm quen chữ cái",
    "keywords": [
      "chữ cái",
      "làm quen chữ",
      "phát âm"
    ],
    "title": "Làm quen với chữ cái",
    "steps": [
      "Tạo nhu cầu muốn biết chữ cái",
      "Trẻ trải nghiệm âm và cấu tạo chữ qua nhiều giác quan",
      "Giáo viên hỗ trợ phát âm, nhận dạng và sửa sai cá nhân",
      "Trò chơi chữ cái: đa giác quan, động–tĩnh, nhóm–cá nhân"
    ],
    "sourceDocument": "SƯỜN GA.docx"
  },
  {
    "id": "physical",
    "activityType": "Tiết thể dục",
    "keywords": [
      "thể dục",
      "vận động",
      "bật",
      "nhảy",
      "ném",
      "bò",
      "trườn",
      "chạy",
      "đi"
    ],
    "title": "Tiết thể dục 5 bước",
    "steps": [
      "Bước 1. Gợi hứng thú – hình thành/lựa chọn ý tưởng",
      "Bước 2. Khám phá – Trải nghiệm nhiệm vụ vận động",
      "Bước 3. Chia sẻ – Hình thành cách thực hiện",
      "Bước 4. Thực hành – Vận dụng, mở rộng",
      "Bước 5. Chia sẻ – Đánh giá và Hồi tĩnh"
    ],
    "sourceDocument": "SƯỜN GA.docx"
  }
];


export function findThemeByDate(date: string, ageGroup: AgeGroup): ThemeScheduleItem | undefined {
  if (!date || ageGroup !== '5-6 tuổi') return undefined;
  return THEME_SCHEDULE.find((item) => date >= item.startDate && date <= item.endDate);
}

function normalized(v: string): string { return (v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }

export function suggestGoals(params: { ageGroup: AgeGroup; developmentDomain?: string; plannedActivity?: string; coreContent?: string; subTheme?: string; limit?: number; }): CurriculumGoal[] {
  if (params.ageGroup !== '5-6 tuổi') return [];
  const domain = normalized(params.developmentDomain || '');
  const activity = normalized(params.plannedActivity || '');
  const content = normalized(`${params.coreContent || ''} ${params.subTheme || ''}`);
  const aliases: Record<string,string[]> = {
    'the chat':['the chat'], 'nhan thuc':['nhan thuc'], 'ngon ngu':['ngon ngu'], 'cam xuc – xa hoi':['tinh cam – xa hoi'], 'cam xuc - xa hoi':['tinh cam – xa hoi'], 'tham my':['nghe thuat'], 'tim hieu moi truong xung quanh':['nhan thuc']
  };
  const domainTerms = aliases[domain] || [domain];
  const scored = CURRICULUM_GOALS.map((g) => {
    let score = 0;
    const gd = normalized(g.domain), ga = normalized(g.activities), gg = normalized(`${g.goal} ${g.content}`);
    if (domain && domainTerms.some((t)=>gd.includes(t))) score += 8;
    if (activity && ga.split(/[;,]/).some((a)=> activity.includes(normalized(a.trim())) || normalized(a.trim()).includes(activity))) score += 4;
    for (const token of content.split(/\s+/).filter((t)=>t.length>4)) if (gg.includes(token)) score += 0.15;
    return {g,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  const limit=params.limit || 6;
  return scored.slice(0,limit).map(x=>x.g);
}

export function findFramework(plannedActivity: string): LessonFramework | undefined {
  const value=normalized(plannedActivity);
  if (!value) return undefined;
  return LESSON_FRAMEWORKS.find((f)=>f.keywords.some((k)=>value.includes(normalized(k))));
}
