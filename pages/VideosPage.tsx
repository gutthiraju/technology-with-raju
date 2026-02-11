import React from 'react';
import { PlayCircle, Youtube, Info, Share2, ExternalLink, BookOpen, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router';

export default function VideosPage() {
  // Curated list of 6 sessions for "Technology with Raju" channel content
  const videoData = [
    {
      id: "C_iQ_WisPhQ",
      title: "Html class 1: The Foundation",
      description: "Step into the world of web development. This first class covers the absolute essentials of HTML5, tags, and document structure needed to build modern websites.",
      tag: "Frontend Mastery",
      duration: "45 mins"
    },
    {
      id: "ncztz61eBlg",
      title: "Web Dev Roadmap 2025",
      description: "A complete architectural breakdown of the Software Development Life Cycle (SDLC). Learn the path from a beginner to a professional Software Engineer in 2025.",
      tag: "Career Roadmap",
      duration: "60 mins"
    },
    {
      id: "lJzZEBsJLWk",
      title: "Full Stack Architecture 2025",
      description: "Master the patterns used by global product companies. Learn how to connect frontend, backend, and databases with high security and low latency.",
      tag: "Architecture",
      duration: "55 mins"
    },
    {
      id: "vW_PXiJswPs",
      title: "Scalable Backend Performance",
      description: "Deep dive into Node.js and Python performance tuning. Learn how to handle millions of requests while maintaining data integrity and security.",
      tag: "Backend Systems",
      duration: "50 mins"
    },
    {
      id: "Nls04PHDimM",
      title: "Production Deployment Strategies",
      description: "Go beyond localhost. Learn CI/CD pipelines, Docker containerization, and the secrets of zero-downtime deployments for production apps.",
      tag: "DevOps",
      duration: "42 mins"
    },
    {
      id: "Sarm2WVhQJE",
      title: "Modern Cloud Native Design",
      description: "Explore the future of infrastructure. We cover Serverless, Edge computing, and Microservices architecture for modern engineering teams.",
      tag: "Cloud Native",
      duration: "48 mins"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-red-100 dark:border-red-800">
            <Youtube className="w-4 h-4" />
            <span>Official Channel Sessions</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Raju's Engineering <span className="text-indigo-600">Vault</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
            6 specialized sessions designed to take you from a coder to a Software Architect. Master the skills that matter in the modern tech industry.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-xl shadow-slate-200/30 dark:shadow-none hover:shadow-2xl flex flex-col">
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                ></iframe>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Clock className="w-3 h-3 text-indigo-400" /> {video.duration}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                    <Tag className="w-3 h-3" /> {video.tag}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" title="Share">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <a 
                      href={`https://youtu.be/${video.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {video.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">
                    <Info className="w-3 h-3 text-indigo-500" />
                    <span>Free Masterclass</span>
                  </div>
                  <Link to="/courses" className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1">
                    Get Source Code <PlayCircle className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-white/20">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-black">Join 50K+ Subscribers</h2>
              <p className="text-slate-300 text-lg lg:text-xl">
                Get notified every time Raju drops a new engineering masterclass. Practical coding, no fluff.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a 
                  href="https://www.youtube.com/@Technology_with_Raju10" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-900/40 flex items-center justify-center gap-3 active:scale-95"
                >
                  Subscribe Now
                </a>
                <Link to="/courses" className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-3 active:scale-95">
                  Pro Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}