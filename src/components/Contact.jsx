import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'howlin1218@gmail.com';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 relative py-28 md:py-36 px-8 md:px-14 w-full mx-auto">
      <div id="prev-contact" className="absolute -top-16 left-0"></div>

      {/* Section Sub-heading Indicator */}
      <div className="flex items-center justify-between mb-12">
      </div>

      <div className="mb-14 space-y-6">
        <h2 id="contact-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--fontColor)]">
          Check me out!
        </h2>
      </div>

      {/* 3-Column Social / Contact Cards Grid (#contact-sect) */}
      <div id="contact-sect" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-mono text-xs">
        {/* GitHub Card */}
        <a
          href="https://github.com/howardlin1218"
          target="_blank"
          rel="noopener noreferrer"
          className="sharp-card p-8 flex flex-col justify-between space-y-8 hover:border-indigo-500 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 border border-[var(--borderColor)] flex items-center justify-center bg-[var(--backgroundColor)]">
              <GithubIcon className="w-6 h-6 text-[var(--fontColor)]" />
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--fontMuted)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-[var(--fontColor)] mt-1">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">@howardlin1218</p>
          </div>

          <div className="pt-3 border-t border-[var(--borderColor)] text-indigo-600 dark:text-indigo-400">
            VIEW GITHUB PROFILE
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/howardlin1218"
          target="_blank"
          rel="noopener noreferrer"
          className="sharp-card p-8 flex flex-col justify-between space-y-8 hover:border-blue-500 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 border border-[var(--borderColor)] flex items-center justify-center bg-[var(--backgroundColor)]">
              <LinkedinIcon className="w-6 h-6 text-[#2c84e7]" />
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--fontMuted)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-[var(--fontColor)] mt-1">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">/in/howardlin1218</p>
          </div>

          <div className="pt-3 border-t border-[var(--borderColor)] text-blue-600 dark:text-blue-400">
            CONNECT ON LINKEDIN
          </div>
        </a>

        {/* Email Card (1-Click Copy & Direct Mail) */}
        <div
          onClick={handleCopyEmail}
          className="sharp-card p-8 flex flex-col justify-between space-y-8 hover:border-amber-500 transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 border border-[var(--borderColor)] flex items-center justify-center bg-[var(--backgroundColor)]">
              <Mail className="w-6 h-6 text-[#ed9a15]" />
            </div>
            {copied ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 text-xs">
                <Check className="w-4 h-4" /> COPIED!
              </span>
            ) : (
              <Copy className="w-4 h-4 text-[var(--fontMuted)] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-[var(--fontColor)] mt-1">Email Address</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 select-all">{email}</p>
          </div>

          <div className="pt-3 border-t border-[var(--borderColor)] text-amber-600 dark:text-amber-400">
            {copied ? 'EMAIL COPIED TO CLIPBOARD' : 'CLICK TO COPY EMAIL'}
          </div>
        </div>
      </div>
    </section>
  );
}
