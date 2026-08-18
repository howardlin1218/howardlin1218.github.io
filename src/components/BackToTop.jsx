import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      id="myBtn"
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 bg-[var(--backgroundColor)] border border-[var(--borderColor)] text-indigo-600 dark:text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all shadow-lg"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
