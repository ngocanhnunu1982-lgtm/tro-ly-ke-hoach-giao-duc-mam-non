import { AppProvider, useApp } from '@/context/AppContext';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { DailyPlanFormPage } from '@/pages/DailyPlanFormPage';
import { PlanResultPage } from '@/pages/PlanResultPage';
import { WeeklyPlanPage } from '@/pages/WeeklyPlanPage';
import { ActivityLibraryPage } from '@/pages/ActivityLibraryPage';
import { MyPlansPage } from '@/pages/MyPlansPage';
import { CheckPlanPage } from '@/pages/CheckPlanPage';
import { ClassProfilePage } from '@/pages/ClassProfilePage';

function PageRouter() {
  const { currentPage } = useApp();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'daily-plan':
      return <DailyPlanFormPage />;
    case 'plan-result':
      return <PlanResultPage />;
    case 'weekly-plan':
      return <WeeklyPlanPage />;
    case 'activity-library':
      return <ActivityLibraryPage />;
    case 'my-plans':
      return <MyPlansPage />;
    case 'check-plan':
      return <CheckPlanPage />;
    case 'class-profile':
      return <ClassProfilePage />;
    default:
      return <HomePage />;
  }
}

function App() {
  return (
    <AppProvider>
      <Layout>
        <PageRouter />
      </Layout>
    </AppProvider>
  );
}

export default App;
