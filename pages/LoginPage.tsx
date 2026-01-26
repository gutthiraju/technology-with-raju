import React, { useState } from 'react';
import { useAuth } from '../App';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50/20 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-24 h-24 rounded-[2rem] bg-slate-900 flex items-center justify-center mx-auto mb-6 shadow-2xl logo-glow p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img src="logo.png" alt="Technology With Raju Logo" className="w-full h-full object-contain" onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/200x200/1e293b/white?text=TR";
            }} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-slate-500">Sign in to your Technology with Raju account</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-indigo-600 font-bold">Forgot Password?</a>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 shadow-xl shadow-indigo-100 dark:shadow-none"
            >
              {loading ? "Authenticating..." : "Sign In"} <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
            <div className="text-center text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold text-[10px]">Secure Access Port</div>
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold transition-colors">
              <Github className="w-5 h-5" /> GitHub Login
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-slate-500">
          New student? <Link to="/pricing" className="text-indigo-600 font-bold hover:underline">Choose a Plan</Link>
        </p>
      </div>
    </div>
  );
}