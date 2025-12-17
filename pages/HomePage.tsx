
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Users, PlayCircle, Code, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-semibold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span>New: React 18 & Python Masterclass Live</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Master the Art of <span className="text-indigo-600">Production</span> Coding
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Join 50,000+ students learning the exact technologies required to land a job at Top Product Companies. Taught by Raju, Ex-BigTech Engineer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/courses" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200">
                Browse Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                View Pricing
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">50K+</span>
                <span className="text-slate-500 text-sm">Active Students</span>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">4.9/5</span>
                <span className="text-slate-500 text-sm">Average Rating</span>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">100+</span>
                <span className="text-slate-500 text-sm">Hours of Video</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                  <img src="https://picsum.photos/seed/coding/800/600" alt="Coding Session" className="w-full aspect-video object-cover" />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                    <button className="bg-white/90 p-4 rounded-full text-indigo-600 hover:scale-110 transition-transform">
                      <PlayCircle className="w-12 h-12" />
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Tech With Raju?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don't just teach syntax. We teach you how to build scalable and secure systems.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />, title: "Production Ready", desc: "Learn CI/CD, Testing, and Security from Day 1." },
              { icon: <Code className="w-8 h-8 text-violet-500" />, title: "Real Projects", desc: "Build enterprise-grade applications like this platform itself." },
              { icon: <Users className="w-8 h-8 text-emerald-500" />, title: "Community Support", desc: "Access to private Discord with Raju and expert mentors." }
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-indigo-600 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-white">
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-400 shrink-0">
            <img src="https://picsum.photos/seed/raju-portrait/400/400" alt="Instructor Raju" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">Meet Your Instructor: Raju</h2>
            <p className="text-lg lg:text-xl text-indigo-100 leading-relaxed">
              With over 10 years of experience at top tech giants like Google and Netflix, I've seen how the industry operates. My mission is to bridge the gap between academic learning and industrial requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-lg font-medium">Ex-Google</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg font-medium">Staff Engineer</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg font-medium">Cloud Architect</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
