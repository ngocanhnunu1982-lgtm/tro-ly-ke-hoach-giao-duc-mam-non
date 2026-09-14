import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import type { ActivitySection } from '@/types';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Target,
  Package,
  StickyNote,
  Edit3,
  Check,
  X,
  Save,
  Download,
  Printer,
  Link2,
  CalendarDays,
  Sparkles,
  HeartHandshake,
  Activity,
  Trees,
  Puzzle,
  Utensils,
  Sunset,
  Star,
  Home,
  Circle,
} from 'lucide-react';

const ICON_MAP: Record<string, typeof Home> = {
  HeartHandshake, Activity, Trees, Target, Puzzle, Utensils, Sunset, Star, Home, Circle,
};

const SECTION_COLORS: Record<string, string> = {
  'Đón trẻ – Chơi – Trò chuyện': 'bg-rose-50 text-rose-600 border-rose-200',
  'Thể dục sáng': 'bg-orange-50 text-orange-600 border-orange-200',
  'Hoạt động ngoài trời': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'Hoạt động có chủ đích': 'bg-secondary-50 text-secondary-600 border-secondary-200',
  'Hoạt động góc': 'bg-violet-50 text-violet-600 border-violet-200',
  'Vệ sinh – Ăn – Ngủ': 'bg-amber-50 text-amber-600 border-amber-200',
  'Hoạt động chiều': 'bg-sky-50 text-sky-600 border-sky-200',
  'Nêu gương': 'bg-yellow-50 text-yellow-600 border-yellow-200',
  'Trả trẻ': 'bg-stone-100 text-stone-600 border-stone-200',
};

export function PlanResultPage() {
  const { navigate, currentPlan, setCurrentPlan, savePlan } = useApp();
  const [sections, setSections] = useState<ActivitySection[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editBuffer, setEditBuffer] = useState<ActivitySection | null>(null);

  useEffect(() => {
    if (currentPlan) {
      setSections(currentPlan.sections);
    }
  }, [currentPlan]);

  if (!currentPlan) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-stone-500">Chưa có kế hoạch nào được tạo.</p>
        <button onClick={() => navigate('daily-plan')} className="btn-primary mt-4">
          <Sparkles className="h-5 w-5" />
          Soạn kế hoạch mới
        </button>
      </div>
    );
  }

  const { formData } = currentPlan;

  const startEdit = (section: ActivitySection) => {
    setEditingId(section.id);
    setEditBuffer({ ...section });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditBuffer(null);
  };

  const saveEdit = () => {
    if (!editBuffer) return;
    setSections((prev) => prev.map((s) => (s.id === editBuffer.id ? editBuffer : s)));
    setEditingId(null);
    setEditBuffer(null);
  };

  const updateBuffer = (field: keyof ActivitySection, value: string) => {
    setEditBuffer((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSavePlan = () => {
    const updated = { ...currentPlan, sections };
    setCurrentPlan(updated);
    savePlan(updated);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button onClick={() => navigate('daily-plan')} className="btn-ghost -ml-2">
          <ArrowLeft className="h-4 w-4" />
          Soạn kế hoạch mới
        </button>
        <div className="flex gap-2">
          <button onClick={handlePrint} className="btn-secondary">
            <Printer className="h-4 w-4" />
            In
          </button>
          <button onClick={handleSavePlan} className="btn-primary">
            <Save className="h-4 w-4" />
            Lưu kế hoạch
          </button>
        </div>
      </div>

      {/* Plan header card */}
      <section className="card overflow-hidden">
        <div className="bg-gradient-to-br from-secondary-600 to-teal-700 px-5 py-6 text-white lg:px-8">
          <div className="mb-2 flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-accent-300" />
            <span className="text-sm font-medium text-secondary-50">
              Kế hoạch ngày — {formData.dayOfWeek}, {formData.date || 'chưa chọn ngày'}
            </span>
          </div>
          <h1 className="text-xl font-bold lg:text-2xl">
            Chủ đề: {formData.mainTheme}
            {formData.subTheme && <span className="text-accent-300"> — {formData.subTheme}</span>}
          </h1>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-secondary-50">
            <span>Trường: {formData.schoolName}</span>
            <span>Giáo viên: {formData.teacherName}</span>
            <span>Lớp: {formData.className}</span>
            <span>Độ tuổi: {formData.ageGroup}</span>
            <span>Sĩ số: {formData.studentCount || '—'}</span>
          </div>
        </div>
      </section>

      {/* Educational chain */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-stone-800">
          <Link2 className="h-5 w-5 text-secondary-600" />
          Mạch giáo dục trong ngày
        </h2>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {currentPlan.educationalChain.split(' → ').map((part, i, arr) => (
            <div key={i} className="flex items-center gap-2">
              <span className="rounded-lg bg-secondary-50 px-3 py-1.5 font-medium text-secondary-700">
                {part}
              </span>
              {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-stone-300" />}
            </div>
          ))}
        </div>
      </section>

      {/* Objectives summary */}
      {formData.objectives && (
        <section className="card p-5 lg:p-6">
          <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-stone-800">
            <Target className="h-5 w-5 text-secondary-600" />
            Mục tiêu
          </h2>
          <div className="whitespace-pre-line text-sm leading-relaxed text-stone-700">
            {formData.objectives}
          </div>
        </section>
      )}

      {/* Activity sections */}
      <div className="space-y-4">
        {sections.map((section, idx) => {
          const Icon = ICON_MAP[section.icon] || Circle;
          const colorClass = SECTION_COLORS[section.title] || 'bg-stone-100 text-stone-600 border-stone-200';
          const isEditing = editingId === section.id;

          return (
            <section key={section.id} className="card overflow-hidden">
              {/* Section header */}
              <div className={`flex items-center gap-3 border-b border-stone-100 px-5 py-4 lg:px-6`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${colorClass}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-stone-400">Hoạt động {idx + 1}</span>
                  </div>
                  <h3 className="text-base font-semibold text-stone-800">{section.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden items-center gap-1.5 rounded-lg bg-stone-100 px-2.5 py-1.5 text-xs font-medium text-stone-600 sm:flex">
                    <Clock className="h-3.5 w-3.5" />
                    {section.time}
                  </div>
                  <div className="hidden items-center gap-1.5 rounded-lg bg-stone-100 px-2.5 py-1.5 text-xs font-medium text-stone-600 sm:flex">
                    {section.duration}
                  </div>
                  {!isEditing ? (
                    <button
                      onClick={() => startEdit(section)}
                      className="btn-ghost text-secondary-600 hover:bg-secondary-50"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span className="hidden sm:inline">Sửa</span>
                    </button>
                  ) : (
                    <div className="flex gap-1">
                      <button
                        onClick={saveEdit}
                        className="rounded-lg bg-emerald-500 p-2 text-white transition hover:bg-emerald-600"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="rounded-lg bg-stone-200 p-2 text-stone-600 transition hover:bg-stone-300"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Section body */}
              <div className="space-y-4 px-5 py-5 lg:px-6">
                {/* Time row for mobile */}
                <div className="flex items-center gap-3 text-xs text-stone-500 sm:hidden">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {section.time}
                  </span>
                  <span>·</span>
                  <span>{section.duration}</span>
                </div>

                {/* Objective */}
                <div>
                  <p className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-stone-700">
                    <Target className="h-4 w-4 text-secondary-500" />
                    Mục tiêu
                  </p>
                  {isEditing && editBuffer ? (
                    <textarea
                      className="input-base min-h-[60px] resize-y"
                      value={editBuffer.objective}
                      onChange={(e) => updateBuffer('objective', e.target.value)}
                    />
                  ) : (
                    <p className="text-sm leading-relaxed text-stone-600">{section.objective}</p>
                  )}
                </div>

                {/* Content */}
                <div>
                  <p className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-stone-700">
                    <Sparkles className="h-4 w-4 text-secondary-500" />
                    Nội dung và cách tổ chức
                  </p>
                  {isEditing && editBuffer ? (
                    <textarea
                      className="input-base min-h-[140px] resize-y"
                      value={editBuffer.content}
                      onChange={(e) => updateBuffer('content', e.target.value)}
                    />
                  ) : (
                    <div className="whitespace-pre-line text-sm leading-relaxed text-stone-600">
                      {section.content}
                    </div>
                  )}
                </div>

                {/* Materials */}
                <div>
                  <p className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-stone-700">
                    <Package className="h-4 w-4 text-secondary-500" />
                    Đồ dùng / nguyên vật liệu
                  </p>
                  {isEditing && editBuffer ? (
                    <textarea
                      className="input-base min-h-[60px] resize-y"
                      value={editBuffer.materials}
                      onChange={(e) => updateBuffer('materials', e.target.value)}
                    />
                  ) : (
                    <p className="text-sm leading-relaxed text-stone-600">{section.materials}</p>
                  )}
                </div>

                {/* Notes */}
                {section.notes && (
                  <div>
                    <p className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-stone-700">
                      <StickyNote className="h-4 w-4 text-accent-500" />
                      Lưu ý
                    </p>
                    {isEditing && editBuffer ? (
                      <textarea
                        className="input-base min-h-[60px] resize-y"
                        value={editBuffer.notes}
                        onChange={(e) => updateBuffer('notes', e.target.value)}
                      />
                    ) : (
                      <p className="text-sm leading-relaxed text-stone-600">{section.notes}</p>
                    )}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom actions */}
      <div className="flex flex-wrap gap-3 pb-6">
        <button onClick={handleSavePlan} className="btn-primary flex-1 sm:flex-none">
          <Save className="h-5 w-5" />
          Lưu kế hoạch
        </button>
        <button onClick={() => navigate('my-plans')} className="btn-secondary">
          <ArrowRight className="h-4 w-4" />
          Xem tất cả kế hoạch
        </button>
        <button onClick={() => navigate('daily-plan')} className="btn-secondary">
          <Sparkles className="h-4 w-4" />
          Soạn kế hoạch khác
        </button>
      </div>
    </div>
  );
}
