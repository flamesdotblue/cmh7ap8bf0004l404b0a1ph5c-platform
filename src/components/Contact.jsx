import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-neutral-900 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_70%,rgba(34,211,238,0.10),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Let’s collaborate</h2>
        <p className="text-neutral-300 mt-3">
          Open to roles and projects in machine learning engineering, data science, and analytics. Drop a line and I’ll get back soon.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium hover:from-cyan-400 hover:to-violet-400 transition-colors">
            <Mail className="w-5 h-5" /> your.email@example.com
          </a>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors text-neutral-200">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors text-neutral-200">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
        <p className="text-xs text-neutral-500 mt-8">© {new Date().getFullYear()} Your Name — Built with React, Vite, Tailwind, and Spline</p>
      </div>
    </section>
  );
};

export default Contact;
