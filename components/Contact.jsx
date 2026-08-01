'use client';

import { useState } from 'react';
import { portfolioData } from '@/app/lib/data';
import { Mail, MapPin, Send, MessageSquare, Copy, Check, Feather, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 bg-grid-pattern overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Giant Iconic CTA Section (Matching Screenshot) */}
        <div className="text-center space-y-8 max-w-4xl mx-auto pt-8">
          {/* Feather / Quill Icon */}
          <div className="w-12 h-12 mx-auto rounded-full bg-cream-200 dark:bg-neutral-800 flex items-center justify-center text-brand-orange shadow-sm">
            <Feather className="w-6 h-6 rotate-45" />
          </div>

          {/* Giant Typographic Headline */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-neutral-900 dark:text-white tracking-tighter leading-[0.95] uppercase">
            INTERESTED IN <br />
            <span>WORKING </span>
            <span className="text-brand-orange">TOGETHER?</span>
          </h2>

          {/* Get in Touch Pill Button */}
          <div className="pt-2">
            <a
              href={`mailto:${personal.email}?subject=Let's%20Work%20Together`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-900 dark:text-white shadow-sm hover:border-brand-orange hover:text-brand-orange dark:hover:text-brand-orange transition-all hover:scale-105"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Channels Grid Card */}
        <div className="editorial-card bg-white dark:bg-neutral-900 p-8 sm:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Direct Channels
              </h3>

              <div
                onClick={copyEmail}
                className="flex items-center gap-4 p-4 rounded-2xl bg-cream-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 hover:border-brand-orange transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-neutral-500">Email Address (Click to Copy)</p>
                  <p className="text-neutral-900 dark:text-white font-bold text-sm truncate">
                    {personal.email}
                  </p>
                </div>
                <div className="p-2 text-neutral-400 group-hover:text-brand-orange">
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-cream-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 hover:border-brand-orange transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-500">LinkedIn Profile</p>
                  <p className="text-neutral-900 dark:text-white font-bold text-sm">
                    Madan C S
                  </p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-cream-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 hover:border-brand-orange transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-500">GitHub Profile</p>
                  <p className="text-neutral-900 dark:text-white font-bold text-sm">
                    github.com/MADANCS
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-cream-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-500">Current Location</p>
                  <p className="text-neutral-900 dark:text-white font-bold text-sm">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Email Action Box */}
            <div className="p-8 rounded-3xl bg-cream-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-orange text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-neutral-900 dark:text-white mb-3">
                  Send a Direct Message
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-8 font-medium">
                  Click below to compose a direct email inquiry or request Madan&apos;s full resume portfolio.
                </p>
              </div>

              <a
                href={`mailto:${personal.email}?subject=Opportunity%20/%20Inquiry%20from%20Portfolio`}
                className="w-full py-4 px-6 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-md shadow-brand-orange/20"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
