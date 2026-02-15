import { Outlet } from 'react-router';
import { Header } from '@/widgets/Header';
import { Suspense } from 'react';
import { Loader } from 'lucide-react';

export const MainLayout = () => {
  return (
    <div className="bg-background relative flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-6 pt-8 pb-20">
          <Suspense fallback={<Loader className="min-h-100" />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};
