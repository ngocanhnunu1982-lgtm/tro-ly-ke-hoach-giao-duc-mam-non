import type { GeneratedPlan } from '@/types';

const esc = (s='') => s.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c] || c));
const lines = (s='') => esc(s).replace(/\n/g,'<br>');

export function planDocumentHtml(plan: GeneratedPlan) {
  const d=plan.formData;
  const sections=plan.sections.map((s,i)=>`<section><h2>${i+1}. ${esc(s.title)} <small>${esc(s.time)} · ${esc(s.duration)}</small></h2><p><b>Mục tiêu:</b> ${lines(s.objective)}</p><p><b>Nội dung và cách tổ chức:</b><br>${lines(s.content)}</p><p><b>Đồ dùng/nguyên vật liệu:</b> ${lines(s.materials)}</p>${s.notes?`<p><b>Lưu ý:</b> ${lines(s.notes)}</p>`:''}</section>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><title>Kế hoạch giáo dục - ${esc(d.date)}</title><style>@page{size:A4;margin:18mm}body{font-family:"Times New Roman",serif;font-size:13pt;line-height:1.45;color:#111}h1{text-align:center;font-size:18pt;margin:0 0 10px}h2{font-size:14pt;margin:18px 0 6px;border-bottom:1px solid #bbb;padding-bottom:4px}small{font-size:10pt;font-weight:normal}p{margin:6px 0}.meta{border:1px solid #999;padding:10px;margin:12px 0}.source{font-size:10pt;color:#555}.chain{padding:8px;background:#f5f5f5}@media print{button{display:none}}</style></head><body><h1>KẾ HOẠCH GIÁO DỤC NGÀY</h1><div class="meta"><b>Ngày:</b> ${esc(d.dayOfWeek)}, ${esc(d.date)}<br><b>Trường:</b> ${esc(d.schoolName)} &nbsp; <b>Lớp:</b> ${esc(d.className)}<br><b>Giáo viên:</b> ${esc(d.teacherName)} &nbsp; <b>Độ tuổi:</b> ${esc(d.ageGroup)}<br><b>Chủ đề:</b> ${esc(d.mainTheme)}${d.subTheme?` — ${esc(d.subTheme)}`:''}<br><b>Đề tài HĐ có chủ đích:</b> ${esc(d.plannedActivity)}<br><b>Lĩnh vực:</b> ${esc(d.developmentDomain)}</div><p><b>Mục tiêu đã chọn:</b><br>${lines(d.objectives)}</p><p class="chain"><b>Mạch giáo dục trong ngày:</b> ${esc(plan.educationalChain)}</p>${sections}<hr><p class="source"><b>Nguồn chuyên môn:</b> ${esc(plan.objectiveSource?.documentName || '—')}${plan.themeSource?` · ${esc(plan.themeSource.documentName)}`:''}</p></body></html>`;
}

function downloadBlob(content: BlobPart, mime: string, filename: string) {
  const blob=new Blob([content],{type:mime}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; a.click(); window.setTimeout(()=>URL.revokeObjectURL(url),1000);
}
export function exportPlanWord(plan: GeneratedPlan){ downloadBlob('\ufeff'+planDocumentHtml(plan),'application/msword',`Ke-hoach-ngay-${plan.formData.date||'mam-non'}.doc`); }
export function printPlan(plan: GeneratedPlan){ const w=window.open('','_blank'); if(!w) return false; w.document.open(); w.document.write(planDocumentHtml(plan)); w.document.close(); w.focus(); window.setTimeout(()=>w.print(),250); return true; }
export function exportPlanPdf(plan: GeneratedPlan){ return printPlan(plan); }


export function exportWeeklyWord(params: { startDate: string; endDate: string; mainTheme: string; subTheme: string; plans: GeneratedPlan[]; common?: { reception:string; morningExercise:string; care:string; corners:{name:string;playTitle:string;objective:string}[]; focusCorners:{day:string;corner:string}[] } }) {
  const ordered = [...params.plans].sort((a,b)=>a.formData.date.localeCompare(b.formData.date));
  const first = ordered[0]?.formData;
  const common=params.common;
  const commonHtml=common ? `<h2>PHẦN I – HOẠT ĐỘNG CHUNG TRONG TUẦN</h2>
    <section><h3>1. Đón trẻ – Trò chuyện</h3><p>${lines(common.reception)}</p></section>
    <section><h3>2. Thể dục sáng</h3><p>${lines(common.morningExercise)}</p></section>
    <section><h3>3. Hoạt động vui chơi trong lớp</h3>${common.corners.map(c=>`<p><b>Góc ${esc(c.name)}:</b> ${esc(c.playTitle || 'Giáo viên bổ sung')} ${c.objective?`<br><i>Mục tiêu gốc:</i> ${lines(c.objective)}`:''}</p>`).join('')}<p><b>Góc trọng tâm:</b><br>${common.focusCorners.map(x=>`${esc(x.day)}: ${esc(x.corner)}`).join('<br>')}</p></section>
    <section><h3>4. Vệ sinh – Ăn – Ngủ</h3><p>${lines(common.care)}</p></section>
    <section><h3>5. Nêu gương – Trả trẻ</h3><p>Thực hiện theo nề nếp chung của lớp; điều chỉnh theo tình hình thực tế từng ngày.</p></section>` : '';
  const days = ordered.map((plan) => {
    const d=plan.formData;
    const wanted=plan.sections.filter(s=>['Hoạt động ngoài trời','Hoạt động có chủ đích','Hoạt động chiều'].includes(s.title));
    const sections=wanted.map((s,i)=>`<section><h3>${i+1}. ${esc(s.title)} <small>${esc(s.time)} · ${esc(s.duration)}</small></h3><p><b>Mục tiêu:</b> ${lines(s.objective)}</p><p><b>Nội dung và cách tổ chức:</b><br>${lines(s.content)}</p><p><b>Đồ dùng/nguyên vật liệu:</b> ${lines(s.materials)}</p>${s.notes?`<p><b>Lưu ý:</b> ${lines(s.notes)}</p>`:''}</section>`).join('');
    return `<div class="day"><h2>${esc(d.dayOfWeek)} – ${esc(d.date)}</h2><div class="meta"><b>Hoạt động có chủ đích:</b> ${esc(d.plannedActivity)}<br><b>Lĩnh vực:</b> ${esc(d.developmentDomain)}<br><b>Mục tiêu:</b><br>${lines(d.objectives)}</div>${sections}</div>`;
  }).join('');
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>Kế hoạch tuần ${esc(params.startDate)}</title><style>@page{size:A4;margin:16mm}body{font-family:"Times New Roman",serif;font-size:12.5pt;line-height:1.4;color:#111}h1{text-align:center;font-size:18pt}h2{font-size:16pt;margin-top:18px;border-bottom:2px solid #555;padding-bottom:5px}h3{font-size:13.5pt;margin:14px 0 5px}.meta{border:1px solid #999;padding:9px;margin:10px 0}p{margin:5px 0}small{font-size:10pt;font-weight:normal}.day{page-break-inside:avoid}</style></head><body><h1>KẾ HOẠCH GIÁO DỤC TUẦN</h1><div class="meta"><b>Thời gian:</b> ${esc(params.startDate)} – ${esc(params.endDate)}<br><b>Trường:</b> ${esc(first?.schoolName || '')} &nbsp; <b>Lớp:</b> ${esc(first?.className || '')}<br><b>Giáo viên:</b> ${esc(first?.teacherName || '')} &nbsp; <b>Độ tuổi:</b> ${esc(first?.ageGroup || '')}<br><b>Chủ đề:</b> ${esc(params.mainTheme)} — <b>Chủ đề nhánh:</b> ${esc(params.subTheme)}</div>${commonHtml}<h2>PHẦN II – KẾ HOẠCH GIÁO DỤC TỪNG NGÀY</h2>${days}</body></html>`;
  downloadBlob('\ufeff'+html,'application/msword',`Ke-hoach-tuan-${params.startDate}.doc`);
}
