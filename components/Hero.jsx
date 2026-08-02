'use client';

import { portfolioData } from '@/app/lib/data';
import { ArrowUpRight, Download, Sparkles, Star, Briefcase, Award } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-36 sm:pt-44 pb-12 flex flex-col justify-between overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        
        {/* Main Hero Grid: Text & Large Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
          
          {/* Left Column: Headline & Intro (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-mono tracking-wide text-neutral-800 dark:text-neutral-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-spin-slow" />
              <span>OPEN TO SOFTWARE ENGINEERING ROLES</span>
            </div>

            {/* Headline Block */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 uppercase">
                ASPIRING SOFTWARE DEVELOPER
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white leading-[1.05]">
                Hello, I&apos;m <br className="hidden sm:inline" />
                <span className="text-brand-orange">Madan C S.</span>
              </h1>
              
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-800 dark:text-neutral-200 tracking-tight">
                Full Stack Developer(Java + Mern Stack)
              </div>
            </div>

            {/* Sub-headline Text */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
              Passionate Full-Stack Developer with 1+ year of hands-on experience building scalable web applications using the MERN Stack and Java. Skilled in RESTful APIs, Spring Boot, React.js, Docker, AWS, and modern cloud deployment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm shadow-lg shadow-brand-orange/25 hover:scale-105 transition-all"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumes.java}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 font-bold text-sm hover:border-brand-orange transition-all hover:scale-105 shadow-sm"
              >
                <Download className="w-4 h-4 text-brand-orange" />
                <span>Java Resume</span>
              </a>

              <a
                href={personal.resumes.mern}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 font-bold text-sm hover:border-brand-orange transition-all hover:scale-105 shadow-sm"
              >
                <Download className="w-4 h-4 text-brand-orange" />
                <span>MERN Resume</span>
              </a>
            </div>

            {/* Quick Stats Pill Row */}
            <div className="pt-4 flex items-center gap-6 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 border-t border-neutral-200/80 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-orange" />
                <span>1+ Year Exp.</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-orange" />
                <span>4 Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Large Photo Card (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            
            {/* Decorative Glow Background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/30 to-amber-500/20 rounded-[2.5rem] blur-2xl opacity-70 dark:opacity-40 animate-pulse"></div>

            {/* Main Large Photo Frame */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl bg-neutral-900 group">
              <img
                src="/madan.jpg"
                alt="Madan C S - Full-Stack Developer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none"></div>

              {/* Photo Bottom Caption Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-700/50 shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black text-neutral-900 dark:text-white leading-tight">Madan C S</h3>
                  <p className="text-xs font-medium text-brand-orange">Full Stack Developer(Java + Mern Stack)</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/30"></div>
              </div>
            </div>

            {/* Floating Top-Right Rotating Stamp Badge */}
            <div className="absolute -top-6 -right-2 sm:-top-8 sm:-right-4 z-20">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-brand-orange/60 p-1.5 flex items-center justify-center relative stamp-badge bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-xl hover:scale-110 transition-transform">
                <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full p-1">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9px] font-mono font-bold uppercase tracking-widest fill-neutral-800 dark:fill-neutral-200">
                      <textPath href="#circlePath" startOffset="0%">
                        • 4 PROJECTS BUILT • 7 CERTIFICATIONS •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="flex flex-col items-center justify-center text-center z-10">
                  <Star className="w-4 h-4 text-brand-orange fill-brand-orange mb-0.5" />
                  <span className="text-base font-black text-neutral-900 dark:text-white leading-tight">4</span>
                  <span className="text-[9px] font-bold text-neutral-500 uppercase">BUILT</span>
                </div>
              </div>
            </div>

            {/* Floating Pill: "Hi! I Am Madan C S." */}
            <div className="absolute top-10 -left-4 sm:top-14 sm:-left-8 z-20 hidden sm:flex items-center gap-3 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-3 px-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl">
              <span className="text-2xl">👋</span>
              <div>
                <span className="text-xs font-semibold text-neutral-400 block leading-none">Hello, I&apos;m</span>
                <span className="text-sm font-black text-brand-orange leading-tight">Madan C S.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Infinite Logo / Tech Stack Marquee Row */}
      <div className="mt-6 w-full marquee-mask overflow-hidden py-4 border-y border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...portfolioData.skills.marquee, ...portfolioData.skills.marquee].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm font-bold text-neutral-700 dark:text-neutral-300 opacity-75 hover:opacity-100 transition-opacity">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

