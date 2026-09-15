import { useApp } from '@/context/AppContext';
import { ArrowLeft, Database, FileText, Target, CalendarRange, ListTree, BookOpenCheck } from 'lucide-react';
import { CURRICULUM_GOALS, THEME_SCHEDULE, LESSON_FRAMEWORKS, GOAL_SOURCE, THEME_SOURCE, FRAMEWORK_SOURCE, SAMPLE_SOURCE } from '@/data/knowledgeBase';

const cards = [
  { name: GOAL_SOURCE, type: 'Chương trình/Mục tiêu', detail: `${CURRICULUM_GOALS.length} mục tiêu có mã`, icon: Target, note: 'Nguồn mục tiêu 5–6 tuổi năm học 2026–2027' },
  { name: THEME_SOURCE, type: 'Dự kiến chủ đề', detail: `${THEME_SCHEDULE.length} tuần/chủ đề nhánh`, icon: CalendarRange, note: 'Tự gợi ý chủ đề theo ngày đã chọn' },
  { name: FRAMEWORK_SOURCE, type: 'Sườn giáo án', detail: `${LESSON_FRAMEWORKS.length} nhóm sườn đã chuẩn hóa`, icon: ListTree, note: 'Dùng đúng sườn theo loại hoạt động được nhận diện' },
  { name: SAMPLE_SOURCE, type: 'Kế hoạch mẫu', detail: 'Mẫu tuần 1 + kế hoạch ngày', icon: BookOpenCheck, note: 'Tham khảo cấu trúc và mức độ chi tiết, không sao chép máy móc' },
];

export function ProfessionalDocumentsPage() {
  const { navigate } = useApp();
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <button onClick={() => navigate('home')} className="btn-ghost mb-3 -ml-2"><ArrowLeft className="h-4 w-4" />Trang chủ</button>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md"><Database className="h-6 w-6" /></div>
          <div><h1 className="text-xl font-bold text-stone-800 lg:text-2xl">Kho tài liệu chuyên môn</h1><p className="text-sm text-stone-500">4 nguồn đã được chuẩn hóa và kết nối vào bộ máy soạn kế hoạch</p></div>
        </div>
      </div>
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
        <strong>Đã kết nối thật:</strong> dữ liệu mục tiêu, lịch chủ đề và sườn hoạt động ở trang này đang được chức năng “Soạn kế hoạch ngày” truy xuất trực tiếp. Đây không phải danh sách file trang trí.
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(({name,type,detail,icon:Icon,note}) => (
          <section key={name} className="card p-5">
            <div className="mb-3 flex items-start gap-3">
              <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600"><Icon className="h-5 w-5" /></div>
              <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-wide text-stone-400">{type}</p><h2 className="truncate font-semibold text-stone-800" title={name}>{name}</h2></div>
            </div>
            <p className="text-sm font-medium text-secondary-700">{detail}</p>
            <p className="mt-1 text-sm text-stone-500">{note}</p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-700"><FileText className="h-3.5 w-3.5" />Đang áp dụng</div>
          </section>
        ))}
      </div>
      <div className="card p-5 text-sm text-stone-600">
        <strong>Quy tắc nguồn:</strong> mục tiêu có mã chỉ dùng cho lớp 5–6 tuổi. Nếu chọn độ tuổi khác, hệ thống cảnh báo chưa có bộ mục tiêu chuyên môn và không giả vờ rằng mục tiêu AI là mục tiêu chính thức.
      </div>
    </div>
  );
}
