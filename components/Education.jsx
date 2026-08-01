'use client';

import { portfolioData } from '@/app/lib/data';
import { GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from '@/components/Icons';

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-8 bg-grid-pattern">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-2xl mx-auto">
            Formal computer science degrees and cloud/software engineering certifications verified on LinkedIn.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((item, idx) => (
            <div
              key={idx}
              className="editorial-card bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cream-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-brand-orange">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-brand-orange font-bold text-sm mb-1">
                  {item.institution}
                </p>
                {item.university && item.university !== item.institution && (
                  <p className="text-xs font-mono text-neutral-400 mb-4">
                    Affiliated: {item.university}
                  </p>
                )}

                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mt-4">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Card */}
        <div className="editorial-card bg-white dark:bg-neutral-900 p-8 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center font-bold shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                  Professional Certifications &amp; Credentials
                </h3>
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  Verified credentials on LinkedIn
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#0A66C2] text-white hover:bg-[#084e96] transition-colors shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>View All on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url || "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-cream-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 flex flex-col justify-between group hover:border-[#0A66C2] hover:shadow-md transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-[#0A66C2] transition-colors flex-shrink-0" />
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0A66C2] transition-colors" />
                  </div>
                  <h4 className="text-sm font-black text-neutral-900 dark:text-white leading-snug group-hover:text-[#0A66C2] transition-colors">
                    {cert.name}
                  </h4>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-700/40 flex items-center justify-between mt-3">
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 font-semibold truncate">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#0A66C2] uppercase">
                    LinkedIn
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
