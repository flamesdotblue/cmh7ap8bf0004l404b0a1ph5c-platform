import React from 'react';
import { Database, Brain, LineChart, Image as ImageIcon, Link as LinkIcon, Github } from 'lucide-react';

const projects = [
  {
    title: 'Customer Churn Prediction',
    description:
      'Gradient boosting model with feature store and SHAP-based interpretability to reduce churn by 12%.',
    tags: ['XGBoost', 'Feature Store', 'SHAP', 'MLflow'],
    icon: <Database className="w-5 h-5 text-cyan-300" />,
  },
  {
    title: 'NLP Topic Discovery',
    description:
      'Unsupervised topic modeling and semantic search for research articles with a React-based explorer.',
    tags: ['Sentence-BERT', 'UMAP', 'HDBSCAN', 'FAISS'],
    icon: <Brain className="w-5 h-5 text-violet-300" />,
  },
  {
    title: 'Forecasting for Retail',
    description:
      'Probabilistic time-series forecasting pipeline with hierarchical reconciliation and dashboards.',
    tags: ['Prophet', 'ARIMA', 'GluonTS', 'Dash'],
    icon: <LineChart className="w-5 h-5 text-emerald-300" />,
  },
  {
    title: 'Defect Detection (CV)',
    description:
      'Computer vision model with active learning loop and on-device optimization for real-time QA.',
    tags: ['YOLOv8', 'ONNX', 'FastAPI', 'Edge'],
    icon: <ImageIcon className="w-5 h-5 text-rose-300" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Selected Projects</h2>
            <p className="text-neutral-400 mt-2">A snapshot of work across machine learning, NLP, forecasting, and computer vision.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
            <Github className="w-4 h-4" /> View GitHub
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group relative rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
              <div className="relative p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-neutral-900 border border-neutral-800">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md border border-neutral-800 text-neutral-300 bg-neutral-950/60">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <a href="#" className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200">
                    <LinkIcon className="w-4 h-4" /> Live
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
