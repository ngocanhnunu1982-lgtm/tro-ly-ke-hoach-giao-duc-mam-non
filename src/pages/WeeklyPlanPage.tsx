import { useMemo, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ArrowLeft, CalendarRange, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';
import { findThemeByDate, suggestGoals, THEME_SOURCE, GOAL_SOURCE, SAMPLE_SOURCE } from '@/data/knowledgeBase';
import type { DayOfWeek } from '@/types';

const dayNames: DayOfWeek[] = ['Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu'];
const outdoorIdeas = ['Quan sát – trải nghiệm môi trường gần gũi','Khảo sát và thu thập dấu hiệu theo nhóm','Trò chơi vận động gắn tình huống thực tế','Sáng tạo với học liệu thiên nhiên','Đi dạo – chia sẻ phát hiện trong tuần'];
const focusIdeas = ['Khám phá bằng vật thật và câu hỏi mở','Toán qua thao tác – so sánh – phân loại','Ngôn ngữ: kể/chia sẻ trải nghiệm','Tạo hình mở từ vật liệu sẵn có','Ôn – vận dụng – chia sẻ sản phẩm'];
const afternoonIdeas = ['Trò chơi củng cố theo nhóm nhỏ','Hoàn thiện sản phẩm/góc chơi','Kể lại điều đã khám phá','Kỹ năng tự phục vụ và hợp tác','Nêu gương tuần – văn nghệ – chơi theo ý thích'];

function addDays(iso: string, n: number) {
  const d = new Date(`${iso}T00:00:00`); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10);
}

export function WeeklyPlanPage() {
  const { navigate, classProfile, setDraftFormData } = useApp();
  const [startDate, setStartDate] = useState('2026-09-07');
  const [generated, setGenerated] = useState(false);
  const ageGroup = classProfile?.ageGroup || '5-6 tuổi';
  const theme = useMemo(() => findThemeByDate(startDate, ageGroup), [startDate, ageGroup]);
  const goals = useMemo(() => suggestGoals({ ageGroup, developmentDomain:'Nhận thức', plannedActivity:'khám phá', subTheme:theme?.subTheme, limit:5 }), [ageGroup, theme]);

  const openDay = (index: number) => {
    const date = addDays(startDate,index);
    setDraftFormData({
      date,
      dayOfWeek: dayNames[index],
      ageGroup,
      mainTheme: theme?.mainTheme || '',
      subTheme: theme?.subTheme || '',
      developmentDomain: index === 1 ? 'Nhận thức' : index === 2 ? 'Ngôn ngữ' : index === 3 ? 'Thẩm mỹ' : 'Nhận thức',
      plannedActivity: focusIdeas[index],
      objectives: goals.slice(index % Math.max(goals.length,1), index % Math.max(goals.length,1)+2).map(g=>g.goal).join('\n'),
    });
    navigate('daily-plan');
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <button onClick={() => navigate('home')} className="btn-ghost mb-3 -ml-2"><ArrowLeft className="h-4 w-4" />Trang chủ</button>
        <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md"><CalendarRange className="h-6 w-6" /></div><div><h1 className="text-xl font-bold text-stone-800 lg:text-2xl">Soạn kế hoạch tuần</h1><p className="text-sm text-stone-500">Bám lịch chủ đề 2026–2027 và cấu trúc tuần mẫu của giáo viên</p></div></div>
      </div>

      <section className="card p-5">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><label className="label-base">Ngày thứ Hai của tuần</label><input type="date" className="input-base" value={startDate} onChange={e=>{setStartDate(e.target.value);setGenerated(false)}} /></div>
          <button className="btn-primary" onClick={()=>setGenerated(true)}><Sparkles className="h-5 w-5" />Tạo kế hoạch tuần</button>
        </div>
        {ageGroup !== '5-6 tuổi' && <div className="mt-3 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800"><AlertTriangle className="h-4 w-4 shrink-0" />Hiện chỉ có bộ mục tiêu và lịch chủ đề chuyên môn cho 5–6 tuổi. Không tự gắn mục tiêu chính thức cho độ tuổi khác.</div>}
        {theme && <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800"><strong>{theme.mainTheme}</strong> → {theme.subTheme}<span className="block text-xs">Nguồn chủ đề: {THEME_SOURCE}</span></div>}
      </section>

      {generated && theme && (
        <>
          <section className="card p-5">
            <h2 className="font-bold text-stone-800">KẾ HOẠCH GIÁO DỤC TUẦN</h2>
            <p className="mt-1 text-sm text-stone-600">Chủ đề: <strong>{theme.subTheme}</strong> · {theme.startDate} – {theme.endDate}</p>
            <p className="mt-2 text-xs text-stone-500">Cấu trúc tham khảo: {SAMPLE_SOURCE} · Mục tiêu: {GOAL_SOURCE}</p>
          </section>
          <div className="grid gap-4 lg:grid-cols-5">
            {dayNames.map((day,i)=>(
              <section key={day} className="card p-4">
                <h3 className="font-bold text-secondary-700">{day}</h3><p className="text-xs text-stone-400">{addDays(startDate,i)}</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div><p className="text-xs font-semibold text-stone-400">Đón trẻ – Trò chuyện</p><p>Gợi kinh nghiệm, câu hỏi và cảm xúc về “{theme.subTheme}”.</p></div>
                  <div><p className="text-xs font-semibold text-stone-400">Chơi ngoài trời</p><p>{outdoorIdeas[i]}</p></div>
                  <div><p className="text-xs font-semibold text-stone-400">Hoạt động học</p><p>{focusIdeas[i]}</p></div>
                  <div><p className="text-xs font-semibold text-stone-400">Hoạt động góc</p><p>Trẻ chọn vai/góc, vận dụng trải nghiệm ngày, mở rộng mạch chơi.</p></div>
                  <div><p className="text-xs font-semibold text-stone-400">Sinh hoạt chiều</p><p>{afternoonIdeas[i]}</p></div>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-lg bg-secondary-50 px-3 py-2 text-xs font-semibold text-secondary-700 hover:bg-secondary-100" onClick={()=>openDay(i)}>Soạn chi tiết ngày này <ArrowRight className="h-3.5 w-3.5" /></button>
              </section>
            ))}
          </div>
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800">Tuần được tạo theo mạch chung nhưng không ép 5 ngày lặp cùng một hoạt động. Khi mở từng ngày, hệ thống kế thừa ngày, chủ đề và hoạt động dự kiến rồi áp dụng sườn chuyên môn tương ứng.</section>
        </>
      )}
      {generated && !theme && <div className="card p-6 text-center text-sm text-stone-600">Không tìm thấy tuần này trong lịch chủ đề đã nạp. Hãy chọn tuần thuộc năm học 2026–2027 hoặc nhập chủ đề thủ công ở “Soạn kế hoạch ngày”.</div>}
    </div>
  );
}
