import { type ReactNode } from 'react';
import { useApp } from '@/context/AppContext';
import type { PageKey } from '@/types';
import {
  Home,
  CalendarDays,
  CalendarRange,
  BookOpen,
  FolderOpen,
  Search,
  Users,
  GraduationCap,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS: { key: PageKey; label: string; icon: typeof Home }[] = [
  { key: 'home', label: 'Trang chủ', icon: Home },
  { key: 'daily-plan', label: 'Soạn kế hoạch ngày', icon: CalendarDays },
  { key: 'weekly-plan', label: 'Soạn kế hoạch tuần', icon: CalendarRange },
  { key: 'activity-library', label: 'Kho hoạt động', icon: BookOpen },
  { key: 'my-plans', label: 'Kế hoạch của tôi', icon: FolderOpen },
  { key: 'check-plan', label: 'Kiểm tra kế hoạch', icon: Search },
  { key: 'class-profile', label: 'Hồ sơ lớp', icon: Users },
];

export function Layout({ children }: { children: ReactNode }) {
  const { currentPage, navigate } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (key: PageKey) => {
    navigate(key);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col border-r border-stone-200 bg-white lg:flex">
        <div className="flex items-center gap-3 px-5 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-600 text-white shadow-md shadow-secondary-600/30">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-stone-800">Trợ lý KHTGD</p>
            <p className="text-xs text-stone-500">Mầm non Việt Nam</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.key || (currentPage === 'plan-result' && item.key === 'daily-plan');
            return (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? 'bg-secondary-50 text-secondary-700 shadow-sm'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? 'text-secondary-600' : 'text-stone-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="border-t border-stone-100 px-5 py-3">
          <p className="text-xs text-stone-400">Phiên bản MVP · 2026</p>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stone-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-600 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-stone-800">Trợ lý KHTGD</p>
            <p className="text-[10px] text-stone-500">Mầm non Việt Nam</p>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-stone-600 hover:bg-stone-100"
          aria-label="Mở menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-stone-900/30 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="fixed left-0 right-0 top-[57px] z-50 space-y-1 border-b border-stone-200 bg-white px-3 py-3 shadow-lg lg:hidden">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = currentPage === item.key || (currentPage === 'plan-result' && item.key === 'daily-plan');
              return (
                <button
                  key={item.key}
                  onClick={() => handleNav(item.key)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    active
                      ? 'bg-secondary-50 text-secondary-700'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${active ? 'text-secondary-600' : 'text-stone-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </>
      )}

      {/* Main content */}
      <main className="lg:pl-64">
        <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-8">{children}</div>
      </main>
    </div>
  );
}
