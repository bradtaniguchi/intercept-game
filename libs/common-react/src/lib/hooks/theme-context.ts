import { createContext } from 'react';
import { Theme } from '../types/themes';

/**
 * Context for the current theme. Defaults to light theme, but should
 * be changed with ThemeProvider
 *
 * @see ThemeProvider
 */
export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});
