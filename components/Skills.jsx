'use client';

import { 
  Monitor, Server, Database, Wrench, Cpu, Zap, ShieldCheck,
  Atom, Leaf, Coffee, Lock, Shield, Cloud, Box, GitBranch,
  Send, Workflow, Kanban, Binary, Repeat, Table,
  Smartphone, Layers, HardDrive, Power, RefreshCw, GitFork, LayoutGrid, Radio, Share2, Code2
} from 'lucide-react';
import { portfolioData } from '@/app/lib/data';

const iconMap = { Monitor, Server, Database, Wrench };

// Realistic symbol & color mapping for each technology skill
const techIconsMap = {
  // Web Dev (MERN)
  "MongoDB": { icon: Leaf, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  "Express.js": { icon: Server, color: "text-neutral-400 bg-neutral-500/10 border-neutral-500/20" },
  "React.js": { icon: Atom, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  "Node.js": { icon: Cpu, color: "text-green-500 bg-green-500/10 border-green-500/20" },
  "Responsive UI/UX": { icon: Smartphone, color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
  "Redux / State Management": { icon: Layers, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
  "Real-time features with Socket.io": { icon: Radio, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  "RESTful API integration": { icon: Share2, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  "Redis (caching & real-time data)": { icon: HardDrive, color: "text-red-400 bg-red-500/10 border-red-500/20" },

  // Backend & Cloud
  "Java": { icon: Coffee, color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
  "Spring Boot": { icon: Power, color: "text-lime-500 bg-lime-500/10 border-lime-500/20" },
  "Spring Security": { icon: Lock, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  "Spring Data JPA": { icon: Database, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  "Hibernate": { icon: RefreshCw, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  "Microservices Architecture": { icon: Box, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
  "RESTful API Design": { icon: Workflow, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  "Docker & Kubernetes": { icon: Box, color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
  "AWS (Cloud Essentials)": { icon: Cloud, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  "CI/CD Pipelines": { icon: Repeat, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  "Database Design (SQL & NoSQL)": { icon: Table, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },

  // Tools & Practices
  "Git & GitHub": { icon: GitBranch, color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
  "Postman": { icon: Send, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  "OOP Principles": { icon: Binary, color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  "Data Structures & Algorithms": { icon: GitFork, color: "text-teal-400 bg-teal-500/10 border-teal-500/20" },
  "System Design": { icon: LayoutGrid, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  "Agile & SDLC": { icon: Kanban, color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
};

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
          {categories.map((category) => {
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

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const techInfo = techIconsMap[skill] || { icon: Code2, color: "text-brand-orange bg-brand-orange/10 border-brand-orange/20" };
                      const SkillIcon = techInfo.icon;
                      return (
                        <div
                          key={skill}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold shadow-xs transition-all duration-300 hover:scale-105 ${techInfo.color}`}
                        >
                          <SkillIcon className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      );
                    })}
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

