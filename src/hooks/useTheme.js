import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hl_theme');
      if (saved) return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');
      root.style.colorScheme = 'light';
    }
    
    // Clean up any legacy inline variables to ensure pure CSS-driven transitions
    const vars = [
      '--mainColor', '--fontColor', '--fontMuted', '--backgroundColor',
      '--cardBg', '--borderColor', '--borderHoverColor', '--changingColor',
      '--navColor', '--navBorderColor', '--filterColor', '--accentKeyword', '--accentPrimary'
    ];
    vars.forEach((v) => root.style.removeProperty(v));

    localStorage.setItem('hl_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
}

