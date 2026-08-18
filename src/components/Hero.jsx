import { FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const { currentText } = useTypewriter(['Software Engineer.', 'Designer.', 'Student.']);

  return (
    <section id="about" className="scroll-mt-16 relative pt-12 pb-16 md:pt-16 md:pb-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-[var(--borderColor)]">
      {/* Section Sub-heading Indicator */}
      <div className="flex items-center gap-3 font-mono text-xs text-indigo-600 dark:text-indigo-400 mb-6">
        <span className="tracking-widest uppercase">// ABOUT ME &amp; PROFILE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Sharp Rectangular Profile Frame */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
          <div className="relative">
            {/* Square Sharp Avatar Container */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 p-2 bg-[var(--backgroundColor)] border border-[var(--borderColor)] shadow-md relative transition-colors">
              {/* Corner crosshairs / technical brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-indigo-500 pointer-events-none"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-indigo-500 pointer-events-none"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-indigo-500 pointer-events-none"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-indigo-500 pointer-events-none"></div>

              <img
                src="/assets/profile_photo_full.jpg"
                alt="Howard Lin Profile Photo"
                className="w-full h-full object-cover transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src = '/assets/profile_photo.jpg';
                }}
              />
            </div>

            {/* Sharp Status Pill */}
            <div className="mt-3 flex items-center justify-between border border-[var(--borderColor)] bg-[var(--backgroundColor)] px-3 py-1.5 text-xs font-mono transition-colors">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 inline-block"></span>
                <span className="text-[var(--fontColor)] font-medium">STATUS: OPEN TO SWE ROLES</span>
              </div>
            </div>
          </div>

          {/* Location & Academic Meta */}
          <div className="mt-3 w-full max-w-[256px] grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 border border-[var(--borderColor)] bg-[var(--backgroundColor)] flex flex-col gap-0.5 transition-colors">
              <span className="text-[var(--fontMuted)] uppercase text-[10px]">Education</span>
              <span className="text-[var(--fontColor)] font-semibold">UCSD CS '26</span>
            </div>
            <div className="p-2 border border-[var(--borderColor)] bg-[var(--backgroundColor)] flex flex-col gap-0.5 transition-colors">
              <span className="text-[var(--fontMuted)] uppercase text-[10px]">Location</span>
              <span className="text-[var(--fontColor)] font-semibold">California, US</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Intro & Bio */}
        <div className="lg:col-span-7 flex flex-col space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--fontColor)]">
              Hi! I'm <span className="text-indigo-600 dark:text-indigo-400">Howard Lin</span>.
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="text-xl sm:text-2xl font-bold font-mono flex items-center min-h-[36px]">
              <span className="text-[var(--fontMuted)] mr-2.5">&gt; I'm a</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">{currentText}</span>
              <span className="w-2 h-5 bg-indigo-500 inline-block ml-1 animate-blink"></span>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
            I’m a fourth-year <span className="font-semibold text-[var(--fontColor)] underline decoration-indigo-500 underline-offset-4">Computer Science student at UC San Diego</span>, interested in full-stack development, web development, machine learning, and other software engineering opportunities.
          </p>

          {/* Sharp Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href="https://github.com/howardlin1218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-[var(--borderColor)] bg-[var(--backgroundColor)] hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white text-[var(--fontColor)] font-semibold transition-all"
            >
              <GithubIcon className="w-4 h-4 text-[var(--fontMuted)]" />
              <span>[ GITHUB ]</span>
            </a>

            <a
              href="https://www.linkedin.com/in/howardlin1218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-[var(--borderColor)] bg-[var(--backgroundColor)] hover:border-blue-500 hover:text-blue-600 dark:hover:text-white text-[var(--fontColor)] font-semibold transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#2c84e7]" />
              <span>[ LINKEDIN ]</span>
            </a>

            <a
              href="/assets/howard_lin.pdf"
              download="Howard_Lin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white font-semibold transition-all shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>[ RESUME.PDF ]</span>
            </a>
          </div>

          {/* Technical Stack Tags Grid */}
          <div className="pt-4 border-t border-[var(--borderColor)] space-y-2">
            <div className="text-[11px] font-mono text-[var(--fontMuted)] uppercase tracking-wider">
              // Core Technical Focus
            </div>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Python', 'Flask', 'Node.js', 'SQL', 'Machine Learning'].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
