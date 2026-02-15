import { createContext } from 'react';

export type TTheme = 'light' | 'dark';

export type ThemeContextType = {
  theme?: TTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
