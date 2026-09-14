import type { ProfessionalDocument, AgeGroup, DocumentCategory, DocumentStatus, DocumentFileType } from '@/types';
import { SEED_DOCUMENTS } from '@/data/documentSeeds';

const STORAGE_KEY = 'kgm_professional_documents';

function loadFromStorage(): ProfessionalDocument[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ProfessionalDocument[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [...SEED_DOCUMENTS];
}

function saveToStorage(docs: ProfessionalDocument[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(docs));
  } catch {
    // ignore
  }
}

let cached: ProfessionalDocument[] | null = null;
const listeners = new Set<() => void>();

function notify(): void {
  for (const fn of listeners) fn();
}

export function getDocuments(): ProfessionalDocument[] {
  if (!cached) cached = loadFromStorage();
  return cached;
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

export function addDocument(doc: Omit<ProfessionalDocument, 'id' | 'addedAt'>): ProfessionalDocument {
  const full: ProfessionalDocument = {
    ...doc,
    id: `doc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    addedAt: new Date().toISOString(),
  };
  const docs = getDocuments();
  cached = [full, ...docs];
  saveToStorage(cached);
  notify();
  return full;
}

export function updateDocument(id: string, updates: Partial<ProfessionalDocument>): void {
  const docs = getDocuments();
  cached = docs.map((d) => (d.id === id ? { ...d, ...updates } : d));
  saveToStorage(cached);
  notify();
}

export function deleteDocument(id: string): void {
  const docs = getDocuments();
  cached = docs.filter((d) => d.id !== id);
  saveToStorage(cached);
  notify();
}

export function getDocumentsByCategory(category: DocumentCategory): ProfessionalDocument[] {
  return getDocuments().filter((d) => d.category === category);
}

export function getActiveDocuments(): ProfessionalDocument[] {
  return getDocuments().filter((d) => d.status === 'Đang áp dụng');
}

export function getActiveObjectives(ageGroup: AgeGroup, className: string): ProfessionalDocument[] {
  return getActiveDocuments().filter(
    (d) =>
      d.category === 'Mục tiêu giáo dục' &&
      (d.ageGroup === 'Toàn trường' || d.ageGroup === ageGroup) &&
      (d.className === '' || d.className === className || d.className === ageGroup),
  );
}

export function getActiveThemes(ageGroup: AgeGroup): ProfessionalDocument[] {
  return getActiveDocuments().filter(
    (d) =>
      d.category === 'Dự kiến chủ đề' &&
      (d.ageGroup === 'Toàn trường' || d.ageGroup === ageGroup),
  );
}

export function getActiveLessonStructures(): ProfessionalDocument[] {
  return getActiveDocuments().filter((d) => d.category === 'Sườn giáo án');
}

export function getActiveCurriculum(ageGroup: AgeGroup, className: string): ProfessionalDocument[] {
  return getActiveDocuments().filter(
    (d) =>
      d.category === 'Chương trình/Công văn/Tài liệu thí điểm' &&
      (d.ageGroup === 'Toàn trường' || d.ageGroup === ageGroup) &&
      (d.className === '' || d.className === className),
  );
}
