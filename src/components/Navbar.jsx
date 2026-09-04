import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'experience', 'contact'];
    let sectionOffsets = [];
    const activeSectionRef = { current: 'about' };
    let ticking = false;

    // 1. Calculate absolute document tops
    const updateSectionOffsets = () => {
      const currentScrollY = window.scrollY;
      sectionOffsets = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return {
            id,
            top: el.getBoundingClientRect().top + currentScrollY,
          };
        })
        .filter(Boolean);
    };

    updateSectionOffsets();

    // Handle late-loading fonts/images
    if (document.readyState === 'complete') {
      updateSectionOffsets();
    } else {
      window.addEventListener('load', updateSectionOffsets, { passive: true });
    }

    // Observe layout shifts (DOM changes, accordion expands, window resize)
    const resizeObserver = new ResizeObserver(() => {
      updateSectionOffsets();
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) resizeObserver.observe(el);
    });

    // 2. High-performance scroll listener (Arithmetic only)
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const triggerPosition = scrollY + window.innerHeight * 0.35;
        const isBottom =
          window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50;

        let newActive = 'about';

        if (isBottom) {
          newActive = 'contact';
        } else if (scrollY >= 80) {
          // Fallback in case sections were empty on initial mount
          if (sectionOffsets.length === 0) updateSectionOffsets();

          for (let i = sectionOffsets.length - 1; i >= 0; i--) {
            if (triggerPosition >= sectionOffsets[i].top) {
              newActive = sectionOffsets[i].id;
              break;
            }
          }
        }

        // 3. Dispatch Guard
        if (newActive !== activeSectionRef.current) {
          activeSectionRef.current = newActive;
          setActiveSection(newActive);
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSectionOffsets, { passive: true });
    handleScroll();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSectionOffsets);
      window.removeEventListener('load', updateSectionOffsets);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Permanently Fixed Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full sharp-nav border-b border-[var(--borderColor)] transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-end">
          {/* Logo / Brand Monogram */}
          {/* <a
            href="#about"
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[var(--fontColor)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span className="px-2 py-1 bg-indigo-600 text-white font-bold">HL</span>
            <span className="hidden sm:inline text-[var(--fontMuted)]">/</span>
            <span className="hidden sm:inline">Howard Lin</span>
          </a> */}

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 border border-transparent transition-all ${
                    isActive
                      ? 'border-[var(--borderColor)] bg-[var(--backgroundColor)] text-indigo-600 dark:text-indigo-400 font-bold'
                      : 'text-[var(--fontMuted)] hover:text-[var(--fontColor)] hover:border-[var(--borderColor)]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="h-4 w-px bg-[var(--borderColor)] mx-2" />

            <a
              href="/assets/howard_lin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 border border-indigo-500/50 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-bold transition-all text-xs"
            >
              <span>RESUME.PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontMuted)] hover:text-yellow-500 hover:border-yellow-500 transition-colors ml-1"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="p-2 border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--borderColor)] bg-[var(--mainColor)] p-4 space-y-2 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 border border-[var(--borderColor)] bg-[var(--backgroundColor)] hover:bg-[var(--cardBg)] text-[var(--fontColor)]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/assets/howard_lin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border border-indigo-500 bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 font-bold"
            >
              <span>VIEW RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>
    </>
  );
}
