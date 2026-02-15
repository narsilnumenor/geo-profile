import { lazy } from 'react';
import { MainLayout } from '@/app/layouts/MainLayout';
import { createBrowserRouter, Navigate } from 'react-router';
import { ROUTE_PATHS } from '@/shared/config/routes';

const ProfilePage = lazy(() =>
  import('@/pages/ProfilePage').then((m) => ({ default: m.ProfilePage }))
);
const MapsPage = lazy(() =>
  import('@/pages/MapsPage').then((m) => ({ default: m.MapsPage }))
);
const LecturesPage = lazy(() =>
  import('@/pages/LecturesPage').then((m) => ({ default: m.LecturesPage }))
);
const TestsPage = lazy(() =>
  import('@/pages/TestsPage').then((m) => ({ default: m.TestsPage }))
);
const VideosPage = lazy(() =>
  import('@/pages/VideosPage').then((m) => ({ default: m.VideosPage }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <ProfilePage /> },
      { path: ROUTE_PATHS.MAPS, element: <MapsPage /> },
      { path: ROUTE_PATHS.LECTURES, element: <LecturesPage /> },
      { path: ROUTE_PATHS.TESTS, element: <TestsPage /> },
      { path: ROUTE_PATHS.VIDEOS, element: <VideosPage /> },
      { path: '*', element: <Navigate to={ROUTE_PATHS.PROFILE} replace /> }
    ]
  }
]);
