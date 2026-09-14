import type { AgeGroup, DayOfWeek, PlanLevel } from '@/types';

export const AGE_GROUPS: { value: AgeGroup; label: string; desc: string }[] = [
  { value: '24-36 tháng', label: '24–36 tháng', desc: 'Lớp nhà trẻ' },
  { value: '3-4 tuổi', label: '3–4 tuổi', desc: 'Lớp mầm' },
  { value: '4-5 tuổi', label: '4–5 tuổi', desc: 'Lớp chồi' },
  { value: '5-6 tuổi', label: '5–6 tuổi', desc: 'Lớp lá' },
];

export const DAYS_OF_WEEK: DayOfWeek[] = [
  'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ nhật',
];

export const PLAN_LEVELS: { value: PlanLevel; label: string; desc: string; icon: string }[] = [
  { value: 'Nhanh', label: 'Nhanh', desc: 'Kế hoạch súc tích, đi thẳng vào hoạt động', icon: '⚡' },
  { value: 'Chi tiết', label: 'Chi tiết', desc: 'Mục tiêu, nội dung, cách tổ chức đầy đủ', icon: '📋' },
  { value: 'Hồ sơ chuyên môn', label: 'Hồ sơ chuyên môn', desc: 'Đầy đủ mục tiêu theo chỉ dẫn, phương pháp, đánh giá', icon: '🎓' },
];

export const DEVELOPMENT_DOMAINS = [
  'Thể chất',
  'Nhận thức',
  'Ngôn ngữ',
  'Cảm xúc – Xã hội',
  'Thẩm mỹ',
  'Tìm hiểu môi trường xung quanh',
];

export const MAIN_THEMES = [
  'Gia đình',
  'Trường mầm non',
  'Động vật',
  'Thực vật',
  'Phương tiện giao thông',
  'Thời tiết – Mùa',
  'Bản thân tôi',
  'Quê hương – Đất nước',
  'Tết – Lễ hội',
  'Nghề nghiệp',
];

export const WEATHER_OPTIONS = [
  'Nắng đẹp', 'Nắng nhẹ', 'Nhiều mây', 'Mưa nhẹ', 'Mưa to', 'Mát mẻ', 'Lạnh', 'Nóng bức',
];

export const ACTIVITY_SECTION_TITLES = [
  'Đón trẻ – Chơi – Trò chuyện',
  'Thể dục sáng',
  'Hoạt động ngoài trời',
  'Hoạt động có chủ đích',
  'Hoạt động góc',
  'Vệ sinh – Ăn – Ngủ',
  'Hoạt động chiều',
  'Nêu gương',
  'Trả trẻ',
] as const;

export const ACTIVITY_ICONS: Record<string, string> = {
  'Đón trẻ – Chơi – Trò chuyện': 'HeartHandshake',
  'Thể dục sáng': 'Activity',
  'Hoạt động ngoài trời': 'Trees',
  'Hoạt động có chủ đích': 'Target',
  'Hoạt động góc': 'Puzzle',
  'Vệ sinh – Ăn – Ngủ': 'Utensils',
  'Hoạt động chiều': 'Sunset',
  'Nêu gương': 'Star',
  'Trả trẻ': 'Home',
};

export const ACTIVITY_TIMES: Record<string, string> = {
  'Đón trẻ – Chơi – Trò chuyện': '7:00 – 7:30',
  'Thể dục sáng': '7:30 – 7:50',
  'Hoạt động ngoài trời': '7:50 – 8:30',
  'Hoạt động có chủ đích': '8:30 – 9:15',
  'Hoạt động góc': '9:15 – 10:00',
  'Vệ sinh – Ăn – Ngủ': '10:00 – 14:00',
  'Hoạt động chiều': '14:30 – 15:30',
  'Nêu gương': '15:30 – 15:50',
  'Trả trẻ': '15:50 – 16:30',
};

export const ACTIVITY_DURATIONS: Record<string, string> = {
  'Đón trẻ – Chơi – Trò chuyện': '30 phút',
  'Thể dục sáng': '20 phút',
  'Hoạt động ngoài trời': '40 phút',
  'Hoạt động có chủ đích': '45 phút',
  'Hoạt động góc': '45 phút',
  'Vệ sinh – Ăn – Ngủ': '240 phút',
  'Hoạt động chiều': '60 phút',
  'Nêu gương': '20 phút',
  'Trả trẻ': '40 phút',
};
