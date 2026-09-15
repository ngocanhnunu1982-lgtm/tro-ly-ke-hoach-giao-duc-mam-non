import type { PlanFormData, CoreDevelopmentProfile, CoreDevelopmentItem } from '@/types';

export const CORE_QUALITIES = ['Yêu thương', 'Tôn trọng', 'Trung thực', 'Trách nhiệm'] as const;
export const FOUNDATION_COMPETENCIES = ['Giao tiếp', 'Hợp tác', 'Giải quyết vấn đề', 'Tự lực', 'Thích ứng'] as const;
type Priority = 'Trọng tâm' | 'Phối hợp' | 'Không trọng tâm';

function item(name: string, kind: 'Phẩm chất'|'Năng lực', evidence: string, opportunity: string, priority: Priority): CoreDevelopmentItem {
  return { name, kind, selected: priority !== 'Không trọng tâm', priority, evidence, opportunity };
}
function has(text:string, re:RegExp){ return re.test(text); }
function priority(score:number, max:number): Priority { return score === max && score >= 3 ? 'Trọng tâm' : score >= 2 ? 'Phối hợp' : 'Không trọng tâm'; }

export function deriveCoreDevelopment(d: Pick<PlanFormData,'objectives'|'plannedActivity'|'developmentDomain'|'coreContent'|'subTheme'>): CoreDevelopmentProfile {
  const objectives = d.objectives.toLowerCase();
  const context = `${d.plannedActivity} ${d.developmentDomain} ${d.coreContent} ${d.subTheme}`.toLowerCase();
  const all = `${objectives} ${context}`;

  // Chấm điểm theo bằng chứng trong MỤC TIÊU GỐC trước, bối cảnh hoạt động chỉ bổ trợ.
  // Nhờ vậy không còn hiện tượng thấy “trường/lớp/khám phá” rồi tự gắn gần đủ cả 9 yếu tố.
  const q = {
    care: (has(objectives,/quan tâm|chia sẻ|giúp đỡ|chăm sóc|yêu thương/) ? 3:0) + (has(context,/chăm sóc|giúp đỡ|chia sẻ/) ? 1:0),
    respect: (has(objectives,/tôn trọng|lắng nghe|chờ lượt|ứng xử phù hợp với con người|quy tắc/) ? 3:0) + (has(context,/thảo luận|trao đổi|bạn|nhóm/) ? 1:0),
    honest: (has(objectives,/trung thực|nói thật|đúng sự thật|thừa nhận|kết quả quan sát/) ? 3:0) + (has(context,/ghi nhận kết quả|đối chiếu kết quả/) ? 1:0),
    responsibility: (has(objectives,/trách nhiệm|giữ gìn|hoàn thành nhiệm vụ|thực hiện phần việc|chủ động thực hiện|vệ sinh|an toàn/) ? 3:0) + (has(context,/thu dọn|giữ gìn|nhiệm vụ/) ? 1:0),
  };
  const c = {
    communication: (has(objectives,/giao tiếp|trao đổi|trình bày|diễn đạt|đặt câu hỏi|trả lời|lắng nghe/) ? 3:0) + (has(context,/trò chuyện|kể|thảo luận|trao đổi/) ? 1:0),
    cooperation: (has(objectives,/hợp tác|phối hợp|cùng bạn|nhóm|phân công|nhiệm vụ chung/) ? 3:0) + (has(context,/cặp|nhóm|cùng bạn/) ? 1:0),
    problem: (has(objectives,/phát hiện vấn đề|giải quyết|vấn đề|dự đoán|thử cách|tìm cách/) ? 4:0) + (has(context,/khám phá|tìm hiểu|tình huống/) ? 1:0),
    self: (has(objectives,/tự lực|tự phục vụ|chủ động lựa chọn|chủ động thực hiện|tự thực hiện|lựa chọn và thực hiện/) ? 4:0) + (has(context,/tự chọn|lựa chọn/) ? 1:0),
    adapt: (has(objectives,/thích ứng|điều chỉnh hành vi|linh hoạt|điều kiện.*thay đổi|môi trường.*thay đổi|tình huống thực tế/) ? 4:0) + (has(context,/thay đổi|tình huống/) ? 1:0),
  };

  const qMax = Math.max(...Object.values(q));
  const cMax = Math.max(...Object.values(c));
  let qualities = [
    item('Yêu thương','Phẩm chất','Trẻ biết quan tâm, chia sẻ hoặc chăm sóc người/sự vật gần gũi.','Tạo tình huống thật để trẻ giúp đỡ, chia sẻ hoặc chăm sóc; chỉ đánh giá khi trẻ có cơ hội thể hiện.',priority(q.care,qMax)),
    item('Tôn trọng','Phẩm chất','Trẻ biết lắng nghe, chờ lượt, tôn trọng lựa chọn, con người và quy tắc phù hợp.','Cho trẻ trao đổi/lựa chọn và ghi nhận ý kiến khác nhau; không áp đặt câu trả lời.',priority(q.respect,qMax)),
    item('Trung thực','Phẩm chất','Trẻ nói đúng điều mình quan sát, trải nghiệm hoặc kết quả mình thực hiện.','Khuyến khích trẻ nói điều thực sự thấy/làm và chấp nhận kết quả khác dự đoán.',priority(q.honest,qMax)),
    item('Trách nhiệm','Phẩm chất','Trẻ chủ động thực hiện phần việc vừa sức, giữ gìn học liệu và hoàn thành nhiệm vụ.','Giao phần việc rõ ràng, để trẻ tự thực hiện và kiểm tra/thu dọn sau hoạt động.',priority(q.responsibility,qMax)),
  ];
  let competencies = [
    item('Giao tiếp','Năng lực','Trẻ diễn đạt ý tưởng, đặt/trả lời câu hỏi và lắng nghe người khác.','Dùng câu hỏi mở; cho trẻ trình bày bằng lời/cử chỉ/sản phẩm và phản hồi bạn.',priority(c.communication,cMax)),
    item('Hợp tác','Năng lực','Trẻ phối hợp với bạn, biết chia sẻ học liệu hoặc phần việc để đạt kết quả chung.','Chỉ gắn Hợp tác khi có nhiệm vụ cặp/nhóm thực sự cần trẻ cùng hoàn thành.',priority(c.cooperation,cMax)),
    item('Giải quyết vấn đề','Năng lực','Trẻ nhận ra vấn đề đơn giản, dự đoán, thử cách làm và điều chỉnh khi cần.','Đưa tình huống có vấn đề phù hợp tuổi; cho trẻ đề xuất và thử cách trước khi cô hỗ trợ.',priority(c.problem,cMax)),
    item('Tự lực','Năng lực','Trẻ tự lựa chọn và thực hiện phần việc phù hợp khả năng, hạn chế phụ thuộc người lớn.','Tạo lựa chọn thật về học liệu/cách làm; cô không làm thay việc trẻ có thể tự làm.',priority(c.self,cMax)),
    item('Thích ứng','Năng lực','Trẻ điều chỉnh cách làm/hành vi khi điều kiện hoặc tình huống thay đổi.','Thay đổi một điều kiện nhỏ hoặc đưa tình huống thực tế để trẻ lựa chọn cách ứng phó phù hợp.',priority(c.adapt,cMax)),
  ];

  // Giới hạn để tránh gắn máy móc: tối đa 2 phẩm chất và 3 năng lực được đưa vào tiến trình.
  const trim = (arr: CoreDevelopmentItem[], max:number) => {
    const rank = (x:CoreDevelopmentItem) => x.priority==='Trọng tâm'?2:x.priority==='Phối hợp'?1:0;
    const chosen = arr.filter(x=>x.selected).sort((a,b)=>rank(b)-rank(a)).slice(0,max).map(x=>x.name);
    return arr.map(x => chosen.includes(x.name) ? x : {...x, selected:false, priority:'Không trọng tâm' as const});
  };
  qualities = trim(qualities,2);
  competencies = trim(competencies,3);

  // Nếu mục tiêu chưa có căn cứ rõ cho phẩm chất, không tự bịa: để trống và báo giáo viên cân nhắc.
  return { qualities, competencies, sourceLabel: 'Phân tích từ mục tiêu gốc: Trọng tâm – Phối hợp – Không trọng tâm; giáo viên có thể điều chỉnh' };
}

export function developmentPrompt(profile: CoreDevelopmentProfile): string {
  const selected = [...profile.qualities, ...profile.competencies].filter(x=>x.selected);
  if (!selected.length) return '- Chưa xác định phẩm chất/năng lực có căn cứ trực tiếp từ mục tiêu; giáo viên cân nhắc bổ sung nếu tiến trình tạo cơ hội thực tế.';
  return selected.map(x=>`- ${x.kind} ${x.name} (${x.priority}): ${x.opportunity}`).join('\n');
}
