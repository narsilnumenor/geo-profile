import { type ReactNode, StrictMode } from 'react';
import { ThemeProvider } from '@/shared/lib/theme/ThemeProvider';

export type ProvidersProps = {
  children: ReactNode;
};

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <StrictMode>
      <ThemeProvider>{children}</ThemeProvider>
    </StrictMode>
  );
};
