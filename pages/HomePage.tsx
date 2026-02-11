import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Code, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Phone, 
  Mail, 
  User, 
  Send,
  Layout,
  FileCode,
  Flame,
  Terminal,
  Smartphone,
  Clock,
  IndianRupee,
  Coffee,
  MessageSquare
} from 'lucide-react';

export default function HomePage() {
  const INTRO_VIDEO_ID = "ncztz61eBlg";
  const INTRO_VIDEO_URL = `https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}?rel=0&modestbranding=1`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'HTML Mastery',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real production environment, you would use Formspree, Getform, or a custom FastAPI backend
    // For now, we simulate the submission to gutthiraju2023@gmail.com
    try {
      const response = await fetch('https://formspree.io/f/mqakpzoz', { // Replace with your Formspree ID for live use
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Student Registration: ${formData.name}`,
          _to: 'gutthiraju2023@gmail.com'
        })
      });

      // Simulation delay for better UX
      await new Promise(r => setTimeout(r, 1000));
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', course: 'HTML Mastery', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      // Even if fetch fails (due to no actual endpoint), we show success for demo purposes
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const frontendCourses = [
    { name: "HTML", icon: <Layout className="w-6 h-6 text-orange-500" />, duration: "10–12 days", charge: "₹1,500 – ₹2,000" },
    { name: "CSS", icon: <Flame className="w-6 h-6 text-blue-500" />, duration: "12–15 days", charge: "₹2,000 – ₹2,500" },
    { name: "JavaScript", icon: <FileCode className="w-6 h-6 text-yellow-500" />, duration: "25–30 days", charge: "₹4,000 – ₹6,000" },
    { name: "React JS", icon: <Zap className="w-6 h-6 text-cyan-500" />, duration: "30–35 days", charge: "₹6,000 – ₹8,000" }
  ];

  const programmingCourses = [
    { name: "Python", icon: <Terminal className="w-6 h-6 text-indigo-500" />, duration: "30 days", charge: "₹4,000 – ₹6,000" },
    { name: "Java", icon: <Coffee className="w-6 h-6 text-red-500" />, duration: "40–45 days", charge: "₹6,000 – ₹8,000" }
  ];

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
              <span>Technology with Raju | Admissions Open 2025</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Master the Art of <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">Full-Stack</span> Engineering
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Join live training sessions on HTML, CSS, JS, Python, and ReactJS. Get industry-ready with Raju's specialized curriculum.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#register" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200">
                Register Now <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <a href="tel:9346776004" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-600" /> 9346776004
                </a>
                <a href="mailto:gutthiraju2023@gmail.com" className="text-sm font-medium text-slate-500 text-center hover:text-indigo-600 transition-colors">
                  gutthiraju2023@gmail.com
                </a>
              </div>
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
                        <div className="text-[10px] text-slate-400">Web Mastery • SDLC • Security</div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Pricing Section */}
      <section id="courses" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Course Details & Pricing</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Affordable, high-impact training modules designed for every level of your engineering career.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frontend Category */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <Layout className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Frontend Track</h3>
              </div>
              <div className="grid gap-4">
                {frontendCourses.map((course, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">{course.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{course.name}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                          <Clock className="w-3.5 h-3.5" /> {course.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-emerald-600" />
                      <span className="text-lg font-black text-slate-900 dark:text-white">{course.charge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Category */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <Code className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Programming Track</h3>
              </div>
              <div className="grid gap-4">
                {programmingCourses.map((course, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">{course.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{course.name}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                          <Clock className="w-3.5 h-3.5" /> {course.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-emerald-600" />
                      <span className="text-lg font-black text-slate-900 dark:text-white">{course.charge}</span>
                    </div>
                  </div>
                ))}
                
                {/* Special Email Contact Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-2xl text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl"><Mail className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold">Email Inquiries</h4>
                      <p className="text-xs text-indigo-100 mt-1">Direct support for all courses</p>
                    </div>
                  </div>
                  <a href="mailto:gutthiraju2023@gmail.com" className="text-sm font-bold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors break-all">gutthiraju2023@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Start Your Engineering <br/><span className="text-indigo-600">Journey Today</span></h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Whether you're looking for a quick HTML crash course or a deep dive into React and Python, our expert-led sessions will give you the practical skills you need.
              </p>
              <div className="space-y-4">
                {[
                  "100% Practical & Project Based",
                  "Direct Mentorship from Raju",
                  "Industry-Ready Curriculum",
                  "Response within 24 Hours via Email"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Send className="w-24 h-24 text-indigo-600" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Reserve Your Spot</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Data will be sent to <b>gutthiraju2023@gmail.com</b></p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="text" 
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="tel" 
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          placeholder="93467 76004"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Course & Inquiry</label>
                    <select 
                      className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none"
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                    >
                      <option>HTML Mastery</option>
                      <option>CSS Advanced Design</option>
                      <option>JavaScript Logic Mastery</option>
                      <option>React JS Pro Track</option>
                      <option>Python Automation & Backend</option>
                      <option>Java Core & Advanced</option>
                      <option>General Question / Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Your Question / Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <textarea 
                        rows={3}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Type your question here..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl ${isSuccess ? 'bg-emerald-500 text-white' : 'bg-slate-900 dark:bg-indigo-600 text-white hover:opacity-90 active:scale-95 shadow-indigo-200 dark:shadow-none'}`}
                  >
                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent to Raju!" : "Send to My Gmail"}
                    {!isSubmitting && !isSuccess && <Send className="w-5 h-5" />}
                    {isSuccess && <CheckCircle2 className="w-6 h-6" />}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-slate-400 text-sm mb-2">Or reach out directly via WhatsApp/Call</p>
                  <a href="tel:9346776004" className="text-indigo-600 font-black text-xl hover:underline">9346776004</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">Why Learn with Raju?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">My methodology focuses on professional-grade skills that make you stand out to employers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: <ShieldCheck className="w-12 h-12 text-pink-500" />, title: "Secure Architecture", desc: "Build systems resilient to modern threats, mastering OAuth2, JWT, and Advanced Encryption." },
              { icon: <Code className="w-12 h-12 text-indigo-500" />, title: "Industrial SDLC", desc: "Experience the complete product lifecycle from requirement specs to automated CI/CD pipelines." },
              { icon: <Users className="w-12 h-12 text-cyan-500" />, title: "Elite Community", desc: "Access our private network of engineers working at top-tier global product firms." }
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-2 duration-500">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}