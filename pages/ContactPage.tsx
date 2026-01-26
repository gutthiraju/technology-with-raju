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
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] overflow-hidden border-4 border-indigo-50 shadow-xl shadow-indigo-100 group-hover:scale-105 transition-transform duration-500">
                  <img src="https://picsum.photos/seed/raju-contact/400/400" alt="Raju Coding Expert" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 animate-pulse"></div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Speak Directly to Raju</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">Contact for Offline Bootcamps, Online classes, and Live career purpose sessions.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="tel:8989899123" 
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

          {/* Quick Inquiry Form Side */}
          <div className="space-y-8">
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-200 overflow-hidden relative">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4">Quick Inquiry</h3>
              <p className="text-indigo-100 text-sm mb-8">Drop your details for Online/Offline class queries.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/50 focus:outline-none focus:bg-white/20"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/50 focus:outline-none focus:bg-white/20"
                  />
                </div>
                <div>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/50 focus:outline-none focus:bg-white/20 appearance-none">
                    <option className="text-slate-900">Interest: Offline Bootcamp</option>
                    <option className="text-slate-900">Interest: Online Track</option>
                    <option className="text-slate-900">Interest: Live Career Mentoring</option>
                  </select>
                </div>
                <button className="w-full bg-white text-indigo-600 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Send Inquiry <Send className="w-4 h-4" />
                </button>
              </form>
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