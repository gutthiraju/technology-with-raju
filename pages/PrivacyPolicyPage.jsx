
import React from 'react';
import { ShieldCheck, Info, Eye, Cookie, Share2, Lock, UserCheck, ExternalLink, RefreshCw, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Info className="w-6 h-6 text-indigo-500" />,
      title: "1. Information We Collect",
      content: [
        "Name",
        "Email Address",
        "Phone Number",
        "Course Interest / Inquiry Details",
        "Messages submitted through forms",
        "Device/browser information",
        "Website usage data through analytics tools"
      ]
    },
    {
      icon: <Eye className="w-6 h-6 text-violet-500" />,
      title: "2. How We Use Your Information",
      content: [
        "Contact you regarding courses or inquiries",
        "Provide learning support and updates",
        "Improve our website and services",
        "Send notifications related to tutorials or classes",
        "Analyze traffic and website performance"
      ]
    },
    {
      icon: <Cookie className="w-6 h-6 text-emerald-500" />,
      title: "3. Cookies",
      content: "Our website may use cookies to improve user experience, remember preferences, and analyze traffic."
    },
    {
      icon: <Share2 className="w-6 h-6 text-cyan-500" />,
      title: "4. Third-Party Services",
      content: [
        "Google Analytics",
        "Google AdSense",
        "Email tools",
        "Hosting providers",
        "Payment gateways (if applicable)"
      ],
      note: "These services may process data according to their own privacy policies."
    },
    {
      icon: <Lock className="w-6 h-6 text-red-500" />,
      title: "5. Data Protection",
      content: "We take reasonable steps to protect your personal data. However, no online system is 100% secure."
    },
    {
      icon: <Share2 className="w-6 h-6 text-amber-500" />,
      title: "6. Sharing of Information",
      content: "We do not sell your personal information to third parties. We may share data only when legally required or necessary to provide services."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-pink-500" />,
      title: "7. Your Rights",
      content: [
        "View your personal data",
        "Correct inaccurate data",
        "Delete your information",
        "Stop marketing communications"
      ]
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-slate-500" />,
      title: "8. External Links",
      content: "Our website may contain links to external websites. We are not responsible for their privacy practices."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-400" />,
      title: "9. Changes to This Policy",
      content: "We may update this Privacy Policy at any time. Changes will be posted on this page."
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "10. Contact Us",
      content: "If you have any questions, contact us through the Contact page on TechnologyWithRaju.com."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            Legal Center
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Effective Date: <span className="text-indigo-600 dark:text-indigo-400">April 18, 2026</span>
          </p>
          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Welcome to <span className="font-bold text-slate-900 dark:text-white">TechnologyWithRaju.com</span>. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <section key={idx} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="pl-1 space-y-3">
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
                {section.note && (
                  <p className="pt-2 text-sm italic text-slate-500 dark:text-slate-500">
                    {section.note}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 p-10 bg-indigo-600 rounded-[2.5rem] text-center text-white shadow-2xl shadow-indigo-200 dark:shadow-none">
          <h3 className="text-2xl font-bold mb-4">Any Concerns?</h3>
          <p className="text-indigo-100 mb-8 leading-relaxed max-w-lg mx-auto">
            Your trust is our priority. If you have any questions regarding your data or our practices, don't hesitate to reach out.
          </p>
          <a 
            href="mailto:gutthiraju2023@gmail.com" 
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all"
          >
            Contact Privacy Team
          </a>
        </div>
      </div>
    </div>
  );
}
