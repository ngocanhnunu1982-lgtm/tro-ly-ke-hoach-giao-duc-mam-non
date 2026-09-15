import { useApp } from '@/context/AppContext';
import type { PageKey } from '@/types';
import {
  CalendarDays,
  CalendarRange,
  BookOpen,
  FolderOpen,
  Search,
  Users,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Heart,
  TrendingUp,
  Database,
} from 'lucide-react';

interface FeatureCard {
  key: PageKey;
  title: string;
  desc: string;
  icon: typeof CalendarDays;
  color: string;
  bgColor: string;
  iconColor: string;
}

const FEATURES: FeatureCard[] = [
  {
    key: 'daily-plan',
    title: 'Soạn kế hoạch ngày',
    desc: 'Tạo kế hoạch giáo dục cho một ngày với 9 hoạt động liên kết',
    icon: CalendarDays,
    color: 'text-secondary-700',
    bgColor: 'bg-secondary-50 hover:bg-secondary-100',
    iconColor: 'bg-secondary-600',
  },
  {
    key: 'weekly-plan',
    title: 'Soạn kế hoạch tuần',
    desc: 'Lên kế hoạch cả tuần theo chủ đề và độ tuổi',
    icon: CalendarRange,
    color: 'text-primary-700',
    bgColor: 'bg-primary-50 hover:bg-primary-100',
    iconColor: 'bg-primary-600',
  },
  {
    key: 'activity-library',
    title: 'Kho hoạt động',
    desc: 'Thư viện trò chơi, bài hát, câu chuyện theo chủ đề',
    icon: BookOpen,
    color: 'text-accent-700',
    bgColor: 'bg-accent-50 hover:bg-accent-100',
    iconColor: 'bg-accent-500',
  },
  {
    key: 'professional-documents',
    title: 'Kho tài liệu chuyên môn',
    desc: 'Mục tiêu thí điểm, lịch chủ đề, sườn giáo án và kế hoạch mẫu',
    icon: Database,
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-50 hover:bg-indigo-100',
    iconColor: 'bg-indigo-600',
  },
  {
    key: 'my-plans',
    title: 'Kế hoạch của tôi',
    desc: 'Xem, chỉnh sửa và quản lý các kế hoạch đã soạn',
    icon: FolderOpen,
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50 hover:bg-emerald-100',
    iconColor: 'bg-emerald-600',
  },
  {
    key: 'check-plan',
    title: 'Kiểm tra kế hoạch',
    desc: 'Đánh giá tính hợp lý và đầy đủ của kế hoạch',
    icon: Search,
    color: 'text-sky-700',
    bgColor: 'bg-sky-50 hover:bg-sky-100',
    iconColor: 'bg-sky-600',
  },
  {
    key: 'class-profile',
    title: 'Hồ sơ lớp',
    desc: 'Thông tin lớp, sĩ số, điều kiện cơ sở vật chất',
    icon: Users,
    color: 'text-rose-700',
    bgColor: 'bg-rose-50 hover:bg-rose-100',
    iconColor: 'bg-rose-500',
  },
];

export function HomePage() {
  const { navigate, savedPlans, classProfile } = useApp();

  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary-600 via-secondary-700 to-teal-800 px-6 py-10 text-white shadow-xl lg:px-10 lg:py-14">
        <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent-400/20 blur-2xl" />
        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent-300" />
            Trợ lý AI cho giáo viên mầm non
          </div>
          <h1 className="text-2xl font-bold leading-tight lg:text-4xl">
            Soạn kế hoạch giáo dục mầm non
            <br />
            <span className="text-accent-300">nhanh chóng, chuyên nghiệp</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary-50 lg:text-base">
            Trợ lý giúp giáo viên mầm non soạn kế hoạch ngày, tuần theo Chương trình GDMN,
            tạo mạch giáo dục liên kết từ đón trẻ đến trả trẻ.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => navigate('daily-plan')}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-secondary-700 shadow-lg transition-all hover:bg-stone-50 hover:shadow-xl active:scale-[0.98]"
            >
              <CalendarDays className="h-5 w-5" />
              Bắt đầu soạn kế hoạch
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('class-profile')}
              className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/25 active:scale-[0.98]"
            >
              <Users className="h-5 w-5" />
              Thiết lập hồ sơ lớp
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-3 lg:gap-4">
        <div className="card flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
            <FolderOpen className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl font-bold text-stone-800">{savedPlans.length}</p>
            <p className="text-xs text-stone-500">Kế hoạch đã soạn</p>
          </div>
        </div>
        <div className="card flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl font-bold text-stone-800">{classProfile ? '1' : '0'}</p>
            <p className="text-xs text-stone-500">Hồ sơ lớp</p>
          </div>
        </div>
        <div className="card flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl font-bold text-stone-800">9</p>
            <p className="text-xs text-stone-500">Hoạt động/ngày</p>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-stone-800">Chức năng chính</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.key}
                onClick={() => navigate(f.key)}
                className={`card group p-5 text-left transition-all hover:shadow-md ${f.bgColor}`}
              >
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${f.iconColor} text-white shadow-md transition-transform group-hover:scale-110`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`mb-1 text-base font-semibold ${f.color}`}>{f.title}</h3>
                <p className="text-sm text-stone-600">{f.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-stone-500 transition-colors group-hover:text-stone-700">
                  Mở
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Quick start guide */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-stone-800">
          <Heart className="h-5 w-5 text-rose-500" />
          Bắt đầu nhanh
        </h2>
        <div className="space-y-3">
          {[
            { step: 1, title: 'Thiết lập hồ sơ lớp', desc: 'Nhập thông tin trường, lớp, sĩ số, điều kiện cơ sở vật chất.', action: () => navigate('class-profile') },
            { step: 2, title: 'Soạn kế hoạch ngày', desc: 'Chọn chủ đề, độ tuổi, mức soạn — AI tạo 9 hoạt động liên kết.', action: () => navigate('daily-plan') },
            { step: 3, title: 'Xem và chỉnh sửa kết quả', desc: 'Kiểm tra mạch giáo dục, chỉnh sửa từng hoạt động theo ý bạn.', action: () => navigate('my-plans') },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-600 text-sm font-bold text-white">
                {s.step}
              </div>
              <div className="flex-1">
                <p className="font-medium text-stone-800">{s.title}</p>
                <p className="text-sm text-stone-500">{s.desc}</p>
              </div>
              <button
                onClick={s.action}
                className="btn-ghost text-secondary-600 hover:bg-secondary-50"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Info banner */}
      <section className="flex items-center gap-4 rounded-2xl border border-accent-200 bg-accent-50 p-5">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white">
          <TrendingUp className="h-6 w-6" />
        </div>
        <div>
          <p className="font-semibold text-accent-800">Đang trong giai đoạn MVP</p>
          <p className="text-sm text-accent-700">
            Phiên bản hiện tại tập trọng vào soạn kế hoạch ngày. AI thực tế, kế hoạch tuần,
            xuất Word/PDF và quy trình duyệt sẽ được bổ sung sau.
          </p>
        </div>
      </section>
    </div>
  );
}
