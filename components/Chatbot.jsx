'use client';

import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '@/app/lib/data';
import { X, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm Madan's portfolio assistant. ⚡",
    },
    {
      sender: 'bot',
      text: "Click any of the topics below to learn more about Madan's experience, services, and FAQ!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const getBotResponse = (userMsg) => {
    const msg = userMsg.toLowerCase();
    const responses = portfolioData.chatbotResponses;

    if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack') || msg.includes('tool')) {
      return responses.skills;
    }
    if (msg.includes('experience') || msg.includes('work') || msg.includes('service') || msg.includes('cost') || msg.includes('job')) {
      return responses.experience;
    }
    if (msg.includes('education') || msg.includes('degree') || msg.includes('university') || msg.includes('college')) {
      return responses.education;
    }
    if (msg.includes('project')) {
      return responses.projects;
    }
    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('phone')) {
      return responses.contact;
    }
    if (msg.includes('about') || msg.includes('who') || msg.includes('madan')) {
      return `Madan C S is a Full-Stack Developer & AI Specialist practicing MERN Stack & Java Architecture since 2023.`;
    }

    return responses.default;
  };

  const handleSendText = (text) => {
    if (!text.trim()) return;

    const userText = text.trim();
    setInputValue('');

    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      const botText = getBotResponse(userText);
      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
      setIsTyping(false);
    }, 550);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendText(inputValue);
  };

  const topicOptions = [
    { label: '🙋 About Madan', query: 'Tell me about Madan' },
    { label: '💼 Services & Cost', query: 'What services and experience does Madan offer?' },
    { label: '⚙️ Tech Stack & Tools', query: 'What is Madan\'s tech stack and tools?' },
    { label: '🎓 Education', query: 'What is Madan\'s educational background?' },
    { label: '📬 Contact Info', query: 'How can I contact Madan?' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Expanded Chatbot Modal Window (Matching Screenshot Layout) */}
      {isOpen && (
        <div className="bg-[#FAF7F2] dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-300 dark:border-neutral-800 w-[350px] sm:w-[390px] h-[520px] flex flex-col overflow-hidden mb-4 transition-all animate-fade-in-up">
          
          {/* Header (Cream Header with Photo Avatar & Green Status Dot) */}
          <div className="bg-[#F4EFE6] dark:bg-neutral-800 px-5 py-4 flex items-center justify-between border-b border-neutral-200/80 dark:border-neutral-700">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-orange/40 bg-cream-200 dark:bg-neutral-700 flex items-center justify-center">
                  <img src="/madan.jpg" alt="Madan's Assistant" className="w-full h-full object-cover object-top" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-neutral-800" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-neutral-900 dark:text-white leading-tight">
                  Madan&apos;s Assistant
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  About &amp; Experience
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-300 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto chatbot-messages space-y-4 bg-[#FAF7F2] dark:bg-neutral-950">
            {messages.map((msg, index) => (
              <div key={index} className="space-y-1">
                {msg.sender === 'bot' ? (
                  <div className="space-y-1 max-w-[88%]">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                      <div className="w-4 h-4 rounded-full overflow-hidden inline-block">
                        <img src="/madan.jpg" alt="Madan" className="w-full h-full object-cover object-top" />
                      </div>
                      <span>Madan&apos;s Assistant</span>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl rounded-tl-sm text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 shadow-sm border border-neutral-200/60 dark:border-neutral-800 leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="bg-brand-orange text-white p-3.5 px-4 rounded-2xl rounded-tr-sm text-xs sm:text-sm font-medium shadow-sm max-w-[82%] leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="space-y-1 max-w-[88%]">
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                  <span>Madan&apos;s Assistant</span>
                </div>
                <div className="bg-white dark:bg-neutral-900 p-3 px-4 rounded-2xl rounded-tl-sm border border-neutral-200/60 dark:border-neutral-800 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange typing-dot" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange typing-dot" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Topic Selection Box (SELECT A TOPIC TO CHAT: Matching Screenshot) */}
          <div className="p-4 bg-[#F4EFE6] dark:bg-neutral-900 border-t border-neutral-200/80 dark:border-neutral-800 space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase block">
              SELECT A TOPIC TO CHAT:
            </span>

            {/* Scrollable / Wrapped Pills */}
            <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto pr-1">
              {topicOptions.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendText(topic.query)}
                  className="px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-700 text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:border-brand-orange hover:text-brand-orange transition-all shadow-sm active:scale-95"
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleFormSubmit} className="pt-1 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Or type custom question..."
                className="flex-1 px-4 py-2 text-xs bg-white dark:bg-neutral-800 rounded-full border border-neutral-300 dark:border-neutral-700 focus:border-brand-orange focus:outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-full bg-brand-orange text-white disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-all shadow-sm"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Floating Single Black Circular Chatbot Button (Bottom Left, Matching Screenshot!) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center border-2 border-neutral-800 group"
        aria-label="Toggle Portfolio Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
}
