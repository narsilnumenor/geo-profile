import { Providers } from './providers/Providers';
import { RouterProvider } from 'react-router';
import { router } from './router/router';
import './styles/index.css';

export const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;
