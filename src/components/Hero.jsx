import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTypewriter } from '../hooks/useTypewriter';

const pstFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

export default function Hero() {
  // const { currentText } = useTypewriter(['Software Engineer.', 'Designer.', 'Student.']);
  const [pstTime, setPstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setPstTime(
        pstFormatter.format(new Date())
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="scroll-mt-16 relative pt-12 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 w-full mx-auto border-b border-[var(--borderColor)]">
      {/* Section Sub-heading Indicator */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Sharp Rectangular Profile Frame */}
        <div className="lg:col-span-5 flex flex-col items-center mx-auto lg:items-start">
          <div className="w-56 sm:w-64">
            <div className="relative">
              {/* Square Sharp Avatar Container */}
              <div className="w-full h-56 sm:h-64 p-2 bg-[var(--backgroundColor)] border border-[var(--borderColor)] shadow-md relative transition-colors">
                <img
                  src="/assets/pfp_1_2.png"
                  alt="Howard Lin Profile Photo"
                  className="w-full h-full object-cover transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/profile_photo_full.jpg';
                  }}
                />
              </div>

              {/* Sharp Status Pill */}
            </div>

            {/* Location & Time Meta */}
            <div className="mt-3 w-full grid grid-cols-2 gap-2 text-xs sm:text-sm font-mono">
              <div className="p-2 border border-[var(--borderColor)] bg-[var(--backgroundColor)] flex flex-col gap-0.5 transition-colors">
                <span className="text-[var(--fontMuted)] uppercase text-[9px] sm:text-[10px] tracking-tight">Local Time (PST)</span>
                <span className="text-[var(--fontColor)] font-semibold tabular-nums">
                  {pstTime || '--:--:-- --'}
                </span>
              </div>
              <div className="p-2 border border-[var(--borderColor)] bg-[var(--backgroundColor)] flex flex-col gap-0.5 transition-colors">
                <span className="text-[var(--fontMuted)] uppercase text-[9px] sm:text-[10px] tracking-tight">Currently in</span>
                <span className="text-[var(--fontColor)] font-semibold">Los Angeles</span>
              </div>
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
            {/* <div className="text-xl sm:text-2xl font-bold font-mono flex items-center min-h-[36px]">
              <span className="text-[var(--fontMuted)] mr-2.5">&gt; I'm a</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">{currentText}</span>
              <span className="w-2 h-5 bg-indigo-500 inline-block ml-1 animate-blink"></span>
            </div> */}
          </div>

          {/* Bio Description */}
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-2xl">
            I’m a recent CS graduate from UC San Diego, with experience in fullstack development, data analytics, machine learning, and mobile app development. I'm passionate about building scalable, impactful products that improve everyday life. Always learning new technologies and finding ways to become a better engineer!
          </p>

          {/* Sharp Action Buttons */}
          <div className="pt-1 flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm">
            <a
              href="https://github.com/howardlin1218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2 sm:py-2.5 border border-[var(--borderColor)] bg-[var(--backgroundColor)] hover:border-indigo-500 text-[var(--fontColor)] font-semibold transition-all whitespace-nowrap"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--fontMuted)] shrink-0" />
              <span>GITHUB</span>
            </a>

            <a
              href="https://www.linkedin.com/in/howardlin1218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2 sm:py-2.5 border border-[var(--borderColor)] bg-[var(--backgroundColor)] hover:border-blue-500 text-[var(--fontColor)] font-semibold transition-all whitespace-nowrap"
            >
              <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2c84e7] shrink-0" />
              <span>LINKEDIN</span>
            </a>

            <a
              href="/assets/lin_howard.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2 sm:py-2.5 border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white font-semibold transition-all shadow-sm whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span><span className="hidden sm:inline">VIEW </span>RESUME</span>
            </a>
          </div>

          {/* Technical Stack Tags Grid */}
          {/* <div className="pt-4 border-t border-[var(--borderColor)] space-y-2">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
