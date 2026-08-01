'use client';

import { portfolioData } from '@/app/lib/data';
import { Terminal, Sparkles, Code, Cpu, Database, Wrench, Globe, PenTool, Layers } from 'lucide-react';

export default function About() {
  const { bio, stats } = portfolioData.about;

  const toolIcons = [
    { name: 'React', bg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 hover:border-cyan-400', dot: 'bg-cyan-400' },
    { name: 'Node.js', bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:border-emerald-400', dot: 'bg-emerald-400' },
    { name: 'MongoDB', bg: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30 hover:border-green-400', dot: 'bg-green-400' },
    { name: 'Java', bg: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30 hover:border-red-400', dot: 'bg-red-400' },
    { name: 'Next.js', bg: 'bg-neutral-900/10 text-neutral-900 dark:text-white border-neutral-400 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white', dot: 'bg-neutral-800 dark:bg-white' },
    { name: 'Spring', bg: 'bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-500/30 hover:border-lime-400', dot: 'bg-lime-400' },
    { name: 'Tailwind', bg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30 hover:border-sky-400', dot: 'bg-sky-400' },
    { name: 'Git', bg: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30 hover:border-orange-400', dot: 'bg-orange-400' },
    { name: 'AWS', bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 hover:border-amber-400', dot: 'bg-amber-400' },
    { name: 'Docker', bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 hover:border-blue-400', dot: 'bg-blue-400' },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 overflow-hidden bg-grid-pattern">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header Tag & Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            WHO I AM
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            About
          </h2>
        </div>

        {/* Editorial Signature Statement with Inline Avatars & Icons */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white leading-[1.3] sm:leading-[1.25] tracking-tight">
            Hi, <span className="text-brand-orange">I am </span>
            
            {/* Inline Avatar Pill with Madan Photo */}
            <span className="inline-flex items-center align-middle mx-1.5 p-0.5 rounded-full border-2 border-brand-orange bg-cream-200 dark:bg-neutral-800">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/madan.jpg" alt="Madan C S" className="w-full h-full object-cover object-top" />
              </span>
            </span>

            <span className="text-brand-orange"> Madan C S ✌️</span>, a{' '}
            <span className="underline decoration-brand-orange decoration-4 underline-offset-8">
              Full Stack Developer
            </span>{' '}
            from Bengaluru crafting scalable apps with <span className="text-brand-orange">Spring Boot</span>, <span className="text-cyan-500">React</span> &amp; <span className="text-emerald-500">Node.js</span> <Globe className="w-7 h-7 sm:w-9 sm:h-9 inline text-sky-500 align-middle mx-1" /> — from secure <span className="underline decoration-amber-500 decoration-2">APIs &amp; microservices</span> <Layers className="w-7 h-7 sm:w-9 sm:h-9 inline text-emerald-500 align-middle mx-1" /> to real-time front-ends <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 inline text-amber-500 align-middle mx-1" />.
          </p>
        </div>

        {/* Expertise in Tools Horizontal Pill Row */}
        <div className="pt-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            EXPERTISE IN TOOLS
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {toolIcons.map((tool, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full border bg-white dark:bg-neutral-900 shadow-sm text-xs font-bold transition-all duration-300 hover:scale-105 cursor-default ${tool.bg}`}
              >
                <span className={`w-2 h-2 rounded-full ${tool.dot}`} />
                <span>{tool.name}</span>
              </div>
            ))}
            <div className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-cream-200 dark:bg-neutral-800 text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-400">
              + REST APIs &amp; Microservices
            </div>
          </div>
        </div>

        {/* Details & Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch">
          {/* Bio Narrative Card */}
          <div className="lg:col-span-7 editorial-card bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
                Scalable Engineering & Cloud Architecture
              </h3>
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-3 rounded-2xl bg-cream-100 dark:bg-neutral-800/60">
                  <div className="text-2xl font-black text-brand-orange">{stat.value}</div>
                  <div className="text-[11px] font-medium text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Profile Code Window */}
          <div className="lg:col-span-5 editorial-card bg-neutral-950 p-0 rounded-3xl border border-neutral-800 shadow-xl overflow-hidden flex flex-col">
            <div className="bg-neutral-900 px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-orange" />
                madan-profile.json
              </div>
              <div className="w-8" />
            </div>

            <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 space-y-2 bg-neutral-950 flex-1 overflow-x-auto">
              <div><span className="text-purple-400">const</span> <span className="text-amber-400">developer</span> = &#123;</div>
              <div className="pl-4"><span className="text-neutral-400">name:</span> <span className="text-emerald-400">&quot;Madan C S&quot;</span>,</div>
              <div className="pl-4"><span className="text-neutral-400">title:</span> <span className="text-emerald-400">&quot;Full-Stack &amp; AI Developer&quot;</span>,</div>
              <div className="pl-4"><span className="text-neutral-400">location:</span> <span className="text-emerald-400">&quot;Bengaluru, India&quot;</span>,</div>
              <div className="pl-4"><span className="text-neutral-400">experience:</span> <span className="text-sky-400">&quot;1.1+ Years&quot;</span>,</div>
              <div className="pl-4"><span className="text-neutral-400">stack:</span> [</div>
              <div className="pl-8 text-amber-300">&quot;MongoDB&quot;, &quot;Express&quot;, &quot;React&quot;, &quot;Node.js&quot;,</div>
              <div className="pl-8 text-amber-300">&quot;Java&quot;, &quot;Spring Boot&quot;, &quot;Next.js&quot;, &quot;Docker&quot;</div>
              <div className="pl-4">],</div>
              <div className="pl-4"><span className="text-neutral-400">status:</span> <span className="text-emerald-400">&quot;Open to Opportunities&quot;</span></div>
              <div>&#125;;</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
