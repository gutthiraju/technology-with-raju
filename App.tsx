
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { authService } from './services/authService';
import { AuthState, User } from './types';
import { LogOut, BookOpen, LayoutDashboard, User as UserIcon, ShieldCheck, Menu, X, Rocket, Info, CreditCard } from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CoursePlayerPage from './pages/CoursePlayerPage';

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

// Fix: Use React.PropsWithChildren to ensure 'children' prop is correctly typed and detected by the TS compiler
const ProtectedRoute = ({ children }: React.PropsWithChildren<{}>) => {
  const { state } = useAuth();
  if (!state.isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const Navbar = () => {
  const { state, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Tech With Raju
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            {state.isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-1 text-slate-600 hover:text-indigo-600 font-medium">
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700">
              {link.name}
            </Link>
          ))}
          {state.isAuthenticated ? (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700">Dashboard</Link>
              <button onClick={() => { logout(); setIsOpen(false); }} className="block text-lg font-medium text-red-500">Logout</button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-medium">
              Login
            </Link>
          )}
        </div>
      )}
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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
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
          
          <footer className="bg-slate-900 text-white py-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Rocket className="w-8 h-8 text-indigo-400" />
                  <span className="text-2xl font-bold">Tech With Raju</span>
                </div>
                <p className="text-slate-400 max-w-sm mb-6">
                  Empowering students with industry-grade coding skills. Real projects, secure platform, and expert guidance.
                </p>
                <div className="flex space-x-4">
                  {/* Social links placeholder */}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/courses">Browse Courses</Link></li>
                  <li><Link to="/pricing">Pricing Plans</Link></li>
                  <li><Link to="/login">Student Login</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-center text-slate-500">
              © {new Date().getFullYear()} Technology with Raju. All rights reserved.
            </div>
          </footer>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
