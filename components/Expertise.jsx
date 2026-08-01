'use client';

import { Globe, ArrowUpRight, Server } from 'lucide-react';

export default function Expertise() {
  const offerings = [
    {
      title: 'Web Development',
      description: 'Building responsive, scalable full-stack web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js), delivering features end-to-end from database design to frontend implementation.',
      icon: Globe,
      color: 'text-brand-orange bg-brand-orange/10',
    },
    {
      title: 'Backend & Cloud Engineering',
      description: 'Architecting scalable microservices, RESTful APIs, and Spring Boot backends, with cloud deployment pipelines using Docker, AWS, and CI/CD practices for production-ready applications.',
      icon: Server,
      color: 'text-sky-500 bg-sky-500/10',
    },
  ];

  return (
    <section id="expertise" className="relative py-28 px-4 sm:px-8 bg-grid-pattern">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            WHAT I OFFER
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Expertise
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="editorial-card bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 shadow-sm relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-cream-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>0{idx + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform">Explore &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
