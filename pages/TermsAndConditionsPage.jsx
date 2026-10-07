
import React from 'react';
import { 
  FileText, 
  Target, 
  UserCheck, 
  GraduationCap, 
  CreditCard, 
  ShieldCheck, 
  Ban, 
  MessageSquare, 
  AlertTriangle, 
  ExternalLink, 
  Scale, 
  RefreshCw, 
  Mail 
} from 'lucide-react';

export default function TermsAndConditionsPage() {
  const sections = [
    {
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      title: "1. Website Purpose",
      content: "TechnologyWithRaju.com provides educational content, coding tutorials, student guidance, and related services."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-violet-500" />,
      title: "2. User Registration",
      content: "Users submitting forms or registering must provide accurate and truthful information."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-500" />,
      title: "3. Educational Use",
      content: "All tutorials, articles, and resources are for educational and informational purposes only."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-cyan-500" />,
      title: "4. Payments and Courses",
      content: [
        "Fees must be paid as stated",
        "Access terms will be shared at purchase",
        "Refunds will follow the stated refund policy (if available)"
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: "5. Intellectual Property",
      content: "All content including text, branding, graphics, tutorials, and materials on this website belong to TechnologyWithRaju unless otherwise stated."
    },
    {
      icon: <Ban className="w-6 h-6 text-red-500" />,
      title: "6. Restrictions",
      content: [
        "Copy content without permission",
        "Misuse forms or spam the website",
        "Attempt to damage website systems",
        "Use content for illegal purposes"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-pink-500" />,
      title: "7. Communication Consent",
      content: "By submitting your details, you agree that we may contact you by email, phone, SMS, or WhatsApp regarding courses, support, or inquiries."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
      title: "8. No Guarantee",
      content: "We aim to provide quality learning support, but we do not guarantee jobs, rankings, or specific outcomes."
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-slate-500" />,
      title: "9. External Links",
      content: "We may provide links to third-party websites. We are not responsible for their content or services."
    },
    {
      icon: <Scale className="w-6 h-6 text-indigo-400" />,
      title: "10. Limitation of Liability",
      content: "Use of this website is at your own risk. We are not liable for losses resulting from use of the site."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-slate-400" />,
      title: "11. Changes to Terms",
      content: "We may update these Terms & Conditions at any time. Continued use of the website means acceptance of changes."
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "12. Contact",
      content: "For support or questions, please use the Contact page on TechnologyWithRaju.com."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <FileText className="w-4 h-4" />
            Legal Agreement
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Effective Date: <span className="text-indigo-600 dark:text-indigo-400">April 18, 2026</span>
          </p>
          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            By accessing or using <span className="font-bold text-slate-900 dark:text-white">TechnologyWithRaju.com</span>, you agree to the following Terms & Conditions. Please read them carefully.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <section key={idx} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="pl-1">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Action Note */}
        <div className="mt-20 p-10 bg-slate-900 dark:bg-indigo-900/40 rounded-[2.5rem] border border-slate-800 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-24 h-24" />
           </div>
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgement</h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
                By continuing to use our services and platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions.
              </p>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-95"
              >
                Go Back
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
