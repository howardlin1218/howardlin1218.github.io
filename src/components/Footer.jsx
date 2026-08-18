export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--borderColor)] bg-[var(--mainColor)] py-16 px-8 md:px-14 font-mono text-xs text-[var(--fontMuted)] transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 bg-indigo-600 text-white font-bold text-xs">HL</span>
          <span className="text-[var(--fontColor)] font-medium">© 2026 Howard Lin. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-[var(--fontMuted)] text-xs">
          <span>// REACT 19 + TAILWIND CSS</span>
          <span>// UCSD '26</span>
        </div>
      </div>
    </footer>
  );
}
