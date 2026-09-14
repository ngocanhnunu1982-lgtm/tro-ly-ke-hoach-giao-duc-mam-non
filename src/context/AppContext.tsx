import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { PageKey, GeneratedPlan, ClassProfile, PlanFormData } from '@/types';

const STORAGE_KEYS = {
  classProfile: 'kgm_class_profile',
  savedPlans: 'kgm_saved_plans',
  draftForm: 'kgm_draft_form',
};

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw) as T;
  } catch {
    // ignore corrupt data
  }
  return fallback;
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota errors
  }
}

interface AppContextValue {
  currentPage: PageKey;
  navigate: (page: PageKey) => void;
  currentPlan: GeneratedPlan | null;
  setCurrentPlan: (plan: GeneratedPlan | null) => void;
  savedPlans: GeneratedPlan[];
  savePlan: (plan: GeneratedPlan) => void;
  deletePlan: (id: string) => void;
  classProfile: ClassProfile | null;
  saveClassProfile: (profile: ClassProfile) => void;
  draftFormData: Partial<PlanFormData> | null;
  setDraftFormData: (data: Partial<PlanFormData> | null) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [currentPlan, setCurrentPlan] = useState<GeneratedPlan | null>(null);
  const [savedPlans, setSavedPlans] = useState<GeneratedPlan[]>(() =>
    loadFromStorage<GeneratedPlan[]>(STORAGE_KEYS.savedPlans, []),
  );
  const [classProfile, setClassProfile] = useState<ClassProfile | null>(() =>
    loadFromStorage<ClassProfile | null>(STORAGE_KEYS.classProfile, null),
  );
  const [draftFormData, setDraftFormData] = useState<Partial<PlanFormData> | null>(() =>
    loadFromStorage<Partial<PlanFormData> | null>(STORAGE_KEYS.draftForm, null),
  );

  // Persist to localStorage whenever state changes
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.savedPlans, savedPlans);
  }, [savedPlans]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.classProfile, classProfile);
  }, [classProfile]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.draftForm, draftFormData);
  }, [draftFormData]);

  const navigate = useCallback((page: PageKey) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const savePlan = useCallback((plan: GeneratedPlan) => {
    setSavedPlans((prev) => {
      const existing = prev.findIndex((p) => p.id === plan.id);
      if (existing >= 0) {
        const next = [...prev];
        next[existing] = plan;
        return next;
      }
      return [plan, ...prev];
    });
  }, []);

  const deletePlan = useCallback((id: string) => {
    setSavedPlans((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const saveClassProfile = useCallback((profile: ClassProfile) => {
    setClassProfile(profile);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigate,
        currentPlan,
        setCurrentPlan,
        savedPlans,
        savePlan,
        deletePlan,
        classProfile,
        saveClassProfile,
        draftFormData,
        setDraftFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
