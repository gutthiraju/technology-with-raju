
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { useAuth } from '../App';
import { paymentService } from '../services/paymentService';
import { authService } from '../services/authService';
import { Play, Lock, Clock, Book, IndianRupee, Search, Filter } from 'lucide-react';
// Fixed: Changed import to react-router for v7+ compatibility
import { useNavigate } from 'react-router';

export default function CoursesPage() {
  const { state, syncUser } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [processingId, setProcessingId] = useState<string | null>(null);

  const categories = ['All', 'React', 'Python', 'JavaScript', 'Roadmap', 'Interview Prep'];

  const filteredCourses = COURSES.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || c.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleEnroll = async (courseId: string, price: number) => {
    if (!state.isAuthenticated) {
      navigate('/login');
      return;
    }

    if (price === 0) {
      const updatedUser = authService.updatePurchasedCourses(courseId);
      if (updatedUser) syncUser(updatedUser);
      alert("Successfully enrolled in free course!");
      return;
    }

    setProcessingId(courseId);
    try {
      // 1. Create Order on Backend
      const order = await paymentService.createOrder(courseId, price);
      
      // 2. Open Razorpay Popup
      paymentService.processPayment(
        order,
        async (resp) => {
          // 3. Verify on Backend
          const verification = await paymentService.verifyOnBackend(resp, courseId);
          if (verification.success) {
            const updatedUser = authService.updatePurchasedCourses(courseId);
            if (updatedUser) syncUser(updatedUser);
            alert("Payment Successful! Course added to dashboard.");
            navigate('/dashboard');
          }
        },
        () => {
          setProcessingId(null);
          console.log("Payment cancelled");
        }
      );
    } catch (err) {
      console.error(err);
      alert("Something went wrong during payment.");
    } finally {
      setProcessingId(null);
    }
  };

  const isPurchased = (id: string) => state.user?.purchasedCourses.includes(id) || false;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Explore Courses</h1>
          <p className="text-slate-500">Industry-standard curriculum designed for results.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50">
              <Filter className="w-5 h-5" />
              <span>{activeFilter}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl hidden group-hover:block z-20">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveFilter(cat)}
                  className="w-full text-left px-4 py-3 hover:bg-indigo-50 first:rounded-t-xl last:rounded-b-xl"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition-all group">
            <div className="relative aspect-video">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {course.category}
              </div>
              {course.isPremium && !isPurchased(course.id) && (
                <div className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full backdrop-blur-md">
                  <Lock className="w-4 h-4" />
                </div>
              )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                <span className="flex items-center gap-1"><Book className="w-4 h-4" /> {course.lessons} Lessons</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6">{course.description}</p>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                  {course.price === 0 ? (
                    <span className="text-emerald-600 font-bold text-lg uppercase tracking-tight">Free</span>
                  ) : (
                    <>
                      <span className="text-slate-400 text-xs line-through">₹{(course.price * 1.5).toFixed(0)}</span>
                      <span className="text-slate-900 dark:text-white font-bold text-xl flex items-center">
                        <IndianRupee className="w-4 h-4" /> {course.price}
                      </span>
                    </>
                  )}
                </div>
                {isPurchased(course.id) ? (
                  <button 
                    onClick={() => navigate(`/course-player/${course.id}`)}
                    className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold hover:bg-emerald-200 transition-colors"
                  >
                    <Play className="w-4 h-4" /> Watch Now
                  </button>
                ) : (
                  <button 
                    onClick={() => handleEnroll(course.id, course.price)}
                    disabled={processingId === course.id}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100 disabled:opacity-50"
                  >
                    {processingId === course.id ? "Processing..." : "Enroll Now"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">No courses found matching your criteria.</p>
          <button onClick={() => { setSearchTerm(''); setActiveFilter('All'); }} className="mt-4 text-indigo-600 font-bold">Clear Filters</button>
        </div>
      )}
    </div>
  );
}
