import type { PlanFormData, CoreDevelopmentProfile, CoreDevelopmentItem } from '@/types';

export const CORE_QUALITIES = ['Yêu thương', 'Tôn trọng', 'Trung thực', 'Trách nhiệm'] as const;
export const FOUNDATION_COMPETENCIES = ['Giao tiếp', 'Hợp tác', 'Giải quyết vấn đề', 'Tự lực', 'Thích ứng'] as const;

function item(name: string, kind: 'Phẩm chất'|'Năng lực', evidence: string, opportunity: string, selected = true): CoreDevelopmentItem {
  return { name, kind, selected, evidence, opportunity };
}

export function deriveCoreDevelopment(d: Pick<PlanFormData,'objectives'|'plannedActivity'|'developmentDomain'|'coreContent'|'subTheme'>): CoreDevelopmentProfile {
  const text = `${d.objectives} ${d.plannedActivity} ${d.developmentDomain} ${d.coreContent} ${d.subTheme}`.toLowerCase();
  const social = /bạn|nhóm|giao tiếp|trò chuyện|kể|chia sẻ|thảo luận|hợp tác|xã hội|trường|lớp/.test(text);
  const problem = /khám phá|quan sát|vấn đề|tình huống|thử|so sánh|phân loại|tìm hiểu|nhận thức|toán/.test(text);
  const self = /chủ động|tự|lựa chọn|thực hiện|vệ sinh|phục vụ|điều chỉnh/.test(text);
  const adapt = /thay đổi|thích ứng|môi trường|tình huống|điều kiện|linh hoạt/.test(text);
  const care = /yêu|chăm sóc|giúp|gia đình|bạn|cây|con vật|môi trường/.test(text);
  const respect = social || /tôn trọng|lắng nghe|quy tắc/.test(text);
  const honest = /trung thực|thật|kết quả|quan sát|nhận xét|chia sẻ/.test(text);
  const responsibility = /trách nhiệm|giữ gìn|an toàn|quy tắc|thu dọn|vệ sinh|môi trường|chủ động/.test(text);

  const qualities = [
    item('Yêu thương','Phẩm chất','Trẻ biết quan tâm, chia sẻ hoặc chăm sóc người/sự vật gần gũi.','Cô tạo tình huống để trẻ giúp đỡ, chia sẻ và thể hiện sự quan tâm.',care),
    item('Tôn trọng','Phẩm chất','Trẻ biết lắng nghe, chờ lượt, tôn trọng lựa chọn và ý kiến của bạn.','Tổ chức trao đổi cặp/nhóm; cô ghi nhận các ý kiến khác nhau, không áp đặt.',respect),
    item('Trung thực','Phẩm chất','Trẻ nói đúng điều mình quan sát, trải nghiệm hoặc kết quả mình thực hiện.','Khuyến khích trẻ mô tả điều thực sự thấy/làm; chấp nhận kết quả khác dự đoán.',honest),
    item('Trách nhiệm','Phẩm chất','Trẻ thực hiện phần việc vừa sức, giữ gìn học liệu và cùng hoàn thành nhiệm vụ.','Giao nhiệm vụ rõ ràng, để trẻ tự thực hiện và cùng thu dọn/kiểm tra sau hoạt động.',responsibility),
  ];
  const competencies = [
    item('Giao tiếp','Năng lực','Trẻ diễn đạt ý tưởng, đặt/trả lời câu hỏi và lắng nghe người khác.','Dùng câu hỏi mở, cho trẻ trình bày bằng lời/cử chỉ/sản phẩm và phản hồi bạn.',social || problem),
    item('Hợp tác','Năng lực','Trẻ phối hợp với bạn, biết phân công/chia sẻ học liệu để hoàn thành nhiệm vụ chung.','Thiết kế ít nhất một nhiệm vụ cặp/nhóm có kết quả chung.',social),
    item('Giải quyết vấn đề','Năng lực','Trẻ nhận ra vấn đề đơn giản, dự đoán, thử cách làm và điều chỉnh khi cần.','Đưa tình huống có vấn đề phù hợp tuổi; cho trẻ đề xuất và thử nhiều cách trước khi cô hỗ trợ.',problem),
    item('Tự lực','Năng lực','Trẻ tự lựa chọn, chuẩn bị và thực hiện phần việc phù hợp khả năng.','Tạo lựa chọn thật về học liệu/cách làm; cô không làm thay việc trẻ có thể tự làm.',self || problem),
    item('Thích ứng','Năng lực','Trẻ điều chỉnh cách làm/hành vi khi điều kiện, luật chơi hoặc tình huống thay đổi.','Thay đổi một điều kiện hoặc tình huống nhỏ để trẻ lựa chọn cách ứng phó phù hợp.',adapt),
  ];

  // Không gắn máy móc cả 9: bảo đảm 2–3 năng lực và 1–2 phẩm chất trọng tâm nếu từ khóa quá ít.
  if (qualities.filter(x=>x.selected).length === 0) { qualities[1].selected = true; qualities[3].selected = true; }
  if (competencies.filter(x=>x.selected).length < 2) { competencies[0].selected = true; competencies[3].selected = true; }
  return { qualities, competencies, sourceLabel: 'Phát triển từ mục tiêu đã chọn – giáo viên có thể điều chỉnh' };
}

export function developmentPrompt(profile: CoreDevelopmentProfile): string {
  const selected = [...profile.qualities, ...profile.competencies].filter(x=>x.selected);
  return selected.map(x=>`- ${x.kind} ${x.name}: ${x.opportunity}`).join('\n');
}
