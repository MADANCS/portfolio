'use client';

import { portfolioData } from '@/app/lib/data';
import { Mail, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="bg-cream-100 dark:bg-neutral-950 border-t border-neutral-300/80 dark:border-neutral-800 pt-16 pb-10 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Brand Logo & Email Link Stack (Centered like in Screenshot) */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <a href="#hero" className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white">
            Madan<span className="text-brand-orange">.</span>
          </a>

          {/* Email Address Pill */}
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 shadow-sm hover:border-brand-orange transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-brand-orange" />
            <span>{personal.email}</span>
          </a>
        </div>

        {/* Bottom Bar: Copyright & Nav Links */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>

          <div className="flex items-center gap-6 font-semibold">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">LinkedIn</a>
            <a href={`mailto:${personal.email}`} className="hover:text-brand-orange transition-colors">Email</a>
            <a href={personal.resumes.java} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Java Resume</a>
            <a href={personal.resumes.mern} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">MERN Resume</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
