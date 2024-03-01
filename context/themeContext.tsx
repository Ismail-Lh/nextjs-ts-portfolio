'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const selectedTheme = localStorage.getItem('theme') as Theme | null;

    if (selectedTheme) {
      setTheme(selectedTheme);

      if (selectedTheme === 'dark')
        document.documentElement.classList.add('dark');
    } else if (matchMedia('(prefers-color-scheme: dark').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  // Throw an error if the hook is used outside of the ThemeContextProvider
  if (!context)
    throw new Error(
      'useThemeContext must be used within the ThemeContextProvider!'
    );

  return context;
};
