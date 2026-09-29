import { useState } from 'react';
import { Calendar, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import { workExperiences, educationData } from '../data/experience';

function renderBulletContent(bullet) {
  if (!bullet) return null;
  const text = typeof bullet === 'string' ? bullet : bullet.body || '';
  if (!text) return null;

  const highlightWords = Array.isArray(bullet.highlightWords)
    ? bullet.highlightWords.filter(Boolean)
    : [];

  if (highlightWords.length === 0) {
    return text;
  }

  // Sort longest first so phrases match before individual substrings
  const sortedWords = [...highlightWords].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(${sortedWords.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlight = sortedWords.some(
      (w) => w.toLowerCase() === part.toLowerCase()
    );

    if (isHighlight) {
      return (
        <span
          key={index}
          className="font-semibold text-indigo-600 dark:text-indigo-400"
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education'

  return (
    <section id="experience" className="scroll-mt-16 relative py-28 md:py-36 px-8 md:px-14 w-full mx-auto border-b border-[var(--borderColor)]">
      <div id="prev-resume" className="absolute -top-16 left-0"></div>

      {/* Section Sub-heading Indicator */}
      <div className="flex items-center justify-between mb-12">
      </div>

      {/* Section Header & Tab Controls */}
      <div className="mb-14 space-y-6">
        <h2 id="exp-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--fontColor)]">
          Experience &amp; Education
        </h2>

        {/* Sharp Tab Buttons */}
        <div className="pt-2 flex flex-wrap gap-3 font-mono text-sm">
          <button
            id="exp-tab"
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 border transition-all ${
              activeTab === 'experience'
                ? 'border-indigo-600 bg-indigo-600 text-white font-bold'
                : 'border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)] hover:border-indigo-500'
            }`}
          >
            EXPERIENCE
          </button>
          <button
            id="edu-tab"
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 border transition-all ${
              activeTab === 'education'
                ? 'border-indigo-600 bg-indigo-600 text-white font-bold'
                : 'border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)] hover:border-indigo-500'
            }`}
          >
            EDUCATION
          </button>
        </div>
      </div>

      {/* View A: Work Experience (#resume) */}
      {activeTab === 'experience' && (
        <div id="resume" className="space-y-5">
          {workExperiences.map((job) => (
            <div
              key={job.id}
              className="sharp-card p-8 sm:p-10 transition-all hover:border-indigo-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
                {/* Left Column: Company & Metadata */}
                <div className="md:col-span-4 space-y-4">
                  <div className="w-18 h-18 bg-white border border-[var(--borderColor)] flex items-center justify-center">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--fontColor)] font-mono">
                      {job.company}
                    </h3>
                    <div className="text-base font-mono text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                      {job.role}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-base text-[var(--fontMuted)] font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-[var(--fontColor)]">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-[var(--fontColor)]">{job.location}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.8 border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Bullets */}
                <div className="md:col-span-8 flex flex-col justify-center gap-5 md:border-l md:border-[var(--borderColor)] md:pl-8">
                  {job.bullets
                    ?.filter((b) => (typeof b === 'string' ? b.trim() : b?.body?.trim()))
                    .map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-base leading-relaxed">
                        <span className="font-mono text-indigo-600 dark:text-indigo-400 shrink-0">&gt;</span>
                        <p className="text-[var(--fontColor)]">
                          {renderBulletContent(bullet)}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View B: Education (#education) */}
      {activeTab === 'education' && (
        <div id="education" className="space-y-10">
          <div className="sharp-card p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
              {/* Left Column: UCSD Info */}
              <div className="md:col-span-5 flex flex-col gap-5">
                <div className="w-18 h-18 bg-transparent flex items-center justify-center">
                  <img
                    src={educationData.logo}
                    alt={`${educationData.institution} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[var(--fontColor)] font-mono">
                    {educationData.institution}
                  </h3>
                  <div className="text-base font-mono text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                    {educationData.degree}
                  </div>
                </div>

                <div className="space-y-1.5 text-base font-mono">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-[var(--fontColor)]">GPA: {educationData.gpa} / 4.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-[var(--fontColor)]">{educationData.period} • {educationData.graduated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-[var(--fontColor)]">{educationData.location}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Coursework Grid */}
              <div className="md:col-span-7 md:self-center md:border-l h-full md:border-[var(--borderColor)] pl-14">
                {/* <div className="flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>// Relevant Computer Science Coursework</span>
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationData.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-3 border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-xs font-mono text-[var(--fontColor)] flex items-center gap-2.5"
                    >
                      <span className="text-[var(--fontColor)]">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
