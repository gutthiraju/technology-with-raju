import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Video, 
  Users, 
  Clock, 
  Send,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Offline Bootcamp",
      desc: "Join our intensive hands-on bootcamp at our Bengaluru center for deep architectural training.",
      benefit: "In-person mentorship"
    },
    {
      icon: <Video className="w-8 h-8 text-violet-600" />,
      title: "Online Mastery",
      desc: "Structured recorded tracks and live coding sessions from the comfort of your home.",
      benefit: "Flexible schedule"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Live Q&A",
      desc: "Direct access to Raju for career guidance, project reviews, and interview prep.",
      benefit: "Real-time answers"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,#4f46e5_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#8b5cf6_0%,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-indigo-400 text-sm font-bold uppercase tracking-widest mb-6 border border-white/10">
            <MessageSquare className="w-4 h-4" />
            <span>Connect with Technology with Raju</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Have Questions? <span className="text-indigo-400">Let's Talk.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Get details about our Offline and Online classes, Live sessions, and Career Guidance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Direct Contact Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-12 group">
              <div className="shrink-0 relative">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden border-4 border-indigo-50 dark:border-slate-800 shadow-2xl shadow-indigo-100 dark:shadow-none group-hover:scale-105 transition-transform duration-500 logo-glow bg-slate-100 dark:bg-slate-800">
                  <img 
                    src="profile.jpeg" 
                    alt="Technology with Raju" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Fallback sequence: profile.jpeg -> images/profile.jpeg -> profile.jpg -> images/profile.jpg -> placeholder
                      if (target.src.endsWith('profile.jpeg') && !target.src.includes('images/')) {
                        target.src = 'images/profile.jpeg';
                      } else if (target.src.includes('images/profile.jpeg')) {
                        target.src = 'profile.jpg';
                      } else if (target.src.endsWith('profile.jpg') && !target.src.includes('images/')) {
                        target.src = 'images/profile.jpg';
                      } else if (!target.src.includes('placehold.co')) {
                        target.src = "https://placehold.co/400x400/1e293b/white?text=Raju";
                      }
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 animate-pulse flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Speak Directly to Raju</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">Contact for Offline Bootcamps, Online classes, and Live sessions for your engineering career roadmap.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="tel:9346776004" 
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 transition-all active:scale-95"
                  >
                    <Phone className="w-6 h-6" />
                    9346776004
                  </a>
                  <p className="text-slate-400 text-sm font-medium">Available Mon - Sat (10 AM - 7 PM IST)</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400">Offline Bootcamp</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400">Online Mastery</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400">Live Mentorship</span>
                </div>
              </div>
            </div>

            {/* Support Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((m, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-xl shadow-slate-100/50">
                  <div className="mb-6">{m.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{m.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{m.desc}</p>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <ChevronRight className="w-4 h-4" />
                    {m.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Inquiry CTA Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-200 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Quick Inquiry</h3>
                <p className="text-indigo-100 mb-8 leading-relaxed">
                  Interested in our Offline Bootcamps or Online tracks? Fill out our quick interest form and our team will get back to you within 24 hours.
                </p>
                <a 
                  href="https://forms.gle/xPzutj8wPuAxo9hW8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl group/btn"
                >
                  Open Inquiry Form 
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Visit Our Office
              </h4>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Level 14, Tech Park North,<br />
                  Outer Ring Road, Bellandur,<br />
                  Bengaluru, Karnataka 560103
                </p>
                <a 
                  href="https://maps.app.goo.gl/zAqDWY1TZPoWFj8UA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:underline"
                >
                  Open in Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}