import { motion } from 'motion/react';
import { Menu, X, HeartPulse } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '프로그램 소개', href: '#program' },
    { name: '치료 가능 영역', href: '#areas' },
    { name: '치료 프로세스', href: '#process' },
    { name: '의료진 소개', href: '#team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-line h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-full items-center">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tighter text-brand-deep uppercase leading-none">
                Doulton <span className="text-brand-accent">Healthwave</span>
              </span>
              <span className="text-[10px] font-bold text-brand-accent tracking-[0.2em] mt-1">
                와튼젤리줄기세포 치료
              </span>
            </div>
            <a href="tel:010-2453-6534" className="ml-4 text-xs font-bold text-text-sub hidden sm:inline">
              T. 010-2453-6534
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-sub hover:text-brand-accent transition-colors tracking-tight"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#consultation"
              className="text-brand-accent text-sm font-bold hover:underline"
            >
              상담예약
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-deep p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-paper border-b border-brand-deep/10 px-4 pt-2 pb-6"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-lg font-serif text-brand-deep border-b border-brand-deep/5"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={() => setIsOpen(false)}
            className="block mt-6 bg-brand-deep text-white text-center py-4 rounded-xl font-bold"
          >
            상담 예약하기
          </a>
        </motion.div>
      )}
    </nav>
  );
}
