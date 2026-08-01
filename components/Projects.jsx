'use client';

import { portfolioData } from '@/app/lib/data';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 bg-grid-pattern">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            FEATURED REPOSITORIES
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            GitHub Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-2xl mx-auto">
            Explore my top open-source projects, AI platforms, full-stack web applications, and microservices architectures.
          </p>
        </div>

        {/* 2x2 Grid of 4 Projects with Unique Matching Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {portfolioData.projects.map((project, idx) => {
            return (
              <a
                key={idx}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`editorial-card bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg flex flex-col justify-between overflow-hidden relative group transition-all duration-300 ${project.accentBorder}`}
              >
                {/* Background Color Accent Glow */}
                <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${project.glowClass} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* Top Category Badge & GitHub Action */}
                <div className="space-y-5 z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className={`px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-full border ${project.badgeClass}`}>
                      {project.category || `PROJECT 0${idx + 1}`}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 group-hover:bg-brand-orange group-hover:text-white transition-colors shadow-sm">
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight mb-2 flex items-center gap-2 group-hover:text-brand-orange transition-colors">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Real Front Image Preview in Browser Window Frame */}
                <div className="mt-6 rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all z-10">
                  {/* Browser Header Bar */}
                  <div className="bg-neutral-900 px-4 py-2.5 border-b border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 truncate max-w-[240px]">
                      github.com/MADANCS/{project.repoName}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-orange transition-colors" />
                  </div>

                  {/* Image Preview Container */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-950 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Tech Badges Pill Row */}
                <div className="pt-6 flex flex-wrap gap-2 z-10">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-cream-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}


