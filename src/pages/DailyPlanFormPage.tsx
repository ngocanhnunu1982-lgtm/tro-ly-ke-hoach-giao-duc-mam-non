import { useState, useEffect, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import type { PlanFormData, AgeGroup, DayOfWeek, PlanLevel } from '@/types';
import {
  AGE_GROUPS,
  DAYS_OF_WEEK,
  PLAN_LEVELS,
  DEVELOPMENT_DOMAINS,
  MAIN_THEMES,
  WEATHER_OPTIONS,
} from '@/data/constants';
import { generateObjectives, generatePlan } from '@/utils/planGenerator';
import { findThemeByDate, suggestGoals, THEME_SOURCE, GOAL_SOURCE } from '@/data/knowledgeBase';
import {
  CalendarDays,
  ArrowLeft,
  School,
  User,
  GraduationCap,
  Users,
  Calendar,
  BookOpen,
  Target,
  Sparkles,
  Package,
  MapPin,
  Trees,
  CloudSun,
  StickyNote,
  Loader2,
  Check,
} from 'lucide-react';

const DEFAULT_FORM: PlanFormData = {
  schoolName: '',
  schoolAddress: '',
  teacherName: '',
  className: '',
  ageGroup: '3-4 tuổi',
  studentCount: '',
  date: '',
  dayOfWeek: 'Thứ Hai',
  mainTheme: '',
  subTheme: '',
  coreContent: '',
  plannedActivity: '',
  developmentDomain: '',
  objectives: '',
  availableMaterials: '',
  classroomCondition: '',
  playgroundCondition: '',
  weather: '',
  aiNotes: '',
  level: 'Chi tiết',
};

export function DailyPlanFormPage() {
  const { navigate, classProfile, setCurrentPlan, savePlan, draftFormData, setDraftFormData } = useApp();
  const [form, setForm] = useState<PlanFormData>(() => {
    // Initialize once from localStorage draft, then fill gaps from class profile
    let next = { ...DEFAULT_FORM };
    if (draftFormData) {
      next = { ...next, ...draftFormData };
    }
    if (classProfile) {
      // Only fill fields the draft hasn't already set
      if (!next.schoolName) next.schoolName = classProfile.schoolName || '';
      if (!next.schoolAddress) next.schoolAddress = classProfile.schoolAddress || '';
      if (!next.teacherName) next.teacherName = classProfile.teacherName || '';
      if (!next.className) next.className = classProfile.className || '';
      if (!next.ageGroup) next.ageGroup = classProfile.ageGroup || next.ageGroup;
      if (!next.studentCount) next.studentCount = classProfile.studentCount ? String(classProfile.studentCount) : '';
      if (!next.classroomCondition) next.classroomCondition = classProfile.classroomCondition || '';
      if (!next.playgroundCondition) next.playgroundCondition = classProfile.playgroundCondition || '';
      if (!next.availableMaterials) next.availableMaterials = classProfile.availableMaterials || '';
    }
    return next;
  });
  const [generating, setGenerating] = useState(false);
  const [objectiveLoading, setObjectiveLoading] = useState(false);
  const themeSuggestion = useMemo(() => findThemeByDate(form.date, form.ageGroup), [form.date, form.ageGroup]);
  const goalSuggestions = useMemo(() => suggestGoals({ ageGroup: form.ageGroup, developmentDomain: form.developmentDomain, plannedActivity: form.plannedActivity, coreContent: form.coreContent, subTheme: form.subTheme, limit: 6 }), [form.ageGroup, form.developmentDomain, form.plannedActivity, form.coreContent, form.subTheme]);

  // Save draft to localStorage (debounced via useEffect)
  useEffect(() => {
    setDraftFormData(form);
  }, [form, setDraftFormData]);

  useEffect(() => {
    if (themeSuggestion && (!form.mainTheme || !form.subTheme)) {
      setForm((prev) => ({ ...prev, mainTheme: prev.mainTheme || themeSuggestion.mainTheme, subTheme: prev.subTheme || themeSuggestion.subTheme }));
    }
  }, [themeSuggestion, form.mainTheme, form.subTheme]);

  const update = <K extends keyof PlanFormData>(key: K, value: PlanFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleAiObjective = () => {
    setObjectiveLoading(true);
    setTimeout(() => {
      const objectives = generateObjectives(form);
      update('objectives', objectives);
      setObjectiveLoading(false);
    }, 1200);
  };

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      const plan = generatePlan(form);
      setCurrentPlan(plan);
      savePlan(plan);
      setDraftFormData(null);
      setGenerating(false);
      navigate('plan-result');
    }, 2000);
  };

  const isFormValid = form.schoolName && form.teacherName && form.className && form.mainTheme && form.subTheme;

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <button onClick={() => navigate('home')} className="btn-ghost mb-3 -ml-2">
          <ArrowLeft className="h-4 w-4" />
          Trang chủ
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-600 text-white shadow-md">
            <CalendarDays className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-stone-800 lg:text-2xl">Soạn kế hoạch ngày</h1>
            <p className="text-sm text-stone-500">Điền thông tin, AI sẽ tạo 9 hoạt động liên kết cả ngày</p>
          </div>
        </div>
      </div>

      {/* Level selector */}
      <section className="card p-4 lg:p-5">
        <label className="label-base mb-3">Mức soạn kế hoạch</label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PLAN_LEVELS.map((lvl) => {
            const selected = form.level === lvl.value;
            return (
              <button
                key={lvl.value}
                onClick={() => update('level', lvl.value as PlanLevel)}
                className={`rounded-xl border-2 p-4 text-left transition-all ${
                  selected
                    ? 'border-secondary-500 bg-secondary-50 shadow-md'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-2xl">{lvl.icon}</span>
                  <span className={`font-semibold ${selected ? 'text-secondary-700' : 'text-stone-700'}`}>
                    {lvl.label}
                  </span>
                  {selected && <Check className="ml-auto h-4 w-4 text-secondary-600" />}
                </div>
                <p className="text-xs text-stone-500">{lvl.desc}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* School & teacher info */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-stone-800">
          <School className="h-5 w-5 text-secondary-600" />
          Thông tin trường và lớp
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="label-base">Tên trường</label>
            <input
              className="input-base"
              value={form.schoolName}
              onChange={(e) => update('schoolName', e.target.value)}
              placeholder="VD: MN Vòng Bằng Hôn"
            />
          </div>
          <div>
            <label className="label-base">Điểm trường</label>
            <input
              className="input-base"
              value={form.schoolAddress}
              onChange={(e) => update('schoolAddress', e.target.value)}
              placeholder="VD: Cơ sở 1 — P. Linh Trung"
            />
          </div>
          <div>
            <label className="label-base">Giáo viên</label>
            <input
              className="input-base"
              value={form.teacherName}
              onChange={(e) => update('teacherName', e.target.value)}
              placeholder="VD: Nguyễn Thị Lan Hương"
            />
          </div>
          <div>
            <label className="label-base">Lớp</label>
            <input
              className="input-base"
              value={form.className}
              onChange={(e) => update('className', e.target.value)}
              placeholder="VD: Lá 1"
            />
          </div>
          <div>
            <label className="label-base">Độ tuổi</label>
            <select
              className="input-base"
              value={form.ageGroup}
              onChange={(e) => update('ageGroup', e.target.value as AgeGroup)}
            >
              {AGE_GROUPS.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label} ({a.desc})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-base">Sĩ số</label>
            <input
              type="number"
              className="input-base"
              value={form.studentCount}
              onChange={(e) => update('studentCount', e.target.value)}
              placeholder="VD: 25"
              min={0}
            />
          </div>
          <div>
            <label className="label-base">Ngày thực hiện</label>
            <input
              type="date"
              className="input-base"
              value={form.date}
              onChange={(e) => update('date', e.target.value)}
            />
          </div>
          <div>
            <label className="label-base">Thứ</label>
            <select
              className="input-base"
              value={form.dayOfWeek}
              onChange={(e) => update('dayOfWeek', e.target.value as DayOfWeek)}
            >
              {DAYS_OF_WEEK.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Theme & content */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-stone-800">
          <BookOpen className="h-5 w-5 text-secondary-600" />
          Chủ đề và nội dung giáo dục
        </h2>
        <div className="space-y-4">
          {form.ageGroup === '5-6 tuổi' && form.date && themeSuggestion && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
              <p className="font-semibold text-emerald-800">Chủ đề theo kế hoạch năm</p>
              <p className="mt-1 text-emerald-700"><strong>{themeSuggestion.mainTheme}</strong> → {themeSuggestion.subTheme}</p>
              <p className="mt-1 text-xs text-emerald-600">{themeSuggestion.startDate} đến {themeSuggestion.endDate} · Nguồn: {THEME_SOURCE}</p>
              <button type="button" className="mt-2 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white" onClick={() => setForm((prev) => ({ ...prev, mainTheme: themeSuggestion.mainTheme, subTheme: themeSuggestion.subTheme }))}>Dùng chủ đề này</button>
            </div>
          )}
          {form.ageGroup === '5-6 tuổi' && form.date && !themeSuggestion && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">Ngày này chưa có chủ đề trong lịch 2026–2027 đã nạp (có thể là thời gian nghỉ/ôn tập). Giáo viên có thể nhập thủ công.</div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="label-base">Chủ đề lớn</label>
              <input
                className="input-base"
                list="main-themes-list"
                value={form.mainTheme}
                onChange={(e) => update('mainTheme', e.target.value)}
                placeholder="VD: Gia đình"
              />
              <datalist id="main-themes-list">
                {MAIN_THEMES.map((t) => (
                  <option key={t} value={t} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="label-base">Chủ đề nhánh</label>
              <input
                className="input-base"
                value={form.subTheme}
                onChange={(e) => update('subTheme', e.target.value)}
                placeholder="VD: Ngày ở nhà với gia đình"
              />
            </div>
          </div>
          <div>
            <label className="label-base">Nội dung giáo dục trọng tâm</label>
            <textarea
              className="input-base min-h-[70px] resize-y"
              value={form.coreContent}
              onChange={(e) => update('coreContent', e.target.value)}
              placeholder="VD: Trẻ biết các thành viên trong gia đình, vai trò của từng người..."
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="label-base">Hoạt động có chủ đích</label>
              <input
                className="input-base"
                value={form.plannedActivity}
                onChange={(e) => update('plannedActivity', e.target.value)}
                placeholder="VD: Vẽ tranh gia đình em"
              />
            </div>
            <div>
              <label className="label-base">Lĩnh vực phát triển</label>
              <select
                className="input-base"
                value={form.developmentDomain}
                onChange={(e) => update('developmentDomain', e.target.value)}
              >
                <option value="">— Chọn lĩnh vực —</option>
                {DEVELOPMENT_DOMAINS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="label-base mb-0 flex items-center gap-1.5">
                <Target className="h-4 w-4 text-stone-400" />
                Mục tiêu
              </label>
              <button
                onClick={handleAiObjective}
                disabled={objectiveLoading}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-accent-600 disabled:opacity-60"
              >
                {objectiveLoading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Sparkles className="h-3.5 w-3.5" />
                )}
                Gợi ý mục tiêu từ tài liệu
              </button>
            </div>
            {form.ageGroup !== '5-6 tuổi' && (
              <div className="mb-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                Chưa có bộ mục tiêu chuyên môn được tải lên cho độ tuổi này. Nội dung gợi ý sẽ được đánh dấu là AI đề xuất – cần giáo viên kiểm tra.
              </div>
            )}
            {form.ageGroup === '5-6 tuổi' && goalSuggestions.length > 0 && (
              <div className="mb-3 rounded-xl border border-secondary-200 bg-secondary-50 p-3">
                <p className="mb-2 text-xs font-semibold text-secondary-800">Mục tiêu phù hợp từ {GOAL_SOURCE}</p>
                <div className="space-y-2">
                  {goalSuggestions.map((g) => {
                    const checked = form.objectives.includes(g.goal);
                    return (
                      <label key={g.code} className="flex cursor-pointer items-start gap-2 rounded-lg bg-white p-2 text-xs text-stone-700">
                        <input type="checkbox" className="mt-0.5" checked={checked} onChange={(e) => {
                          const lines = form.objectives.split('\n').filter(Boolean);
                          const next = e.target.checked ? [...lines, g.goal] : lines.filter((line) => line !== g.goal);
                          update('objectives', next.join('\n'));
                        }} />
                        <span><strong>{g.code}</strong> · {g.goal.replace(/^.*?\.\s*/, '')}<span className="mt-1 block text-[11px] text-stone-400">{g.domain} · {g.activities}</span></span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
            <textarea
              className="input-base min-h-[120px] resize-y"
              value={form.objectives}
              onChange={(e) => update('objectives', e.target.value)}
              placeholder="VD: 1. Trẻ biết tên các thành viên trong gia đình... 2. Trẻ mô tả được vai trò... 3. Trẻ thể hiện tình cảm..."
            />
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-stone-800">
          <Package className="h-5 w-5 text-secondary-600" />
          Điều kiện thực hiện
        </h2>
        <div className="space-y-4">
          <div>
            <label className="label-base flex items-center gap-1.5">
              <Package className="h-4 w-4 text-stone-400" />
              Đồ dùng / nguyên vật liệu hiện có
            </label>
            <textarea
              className="input-base min-h-[70px] resize-y"
              value={form.availableMaterials}
              onChange={(e) => update('availableMaterials', e.target.value)}
              placeholder="VD: Giấy A4, bút sáp, hồ dán, tranh ảnh gia đình..."
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="label-base flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-stone-400" />
                Điều kiện lớp
              </label>
              <textarea
                className="input-base min-h-[70px] resize-y"
                value={form.classroomCondition}
                onChange={(e) => update('classroomCondition', e.target.value)}
                placeholder="VD: Lớp rộng 40m², có tivi, máy lạnh..."
              />
            </div>
            <div>
              <label className="label-base flex items-center gap-1.5">
                <Trees className="h-4 w-4 text-stone-400" />
                Điều kiện sân chơi
              </label>
              <textarea
                className="input-base min-h-[70px] resize-y"
                value={form.playgroundCondition}
                onChange={(e) => update('playgroundCondition', e.target.value)}
                placeholder="VD: Sân có mái che, cầu trượt, vườn cây..."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="label-base flex items-center gap-1.5">
                <CloudSun className="h-4 w-4 text-stone-400" />
                Thời tiết
              </label>
              <select
                className="input-base"
                value={form.weather}
                onChange={(e) => update('weather', e.target.value)}
              >
                <option value="">— Chọn thời tiết —</option>
                {WEATHER_OPTIONS.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-base flex items-center gap-1.5">
                <StickyNote className="h-4 w-4 text-stone-400" />
                Tôi muốn AI lưu ý
              </label>
              <input
                className="input-base"
                value={form.aiNotes}
                onChange={(e) => update('aiNotes', e.target.value)}
                placeholder="VD: Lớp có trẻ khuyết tật, cần điều chỉnh..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Generate button */}
      <div className="sticky bottom-0 z-10 -mx-4 border-t border-stone-200 bg-white/95 px-4 py-4 backdrop-blur lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <button
          onClick={handleGenerate}
          disabled={generating || !isFormValid}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-secondary-600 to-teal-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-secondary-600/30 transition-all hover:shadow-2xl hover:shadow-secondary-600/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          {generating ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin" />
              Đang soạn kế hoạch...
            </>
          ) : (
            <>
              <Sparkles className="h-6 w-6" />
              SOẠN KẾ HOẠCH CẢ NGÀY
            </>
          )}
        </button>
        {!isFormValid && !generating && (
          <p className="mt-2 text-center text-xs text-stone-400">
            Vui lòng điền tên trường, giáo viên, lớp, chủ đề lớn và chủ đề nhánh
          </p>
        )}
      </div>
    </div>
  );
}
