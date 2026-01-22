import React from 'react';
import { PlayCircle, Youtube, Info, Share2, ExternalLink } from 'lucide-react';

export default function VideosPage() {
  const videoData = [
    {
      id: "s47MXfRyV34",
      title: "Mastering the Tech Interview",
      description: "Deep dive into data structures and algorithms commonly asked at FAANG companies.",
      tag: "Career"
    },
    {
      id: "lJzZEBsJLWk",
      title: "Full Stack Architecture 2025",
      description: "How to design scalable systems that handle millions of requests per second.",
      tag: "Architecture"
    },
    {
      id: "5RHjgCh72Qk",
      title: "Frontend Engineering Secrets",
      description: "Advanced React patterns and performance optimization techniques for modern web apps.",
      tag: "Frontend"
    },
    {
      id: "dt1GGd262eQ",
      title: "The Future of AI in Dev",
      description: "Integrating LLMs and generative AI tools into your daily development workflow.",
      tag: "AI & Future"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-red-100 dark:border-red-800">
          <Youtube className="w-4 h-4" />
          <span>Curated Sessions</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Exclusive Engineering <span className="text-indigo-600">Insights</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Explore our collection of high-impact technical sessions led by Raju and industry guests.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {videoData.map((video, idx) => (
          <div key={idx} className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl">
            <div className="relative aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                title={video.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-indigo-100 dark:border-indigo-800">
                  {video.tag}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <a 
                    href={`https://youtu.be/${video.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                {video.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {video.description}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-400">
                <Info className="w-4 h-4" />
                <span>Premium educational content by Technology with Raju</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-indigo-600 to-violet-700 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <PlayCircle className="w-16 h-16 mx-auto opacity-50" />
          <h2 className="text-3xl font-bold">Want Full Mastery?</h2>
          <p className="text-indigo-100 text-lg">
            Our YouTube sessions are just the beginning. Join the Pro track for full project builds, certificates, and source code access.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-lg">
              Explore Pro Courses
            </button>
            <button className="px-8 py-4 bg-indigo-500 text-white rounded-2xl font-bold border border-indigo-400/30 hover:bg-indigo-400 transition-all">
              Watch More on YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}