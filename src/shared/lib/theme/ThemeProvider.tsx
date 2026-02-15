import { type ReactNode, useEffect, useState } from 'react';
import { type TTheme, ThemeContext } from './ThemeContext';

export type ThemeProviderProps = {
  children: ReactNode;
};

export const LS_THEME = 'theme';

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<TTheme>(
    () => (localStorage.getItem(LS_THEME) as TTheme) || 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(LS_THEME, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
