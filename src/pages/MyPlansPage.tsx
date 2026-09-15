import { useApp } from '@/context/AppContext';
import {
  ArrowLeft,
  CalendarDays,
  Trash2,
  Eye,
  FolderOpen,
  Sparkles,
  Clock,
  Users,
  GraduationCap,
} from 'lucide-react';

export function MyPlansPage() {
  const { navigate, savedPlans, deletePlan, setCurrentPlan } = useApp();

  const handleView = (planId: string) => {
    const plan = savedPlans.find((p) => p.id === planId);
    if (plan) {
      setCurrentPlan(plan);
      navigate('plan-result');
    }
  };

  const handleDelete = (planId: string) => {
    if (window.confirm('Bạn có chắc muốn xóa kế hoạch này?')) deletePlan(planId);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <button onClick={() => navigate('home')} className="btn-ghost mb-3 -ml-2">
          <ArrowLeft className="h-4 w-4" />
          Trang chủ
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
            <FolderOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-stone-800 lg:text-2xl">Kế hoạch của tôi</h1>
            <p className="text-sm text-stone-500">{savedPlans.length} kế hoạch đã soạn</p>
          </div>
        </div>
      </div>

      {savedPlans.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-100">
            <FolderOpen className="h-8 w-8 text-stone-400" />
          </div>
          <p className="mb-1 text-base font-medium text-stone-600">Chưa có kế hoạch nào</p>
          <p className="mb-4 text-sm text-stone-400">Bắt đầu soạn kế hoạch ngày đầu tiên của bạn</p>
          <button onClick={() => navigate('daily-plan')} className="btn-primary">
            <Sparkles className="h-5 w-5" />
            Soạn kế hoạch ngày
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {savedPlans.map((plan) => {
            const d = plan.formData;
            return (
              <div key={plan.id} className="card group p-5 transition-all hover:shadow-md">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="rounded-lg p-2 text-stone-400 transition hover:bg-rose-50 hover:text-rose-500"
                    aria-label="Xóa"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="mb-1 text-base font-semibold text-stone-800">
                  {d.mainTheme}
                  {d.subTheme && <span className="text-stone-500"> — {d.subTheme}</span>}
                </h3>
                <div className="mb-3 space-y-1 text-xs text-stone-500">
                  <p className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {d.dayOfWeek}, {d.date || 'chưa chọn ngày'}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Lớp {d.className} · {d.ageGroup}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {d.teacherName} · {d.schoolName}
                  </p>
                </div>
                <button
                  onClick={() => handleView(plan.id)}
                  className="btn-secondary w-full"
                >
                  <Eye className="h-4 w-4" />
                  Mở / chỉnh sửa
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
