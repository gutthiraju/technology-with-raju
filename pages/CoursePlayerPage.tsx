
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { useAuth } from '../App';
import { COURSES } from '../constants';
import { authService } from '../services/authService';
import { Lesson } from '../types';
import { Play, CheckCircle, ChevronRight, Lock, Share2, MessageSquare, Download, FileText, BookOpen, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function CoursePlayerPage() {
  const { id } = useParams();
  const { state, syncUser } = useAuth();
  const [activeLesson, setActiveLesson] = useState(0);

  const course = COURSES.find(c => c.id === id);

  if (!course) return <Navigate to="/courses" replace />;

  const hasAccess = !course.isPremium || state.user?.purchasedCourses.includes(course.id) || course.price === 0;
  if (!hasAccess) return <Navigate to="/courses" replace />;

  const currentLessonData = course.lessonList?.[activeLesson];
  const currentLessonTitle = typeof currentLessonData === 'string' ? currentLessonData : currentLessonData?.title;
  const currentLessonVideo = (typeof currentLessonData !== 'string' && currentLessonData?.videoUrl) || course.videoUrl;

  const lessons = course.lessonList || [];
  const courseCompletedLessons = state.user?.completedLessons.filter(key => key.startsWith(`${course.id}|`)) || [];
  const progressPercentage = lessons.length > 0 ? Math.round((courseCompletedLessons.length / lessons.length) * 100) : 0;

  const isLessonComplete = (idx: number) => state.user?.completedLessons.includes(`${course.id}|${idx}`);

  const handleToggleComplete = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    const updatedUser = authService.toggleLessonComplete(course.id, idx);
    if (updatedUser) syncUser(updatedUser);
  };

  const isYouTube = currentLessonVideo?.includes('youtube') || currentLessonVideo?.includes('youtu.be');
  
  const getCleanYouTubeUrl = (url: string) => {
    try {
      if (!url) return "";
      
      // Robust regex-based ID extraction to handle ?si=, ?v=, and embed/ formats
      let videoId = "";
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^/?#&]+)/);
      if (match && match[1]) {
        videoId = match[1];
      }

      // Default to youtube-nocookie for maximum embed permission bypass
      return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1` : url;
    } catch (e) {
      console.warn("Failed to parse YouTube URL", e);
      return url;
    }
  };

  const videoSrc = isYouTube ? getCleanYouTubeUrl(currentLessonVideo!) : currentLessonVideo;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 grid lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl relative group ring-1 ring-slate-800">
            {videoSrc ? (
              isYouTube ? (
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={videoSrc}
                    title={typeof currentLessonTitle === 'string' ? currentLessonTitle : course.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <video 
                  key={activeLesson}
                  controls 
                  className="w-full aspect-video outline-none"
                  poster={course.thumbnail}
                  controlsList="nodownload"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              )
            ) : (
              <div className="aspect-video bg-slate-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl">Video Unavailable</h3>
                  <p className="text-slate-400 text-sm mt-2">Could not load the requested content.</p>
                </div>
              </div>
            )}
            <div className="absolute top-4 right-4 text-white/10 text-[10px] select-none pointer-events-none font-mono z-10">
              SECURE ACCESS | {state.user?.email || 'STUDENT'}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Module {activeLesson + 1}
                 </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{currentLessonTitle}</h1>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={(e) => handleToggleComplete(e, activeLesson)}
                className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-bold transition-all ${isLessonComplete(activeLesson) ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isLessonComplete(activeLesson) ? 'fill-emerald-600 text-white' : ''}`} />
                {isLessonComplete(activeLesson) ? 'Completed' : 'Mark Complete'}
              </button>
              <button 
                onClick={() => activeLesson < lessons.length - 1 && setActiveLesson(prev => prev + 1)}
                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all disabled:opacity-50"
                disabled={activeLesson === lessons.length - 1}
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm sticky top-24">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">Curriculum</h3>
                <span className="text-xs font-bold text-indigo-600">{progressPercentage}% Done</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
              {lessons.map((lesson, idx) => {
                const title = typeof lesson === 'string' ? lesson : lesson.title;
                const complete = isLessonComplete(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveLesson(idx)}
                    className={`w-full text-left px-6 py-4 flex items-start gap-4 transition-all border-b border-slate-50 dark:border-slate-800 last:border-0 ${activeLesson === idx ? 'bg-indigo-50/50 dark:bg-indigo-900/10 border-l-4 border-l-indigo-600' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <div className="mt-0.5 shrink-0" onClick={(e) => handleToggleComplete(e, idx)}>
                      {complete ? <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-50" /> : activeLesson === idx ? <Play className="w-5 h-5 text-indigo-600" /> : <div className="w-5 h-5 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-400">{idx + 1}</div>}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-bold leading-tight ${activeLesson === idx ? 'text-indigo-600' : 'text-slate-700 dark:text-slate-300'} ${complete ? 'text-slate-400 dark:text-slate-500' : ''}`}>{title}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
