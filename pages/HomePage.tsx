import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Star, Users, PlayCircle, Code, ShieldCheck, Zap, Award, ExternalLink, Globe } from 'lucide-react';

export default function HomePage() {
  const INTRO_VIDEO_ID = "ncztz61eBlg";
  const INTRO_VIDEO_URL = `https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}?rel=0&modestbranding=1`;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 bg-white dark:bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-15 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600 rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-semibold text-sm border border-indigo-100 dark:border-indigo-800">
              <Zap className="w-4 h-4" />
              <span>Technology with Raju | 2025 Mastery</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Master the Art of <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">Secure</span> Engineering
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Go beyond simple syntax. Join 50,000+ students learning the architecture, SDLC, and security patterns required by the world's leading product companies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/courses" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200">
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl relative">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-slate-950 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 ring-1 ring-white/10">
                  <div className="aspect-video bg-black">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={INTRO_VIDEO_URL}
                      title="Technology with Raju - Intro"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md p-4 flex items-center justify-between border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center text-indigo-400">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">Engineering Masterclass</div>
                        <div className="text-[10px] text-slate-400">SDLC • Architecture • Security</div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">The Raju Methodology</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">We focus on long-term engineering excellence, not just temporary syntax memorization.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: <ShieldCheck className="w-12 h-12 text-pink-500" />, title: "Secure Architecture", desc: "Build systems resilient to modern threats, mastering OAuth2, JWT, and Advanced Encryption." },
              { icon: <Code className="w-12 h-12 text-indigo-500" />, title: "Industrial SDLC", desc: "Experience the complete product lifecycle from requirement specs to automated CI/CD pipelines." },
              { icon: <Users className="w-12 h-12 text-cyan-500" />, title: "Elite Community", desc: "Access our private network of engineers working at top-tier global product firms." }
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-2 duration-500">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
           {[
             { label: "Students", value: "50,000+" },
             { label: "Hours Content", value: "500+" },
             { label: "Success Rate", value: "94%" },
             { label: "Community", value: "Global" }
           ].map((stat, i) => (
             <div key={i} className="text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
                <div className="text-3xl font-black text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}