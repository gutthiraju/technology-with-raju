
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
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
        <button className="text-indigo-600 font-bold flex items-center gap-2 mx-auto">
          Contact our Enterprise Team <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
