import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router';
import { authService } from './services/authService';
import { AuthState, User } from './types';
import { LogOut, LayoutDashboard, Menu, X, Mail, Phone } from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CoursePlayerPage from './pages/CoursePlayerPage';
import VideosPage from './pages/VideosPage';
import ContactPage from './pages/ContactPage';

// Context for Auth
const AuthContext = createContext<{
  state: AuthState;
  login: (e: string, p: string) => Promise<void>;
  logout: () => void;
  syncUser: (u: User) => void;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

const ProtectedRoute = ({ children }: React.PropsWithChildren<{}>) => {
  const { state } = useAuth();
  if (!state.isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center p-1.5 shadow-lg shadow-indigo-500/20`}>
    <img 
      src="logo.png" 
      alt="TR Logo" 
      className="w-full h-full object-contain" 
      onError={(e) => {
        (e.target as HTMLImageElement).src = "https://placehold.co/100x100/1e293b/white?text=TR";
      }} 
    />
  </div>
);

const Navbar = () => {
  const { state, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Video', path: '/videos' },
    { name: 'Courses', path: '/courses' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <BrandLogo />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                Technology with Raju
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            {state.isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-1 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <button onClick={logout} className="flex items-center space-x-1 text-red-500 hover:text-red-600 font-medium">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-400 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-4 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 space-y-4">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 dark:text-slate-300">
              {link.name}
            </Link>
          ))}
          {state.isAuthenticated ? (
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 dark:text-slate-300">Dashboard</Link>
              <button onClick={() => { logout(); setIsOpen(false); }} className="block text-lg font-medium text-red-500">Logout</button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-medium">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [authState, setAuthState] = useState<AuthState>(authService.getCurrentState());

  const handleLogin = async (e: string, p: string) => {
    const res = await authService.login(e, p);
    setAuthState(res);
  };

  const handleLogout = () => {
    authService.logout();
    setAuthState({ user: null, token: null, isAuthenticated: false });
  };

  const handleSyncUser = (updatedUser: User) => {
    setAuthState(prev => ({ ...prev, user: updatedUser }));
  };

  return (
    <AuthContext.Provider value={{ state: authState, login: handleLogin, logout: handleLogout, syncUser: handleSyncUser }}>
      <Router>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={authState.isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } />
              <Route path="/course-player/:id" element={
                <ProtectedRoute>
                  <CoursePlayerPage />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          
          <footer className="bg-slate-900 text-white py-12 px-4 mt-auto">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <BrandLogo className="w-12 h-12" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Technology with Raju</span>
                </div>
                <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                  Empowering students with industry-grade coding skills. Real projects, secure platform, and expert guidance from industry leaders.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:gutthiraju2023@gmail.com" className="text-indigo-400 hover:underline flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4" /> gutthiraju2023@gmail.com
                  </a>
                  <a href="tel:9346776004" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
                    <Phone className="w-4 h-4" /> +91 93467 76004
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/courses" className="hover:text-indigo-400 transition-colors">Browse Courses</Link></li>
                  <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
                  <li><Link to="/login" className="hover:text-indigo-400 transition-colors">Student Login</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-slate-200">Support</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} Technology with Raju. Built for the next generation of engineers.
            </div>
          </footer>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}