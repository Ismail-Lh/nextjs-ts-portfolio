'use client';

import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

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

  return (
    <button
      type="button"
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;
