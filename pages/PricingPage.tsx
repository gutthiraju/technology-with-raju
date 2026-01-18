
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, X, MapPin, Mail, Phone, Building2 } from 'lucide-react';
// Fixed: Changed import to react-router for v7+ compatibility
import { Link } from 'react-router';

export default function PricingPage() {
  const [showEnterpriseModal, setShowEnterpriseModal] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "0",
      desc: "Perfect for exploring the basics and choosing your path.",
      features: ["Access to Roadmaps", "Weekly Newsletters", "Public Community Discord", "Free Project Templates"],
      cta: "Get Started",
      premium: false
    },
    {
      name: "Student Pro",
      price: "499",
      desc: "Our most popular monthly plan for consistent learners.",
      features: ["ALL Courses Included", "Ad-free Experience", "Project Reviews", "Course Completion Certificates", "Monthly Live Q&A with Raju"],
      cta: "Go Pro",
      premium: true
    },
    {
      name: "Life-Time Mastery",
      price: "9999",
      desc: "One-time payment for perpetual access to everything.",
      features: ["Lifetime Access to All Courses", "Private 1-on-1 Mentorship", "Job Referral Network", "Priority Support", "Personal Branding Workshop"],
      cta: "Join Mastery",
      premium: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white">Invest in Your Career</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose a plan that fits your learning pace. No hidden fees, just pure knowledge.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className={`bg-white dark:bg-slate-900 p-8 rounded-3xl border ${plan.premium ? 'border-indigo-500 ring-4 ring-indigo-500/10 scale-105' : 'border-slate-200 dark:border-slate-800'} relative flex flex-col shadow-xl`}>
            {plan.premium && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm">{plan.desc}</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹{plan.price}</span>
                {plan.name === 'Student Pro' && <span className="text-slate-400">/mo</span>}
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/courses" className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${plan.premium ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200'}`}>
              {plan.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-slate-100 dark:bg-slate-900/50 p-8 rounded-3xl text-center border border-slate-200 dark:border-slate-800">
        <h3 className="text-2xl font-bold mb-4">Bulk Access for Colleges?</h3>
        <p className="text-slate-600 mb-6">We offer special discounts for educational institutions and group purchases.</p>
        <button 
          onClick={() => setShowEnterpriseModal(true)}
          className="text-indigo-600 font-bold flex items-center gap-2 mx-auto hover:text-indigo-700 transition-colors"
        >
          Contact our Enterprise Team <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Enterprise Contact Modal */}
      {showEnterpriseModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setShowEnterpriseModal(false)}
          ></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowEnterpriseModal(false)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-500 dark:text-slate-300 rounded-full backdrop-blur-md transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="md:w-1/2 relative h-48 md:h-auto">
                <img 
                  src="https://maps.app.goo.gl/5bKqJ5E3XS7rKnEWA" 
                  alt="Enterprise Office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="bg-indigo-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">Headquarters</div>
                    <h4 className="text-xl font-bold">Technology with Raju</h4>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="md:w-1/2 p-8 lg:p-10 space-y-8 bg-white dark:bg-slate-900">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enterprise Solutions</h3>
                  <p className="text-slate-500 text-sm">Scale your team's technical skills with our tailored institutional packages.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-2xl">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Address</div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        Level 14, Tech Park North,<br />
                        Outer Ring Road, Bellandur,<br />
                        Bengaluru, Karnataka 560103
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-violet-50 dark:bg-violet-900/30 p-3 rounded-2xl">
                      <Mail className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Inquiry</div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">enterprise@techwithraju.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-2xl">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">+91 80 4567 8901</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowEnterpriseModal(false)}
                  className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
