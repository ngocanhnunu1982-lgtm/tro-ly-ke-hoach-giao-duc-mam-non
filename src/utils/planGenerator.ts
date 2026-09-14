import type {
  PlanFormData,
  ActivitySection,
  GeneratedPlan,
  PlanLevel,
} from '@/types';
import {
  ACTIVITY_SECTION_TITLES,
  ACTIVITY_ICONS,
  ACTIVITY_TIMES,
  ACTIVITY_DURATIONS,
} from '@/data/constants';

interface SectionTemplate {
  objective: (d: PlanFormData) => string;
  content: (d: PlanFormData) => string;
  materials: (d: PlanFormData) => string;
  notes: (d: PlanFormData) => string;
}

const ageShort: Record<string, string> = {
  '24-36 tháng': 'nhà trẻ',
  '3-4 tuổi': 'mầm',
  '4-5 tuổi': 'chồi',
  '5-6 tuổi': 'lá',
};

function pickObjective(d: PlanFormData): string {
  if (d.objectives.trim()) return d.objectives.trim();
  return `Trẻ biết tên "${d.subTheme || d.mainTheme}", cảm nhận được vẻ đẹp và thể hiện sự thích thú qua cử chỉ, lời nói.`;
}

function detailSuffix(level: PlanLevel): string {
  if (level === 'Nhanh') return '';
  if (level === 'Chi tiết') return ' Giáo viên bao quát, hỗ trợ trẻ nhút nhát, khuyến khích trẻ tích cực tham gia.';
  return ' Giáo viên quan sát, ghi chép biểu hiện của từng trẻ; phân hóa theo năng lực cá nhân; khuyến khích trẻ nhút nhát tham gia, trẻ năng khiếu mở rộng thêm.';
}

const sectionTemplates: Record<string, SectionTemplate> = {
  'Đón trẻ – Chơi – Trò chuyện': {
    objective: (d) =>
      `Tạo tâm trạng vui vẻ, giúp trẻ hòa nhập môi trường lớp. Trò chuyện về "${d.subTheme || d.mainTheme}" để gợi mở chủ đề.`,
    content: (d) =>
      `- Giáo viên đón trẻ tại cửa lớp, chào hỏi ân cần, nhắc trẻ cất đồ dùng cá nhân.\n- Cho trẻ chơi tự do với đồ chơi trong lớp (xếp hình, khu nhà bếp…).\n- Trò chuyện nhóm nhỏ: "Con thấy "${d.subTheme || d.mainTheme}" như thế nào?", "Ở nhà con có gì giống vậy không?"\n- Liên kết với chủ đề "${d.mainTheme}" để dẫn dắt vào hoạt động cả ngày.${detailSuffix(d.level)}`,
    materials: (d) =>
      `Đồ chơi trong lớp, gối ngồi, tranh ảnh về "${d.subTheme || d.mainTheme}"${d.availableMaterials ? ', ' + d.availableMaterials : ''}.`,
    notes: (d) =>
      `Không khí ấm áp, gần gũi. ${d.weather ? `Thời tiết ${d.weather.toLowerCase()} — chú ý trang phục khi đón.` : ''} ${d.aiNotes ? 'Lưu ý: ' + d.aiNotes : ''}`.trim(),
  },
  'Thể dục sáng': {
    objective: (d) =>
      `Rèn luyện sức khoẻ, sự khéo léo cho trẻ ${ageShort[d.ageGroup]}. Khởi động nhịp nhàng trước khi vào hoạt động chính.`,
    content: (d) =>
      `- Khởi động: đi vòng sân, vung tay, xoay cổ, gập gối (2 phút).\n- Trọng tâm: bài tập phát triển chung theo nhịp điệu bài "Khúc dạo ban mai" (4–5 động tác).\n- Hồi tĩnh: đi nhẹ nhàng, hít thở sâu, vỗ tay nhẹ.${detailSuffix(d.level)}`,
    materials: (d) =>
      `Sân tập, loa, nhạc bài "Khúc dạo ban mai"${d.weather ? `, thời tiết ${d.weather.toLowerCase()}` : ''}.`,
    notes: (d) =>
      `${d.weather === 'Mưa to' || d.weather === 'Mưa nhẹ' ? 'Trời mưa — tập trong lớp, giảm cường độ.' : 'Tập ngoài trời nếu thời tiết cho phép.'} ${d.classroomCondition ? 'Lớp: ' + d.classroomCondition : ''}`.trim(),
  },
  'Hoạt động ngoài trời': {
    objective: (d) =>
      `Cho trẻ quan sát, khám phá "${d.subTheme || d.mainTheme}" trong môi trường thực tế. Phát triển vận động thô và nhận thức.`,
    content: (d) =>
      `- Dẫn trẻ ra sân, cho quan sát cây cối, vật thật liên quan đến "${d.subTheme || d.mainTheme}".\n- Trò chơi vận động: "Tìm bạn giống nhau" — trẻ tìm đồ vật có đặc điểm giống "${d.subTheme || d.mainTheme}".\n- Trò chơi тих: "Mẹ con" hoặc "Gọi tên" gắn với chủ đề "${d.mainTheme}".\n- Trò chuyện: "Con thấy gì? Con thích gì nhất?"${detailSuffix(d.level)}`,
    materials: (d) =>
      `Sân chơi${d.playgroundCondition ? ' (' + d.playgroundCondition + ')' : ''}, vật thật/tranh ảnh về "${d.subTheme || d.mainTheme}", cờ hiệu.`,
    notes: (d) =>
      `${d.weather === 'Mưa to' || d.weather === 'Mưa nhẹ' ? 'Trời mưa — chuyển hoạt động ngoài trời vào hành lang có mái che hoặc thay bằng quan sát tranh ảnh trong lớp.' : 'Đảm bảo an toàn, giáo viên bao quát toàn nhóm.'} ${d.aiNotes ? 'Lưu ý: ' + d.aiNotes : ''}`.trim(),
  },
  'Hoạt động có chủ đích': {
    objective: (d) => pickObjective(d),
    content: (d) =>
      `- Ổn định: trò chuyện/gợi mở bằng vật thật, tranh ảnh về "${d.subTheme || d.mainTheme}".\n- Giới thiệu: giáo viên cho trẻ quan sát, đàm thoại, đặt câu hỏi gợi mở về "${d.coreContent || d.subTheme || d.mainTheme}".\n- Trọng tâm: ${d.plannedActivity || `trẻ thực hiện hoạt động "${d.subTheme || d.mainTheme}" (vẽ/nhép/xé dán/đóng kịch) theo hướng dẫn của cô`}.\n- Trẻ thực hành: giáo viên bao quát, gợi mở từng nhóm, hỗ trợ trẻ gặp khó.\n- Trưng bày sản phẩm, cho trẻ tự giới thiệu và nhận xét sản phẩm của bạn.${detailSuffix(d.level)}`,
    materials: (d) =>
      `Vật thật, tranh ảnh về "${d.subTheme || d.mainTheme}"${d.availableMaterials ? ', ' + d.availableMaterials : ''}, giấy, bút màu, hồ dán, khay đựng.`,
    notes: (d) =>
      `Lĩnh vực phát triển: ${d.developmentDomain || 'Thẩm mỹ'}. ${d.aiNotes ? 'Lưu ý: ' + d.aiNotes : ''}`.trim(),
  },
  'Hoạt động góc': {
    objective: (d) =>
      `Trẻ tự chọn góc chơi theo sở thích, vận dụng kiến thức về "${d.subTheme || d.mainTheme}" vào chơi tưởng tượng, chơi xây dựng.`,
    content: (d) =>
      `- Góc thiên nhiên: chăm sóc cây/nuôi cá, quan sát "${d.subTheme || d.mainTheme}".\n- Góc xây dựng: xây "${d.mainTheme}" bằng gạch gỗ, khối lắp.\n- Góc phân vai: đóng vai "${d.subTheme || d.mainTheme}" — cô/bác/mẹ/em.\n- Góc nghệ thuật: vẽ/nhép/xé dán về "${d.subTheme || d.mainTheme}".\n- Giáo viên xen vào từng góc, đặt câu hỏi gợi mở, khuyến khích trẻ chơi cùng nhau.${detailSuffix(d.level)}`,
    materials: (d) =>
      `Đồ chơi các góc, vật liệu mở (vỏ cây, hột, giấy thừa)${d.availableMaterials ? ', ' + d.availableMaterials : ''}.`,
    notes: (d) =>
      `Chia 4–5 góc, luân phiên. ${d.classroomCondition ? 'Lớp: ' + d.classroomCondition : ''}`.trim(),
  },
  'Vệ sinh – Ăn – Ngủ': {
    objective: () =>
      `Rèn thói quen vệ sinh cá nhân, ăn uống tự lập, ngủ ngon giấc. Đảm bảo an toàn, vệ sinh thực phẩm.`,
    content: (d) =>
      `- Rửa tay bằng xà phòng trước ăn và sau vệ sinh.\n- Ăn trưa: giáo viên giới thiệu món, khuyến khích trẻ ăn hết xuất, gợi mở về "${d.subTheme || d.mainTheme}".\n- Vệ sinh sau ăn, súc miệng nước sạch.\n- Ngủ trưa: tắt đèn, tạo không gian yên tĩnh, giáo viên ru trẻ, bao quát giấc ngủ.${detailSuffix(d.level)}`,
    materials: () => `Khăn, xà phòng, nước sạch, bát đũa, giường chiếu, chăn mùng.`,
    notes: (d) =>
      `Sĩ số ${d.studentCount || '—'} trẻ. ${d.aiNotes ? 'Lưu ý: ' + d.aiNotes : ''}`.trim(),
  },
  'Hoạt động chiều': {
    objective: (d) =>
      `Củng cố kiến thức về "${d.subTheme || d.mainTheme}" qua trò chơi, vận động nhẹ hoặc xem phim/thư viện.`,
    content: (d) =>
      `- Trò chơi củng cố: "Ai nhanh hơn" — ghép tranh/vật thật về "${d.subTheme || d.mainTheme}".\n- Hoặc: xem phim/ảnh về "${d.mainTheme}", đọc truyện cổ tích liên quan.\n- Vận động nhẹ: đi dạo sân, chơi "bịt mắt bắt dê".\n- Trò chuyện tổng kết: "Hôm nay con học được gì?"${detailSuffix(d.level)}`,
    materials: (d) =>
      `Tranh ảnh, phim, sách truyện về "${d.subTheme || d.mainTheme}", đồ chơi vận động.`,
    notes: () => `Chuyển tiết tấu chậm, chuẩn bị tâm lý cho giờ ngủ/trả trẻ.`,
  },
  'Nêu gương': {
    objective: () =>
      `Khen ngợi trẻ có tiến bộ, rèn sự tự tin và tinh thần cố gắng. Tạo không khí tích cực cuối ngày.`,
    content: (d) =>
      `- Giáo viên nêu tên 2–3 trẻ có tiến bộ trong ngày (ăn ngon, ngoan, chia sẻ, sáng tạo).\n- Cho trẻ vỗ tay tuyên dương, phát sticker/stamp khích lệ.\n- Gợi mở: "Ngày mai mình sẽ làm gì tốt hơn?"${detailSuffix(d.level)}`,
    materials: () => `Sticker, stamp, bảng tuyên dương, cờ bé ngoan.`,
    notes: () => `Không so sánh tiêu cực, tập vào cố gắng thay vì kết quả.`,
  },
  'Trả trẻ': {
    objective: () =>
      `Trao đổi phụ huynh về biểu hiện trong ngày của trẻ. Tạo ấn tượng tốt, gắn kết gia đình – nhà trường.`,
    content: (d) =>
      `- Giáo viên giúp trẻ thu dọn đồ dùng, mặc áo khoác/cap nếu trời ${d.weather ? d.weather.toLowerCase() : 'lạnh'}.\n- Trao đổi ngắn với phụ huynh: "Hôm nay bé ăn ngon, chơi ngoan, học về "${d.subTheme || d.mainTheme}".\n- Nhắc phụ huynh chuẩn bị đồ dùng cho ngày mai nếu cần.\n- Chào tạm biệt trẻ và phụ huynh.${detailSuffix(d.level)}`,
    materials: () => `Sổ liên lạc, đồ dùng cá nhân của trẻ.`,
    notes: (d) =>
      `${d.weather === 'Mưa to' || d.weather === 'Mưa nhẹ' ? 'Trời mưa — đón trẻ trong sảnh, nhắc phụ huynh mang áo mưa/ô.' : 'Đảm bảo an toàn khi ra về.'} ${d.aiNotes ? 'Lưu ý: ' + d.aiNotes : ''}`.trim(),
  },
};

export function generatePlan(formData: PlanFormData): GeneratedPlan {
  const sections: ActivitySection[] = ACTIVITY_SECTION_TITLES.map((title) => {
    const tpl = sectionTemplates[title];
    return {
      id: title,
      title,
      icon: ACTIVITY_ICONS[title] || 'Circle',
      time: ACTIVITY_TIMES[title] || '',
      duration: ACTIVITY_DURATIONS[title] || '',
      objective: tpl.objective(formData),
      content: tpl.content(formData),
      materials: tpl.materials(formData),
      notes: tpl.notes(formData),
    };
  });

  const chain = [
    `Độ tuổi: ${formData.ageGroup}`,
    `Chủ đề lớn: ${formData.mainTheme}`,
    `Chủ đề nhánh: ${formData.subTheme}`,
    `Mục tiêu: ${formData.objectives || '(AI gợi ý)'}`,
    `Hoạt động trọng tâm: ${formData.plannedActivity || formData.coreContent || formData.subTheme}`,
  ].join(' → ');

  return {
    id: `plan-${Date.now()}`,
    formData,
    sections,
    createdAt: new Date().toISOString(),
    educationalChain: chain,
  };
}

export function generateObjectives(formData: Partial<PlanFormData>): string {
  const theme = formData.subTheme || formData.mainTheme || 'chủ đề';
  const age = formData.ageGroup || '3-4 tuổi';
  const domain = formData.developmentDomain || 'Thẩm mỹ';

  const base = [
    `1. Trẻ biết tên "${theme}", nhận biết được đặc điểm cơ bản qua vật thật/tranh ảnh.`,
    `2. Trẻ ${age === '24-36 tháng' ? 'chỉ và gọi tên' : 'mô tả được'} 2–3 đặc điểm nổi bật của "${theme}".`,
    `3. Trẻ hào hứng tham gia hoạt động, thể hiện sự sáng tạo qua sản phẩm/lời nói.`,
  ];

  if (domain === 'Thể chất') {
    base.push(`4. Trẻ vận động khéo léo, phối hợp tay – mắt qua hoạt động về "${theme}".`);
  } else if (domain === 'Ngôn ngữ') {
    base.push(`4. Trẻ dùng câu đơn/câu ngắn để nói về "${theme}", trả lời câu hỏi của cô.`);
  } else if (domain === 'Cảm xúc – Xã hội') {
    base.push(`4. Trẻ biết chia sẻ, hợp tác với bạn trong hoạt động về "${theme}".`);
  } else if (domain === 'Nhận thức') {
    base.push(`4. Trẻ phân loại, so sánh, tìm điểm giống/khác về "${theme}".`);
  } else if (domain === 'Tìm hiểu môi trường xung quanh') {
    base.push(`4. Trẻ biết cách chăm sóc, bảo vệ "${theme}" trong môi trường sống.`);
  } else {
    base.push(`4. Trẻ thể hiện cảm xúc, sở thích qua sản phẩm tạo ra về "${theme}".`);
  }

  return base.join('\n');
}
