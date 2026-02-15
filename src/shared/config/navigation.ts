import { ROUTE_PATHS } from './routes';

export const NAVIGATION_ITEMS = [
  { label: 'Карталар', path: ROUTE_PATHS.MAPS },
  { label: 'Дәрістер', path: ROUTE_PATHS.LECTURES },
  { label: 'Тестер', path: ROUTE_PATHS.TESTS },
  { label: 'Бейнесабақтар', path: ROUTE_PATHS.VIDEOS }
] as const;
