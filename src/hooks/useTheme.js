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

      root.style.setProperty('--mainColor', '#0e1117');
      root.style.setProperty('--fontColor', '#f0f6fc');
      root.style.setProperty('--fontMuted', '#8b949e');
      root.style.setProperty('--backgroundColor', '#161b22');
      root.style.setProperty('--cardBg', '#13171f');
      root.style.setProperty('--borderColor', '#30363d');
      root.style.setProperty('--borderHoverColor', '#818cf8');
      root.style.setProperty('--changingColor', '#818cf8');
      root.style.setProperty('--navColor', '#0e1117');
      root.style.setProperty('--navBorderColor', '#30363d');
      root.style.setProperty('--filterColor', '#38bdf8');
      root.style.setProperty('--accentKeyword', '#a78bfa');
      root.style.setProperty('--accentPrimary', '#6366f1');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');

      root.style.setProperty('--mainColor', '#ffffff');
      root.style.setProperty('--fontColor', '#0d1117');
      root.style.setProperty('--fontMuted', '#57606a');
      root.style.setProperty('--backgroundColor', '#f6f8fa');
      root.style.setProperty('--cardBg', '#ffffff');
      root.style.setProperty('--borderColor', '#d0d7de');
      root.style.setProperty('--borderHoverColor', '#4f46e5');
      root.style.setProperty('--changingColor', '#4f46e5');
      root.style.setProperty('--navColor', '#ffffff');
      root.style.setProperty('--navBorderColor', '#d0d7de');
      root.style.setProperty('--filterColor', '#d97706');
      root.style.setProperty('--accentKeyword', '#b45309');
      root.style.setProperty('--accentPrimary', '#4f46e5');
    }
    localStorage.setItem('hl_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
