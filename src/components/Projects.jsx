import { useState, useMemo } from 'react';
import { Search, X, ExternalLink, BookOpen, Map } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects, popularFilterTags } from '../data/projects';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedTag !== 'All') {
        const hasQuickTag = project.tags.some(
          (t) => t.toLowerCase() === selectedTag.toLowerCase()
        );
        if (!hasQuickTag) return false;
      }

      if (!searchTerm.trim()) return true;

      const terms = searchTerm
        .toLowerCase()
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      if (terms.length === 0) return true;

      return terms.every((term) => {
        const titleMatch = project.title.toLowerCase().includes(term);
        const summaryMatch = project.summary.toLowerCase().includes(term);
        const tagMatch = project.tags.some((tag) => tag.toLowerCase().includes(term));
        return titleMatch || summaryMatch || tagMatch;
      });
    });
  }, [searchTerm, selectedTag]);

  const isTagMatched = (tag) => {
    if (selectedTag !== 'All' && tag.toLowerCase() === selectedTag.toLowerCase()) {
      return true;
    }
    if (!searchTerm.trim()) return false;
    const terms = searchTerm
      .toLowerCase()
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    return terms.some((term) => tag.toLowerCase().includes(term));
  };

  const handleTagClick = (tag) => {
    if (tag === selectedTag) {
      setSelectedTag('All');
    } else {
      setSelectedTag(tag);
      setSearchTerm('');
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('All');
  };

  return (
    <section id="projects" className="scroll-mt-16 relative py-28 md:py-36 px-8 md:px-14 max-w-6xl mx-auto border-b border-[var(--borderColor)]">
      <div id="prev-projects" className="absolute -top-16 left-0"></div>

      {/* Section Sub-heading Indicator */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">
          <span className="tracking-widest uppercase">// FEATURED PROJECTS &amp; RESEARCH</span>
        </div>
        <div className="font-mono text-xs text-[var(--fontMuted)]">
          [{filteredProjects.length} / {projects.length} PROJECTS]
        </div>
      </div>

      <div className="mb-14 space-y-6">
        <h2 id="proj-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--fontColor)]">
          Engineering &amp; <span className="text-indigo-600 dark:text-indigo-400">Code Portfolio</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-base leading-relaxed">
          Full-stack applications, machine learning architectures, internal productivity tools, and GIS spatial research.
        </p>

        {/* Sharp Tag Search & Filter Controls */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--fontMuted)]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (selectedTag !== 'All') setSelectedTag('All');
              }}
              placeholder="FILTER BY TAGS (e.g. Python, TypeScript...)"
              className="w-full pl-11 pr-11 py-3 bg-[var(--backgroundColor)] border border-[var(--borderColor)] text-xs font-mono text-[var(--fontColor)] placeholder-[var(--fontMuted)] focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[var(--fontMuted)] hover:text-[var(--fontColor)]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Tag Chips */}
          <div className="md:col-span-6 flex flex-wrap items-center gap-2 font-mono text-xs">
            {popularFilterTags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1.5 text-[11px] border transition-all ${
                    isActive
                      ? 'border-indigo-600 bg-indigo-600 text-white font-bold'
                      : 'border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)] hover:border-indigo-500'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                data-tags={project.tags.join(',').toLowerCase()}
                className="proj-card sharp-card flex flex-col justify-between transition-all duration-200 group hover:border-indigo-500"
              >
                <div>
                  {/* Thumbnail / Header Area */}
                  <div className="relative h-52 w-full overflow-hidden bg-[var(--backgroundColor)] border-b border-[var(--borderColor)]">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[var(--backgroundColor)]">
                        <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase">
                          // COMING SOON
                        </span>
                      </div>
                    )}

                    {/* Technical Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      {project.featured && (
                        <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-indigo-600 text-white">
                          FEATURED
                        </span>
                      )}
                      {project.status && (
                        <span className="ml-auto px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-amber-500 text-black">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-7 space-y-4">
                    <h3 className="text-xl font-bold text-[var(--fontColor)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => {
                        const matched = isTagMatched(tag);
                        return (
                          <span
                            key={tag}
                            className={`px-2 py-1 text-[10px] font-mono border ${
                              matched
                                ? 'tag-highlight'
                                : 'border-[var(--borderColor)] bg-[var(--backgroundColor)] text-[var(--fontColor)]'
                            }`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="px-6 py-4 border-t border-[var(--borderColor)] bg-[var(--backgroundColor)] flex items-center justify-end gap-3 font-mono text-xs">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[var(--borderColor)] text-[var(--fontColor)] hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[var(--borderColor)] text-[var(--fontColor)] hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>CODE</span>
                    </a>
                  )}
                  {project.links.notebook && (
                    <a
                      href={project.links.notebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[var(--borderColor)] text-[var(--fontColor)] hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>NOTEBOOK</span>
                    </a>
                  )}
                  {project.links.storymaps && (
                    <a
                      href={project.links.storymaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[var(--borderColor)] text-[var(--fontColor)] hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5"
                    >
                      <Map className="w-3.5 h-3.5" />
                      <span>STORYMAP</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 sharp-card p-8 space-y-4">
          <p className="text-[var(--fontMuted)] text-xs font-mono">
            // NO PROJECTS MATCHING CURRENT FILTER CRITERIA
          </p>
          <button
            onClick={clearFilters}
            className="px-5 py-2.5 border border-indigo-500 bg-indigo-600 text-white text-xs font-mono font-bold"
          >
            [ RESET ALL FILTERS ]
          </button>
        </div>
      )}
    </section>
  );
}
