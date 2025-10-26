import React from 'react';
import { Rocket, FolderOpenDot, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-md bg-gradient-to-br from-cyan-500/30 to-violet-500/30 ring-1 ring-cyan-400/30 group-hover:from-cyan-500/40 group-hover:to-violet-500/40 transition-colors">
            <Rocket className="w-5 h-5 text-cyan-300" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-tight">Data Science Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
            <FolderOpenDot className="w-4 h-4" /> Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
