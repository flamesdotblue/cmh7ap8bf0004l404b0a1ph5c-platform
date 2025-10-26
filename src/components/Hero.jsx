import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 min-h-[92vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(34,211,238,0.12),transparent),radial-gradient(40%_40%_at_20%_80%,rgba(139,92,246,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs tracking-wide text-cyan-200">Tech • Portfolio • Modern</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300">a Data Scientist</span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-xl">
            I build end-to-end machine learning systems and data products. My work spans exploratory data analysis, feature engineering, model training, deployment, and interactive analytics.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium shadow hover:from-cyan-400 hover:to-violet-400 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-neutral-700 hover:border-neutral-600 text-neutral-200 bg-neutral-900/50">
              Get in touch
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" aria-label="GitHub" className="p-2 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Resume" className="p-2 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors">
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-xl overflow-hidden ring-1 ring-neutral-800/60 bg-neutral-900/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/70 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
