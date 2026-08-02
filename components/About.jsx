'use client';

import { Globe, Layers, Sparkles } from 'lucide-react';

export default function About() {
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
            Hello! <span className="text-brand-orange">I'm </span>
            
            {/* Inline Avatar Pill with Madan Photo */}
            <span className="inline-flex items-center align-middle mx-1.5 p-0.5 rounded-full border-2 border-brand-orange bg-cream-200 dark:bg-neutral-800">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/madan.jpg" alt="Madan C S" className="w-full h-full object-cover object-top" />
              </span>
            </span>

            <span className="text-brand-orange">Madan C S</span> — a{' '}
            <span className="underline decoration-brand-orange decoration-4 underline-offset-8">
              Full-Stack Developer
            </span>{' '}
            from Bengaluru crafting scalable applications with <span className="text-brand-orange">Spring Boot</span>, <span className="text-cyan-500">React</span> &amp; <span className="text-emerald-500">Node.js</span> <Globe className="w-7 h-7 sm:w-9 sm:h-9 inline text-sky-500 align-middle mx-1" /> — building secure <span className="underline decoration-amber-500 decoration-2">APIs &amp; microservices</span> <Layers className="w-7 h-7 sm:w-9 sm:h-9 inline text-emerald-500 align-middle mx-1" /> and interactive user experiences <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 inline text-amber-500 align-middle mx-1" />.
          </p>
        </div>

      </div>
    </section>
  );
}

