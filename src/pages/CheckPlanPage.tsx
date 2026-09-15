import { useApp } from '@/context/AppContext';
import { ArrowLeft, Search, CheckCircle2, AlertTriangle, Lightbulb, Sparkles } from 'lucide-react';
import { findThemeByDate, findFramework, CURRICULUM_GOALS } from '@/data/knowledgeBase';

export function CheckPlanPage() {
  const { navigate, currentPlan, savedPlans, setCurrentPlan } = useApp();
  const plan = currentPlan || savedPlans[0] || null;
  if (!plan) return (
    <div className="animate-fade-in space-y-6">
      <button onClick={()=>navigate('home')} className="btn-ghost"><ArrowLeft className="h-4 w-4"/>Trang chủ</button>
      <div className="card p-10 text-center"><Search className="mx-auto h-10 w-10 text-sky-500"/><h1 className="mt-3 text-lg font-bold">Chưa có kế hoạch để kiểm tra</h1><button onClick={()=>navigate('daily-plan')} className="btn-primary mt-4"><Sparkles className="h-4 w-4"/>Soạn kế hoạch ngày</button></div>
    </div>
  );

  const d=plan.formData;
  const scheduled=findThemeByDate(d.date,d.ageGroup);
  const goalCodes=(d.objectives.match(/(?:TC|TX|NN|NT|NgT)\s*\d+(?:\.\d+)?/g)||[]).map(x=>x.replace(/\s+/g,''));
  const knownCodes=new Set(CURRICULUM_GOALS.map(g=>g.code.replace(/\s+/g,'')));
  const framework=findFramework(`${d.plannedActivity} ${d.developmentDomain}`);
  const core=plan.coreDevelopment;
  const selectedCore=core?[...core.qualities,...core.competencies].filter(x=>x.selected):[];
  const mainSection=plan.sections.find(s=>s.title==='Hoạt động có chủ đích');
  const checks=[
    {label:'Đúng độ tuổi của bộ mục tiêu',ok:d.ageGroup==='5-6 tuổi',hint:d.ageGroup==='5-6 tuổi'?'Bộ mục tiêu 5–6 tuổi đang được nạp.':'Chưa có bộ mục tiêu chuyên môn cho độ tuổi này.'},
    {label:'Đúng chủ đề của tuần',ok:!scheduled || (scheduled.mainTheme===d.mainTheme && scheduled.subTheme===d.subTheme),hint:scheduled?`Theo lịch: ${scheduled.mainTheme} → ${scheduled.subTheme}`:'Không có chủ đề lịch để đối chiếu ngày này.'},
    {label:'Mã mục tiêu có trong tài liệu',ok:goalCodes.length>0 && goalCodes.every(c=>knownCodes.has(c)),hint:goalCodes.length?`Phát hiện: ${goalCodes.join(', ')}`:'Chưa phát hiện mã mục tiêu trong nội dung.'},
    {label:'Hoạt động học nhận diện được sườn',ok:!!framework,hint:framework?framework.title:'Chưa tìm thấy sườn tương ứng; cần giáo viên kiểm tra.'},
    {label:'Có mạch giáo dục trong ngày',ok:!!plan.educationalChain && plan.sections.length>=8,hint:`${plan.sections.length} phần hoạt động đã được tạo.`},
    {label:'Có nguồn truy xuất',ok:!!plan.objectiveSource && plan.sections.every(s=>!!s.source),hint:'Mục tiêu/chủ đề/sườn nên hiển thị nguồn rõ ràng.'},
    {label:'Có phát triển 4 phẩm chất – 5 năng lực',ok:!!core && selectedCore.length>=3,hint:core?`Đang hướng tới: ${selectedCore.map(x=>x.name).join(', ')}.`:'Kế hoạch cũ chưa có lớp phát triển phẩm chất/năng lực.'},
    {label:'Phẩm chất/năng lực được đưa vào cách tổ chức',ok:!!mainSection && /PHẨM CHẤT – NĂNG LỰC/.test(mainSection.content),hint:'Không chỉ ghi nhãn; hoạt động cần có cơ hội cụ thể để trẻ thể hiện.'},
  ];

  const issues=checks.filter(c=>!c.ok).length;
  return (
    <div className="animate-fade-in space-y-6">
      <div><button onClick={()=>navigate('home')} className="btn-ghost mb-3 -ml-2"><ArrowLeft className="h-4 w-4"/>Trang chủ</button><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white"><Search className="h-6 w-6"/></div><div><h1 className="text-xl font-bold text-stone-800">Kiểm tra kế hoạch</h1><p className="text-sm text-stone-500">Đối chiếu tài liệu chuyên môn và tính nhất quán của kế hoạch</p></div></div></div>
      <section className={`rounded-xl border p-4 ${issues===0?'border-emerald-200 bg-emerald-50 text-emerald-800':'border-amber-200 bg-amber-50 text-amber-800'}`}><strong>{issues===0?'PHÙ HỢP':'CẦN XEM LẠI'}</strong><span className="ml-2 text-sm">{issues===0?'Không phát hiện vấn đề chính trong các tiêu chí hiện có.':`${issues} tiêu chí cần giáo viên kiểm tra.`}</span></section>
      <div className="space-y-3">{checks.map(c=><section key={c.label} className="card flex gap-3 p-4">{c.ok?<CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600"/>:<AlertTriangle className="h-5 w-5 shrink-0 text-amber-500"/>}<div><p className="font-semibold text-stone-800">{c.label}</p><p className="mt-1 text-sm text-stone-500">{c.hint}</p></div></section>)}</div>
      <section className="card p-4"><div className="flex gap-2"><Lightbulb className="h-5 w-5 text-accent-500"/><div><p className="font-semibold">Đề xuất cải thiện</p><p className="mt-1 text-sm text-stone-600">Ưu tiên sửa các mục “Cần xem lại”. Không tự tuyên bố “đúng quy định” khi chưa có tài liệu tương ứng cho độ tuổi hoặc loại hoạt động.</p></div></div></section>
      {currentPlan!==plan && <button className="btn-secondary" onClick={()=>{setCurrentPlan(plan);navigate('plan-result')}}>Mở kế hoạch đang kiểm tra</button>}
    </div>
  );
}
