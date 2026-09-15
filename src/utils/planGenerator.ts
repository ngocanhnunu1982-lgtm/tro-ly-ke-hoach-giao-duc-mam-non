import type { PlanFormData, ActivitySection, GeneratedPlan, PlanLevel } from '@/types';
import { ACTIVITY_SECTION_TITLES, ACTIVITY_ICONS, ACTIVITY_TIMES, ACTIVITY_DURATIONS } from '@/data/constants';
import { findThemeByDate, findFramework, suggestGoals, GOAL_SOURCE, THEME_SOURCE, FRAMEWORK_SOURCE, SAMPLE_SOURCE } from '@/data/knowledgeBase';
import { deriveCoreDevelopment, developmentPrompt } from '@/data/coreDevelopment';

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

function q(label: string, teacher: string, child: string, questions: string[], support: string, observe: string): string {
  return `${label}\n  • Hoạt động của cô: ${teacher}\n  • Hoạt động của trẻ: ${child}\n  • Câu hỏi mở: ${questions.map(x => `“${x}”`).join(' — ')}\n  • Dự kiến phản hồi: Trẻ có thể trả lời bằng lời nói, cử chỉ, hành động hoặc sản phẩm; chấp nhận cách diễn đạt khác nhau nếu phù hợp trải nghiệm.\n  • Tình huống/cách hỗ trợ: ${support}\n  • Minh chứng quan sát: ${observe}`;
}

function schoolExploreContent(d: PlanFormData, steps: string[]): string {
  const activity = d.plannedActivity || 'Tìm hiểu về trường mầm non của bé';
  const selected = deriveCoreDevelopment(d);
  const active = [...selected.qualities, ...selected.competencies].filter(x => x.selected).map(x => `${x.name} (${x.priority})`).join(', ');
  return [
    q(steps[0],
      'Cô đưa tình huống: “Có một bạn mới đến trường nhưng chưa biết lớp học, sân chơi và nơi rửa tay ở đâu. Lớp mình có thể làm gì để giúp bạn?” Cô cho trẻ quan sát một hình/thẻ nhân vật và không đưa đáp án ngay.',
      'Trẻ nghe tình huống, kể kinh nghiệm khi mới đến trường, nêu nơi mình biết và đề xuất cách giúp bạn mới.',
      ['Nếu con là bạn mới, con muốn biết nơi nào trước?', 'Làm thế nào để chúng mình tìm đúng nơi?', 'Có cách nào khác không?'],
      'Nếu trẻ chưa nêu được ý tưởng, cô cho trẻ chọn giữa 2–3 thẻ hình địa điểm hoặc gợi nhớ đường trẻ đi từ cổng vào lớp; không trả lời thay.',
      'Trẻ nhận ra vấn đề, nêu ít nhất một ý tưởng/cách tìm hiểu; biết chờ lượt và ghi nhận ý kiến khác.'),
    q(steps[1],
      `Cô chia nhóm nhỏ, thống nhất ranh giới an toàn và giao nhiệm vụ khám phá cho hoạt động “${activity}”. Mỗi nhóm được tự chọn một khu vực gần lớp để quan sát; cô dùng câu hỏi gợi mở, chỉ hỗ trợ khi cần.`,
      'Trẻ tự chọn khu vực/nhiệm vụ, quan sát bằng mắt và các giác quan phù hợp, tìm dấu hiệu đặc trưng, trao đổi với bạn và ghi nhớ bằng lời, ký hiệu hoặc hình vẽ đơn giản.',
      ['Con nhìn thấy gì ở đây?', 'Dấu hiệu nào giúp con biết đây là nơi này?', 'Nơi này dùng để làm gì?', 'Điều gì cần chú ý để an toàn?'],
      'Nếu hai trẻ chọn khác nhau, cô mời trẻ nói lý do và tự thống nhất. Nếu điều kiện thực tế thay đổi, cô cho trẻ chọn khu vực thay thế tương đương.',
      'Trẻ chủ động quan sát/thu thập thông tin; tự lựa chọn; điều chỉnh cách làm khi gặp thay đổi.'),
    q(steps[2],
      'Cô mời từng nhóm giới thiệu phát hiện, đặt các kết quả cạnh nhau và khuyến khích trẻ hỏi hoặc bổ sung cho bạn. Cô chỉ khái quát sau khi trẻ đã trình bày.',
      'Trẻ trình bày nơi đã khám phá, mô tả đặc điểm/công dụng, lắng nghe nhóm khác, so sánh điểm giống–khác và bổ sung thông tin.',
      ['Nhóm con phát hiện điều gì?', 'Vì sao con biết đó là sân chơi/phòng học/nơi rửa tay?', 'Con đồng ý hay có ý kiến khác với bạn?', 'Thông tin nào sẽ giúp bạn mới nhất?'],
      'Nếu ý kiến khác nhau, cô không phán đúng/sai ngay mà hỏi “Mình có thể kiểm tra lại bằng cách nào?” để trẻ dùng quan sát làm căn cứ.',
      'Trẻ biết trình bày căn cứ, lắng nghe, tôn trọng ý kiến khác và điều chỉnh nhận định khi có thông tin mới.'),
    q(steps[3],
      'Cô giao thử thách: mỗi nhóm chọn cách hướng dẫn bạn mới từ lớp đến một địa điểm bằng lời nói, ký hiệu, sơ đồ đơn giản hoặc đóng vai. Sau lượt đầu, cô thay một điều kiện nhỏ (ví dụ lối quen thuộc tạm không đi được) để trẻ tìm phương án khác.',
      'Trẻ lựa chọn cách thể hiện, thử hướng dẫn, nhận phản hồi, điều chỉnh đường đi/cách nói/ký hiệu và thử lại.',
      ['Con chọn cách nào để bạn dễ hiểu nhất?', 'Nếu đường này không đi được thì con làm thế nào?', 'Con muốn thay đổi điều gì sau lần thử đầu?'],
      'Nếu trẻ phụ thuộc vào cô, cô đưa hai lựa chọn và hỏi trẻ tự quyết định; nếu phương án chưa phù hợp, cho trẻ thử và tự phát hiện trước khi gợi ý.',
      'Trẻ đề xuất và thử cách giải quyết; tự lực trong lựa chọn/thực hiện; thích ứng khi điều kiện thay đổi.'),
    q(steps[4],
      'Cô cùng trẻ nhìn lại nhiệm vụ ban đầu, hỏi trẻ cách nào đã giúp bạn mới hiệu quả và ghi nhận quá trình hơn là chỉ kết quả. Cô đối chiếu mục tiêu đã chọn và lưu một vài biểu hiện tiêu biểu để điều chỉnh hoạt động sau.',
      'Trẻ tự nói điều mình phát hiện, cách mình đã thử, điều muốn làm khác lần sau; có thể nhận xét tích cực về cách của bạn.',
      ['Hôm nay con đã giúp bạn mới bằng cách nào?', 'Cách nào của con đã hiệu quả?', 'Nếu làm lại con muốn đổi điều gì?', 'Con học được điều gì từ ý kiến của bạn?'],
      'Với trẻ ít nói, cô cho trẻ chỉ vào tranh/sơ đồ hoặc làm lại bằng hành động; không ép trẻ trả lời theo một câu mẫu.',
      `Quan sát mức độ đạt mục tiêu và các yếu tố đang được phát triển: ${active || 'theo mục tiêu đã chọn'}.`)
  ].join('\n\n');
}

function genericDetailedContent(d: PlanFormData, fw: NonNullable<ReturnType<typeof findFramework>>): string {
  const focus = d.coreContent || d.subTheme || d.mainTheme;
  const activity = d.plannedActivity || focus;
  const prompts = [
    ['Con đã biết gì về việc này?', 'Con muốn thử cách nào?'],
    ['Con nhận ra điều gì?', 'Điều gì xảy ra khi con thử cách khác?'],
    ['Con làm như thế nào?', 'Con có ý kiến gì khác với bạn?'],
    ['Con có thể dùng điều vừa biết vào tình huống nào khác?', 'Nếu điều kiện thay đổi con sẽ làm gì?'],
    ['Con thấy cách nào hiệu quả?', 'Lần sau con muốn thay đổi điều gì?']
  ];
  return fw.steps.map((step, i) => q(step,
    i === 0 ? `Cô tạo một tình huống/nhiệm vụ gần gũi gắn với “${focus}”, dùng vật thật/tranh/học liệu hiện có và khơi kinh nghiệm của trẻ; không nói trước kết quả.` :
    i === 1 ? `Cô tổ chức để trẻ trực tiếp thực hiện “${activity}” theo cá nhân/cặp/nhóm nhỏ; quan sát và gợi mở thay vì làm mẫu toàn bộ.` :
    i === 2 ? 'Cô mời trẻ trình bày cách làm/kết quả, đặt các ý kiến cạnh nhau và giúp trẻ kiểm tra bằng trải nghiệm hoặc bằng chứng quan sát.' :
    i === 3 ? 'Cô thay đổi một chi tiết của nhiệm vụ/học liệu để trẻ lựa chọn, vận dụng và thử phương án khác.' :
    'Cô cùng trẻ nhìn lại quá trình, đối chiếu mục tiêu, ghi nhận biểu hiện cụ thể và xác định hỗ trợ tiếp theo.',
    i === 0 ? 'Trẻ nhớ lại trải nghiệm, nêu dự đoán/ý tưởng và lựa chọn cách bắt đầu.' : i === 1 ? 'Trẻ quan sát, thao tác, thử, trao đổi và tự điều chỉnh trong khả năng.' : i === 2 ? 'Trẻ trình bày, lắng nghe, so sánh và bổ sung ý kiến.' : i === 3 ? 'Trẻ vận dụng, lựa chọn cách mới và thử lại khi cần.' : 'Trẻ tự nhận xét điều đã làm, chia sẻ phát hiện và nêu điều muốn thử tiếp.',
    prompts[Math.min(i,4)],
    'Nếu trẻ gặp khó khăn, cô giảm độ khó, cho lựa chọn hoặc gợi bằng câu hỏi/học liệu; ưu tiên để trẻ tự làm phần trẻ có thể làm.',
    'Ghi nhận bằng hành động, lời nói, lựa chọn, sản phẩm và cách trẻ tương tác; không chỉ dựa vào câu trả lời đồng thanh.'
  )).join('\n\n');
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
  const isSchoolExplore = fw.id === 'explore-math' && /trường mầm non|truong mam non/i.test(d.plannedActivity || '');
  const body = isSchoolExplore ? schoolExploreContent(d, fw.steps) : genericDetailedContent(d, fw);
  return { text: `${body}${detailSuffix(d.level)}`, structure: fw.steps, grounded: true };
}

export function generatePlan(formData: PlanFormData): GeneratedPlan {
  const themeMatch = findThemeByDate(formData.date, formData.ageGroup);
  const d = themeMatch && (!formData.mainTheme || !formData.subTheme)
    ? { ...formData, mainTheme: formData.mainTheme || themeMatch.mainTheme, subTheme: formData.subTheme || themeMatch.subTheme }
    : formData;
  const objectives = chosenObjectives(d);
  const coreDevelopment = deriveCoreDevelopment(d);
  const coreOpportunities = developmentPrompt(coreDevelopment);
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
      content: `${main.text}\n\nPHẨM CHẤT – NĂNG LỰC ĐƯỢC THỰC HIỆN TRONG HOẠT ĐỘNG\n${coreOpportunities}`,
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
    coreDevelopment,
  };
}

export function generateObjectives(formData: Partial<PlanFormData>): string {
  const goals = suggestGoals({ ageGroup: formData.ageGroup || '3-4 tuổi', developmentDomain: formData.developmentDomain, plannedActivity: formData.plannedActivity, coreContent: formData.coreContent, subTheme: formData.subTheme, limit: 2 });
  if (goals.length) return goals.map(g => g.goal).join('\n');
  return `AI đề xuất – cần giáo viên kiểm tra: Chưa có bộ mục tiêu chuyên môn đã nạp cho ${formData.ageGroup || 'độ tuổi này'}.`;
}
