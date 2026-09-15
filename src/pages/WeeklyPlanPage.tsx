import { useMemo, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ArrowLeft, CalendarRange, Sparkles, AlertTriangle, ArrowRight, Save, Printer, CheckCircle2 } from 'lucide-react';
import { findThemeByDate, suggestGoals, THEME_SOURCE, GOAL_SOURCE, SAMPLE_SOURCE } from '@/data/knowledgeBase';
import type { DayOfWeek } from '@/types';

const dayNames: DayOfWeek[] = ['Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu'];
const WEEKLY_STORAGE_KEY = 'kgm_weekly_plans';

function addDays(iso: string, n: number) {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d + n, 12, 0, 0);
  const yy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

function shortDate(iso: string) {
  const [y,m,d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function buildDailyFocus(subTheme: string, index: number) {
  const focus = [
    { domain: 'Nhận thức', activity: `Khám phá: Cùng tìm hiểu “${subTheme}”`, core: 'Quan sát, thu thập thông tin, chia sẻ phát hiện và giải quyết tình huống gần gũi.' },
    { domain: 'Nhận thức', activity: `Làm quen với toán qua trải nghiệm trong “${subTheme}”`, core: 'Đếm, so sánh, phân loại hoặc nhận biết hình dạng bằng vật thật phù hợp nội dung tuần.' },
    { domain: 'Ngôn ngữ', activity: `Kể chuyện và trò chuyện về “${subTheme}”`, core: 'Nghe hiểu, trao đổi, kể lại hoặc sáng tạo lời kể từ trải nghiệm của trẻ.' },
    { domain: 'Thể chất', activity: `Tiết thể dục: Vận động theo nhiệm vụ gắn với “${subTheme}”`, core: 'Thực hiện vận động phù hợp độ tuổi, phối hợp với bạn và bảo đảm an toàn.' },
    { domain: 'Nghệ thuật – Âm nhạc', activity: `Âm nhạc: Hát, vận động và cảm nhận gắn với “${subTheme}”`, core: 'Nghe, hát hoặc vận động theo nhạc; thể hiện cảm xúc và sáng tạo cách biểu đạt phù hợp.' },
  ];
  return focus[index];
}

function weeklyMomentGoals(ageGroup: any, subTheme: string, key: string, focusDomain: string, focusActivity: string) {
  if (ageGroup !== '5-6 tuổi') return [];
  const contexts: Record<string, { domain: string; activity: string; content: string; limit: number }> = {
    reception: { domain: 'Tình cảm – Xã hội', activity: 'trò chuyện giao tiếp tự phục vụ', content: `cảm xúc giao tiếp ${subTheme}`, limit: 2 },
    morningExercise: { domain: 'Thể chất', activity: 'thể dục vận động', content: 'vận động sức khỏe an toàn', limit: 2 },
    outdoor: { domain: 'Nhận thức', activity: 'khám phá quan sát ngoài trời', content: `quan sát môi trường hợp tác ${subTheme}`, limit: 3 },
    corners: { domain: 'Tình cảm – Xã hội', activity: 'hoạt động góc chơi nhóm', content: 'lựa chọn hợp tác giao tiếp giải quyết tình huống', limit: 3 },
    care: { domain: 'Thể chất', activity: 'vệ sinh ăn ngủ tự phục vụ', content: 'vệ sinh sức khỏe tự phục vụ', limit: 2 },
    afternoon: { domain: focusDomain, activity: `củng cố ${focusActivity}`, content: 'thực hành củng cố lựa chọn', limit: 2 },
    recognition: { domain: 'Tình cảm – Xã hội', activity: 'nêu gương tự nhận xét', content: 'trách nhiệm tôn trọng cảm xúc', limit: 2 },
    pickup: { domain: 'Tình cảm – Xã hội', activity: 'chào hỏi giao tiếp tự phục vụ', content: 'giao tiếp chuẩn bị đồ dùng', limit: 2 },
  };
  const c = contexts[key];
  return c ? suggestGoals({ ageGroup, developmentDomain: c.domain, plannedActivity: c.activity, coreContent: c.content, subTheme, limit: c.limit }) : [];
}

function buildDayPlan(subTheme: string, index: number) {
  const outdoor = [
    `Quan sát một khu vực/sự vật thực tế có liên hệ với “${subTheme}”; trẻ nêu điều đã biết và điều muốn tìm hiểu.`,
    'Khảo sát theo cặp/nhóm nhỏ, tìm điểm giống – khác hoặc thu thập dấu hiệu từ môi trường gần gũi.',
    'Trò chơi vận động ngoài trời; trẻ lựa chọn cách chơi, phối hợp và tuân thủ giới hạn an toàn.',
    'Sáng tạo với học liệu thiên nhiên/vật liệu sẵn có; khuyến khích nhiều cách làm khác nhau.',
    'Đi dạo – tìm dấu hiệu đã khám phá trong tuần; trẻ kể lại phát hiện đáng nhớ.',
  ];
  const corners = [
    'Mở góc phân vai/xây dựng theo trải nghiệm đầu tuần; cô quan sát ý tưởng chơi và hỗ trợ trẻ thỏa thuận.',
    'Bổ sung nhiệm vụ đếm, phân loại, sắp xếp hoặc tạo ký hiệu vào góc chơi phù hợp.',
    'Góc sách – kể chuyện – đóng vai; trẻ dùng lời nói để trao đổi và phát triển tình huống chơi.',
    'Góc vận động/xây dựng: phối hợp nhóm, giải quyết khó khăn nảy sinh trong khi chơi.',
    'Trẻ lựa chọn góc yêu thích, hoàn thiện sản phẩm/mạch chơi và chia sẻ điều đã học trong tuần.',
  ];
  const afternoons = [
    'Trò chơi nhóm nhỏ củng cố trải nghiệm buổi sáng; quan sát trẻ cần hỗ trợ thêm.',
    'Thực hành kỹ năng tự phục vụ; ôn nội dung bằng thao tác với đồ vật quen thuộc.',
    'Kể lại/chia sẻ trải nghiệm trong ngày; xem sản phẩm và bổ sung ý tưởng cho ngày sau.',
    'Trò chơi hợp tác, kỹ năng xử lý tình huống và vệ sinh – sắp xếp môi trường cùng cô.',
    'Nêu gương cuối tuần; trẻ tự nhận xét điều mình làm được, văn nghệ và chơi theo ý thích.',
  ];
  const reception = [
    `Đón trẻ, quan sát cảm xúc; trò chuyện mở về trải nghiệm của trẻ với “${subTheme}”.`,
    'Gợi trẻ nhớ lại phát hiện hôm trước; cho trẻ lựa chọn học liệu/chơi nhẹ theo nhu cầu.',
    'Trò chuyện theo tranh/vật thật hoặc sản phẩm của trẻ; khuyến khích trẻ đặt câu hỏi cho bạn.',
    'Đón trẻ bằng nhiệm vụ nhỏ tự phục vụ; trao đổi về cách giữ an toàn khi vận động.',
    'Trẻ chọn một điều đáng nhớ trong tuần để kể với cô/bạn; chuẩn bị tâm thế tổng kết tuần.',
  ];
  return {
    reception: reception[index],
    morningExercise: 'Khởi động nhẹ – vận động các nhóm cơ – bài tập phát triển chung; điều chỉnh cường độ theo sức khỏe trẻ.',
    outdoor: outdoor[index],
    corners: corners[index],
    care: 'Rửa tay đúng thời điểm; ăn đủ lượng phù hợp; ngủ/nghỉ đúng nề nếp; cô quan sát sức khỏe và hỗ trợ trẻ tự phục vụ.',
    afternoon: afternoons[index],
    recognition: index === 4 ? 'Nêu gương cuối tuần: trẻ tự nhận xét, ghi nhận cố gắng của bạn và chọn việc muốn làm tốt hơn tuần sau.' : 'Nêu gương cuối ngày: trẻ chia sẻ một việc mình đã cố gắng; cô ghi nhận biểu hiện cụ thể, không so sánh trẻ.',
    pickup: 'Trẻ chơi nhẹ, chuẩn bị đồ dùng cá nhân; cô trao đổi ngắn với gia đình về điểm nổi bật/cần phối hợp khi cần.',
  };
}

export function WeeklyPlanPage() {
  const { navigate, classProfile, setDraftFormData } = useApp();
  const [startDate, setStartDate] = useState('2026-09-07');
  const [generated, setGenerated] = useState(false);
  const [saved, setSaved] = useState(false);
  const ageGroup = classProfile?.ageGroup || '5-6 tuổi';
  const theme = useMemo(() => findThemeByDate(startDate, ageGroup), [startDate, ageGroup]);

  const weekDays = useMemo(() => {
    if (!theme) return [];
    return dayNames.map((day, index) => {
      const date = addDays(startDate, index);
      const dayTheme = findThemeByDate(date, ageGroup) || theme;
      const focus = buildDailyFocus(dayTheme.subTheme, index);
      const goals = suggestGoals({
        ageGroup,
        developmentDomain: focus.domain,
        plannedActivity: focus.activity,
        coreContent: focus.core,
        subTheme: dayTheme.subTheme,
        limit: 2,
      });
      const momentGoals = Object.fromEntries(['reception','morningExercise','outdoor','corners','care','afternoon','recognition','pickup'].map(key => [key, weeklyMomentGoals(ageGroup, dayTheme.subTheme, key, focus.domain, focus.activity)]));
      return { day, date, theme: dayTheme, focus, goals, momentGoals, dayPlan: buildDayPlan(dayTheme.subTheme, index) };
    });
  }, [startDate, ageGroup, theme]);

  const openDay = (index: number) => {
    const item = weekDays[index];
    if (!item) return;
    setDraftFormData({
      date: item.date,
      dayOfWeek: item.day,
      ageGroup,
      mainTheme: item.theme.mainTheme,
      subTheme: item.theme.subTheme,
      coreContent: item.focus.core,
      developmentDomain: item.focus.domain,
      plannedActivity: item.focus.activity,
      objectives: item.goals.map(g => `${g.code}. ${g.goal.replace(new RegExp(`^${g.code.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.?\\s*`), '')}`).join('\n'),
    });
    navigate('daily-plan');
  };

  const saveWeek = () => {
    if (!theme || !weekDays.length) return;
    try {
      const existing = JSON.parse(localStorage.getItem(WEEKLY_STORAGE_KEY) || '[]') as unknown[];
      const record = { id: `week-${startDate}`, startDate, ageGroup, mainTheme: theme.mainTheme, subTheme: theme.subTheme, days: weekDays, savedAt: new Date().toISOString() };
      const next = [record, ...existing.filter((item: any) => item?.id !== record.id)];
      localStorage.setItem(WEEKLY_STORAGE_KEY, JSON.stringify(next));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2200);
    } catch {
      setSaved(false);
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <button onClick={() => navigate('home')} className="btn-ghost mb-3 -ml-2"><ArrowLeft className="h-4 w-4" />Trang chủ</button>
        <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md"><CalendarRange className="h-6 w-6" /></div><div><h1 className="text-xl font-bold text-stone-800 lg:text-2xl">Soạn kế hoạch tuần</h1><p className="text-sm text-stone-500">Tạo mạch 5 ngày, rồi mở từng ngày để soạn chi tiết</p></div></div>
      </div>

      <section className="card p-5">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><label className="label-base">Ngày thứ Hai của tuần</label><input type="date" className="input-base" value={startDate} onChange={e=>{setStartDate(e.target.value);setGenerated(false);setSaved(false)}} /></div>
          <button className="btn-primary" onClick={()=>setGenerated(true)}><Sparkles className="h-5 w-5" />Tạo kế hoạch tuần</button>
        </div>
        {ageGroup !== '5-6 tuổi' && <div className="mt-3 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800"><AlertTriangle className="h-4 w-4 shrink-0" />Hiện chỉ có bộ mục tiêu và lịch chủ đề chuyên môn cho 5–6 tuổi. Không tự gắn mục tiêu chính thức cho độ tuổi khác.</div>}
        {theme && <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800"><strong>{theme.mainTheme}</strong> → {theme.subTheme}<span className="block text-xs">Nguồn chủ đề: {THEME_SOURCE}</span></div>}
      </section>

      {generated && theme && (
        <>
          <section className="card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><h2 className="font-bold text-stone-800">KẾ HOẠCH GIÁO DỤC TUẦN</h2><p className="mt-1 text-sm text-stone-600">Chủ đề: <strong>{theme.subTheme}</strong> · {shortDate(startDate)} – {shortDate(addDays(startDate,4))}</p><p className="mt-2 text-xs text-stone-500">Cấu trúc tham khảo: {SAMPLE_SOURCE} · Mục tiêu: {GOAL_SOURCE}</p></div>
              <div className="flex gap-2"><button onClick={saveWeek} className="btn-ghost border border-stone-200"><Save className="h-4 w-4" />{saved ? 'Đã lưu' : 'Lưu tuần'}</button><button onClick={()=>window.print()} className="btn-ghost border border-stone-200"><Printer className="h-4 w-4" />In</button></div>
            </div>
            {saved && <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700"><CheckCircle2 className="h-4 w-4" />Đã lưu kế hoạch tuần trên thiết bị này.</div>}
          </section>

          <section className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-[1100px] w-full border-collapse text-sm">
                <thead><tr className="bg-stone-50"><th className="w-40 border-b border-r border-stone-200 p-3 text-left">Thời điểm</th>{weekDays.map(item=><th key={item.day} className="min-w-48 border-b border-r border-stone-200 p-3 text-left"><span className="font-bold text-secondary-700">{item.day}</span><span className="block text-xs font-normal text-stone-400">{shortDate(item.date)}</span></th>)}</tr></thead>
                <tbody>
                  {[
                    ['Đón trẻ – Trò chuyện','reception'],['Thể dục sáng','morningExercise'],['Chơi ngoài trời','outdoor'],['Hoạt động có chủ đích','focus'],['Hoạt động góc','corners'],['Vệ sinh – Ăn – Ngủ','care'],['Hoạt động chiều','afternoon'],['Nêu gương','recognition'],['Trả trẻ','pickup'],
                  ].map(([label,key])=><tr key={key}><th className="border-b border-r border-stone-200 bg-stone-50/60 p-3 align-top text-left font-semibold text-stone-600">{label}</th>{weekDays.map((item,index)=><td key={`${key}-${item.date}`} className="border-b border-r border-stone-200 p-3 align-top text-stone-700">{key === 'focus' ? <><p className="font-semibold text-stone-800">{item.focus.activity}</p><p className="mt-1 text-xs text-stone-500">{item.focus.core}</p>{item.goals.length > 0 && <p className="mt-2 text-xs text-emerald-700">Mục tiêu: {item.goals.map(g=>g.code).join(', ')}</p>}<button className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-secondary-700" onClick={()=>openDay(index)}>Soạn chi tiết <ArrowRight className="h-3.5 w-3.5" /></button></> : <><p>{item.dayPlan[key as keyof typeof item.dayPlan]}</p>{item.momentGoals[key]?.length > 0 && <p className="mt-2 text-xs text-emerald-700">Mục tiêu: {item.momentGoals[key].map((g:any)=>g.code).join(', ')}</p>}</>}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800"><strong>Liên kết cả tuần:</strong> đầu tuần khơi kinh nghiệm → giữa tuần mở rộng bằng toán/ngôn ngữ/vận động → cuối tuần trẻ vận dụng, kể lại và tự nhận xét. Các thời điểm trong ngày cùng hướng về trải nghiệm chung nhưng không lặp máy móc một đối tượng. Khi bấm <strong>Soạn chi tiết</strong>, ngày – chủ đề – lĩnh vực – hoạt động – mục tiêu được chuyển sang Kế hoạch ngày để giáo viên tiếp tục chỉnh.</section>
        </>
      )}
      {generated && !theme && <div className="card p-6 text-center text-sm text-stone-600">Không tìm thấy tuần này trong lịch chủ đề đã nạp. Hãy chọn tuần thuộc năm học 2026–2027 hoặc nhập chủ đề thủ công ở “Soạn kế hoạch ngày”.</div>}
    </div>
  );
}
