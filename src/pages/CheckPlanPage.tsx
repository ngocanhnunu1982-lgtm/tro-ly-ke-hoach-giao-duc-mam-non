import { useApp } from '@/context/AppContext';
import { ArrowLeft, Search, CheckCircle2, AlertTriangle, Lightbulb, Sparkles, XCircle } from 'lucide-react';
import { findThemeByDate, findFramework, CURRICULUM_GOALS } from '@/data/knowledgeBase';

export function CheckPlanPage() {
  const { navigate, currentPlan, savedPlans, setCurrentPlan } = useApp();
  const plan=currentPlan || savedPlans[0] || null;
  if(!plan) return <div className="animate-fade-in space-y-6"><button onClick={()=>navigate('home')} className="btn-ghost"><ArrowLeft className="h-4 w-4"/>Trang chủ</button><div className="card p-10 text-center"><Search className="mx-auto h-10 w-10 text-sky-500"/><h1 className="mt-3 text-lg font-bold">Chưa có kế hoạch để kiểm tra</h1><button onClick={()=>navigate('daily-plan')} className="btn-primary mt-4"><Sparkles className="h-4 w-4"/>Soạn kế hoạch ngày</button></div></div>;
  const d=plan.formData; const scheduled=findThemeByDate(d.date,d.ageGroup); const framework=findFramework(`${d.plannedActivity} ${d.developmentDomain}`);
  const codes=(d.objectives.match(/(?:TC|TX|NN|NT|NgT)\s*\d+(?:\.\d+){1,2}/g)||[]).map(x=>x.replace(/\s+/g,'')); const known=new Set(CURRICULUM_GOALS.map(g=>g.code.replace(/\s+/g,'')));
  const main=plan.sections.find(s=>s.title==='Hoạt động có chủ đích'); const core=plan.coreDevelopment; const selected=core?[...core.qualities,...core.competencies].filter(x=>x.selected):[];
  const other=plan.sections.filter(s=>s.title!=='Hoạt động có chủ đích'); const withGoals=other.filter(s=>/(?:TC|TX|NN|NT|NgT)\s*\d/.test(s.objective));
  type Level='Đạt'|'Nên xem lại'|'Cần bổ sung';
  const items:{label:string;level:Level;hint:string}[]=[
    {label:'Độ tuổi và nguồn mục tiêu',level:d.ageGroup==='5-6 tuổi'?'Đạt':'Nên xem lại',hint:d.ageGroup==='5-6 tuổi'?'Đang dùng bộ mục tiêu 5–6 tuổi đã nạp.':'Chưa có bộ mục tiêu nguồn tương ứng cho độ tuổi này.'},
    {label:'Chủ đề theo tuần',level:!scheduled||(scheduled.mainTheme===d.mainTheme&&scheduled.subTheme===d.subTheme)?'Đạt':'Nên xem lại',hint:scheduled?`Lịch nguồn: ${scheduled.mainTheme} → ${scheduled.subTheme}`:'Không có lịch chủ đề nguồn để đối chiếu.'},
    {label:'Mã mục tiêu 388',level:codes.length&&codes.every(c=>known.has(c))?'Đạt':codes.length?'Nên xem lại':'Cần bổ sung',hint:codes.length?`Phát hiện: ${codes.join(', ')}`:'Chưa phát hiện mã mục tiêu trong phần mục tiêu đã chọn.'},
    {label:'Đề tài – lĩnh vực – sườn hoạt động',level:framework?'Đạt':'Nên xem lại',hint:framework?`Nhận diện: ${framework.title}`:'Chưa nhận diện được sườn chuyên môn nguồn cho đề tài/lĩnh vực này.'},
    {label:'Mục tiêu xuyên các hoạt động trong ngày',level:withGoals.length>=Math.ceil(other.length*0.6)?'Đạt':withGoals.length?'Nên xem lại':'Cần bổ sung',hint:`${withGoals.length}/${other.length} hoạt động ngoài tiết học có mã mục tiêu nguồn.`},
    {label:'Tiến trình hoạt động có chủ đích',level:main&&main.content.length>350?'Đạt':main?'Nên xem lại':'Cần bổ sung',hint:main?'Đã có nội dung tổ chức; kiểm tra mức độ cụ thể theo đề tài.':'Thiếu hoạt động có chủ đích.'},
    {label:'Phẩm chất – năng lực có cơ hội thực hiện',level:main&&/PHẨM CHẤT – NĂNG LỰC/.test(main.content)&&selected.length?'Đạt':'Nên xem lại',hint:selected.length?`Đang hướng tới: ${selected.map(x=>x.name).join(', ')}.`:'Chưa có yếu tố trọng tâm/phối hợp được xác định.'},
    {label:'Mạch và độ đầy đủ của kế hoạch ngày',level:plan.educationalChain&&plan.sections.length>=9?'Đạt':'Cần bổ sung',hint:`Hiện có ${plan.sections.length}/9 thời điểm hoạt động.`},
    {label:'Nguồn truy xuất chuyên môn',level:plan.objectiveSource&&plan.sections.every(s=>s.source)?'Đạt':'Nên xem lại',hint:'Các nội dung có nguồn nên hiển thị nguồn; phần AI gợi ý cần giáo viên duyệt.'},
  ];
  const counts={Đạt:items.filter(x=>x.level==='Đạt').length,'Nên xem lại':items.filter(x=>x.level==='Nên xem lại').length,'Cần bổ sung':items.filter(x=>x.level==='Cần bổ sung').length};
  const icon=(l:Level)=>l==='Đạt'?<CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600"/>:l==='Cần bổ sung'?<XCircle className="h-5 w-5 shrink-0 text-rose-500"/>:<AlertTriangle className="h-5 w-5 shrink-0 text-amber-500"/>;
  return <div className="animate-fade-in space-y-6"><div><button onClick={()=>navigate('plan-result')} className="btn-ghost mb-3 -ml-2"><ArrowLeft className="h-4 w-4"/>Kế hoạch</button><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white"><Search className="h-6 w-6"/></div><div><h1 className="text-xl font-bold">Kiểm tra kế hoạch trước khi xuất</h1><p className="text-sm text-stone-500">Trợ lý chuyên môn đưa cảnh báo; giáo viên là người quyết định chỉnh sửa.</p></div></div></div>
  <section className="card grid gap-3 p-4 sm:grid-cols-3"><div className="rounded-lg bg-emerald-50 p-3 text-emerald-800"><b>{counts['Đạt']} Đạt</b></div><div className="rounded-lg bg-amber-50 p-3 text-amber-800"><b>{counts['Nên xem lại']} Nên xem lại</b></div><div className="rounded-lg bg-rose-50 p-3 text-rose-800"><b>{counts['Cần bổ sung']} Cần bổ sung</b></div></section>
  <div className="space-y-3">{items.map(x=><section key={x.label} className="card flex gap-3 p-4">{icon(x.level)}<div><div className="flex flex-wrap items-center gap-2"><p className="font-semibold text-stone-800">{x.label}</p><span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs">{x.level}</span></div><p className="mt-1 text-sm text-stone-500">{x.hint}</p></div></section>)}</div>
  <section className="card p-4"><div className="flex gap-2"><Lightbulb className="h-5 w-5 text-accent-500"/><div><p className="font-semibold">Cách sử dụng kết quả</p><p className="mt-1 text-sm text-stone-600">Ưu tiên mục “Cần bổ sung”, sau đó xem các mục “Nên xem lại”. App không tự sửa và không tuyên bố kế hoạch “đúng quy định”.</p></div></div></section>
  {currentPlan!==plan&&<button className="btn-secondary" onClick={()=>{setCurrentPlan(plan);navigate('plan-result')}}>Mở kế hoạch đang kiểm tra</button>}</div>;
}
