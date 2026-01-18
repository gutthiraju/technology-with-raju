
import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Star, Users, PlayCircle, Code, ShieldCheck, Zap } from 'lucide-react';

export default function HomePage() {
  // Using the specific ID requested by the user: ncztz61eBlg
  // Switching to youtube-nocookie.com to ensure better cross-browser compatibility
  const INTRO_VIDEO_ID = "ncztz61eBlg";
  const INTRO_VIDEO_URL = `https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}?rel=0&modestbranding=1`;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-semibold text-sm">
              <Zap className="w-4 h-4" />
              <span>New: 2025 Web Dev Engineering Track</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Master the Art of <span className="text-indigo-600">Secure</span> Coding
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Go beyond syntax. Join 50,000+ students learning the architecture and SDLC required to build production systems at Top Product Companies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/courses" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200">
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-950 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 ring-1 ring-white/10">
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
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500 shadow-inner">
                        <img src="https://picsum.photos/seed/raju-portrait/100/100" alt="Raju" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Raju's Engineering Track</div>
                        <div className="text-[10px] text-slate-400">Mastery Session • 2025 Edition</div>
                      </div>
                    </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Why Tech With Raju?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We don't just teach syntax. We teach you how to build scalable and secure systems that last.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />, title: "Security Architecture", desc: "Learn to build systems that handle real-world threats and scale to millions." },
              { icon: <Code className="w-8 h-8 text-violet-500" />, title: "Product Mindset", desc: "Understand the full SDLC lifecycle used at top-tier companies like Netflix." },
              { icon: <Users className="w-8 h-8 text-emerald-500" />, title: "Direct Mentorship", desc: "Get answers directly from industry experts in our private community groups." }
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
