import type { PlanFormData, ActivitySection, GeneratedPlan, PlanLevel } from '@/types';
import { ACTIVITY_SECTION_TITLES, ACTIVITY_ICONS, ACTIVITY_TIMES, ACTIVITY_DURATIONS } from '@/data/constants';
import { findThemeByDate, findFramework, suggestGoals, GOAL_SOURCE, THEME_SOURCE, FRAMEWORK_SOURCE, SAMPLE_SOURCE } from '@/data/knowledgeBase';

function detailSuffix(level: PlanLevel): string {
  if (level === 'Nhanh') return '';
  if (level === 'Chi tiết') return ' Cô quan sát, gợi mở và hỗ trợ theo nhu cầu; ưu tiên để trẻ tự trải nghiệm và trình bày cách làm.';
  return ' Cô quan sát biểu hiện năng lực, ghi nhận mức độ đạt mục tiêu, phân hóa hỗ trợ và dùng kết quả để điều chỉnh hoạt động tiếp theo.';
}

function chosenObjectives(d: PlanFormData): string {
  if (d.objectives.trim()) return d.objectives.trim();
  const goals = suggestGoals({ ageGroup: d.ageGroup, developmentDomain: d.developmentDomain, plannedActivity: d.plannedActivity, coreContent: d.coreContent, subTheme: d.subTheme, limit: 3 });
  if (goals.length) return goals.map(g => g.goal).join('\n');
  return `AI đề xuất – cần giáo viên kiểm tra: Trẻ tham gia tích cực hoạt động về “${d.subTheme || d.mainTheme}”, biết quan sát, trao đổi và vận dụng điều đã trải nghiệm.`;
}

function source(label: string, name: string, grounded = true) {
  return { documentId: name, documentName: name, label, confidence: grounded ? 'Tài liệu cung cấp' as const : 'AI đề xuất – cần giáo viên kiểm tra' as const };
}

function mainActivityContent(d: PlanFormData): { text: string; structure?: string[]; grounded: boolean } {
  const fw = findFramework(`${d.plannedActivity} ${d.developmentDomain}`);
  const focus = d.coreContent || d.subTheme || d.mainTheme;
  if (!fw) {
    return {
      grounded: false,
      text: `Sườn chuyên môn tương ứng chưa được nhận diện trong tài liệu đã nạp.\n- Gợi hứng thú bằng tình huống/vật thật gần gũi với “${focus}”.\n- Cho trẻ trực tiếp quan sát, thao tác, trao đổi theo cặp/nhóm nhỏ.\n- Cô đặt câu hỏi mở, không đưa đáp án ngay.\n- Trẻ chia sẻ kết quả và vận dụng vào tình huống mới.\n- Cô quan sát đối chiếu mục tiêu và ghi nhận để điều chỉnh.${detailSuffix(d.level)}`,
    };
  }
  const body = fw.steps.map((step, i) => {
    if (i === 0) return `* ${step}: Tạo tình huống có ý nghĩa gắn với “${focus}”; khơi kinh nghiệm đã có và để trẻ nêu dự đoán/ý tưởng.`;
    if (i === 1) return `* ${step}: Trẻ trực tiếp quan sát, thao tác, thử nghiệm hoặc thực hiện nhiệm vụ “${d.plannedActivity || focus}” theo cá nhân/cặp/nhóm nhỏ; cô quan sát và gợi mở.`;
    if (i === 2) return `* ${step}: Trẻ trình bày cách làm, so sánh kết quả, lắng nghe bạn; cô kết nối ý kiến và giúp trẻ khái quát điều vừa khám phá.`;
    if (i === 3) return `* ${step}: Thay đổi học liệu/tình huống để trẻ vận dụng kinh nghiệm, tự lựa chọn cách thực hiện và sáng tạo phương án mới.`;
    return `* ${step}: Cô quan sát hành động của trẻ đối chiếu mục tiêu; kết hợp trò chuyện, sản phẩm, lời giải thích và tự/nhận xét của bạn để điều chỉnh hoạt động sau.`;
  }).join('\n');
  return { text: `${body}${detailSuffix(d.level)}`, structure: fw.steps, grounded: true };
}

export function generatePlan(formData: PlanFormData): GeneratedPlan {
  const themeMatch = findThemeByDate(formData.date, formData.ageGroup);
  const d = themeMatch && (!formData.mainTheme || !formData.subTheme)
    ? { ...formData, mainTheme: formData.mainTheme || themeMatch.mainTheme, subTheme: formData.subTheme || themeMatch.subTheme }
    : formData;
  const objectives = chosenObjectives(d);
  const main = mainActivityContent(d);

  const templates: Record<string, Pick<ActivitySection,'objective'|'content'|'materials'|'notes'> & { structure?: string[]; sourceName: string; sourceLabel: string; grounded?: boolean }> = {
    'Đón trẻ – Chơi – Trò chuyện': {
      objective: `Trẻ vui vẻ đến lớp, thực hiện nề nếp tự phục vụ; mạnh dạn trò chuyện và chia sẻ kinh nghiệm liên quan đến “${d.subTheme || d.mainTheme}”.`,
      content: `1. Đón trẻ niềm nở; trao đổi ngắn với phụ huynh về tình hình trẻ.\n2. Nhắc trẻ chào hỏi, cất đồ dùng đúng nơi và chủ động chọn hoạt động nhẹ.\n3. Trò chuyện nhóm nhỏ bằng tranh/vật thật: “Con biết gì về ${d.subTheme || d.mainTheme}?”, “Con muốn tìm hiểu điều gì hôm nay?”.\n4. Ghi nhận ý kiến của trẻ để nối sang hoạt động trong ngày.${detailSuffix(d.level)}`,
      materials: `Khu đón trẻ an toàn, đồ chơi bàn, sách/tranh/vật thật liên quan đến “${d.subTheme || d.mainTheme}”${d.availableMaterials ? `; học liệu hiện có: ${d.availableMaterials}` : ''}.`,
      notes: 'Không ép trẻ trả lời; ưu tiên trò chuyện tự nhiên và quan sát trạng thái cảm xúc đầu ngày.', sourceName: SAMPLE_SOURCE, sourceLabel: 'Cấu trúc kế hoạch mẫu'
    },
    'Thể dục sáng': {
      objective: d.ageGroup === '5-6 tuổi' ? 'TC 1.1. Trẻ chủ động, hào hứng tham gia các hoạt động thể chất hằng ngày.' : 'AI đề xuất – cần giáo viên kiểm tra: Trẻ hào hứng vận động, phối hợp các động tác phù hợp độ tuổi.',
      content: `- Khởi động: đi/chạy thay đổi kiểu theo hiệu lệnh.\n- Bài tập phát triển chung: hô hấp, tay-vai, bụng-lườn, chân-bật; phối hợp nhịp nhàng.\n- Vận động ngắn gắn không khí chủ đề nhưng không lặp nội dung hoạt động học.\n- Hồi tĩnh: đi nhẹ, hít thở và nhận biết trạng thái cơ thể.${detailSuffix(d.level)}`,
      materials: `Sân/lớp đủ khoảng trống, nhạc và dụng cụ vận động hiện có.`,
      notes: `${/mưa/i.test(d.weather) ? 'Nếu mưa: chuyển vào lớp/hành lang, giảm phạm vi di chuyển và kiểm tra nền chống trượt.' : 'Kiểm tra sân, khoảng cách và dụng cụ trước khi tập.'}`, sourceName: d.ageGroup === '5-6 tuổi' ? GOAL_SOURCE : SAMPLE_SOURCE, sourceLabel: d.ageGroup === '5-6 tuổi' ? 'Mục tiêu chương trình thí điểm' : 'Cấu trúc kế hoạch mẫu', grounded: d.ageGroup === '5-6 tuổi'
    },
    'Hoạt động ngoài trời': {
      objective: `Trẻ chủ động quan sát và trải nghiệm môi trường thực tế; biết trao đổi, hợp tác và thực hiện quy tắc an toàn.`,
      content: `* Bước 1. Ổn định – tạo hứng thú: nêu nhiệm vụ quan sát gần gũi với “${d.subTheme || d.mainTheme}”.\n* Bước 2. Quan sát – trải nghiệm: trẻ dùng giác quan, trao đổi cặp/nhóm; cô hỏi “Con nhận ra điều gì?”, “Vì sao con nghĩ vậy?”.\n* Bước 3. Trò chơi vận động/có luật: chọn trò chơi phù hợp sân và mục tiêu, tránh lặp trò đã dùng gần đây.\n* Bước 4. Chơi tự chọn/trò chơi dân gian: trẻ chọn khu vực, học liệu và bạn chơi.\n* Bước 5. Chia sẻ – thu dọn – vệ sinh: trẻ kể một phát hiện, cùng thu học liệu và rửa tay.${detailSuffix(d.level)}`,
      materials: `${d.playgroundCondition || 'Khu vực sân đã khảo sát'}; học liệu mở/vật thật an toàn${d.availableMaterials ? `; ${d.availableMaterials}` : ''}.`,
      notes: `${/mưa/i.test(d.weather) ? 'Phương án thay thế: tổ chức quan sát tại hành lang/cửa sổ hoặc trải nghiệm vật thật trong lớp; không cố đưa trẻ ra sân.' : 'Bao quát nhóm, xác định ranh giới chơi và nguy cơ trước hoạt động.'}`, sourceName: SAMPLE_SOURCE, sourceLabel: 'Sườn ngoài trời từ kế hoạch mẫu'
    },
    'Hoạt động có chủ đích': {
      objective: objectives,
      content: main.text,
      materials: `Ưu tiên vật thật/học liệu mở và đồ dùng lớp đang có${d.availableMaterials ? `: ${d.availableMaterials}` : ''}. Chỉ bổ sung vật liệu dễ kiếm, an toàn và phù hợp nhiệm vụ.`,
      notes: main.grounded ? `Sử dụng sườn hoạt động được nhận diện từ ${FRAMEWORK_SOURCE}.` : 'AI đề xuất – cần giáo viên kiểm tra vì chưa nhận diện chắc chắn sườn chuyên môn tương ứng.',
      structure: main.structure, sourceName: main.grounded ? FRAMEWORK_SOURCE : 'AI', sourceLabel: main.grounded ? 'Sườn giáo án' : 'AI đề xuất', grounded: main.grounded
    },
    'Hoạt động góc': {
      objective: `Trẻ chủ động lựa chọn ý tưởng, vai chơi, bạn chơi; biết thỏa thuận, hợp tác và mở rộng nội dung chơi từ trải nghiệm trong ngày.`,
      content: `* Bước 1. Gợi hứng thú – Hình thành và lựa chọn ý tưởng chơi: cô giới thiệu môi trường/học liệu mở, trẻ nêu ý tưởng.\n* Bước 2. Thỏa thuận – Lập kế hoạch chơi: trẻ chọn góc, vai, bạn và thống nhất cách chơi.\n* Bước 3. Thực hiện hoạt động chơi: trẻ chủ động chơi; cô quan sát, gợi mở khi cần, không làm thay.\n* Bước 4. Mở rộng và phát triển trò chơi: bổ sung tình huống/học liệu để trẻ thay đổi vai, phối hợp và giải quyết vấn đề.\n* Bước 5. Chia sẻ – Đánh giá – Kết thúc: trẻ chia sẻ quá trình chơi, tự/nhận xét bạn và cùng thu dọn.${detailSuffix(d.level)}`,
      materials: `Các góc phù hợp không gian lớp; học liệu mở và vật liệu sẵn có${d.availableMaterials ? `: ${d.availableMaterials}` : ''}.`,
      notes: 'Không áp đặt tất cả góc phải cùng một nội dung chủ đề; ưu tiên hứng thú, lựa chọn và mạch chơi của trẻ.', structure: ['Gợi hứng thú – lựa chọn ý tưởng','Thỏa thuận – lập kế hoạch','Thực hiện chơi','Mở rộng trò chơi','Chia sẻ – đánh giá – kết thúc'], sourceName: FRAMEWORK_SOURCE, sourceLabel: 'Sườn Hoạt động góc'
    },
    'Vệ sinh – Ăn – Ngủ': {
      objective: 'Rèn nề nếp vệ sinh, tự phục vụ, văn minh trong ăn uống và nghỉ ngơi; bảo đảm sức khỏe và an toàn.',
      content: `- Trẻ rửa tay đúng thời điểm, chuẩn bị chỗ ăn và thực hiện việc vừa sức.\n- Trong bữa ăn: cô giới thiệu món ngắn gọn, khuyến khích tự xúc, không ép ăn; theo dõi trẻ cần hỗ trợ.\n- Sau ăn: vệ sinh cá nhân, sắp xếp chỗ ngủ.\n- Ngủ trưa: không gian yên tĩnh, thoáng; cô bao quát sức khỏe và tư thế ngủ.`,
      materials: 'Nước sạch, xà phòng, khăn, đồ dùng ăn uống và giường/chiếu theo điều kiện lớp.',
      notes: 'Không dùng nội dung chủ đề để làm gián đoạn nhu cầu ăn, ngủ, vệ sinh thực tế của trẻ.', sourceName: SAMPLE_SOURCE, sourceLabel: 'Cấu trúc kế hoạch mẫu'
    },
    'Hoạt động chiều': {
      objective: `Củng cố hoặc mở rộng một nội dung đã trải nghiệm trong ngày; tạo cơ hội cho trẻ thực hành theo nhu cầu.`,
      content: `- Nhắc lại trải nghiệm nổi bật bằng câu hỏi mở, sản phẩm hoặc vật thật.\n- Tổ chức một nhiệm vụ ngắn để trẻ vận dụng: phân loại, kể lại, hoàn thiện sản phẩm, trò chơi học tập hoặc kỹ năng tự phục vụ tùy mục tiêu.\n- Cho trẻ chơi theo ý thích; cô hỗ trợ nhóm/trẻ còn cần củng cố.${detailSuffix(d.level)}`,
      materials: 'Sản phẩm/học liệu còn lại từ hoạt động trong ngày và đồ chơi lớp.',
      notes: 'Không biến sinh hoạt chiều thành một “tiết học” thứ hai; ưu tiên nhẹ nhàng, củng cố và lựa chọn.', sourceName: SAMPLE_SOURCE, sourceLabel: 'Cấu trúc kế hoạch mẫu'
    },
    'Nêu gương': {
      objective: 'Trẻ biết nhìn lại hành vi tích cực của bản thân và bạn, mạnh dạn chia sẻ điều mình đã cố gắng.',
      content: `- Trẻ sửa sang quần áo, ngồi vòng tròn.\n- Cùng nhắc tiêu chí bé ngoan/việc tốt của ngày; mời trẻ tự nhận xét và nêu điều tốt của bạn.\n- Cô ghi nhận cụ thể sự cố gắng, tránh so sánh tiêu cực; động viên mục tiêu nhỏ cho ngày sau.\n- Cuối tuần thực hiện nội dung nêu gương cuối tuần theo nề nếp của lớp.`,
      materials: 'Bảng/cờ/hoa bé ngoan theo nề nếp của lớp (nếu có).',
      notes: 'Khen hành vi và nỗ lực cụ thể; tôn trọng trẻ chưa đạt và tạo cơ hội sửa đổi.', sourceName: SAMPLE_SOURCE, sourceLabel: 'Cấu trúc kế hoạch mẫu'
    },
    'Trả trẻ': {
      objective: 'Trẻ tự chuẩn bị đồ dùng cá nhân, chào hỏi lễ phép; giáo viên trao đổi cần thiết với phụ huynh.',
      content: `- Cùng trẻ thu dọn đồ chơi, kiểm tra đồ dùng cá nhân.\n- Nhắc trẻ chào cô, chào bạn và người đón.\n- Trao đổi ngắn với phụ huynh về sức khỏe, cảm xúc hoặc điểm cần phối hợp; không bịa nhận xét khi chưa có quan sát thực tế.`,
      materials: 'Đồ dùng cá nhân, sổ/ứng dụng liên lạc nếu lớp sử dụng.',
      notes: /mưa/i.test(d.weather) ? 'Tổ chức trả trẻ tại khu vực khô ráo, tránh trơn trượt và ùn tại cửa.' : 'Bảo đảm bàn giao đúng người đón trẻ.', sourceName: SAMPLE_SOURCE, sourceLabel: 'Cấu trúc kế hoạch mẫu'
    },
  };

  const sections: ActivitySection[] = ACTIVITY_SECTION_TITLES.map((title) => {
    const tpl = templates[title];
    return { id: title, title, icon: ACTIVITY_ICONS[title] || 'Circle', time: ACTIVITY_TIMES[title] || '', duration: ACTIVITY_DURATIONS[title] || '', objective: tpl.objective, content: tpl.content, materials: tpl.materials, notes: tpl.notes, structure: tpl.structure, source: source(tpl.sourceLabel, tpl.sourceName, tpl.grounded !== false) };
  });

  const selectedGoals = suggestGoals({ ageGroup: d.ageGroup, developmentDomain: d.developmentDomain, plannedActivity: d.plannedActivity, coreContent: d.coreContent, subTheme: d.subTheme, limit: 3 });
  const warnings: string[] = [];
  if (d.ageGroup !== '5-6 tuổi') warnings.push('Chưa có bộ mục tiêu chuyên môn được tải lên cho độ tuổi này. Mục tiêu AI đề xuất cần giáo viên kiểm tra.');
  if (d.ageGroup === '5-6 tuổi' && !themeMatch && d.date) warnings.push('Ngày đã chọn không nằm trong lịch chủ đề 5–6 tuổi đang được nạp hoặc thuộc thời gian nghỉ/ôn tập.');
  if (!main.grounded) warnings.push('Chưa nhận diện chắc chắn sườn chuyên môn cho hoạt động có chủ đích.');

  return {
    id: `plan-${Date.now()}`,
    formData: { ...d, objectives }, sections, createdAt: new Date().toISOString(),
    educationalChain: [`Độ tuổi: ${d.ageGroup}`, `Chủ đề lớn: ${d.mainTheme}`, `Chủ đề nhánh: ${d.subTheme}`, `Mục tiêu: ${selectedGoals.length ? selectedGoals.map(g=>g.code).join(', ') : 'giáo viên/AI đề xuất'}`, `Hoạt động trọng tâm: ${d.plannedActivity || d.coreContent || d.subTheme}`].join(' → '),
    objectiveSource: source(selectedGoals.length ? 'Mục tiêu chương trình thí điểm' : 'AI đề xuất', selectedGoals.length ? GOAL_SOURCE : 'AI', selectedGoals.length > 0),
    themeSource: themeMatch ? source('Chủ đề theo kế hoạch năm', THEME_SOURCE, true) : undefined,
    reviewWarnings: warnings,
  };
}

export function generateObjectives(formData: Partial<PlanFormData>): string {
  const goals = suggestGoals({ ageGroup: formData.ageGroup || '3-4 tuổi', developmentDomain: formData.developmentDomain, plannedActivity: formData.plannedActivity, coreContent: formData.coreContent, subTheme: formData.subTheme, limit: 6 });
  if (goals.length) return goals.map(g => g.goal).join('\n');
  return `AI đề xuất – cần giáo viên kiểm tra: Chưa có bộ mục tiêu chuyên môn đã nạp cho ${formData.ageGroup || 'độ tuổi này'}.`;
}
