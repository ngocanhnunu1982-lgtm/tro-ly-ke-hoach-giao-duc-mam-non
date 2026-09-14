import { useApp } from '@/context/AppContext';
import {
  ArrowLeft,
  CalendarRange,
  Sparkles,
  Clock,
} from 'lucide-react';

export function WeeklyPlanPage() {
  const { navigate } = useApp();

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <button onClick={() => navigate('home')} className="btn-ghost mb-3 -ml-2">
          <ArrowLeft className="h-4 w-4" />
          Trang chủ
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md">
            <CalendarRange className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-stone-800 lg:text-2xl">Soạn kế hoạch tuần</h1>
            <p className="text-sm text-stone-500">Kế hoạch cả tuần theo chủ đề và độ tuổi</p>
          </div>
        </div>
      </div>

      <div className="card flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-500">
          <Clock className="h-8 w-8" />
        </div>
        <h2 className="mb-2 text-lg font-semibold text-stone-700">Chức năng đang được phát triển</h2>
        <p className="mb-6 max-w-md text-sm text-stone-500">
          Soạn kế hoạch tuần sẽ cho phép giáo viên lên kế hoạch cả tuần (Thứ Hai – Thứ Sáu)
          với các hoạt động xoay quanh một chủ đề lớn, tự động phân bổ chủ đề nhánh cho từng ngày.
        </p>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => navigate('daily-plan')} className="btn-primary">
            <Sparkles className="h-5 w-5" />
            Dùng soạn kế hoạch ngày
          </button>
          <button onClick={() => navigate('home')} className="btn-secondary">
            Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}
