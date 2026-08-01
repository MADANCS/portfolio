'use client';

import { Monitor, Server, Database, Wrench, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { portfolioData } from '@/app/lib/data';

const iconMap = { Monitor, Server, Database, Wrench };

export default function Skills() {
  const marqueeSkills = portfolioData.skills.marquee;
  const categories = portfolioData.skills.categories;

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-8 bg-grid-pattern">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Tech Stack &amp; Skills
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-2xl mx-auto">
            Full-stack web engineering, database design, microservices architecture, and modern DevOps tools.
          </p>
        </div>

        {/* Marquee Tickers */}
        <div className="marquee-mask space-y-6 py-2 overflow-hidden">
          {/* Row 1 — scrolls left */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 mx-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-neutral-800 dark:text-neutral-200 shadow-sm flex items-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-brand-orange" />
                <span>{skill}</span>
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 mx-2 px-4 py-2 rounded-full bg-cream-200 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-700 dark:text-neutral-300 shadow-sm flex items-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Cpu;
            return (
              <div
                key={category.title}
                className="editorial-card bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cream-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-5 text-brand-orange">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-xl bg-cream-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:border-brand-orange transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
