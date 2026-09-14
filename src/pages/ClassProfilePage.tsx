import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import type { ClassProfile, AgeGroup } from '@/types';
import { AGE_GROUPS } from '@/data/constants';
import {
  Users,
  School,
  User,
  Phone,
  MapPin,
  Package,
  Trees,
  StickyNote,
  Save,
  CheckCircle2,
  ArrowLeft,
  GraduationCap,
} from 'lucide-react';

export function ClassProfilePage() {
  const { navigate, classProfile, saveClassProfile } = useApp();
  const [form, setForm] = useState<ClassProfile>({
    schoolName: '',
    schoolAddress: '',
    teacherName: '',
    teacherPhone: '',
    className: '',
    ageGroup: '3-4 tuổi',
    studentCount: 0,
    classroomCondition: '',
    playgroundCondition: '',
    availableMaterials: '',
    notes: '',
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (classProfile) {
      setForm(classProfile);
    }
  }, [classProfile]);

  const update = <K extends keyof ClassProfile>(key: K, value: ClassProfile[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    saveClassProfile(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <button onClick={() => navigate('home')} className="btn-ghost mb-3 -ml-2">
          <ArrowLeft className="h-4 w-4" />
          Trang chủ
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-stone-800 lg:text-2xl">Hồ sơ lớp</h1>
            <p className="text-sm text-stone-500">Thông tin lớp học giúp AI soạn kế hoạch chính xác hơn</p>
          </div>
        </div>
      </div>

      {/* School info */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-stone-800">
          <School className="h-5 w-5 text-secondary-600" />
          Thông tin trường
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="label-base">Tên trường mầm non</label>
            <input
              className="input-base"
              value={form.schoolName}
              onChange={(e) => update('schoolName', e.target.value)}
              placeholder="VD: MN Vòng Bằng Hôn"
            />
          </div>
          <div>
            <label className="label-base">Địa chỉ trường</label>
            <input
              className="input-base"
              value={form.schoolAddress}
              onChange={(e) => update('schoolAddress', e.target.value)}
              placeholder="VD: Số 12, P. Linh Trung, TP. Thủ Đức"
            />
          </div>
        </div>
      </section>

      {/* Teacher info */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-stone-800">
          <User className="h-5 w-5 text-secondary-600" />
          Giáo viên chủ nhiệm
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="label-base">Họ và tên giáo viên</label>
            <input
              className="input-base"
              value={form.teacherName}
              onChange={(e) => update('teacherName', e.target.value)}
              placeholder="VD: Nguyễn Thị Lan Hương"
            />
          </div>
          <div>
            <label className="label-base">Số điện thoại</label>
            <input
              className="input-base"
              value={form.teacherPhone}
              onChange={(e) => update('teacherPhone', e.target.value)}
              placeholder="VD: 0912 345 678"
            />
          </div>
        </div>
      </section>

      {/* Class info */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-stone-800">
          <GraduationCap className="h-5 w-5 text-secondary-600" />
          Thông tin lớp
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="label-base">Tên lớp</label>
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
              value={form.studentCount || ''}
              onChange={(e) => update('studentCount', parseInt(e.target.value) || 0)}
              placeholder="VD: 25"
              min={0}
            />
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="card p-5 lg:p-6">
        <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-stone-800">
          <Package className="h-5 w-5 text-secondary-600" />
          Điều kiện lớp và cơ sở vật chất
        </h2>
        <div className="space-y-4">
          <div>
            <label className="label-base flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-stone-400" />
              Điều kiện lớp học
            </label>
            <textarea
              className="input-base min-h-[80px] resize-y"
              value={form.classroomCondition}
              onChange={(e) => update('classroomCondition', e.target.value)}
              placeholder="VD: Lớp rộng 40m², có máy lạnh, tivi, bàn ghế gỗ, tủ đồ dùng cá nhân..."
            />
          </div>
          <div>
            <label className="label-base flex items-center gap-1.5">
              <Trees className="h-4 w-4 text-stone-400" />
              Điều kiện sân chơi
            </label>
            <textarea
              className="input-base min-h-[80px] resize-y"
              value={form.playgroundCondition}
              onChange={(e) => update('playgroundCondition', e.target.value)}
              placeholder="VD: Sân rộng có mái che, bồn cát, cầu trượt, xích đu, vườn cây..."
            />
          </div>
          <div>
            <label className="label-base flex items-center gap-1.5">
              <Package className="h-4 w-4 text-stone-400" />
              Đồ dùng / nguyên vật liệu hiện có
            </label>
            <textarea
              className="input-base min-h-[80px] resize-y"
              value={form.availableMaterials}
              onChange={(e) => update('availableMaterials', e.target.value)}
              placeholder="VD: Giấy A4, bút sáp, hồ dán, đất nặn, gạch gỗ, khối lắp, tranh ảnh chủ đề..."
            />
          </div>
          <div>
            <label className="label-base flex items-center gap-1.5">
              <StickyNote className="h-4 w-4 text-stone-400" />
              Ghi chú thêm
            </label>
            <textarea
              className="input-base min-h-[60px] resize-y"
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              placeholder="VD: Lớp có 2 trẻ khuyết tật, cần lưu ý khi tổ chức vận động..."
            />
          </div>
        </div>
      </section>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button onClick={handleSave} className="btn-primary flex-1 sm:flex-none">
          <Save className="h-5 w-5" />
          Lưu hồ sơ lớp
        </button>
        {saved && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 animate-fade-in">
            <CheckCircle2 className="h-5 w-5" />
            Đã lưu!
          </span>
        )}
      </div>
    </div>
  );
}
