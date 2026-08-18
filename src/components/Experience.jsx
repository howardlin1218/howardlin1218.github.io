import { useState } from 'react';
import { Calendar, MapPin, BookOpen } from 'lucide-react';
import { workExperiences, educationData } from '../data/experience';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education'

  return (
    <section id="experience" className="scroll-mt-16 relative py-28 md:py-36 px-8 md:px-14 max-w-6xl mx-auto border-b border-[var(--borderColor)]">
      <div id="prev-resume" className="absolute -top-16 left-0"></div>

      {/* Section Sub-heading Indicator */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">
          <span className="tracking-widest uppercase">// CAREER HISTORY &amp; EDUCATION</span>
        </div>
      </div>

      {/* Section Header & Tab Controls */}
      <div className="mb-14 space-y-6">
        <h2 id="exp-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--fontColor)]">
          Experience &amp; <span className="text-indigo-600 dark:text-indigo-400">Credentials</span>
        </h2>

        {/* Sharp Tab Buttons */}
        <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs">
          <button
            id="exp-tab"
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 border transition-all ${
              activeTab === 'experience'
                ? 'border-indigo-600 bg-indigo-600 text-white font-bold'
                : 'border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)] hover:border-indigo-500'
            }`}
          >
            [ WORK EXPERIENCE ]
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
            [ ACADEMIC EDUCATION ]
          </button>
        </div>
      </div>

      {/* View A: Work Experience (#resume) */}
      {activeTab === 'experience' && (
        <div id="resume" className="space-y-10">
          {workExperiences.map((job) => (
            <div
              key={job.id}
              className="sharp-card p-8 sm:p-10 transition-all hover:border-indigo-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                {/* Left Column: Company & Metadata */}
                <div className="md:col-span-4 space-y-4">
                  <div className="w-18 h-18 p-2.5 bg-white border border-[var(--borderColor)] flex items-center justify-center">
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
                    <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                      {job.role}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[var(--fontMuted)] font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-[var(--fontColor)]">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[var(--fontMuted)]" />
                      <span className="text-[var(--fontMuted)]">{job.location}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.8 border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Bullets */}
                <div className="md:col-span-8 space-y-5 md:border-l md:border-[var(--borderColor)] md:pl-8">
                  {job.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed">
                      <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs shrink-0 mt-0.5">&gt;</span>
                      <p className="text-[var(--fontColor)]">
                        <strong className="font-bold text-indigo-600 dark:text-purple-300">
                          {bullet.lead}{' '}
                        </strong>
                        <span className="text-[var(--fontColor)]">{bullet.body}</span>
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
              <div className="md:col-span-4 space-y-5">
                <div className="w-18 h-18 p-2.5 bg-white border border-[var(--borderColor)] flex items-center justify-center">
                  <img
                    src={educationData.logo}
                    alt={`${educationData.institution} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--fontColor)] font-mono">
                    {educationData.institution}
                  </h3>
                  <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                    {educationData.degree}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-[var(--fontColor)]">{educationData.period} • {educationData.graduated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--fontMuted)]" />
                    <span className="text-[var(--fontMuted)]">{educationData.location}</span>
                  </div>
                </div>

                <div className="p-3.5 border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono text-xs font-bold">
                  <span>CUMULATIVE GPA: {educationData.gpa} / 4.0</span>
                </div>
              </div>

              {/* Right Column: Coursework Grid */}
              <div className="md:col-span-8 space-y-6 md:border-l md:border-[var(--borderColor)] md:pl-8">
                <div className="flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>// Relevant Computer Science Coursework</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationData.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-3 border border-[var(--borderColor)] bg-[var(--backgroundColor)] text-xs font-mono text-[var(--fontColor)] flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 shrink-0"></span>
                      <span className="text-[var(--fontColor)]">{course}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[var(--fontMuted)] font-mono pt-3">
                  // Rigorous theoretical and systems curriculum covering data structures, low-level architecture, software engineering principles, and machine learning models.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
