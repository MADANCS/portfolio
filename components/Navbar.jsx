'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/app/lib/data';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Sync theme with HTML class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = portfolioData.navLinks.map(link => link.href.replace('#', ''));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-1.5 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          <span>Madan</span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-orange inline-block group-hover:scale-125 transition-transform duration-300"></span>
        </a>

        {/* Floating Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full nav-pill shadow-sm">
          {portfolioData.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1 ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[9px] opacity-60 font-mono"><sup>{link.num}</sup></span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full bg-cream-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:scale-105 transition-all shadow-sm"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Connect Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-brand-orange hover:text-brand-orange dark:hover:text-brand-orange transition-all hover:scale-105"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-cream-200 dark:bg-neutral-800 text-neutral-800 dark:text-white"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 pointer-events-auto ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="nav-pill rounded-2xl p-4 space-y-2 max-w-sm mx-auto">
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 rounded-xl hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
            >
              <span>{link.label}</span>
              <span className="text-xs font-mono text-neutral-400">0{link.num}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
