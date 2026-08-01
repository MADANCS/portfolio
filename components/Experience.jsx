'use client';

import { portfolioData } from '@/app/lib/data';
import { Briefcase, Building2, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 bg-grid-pattern">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            CAREER PATHWAY
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Experience
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-lg mx-auto">
            Hands-on full-stack development, API engineering, and cloud backend architecture.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Accent Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-neutral-300 dark:bg-neutral-800" />

          <div className="space-y-10">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-8 top-8 -translate-x-1/2">
                  {exp.current ? (
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-brand-orange border-2 border-cream-100 dark:border-neutral-900 shadow-md" />
                    </span>
                  ) : (
                    <span className="relative flex h-4 w-4">
                      <span className="inline-flex rounded-full h-4 w-4 bg-neutral-400 dark:bg-neutral-700 border-2 border-cream-100 dark:border-neutral-900" />
                    </span>
                  )}
                </div>

                {/* Editorial Card */}
                <div className="editorial-card bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-brand-orange font-bold text-sm mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-brand-orange shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        CURRENT ROLE
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500 border-y border-neutral-100 dark:border-neutral-800 py-3">
                    <span className="inline-flex items-center gap-1.5 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                      {exp.period}
                      {exp.duration && <span className="font-normal">({exp.duration})</span>}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Bullets */}
                  {exp.bullets && (
                    <ul className="space-y-2.5 pt-2">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
