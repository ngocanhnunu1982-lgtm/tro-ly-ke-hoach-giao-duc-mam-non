export type AgeGroup = '24-36 tháng' | '3-4 tuổi' | '4-5 tuổi' | '5-6 tuổi';

export type PlanLevel = 'Nhanh' | 'Chi tiết' | 'Hồ sơ chuyên môn';

export type DayOfWeek =
  | 'Thứ Hai'
  | 'Thứ Ba'
  | 'Thứ Tư'
  | 'Thứ Năm'
  | 'Thứ Sáu'
  | 'Thứ Bảy'
  | 'Chủ nhật';

export type DocumentCategory =
  | 'Chương trình/Công văn/Tài liệu thí điểm'
  | 'Mục tiêu giáo dục'
  | 'Dự kiến chủ đề'
  | 'Sườn giáo án'
  | 'Kế hoạch mẫu'
  | 'Tài liệu khác';

export type DocumentStatus = 'Đang áp dụng' | 'Ngừng áp dụng';
export type DocumentFileType = 'Word' | 'PDF' | 'Excel' | 'Khác';

export interface ProfessionalDocument {
  id: string;
  name: string;
  category: DocumentCategory;
  fileType: DocumentFileType;
  ageGroup: AgeGroup | 'Toàn trường';
  className: string;
  schoolYear: string;
  status: DocumentStatus;
  fileName: string;
  fileSize?: number;
  addedAt: string;
  source: 'Tài liệu cung cấp' | 'Giáo viên tải lên';
  extractedText?: string;
  notes?: string;
}

export interface DocumentSource {
  documentId: string;
  documentName: string;
  label: string;
  confidence: 'Tài liệu cung cấp' | 'AI đề xuất – cần giáo viên kiểm tra';
}

export interface ClassProfile {
  schoolName: string;
  schoolAddress: string;
  teacherName: string;
  teacherPhone: string;
  className: string;
  ageGroup: AgeGroup;
  studentCount: number;
  classroomCondition: string;
  playgroundCondition: string;
  availableMaterials: string;
  notes: string;
}

export interface PlanFormData {
  schoolName: string;
  schoolAddress: string;
  teacherName: string;
  className: string;
  ageGroup: AgeGroup;
  studentCount: string;
  date: string;
  dayOfWeek: DayOfWeek;
  mainTheme: string;
  subTheme: string;
  coreContent: string;
  plannedActivity: string;
  developmentDomain: string;
  objectives: string;
  availableMaterials: string;
  classroomCondition: string;
  playgroundCondition: string;
  weather: string;
  aiNotes: string;
  level: PlanLevel;
}

export interface ActivitySection {
  id: string;
  title: string;
  icon: string;
  time: string;
  objective: string;
  content: string;
  materials: string;
  notes: string;
  duration: string;
  source?: DocumentSource;
  structure?: string[];
}

export interface GeneratedPlan {
  id: string;
  formData: PlanFormData;
  sections: ActivitySection[];
  createdAt: string;
  educationalChain: string;
  objectiveSource?: DocumentSource;
  themeSource?: DocumentSource;
  reviewWarnings?: string[];
}

export type PageKey =
  | 'home'
  | 'daily-plan'
  | 'weekly-plan'
  | 'activity-library'
  | 'my-plans'
  | 'check-plan'
  | 'class-profile'
  | 'professional-documents'
  | 'plan-result';
