
import React from 'react';
import { useAuth } from '../App';
import { COURSES } from '../constants';
import { Play, TrendingUp, BookOpen, Award, ExternalLink } from 'lucide-react';
// Fixed: Changed import to react-router for v7+ compatibility
import { Link } from 'react-router';

export default function DashboardPage() {
  const { state } = useAuth();
  
  const purchasedCourses = COURSES.filter(c => state.user?.purchasedCourses.includes(c.id));

  // Calculate overall progress
  let totalLessons = 0;
  let completedCount = 0;
  purchasedCourses.forEach(c => {
    totalLessons += c.lessonList?.length || 0;
    const courseCompleted = state.user?.completedLessons.filter(key => key.startsWith(`${c.id}|`)) || [];
    completedCount += courseCompleted.length;
  });
  
  const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back, {state.user?.name}!</h1>
          <p className="text-slate-500">Ready to continue your coding journey?</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <BookOpen className="text-indigo-500" />
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold">Enrolled</div>
              <div className="font-bold">{purchasedCourses.length} Courses</div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <TrendingUp className="text-emerald-500" />
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold">Overall Progress</div>
              <div className="font-bold">{overallProgress}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Award className="text-amber-500" /> My Learning Path
          </h2>
          
          {purchasedCourses.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {purchasedCourses.map(course => {
                const courseCompleted = state.user?.completedLessons.filter(key => key.startsWith(`${course.id}|`)) || [];
                const courseProgress = course.lessonList?.length ? Math.round((courseCompleted.length / course.lessonList.length) * 100) : 0;
                const lessonsLeft = (course.lessonList?.length || 0) - courseCompleted.length;

                return (
                  <div key={course.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 hover:border-indigo-500 transition-colors shadow-sm">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold mb-1 truncate">{course.title}</h3>
                    <div className="text-xs text-slate-400 mb-4">{lessonsLeft} lessons left</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-6">
                      <div 
                        className="bg-indigo-600 h-full transition-all duration-500" 
                        style={{ width: `${courseProgress}%` }}
                      ></div>
                    </div>
                    <Link 
                      to={`/course-player/${course.id}`} 
                      className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
                    >
                      {courseProgress > 0 ? 'Continue Watching' : 'Start Learning'}
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-800">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">No courses yet</h3>
              <p className="text-slate-500 mb-6">Start your journey today by enrolling in our expert-led courses.</p>
              <Link to="/courses" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold">
                Explore Courses <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        <div className="space-y-8">
           <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-200">
              <h3 className="text-xl font-bold mb-4">Career Guidance</h3>
              <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                Unlock 1-on-1 mentorship sessions with Raju by completing your first course.
              </p>
              <div className="bg-white/20 p-4 rounded-xl flex items-center justify-between">
                <span className="text-sm font-medium">Next Session:</span>
                <span className="bg-white text-indigo-600 px-2 py-1 rounded text-xs font-bold uppercase tracking-widest">In 2 Days</span>
              </div>
           </div>

           <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Announcements</h3>
              <div className="space-y-4">
                {[
                  { title: "React 18 Course Updated", date: "Oct 24" },
                  { title: "Live Interview Workshop", date: "Oct 22" },
                  { title: "Python Roadmap Released", date: "Oct 15" }
                ].map((a, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-indigo-600">{a.title}</span>
                    <span className="text-xs text-slate-400">{a.date}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
