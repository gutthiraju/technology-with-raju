
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../App';
import { COURSES } from '../constants';
import { Play, CheckCircle, ChevronRight, Lock, Share2, Info, MessageSquare } from 'lucide-react';

export default function CoursePlayerPage() {
  const { id } = useParams();
  const { state } = useAuth();
  const [activeLesson, setActiveLesson] = useState(0);

  const course = COURSES.find(c => c.id === id);

  // Security Gate: Ensure user owns the course
  if (!course || !state.user?.purchasedCourses.includes(course.id)) {
    return <Navigate to="/courses" replace />;
  }

  const lessons = [
    "Introduction to the Project",
    "Environment Setup and Boilerplate",
    "State Management Deep Dive",
    "Implementing Secure Authentication",
    "Payment Gateway Integration",
    "Final Deployment and Best Practices"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-8">
      <div className="max-w-[1440px] mx-auto px-4 grid lg:grid-cols-4 gap-8">
        {/* Video Player Column */}
        <div className="lg:col-span-3 space-y-6">
          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative group">
            {/* Simulation: Video would be served via Backend-signed URL or HLS proxy */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-indigo-600/20 p-8 rounded-full mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-16 h-16 text-indigo-500 fill-indigo-500" />
                </div>
                <p className="text-slate-500 text-sm">Streaming encrypted source: video_part_{activeLesson}.m3u8</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 text-slate-400 px-4 py-2 rounded-full text-xs">
                  <Lock className="w-3 h-3" /> Secure Token Active
                </div>
              </div>
            </div>
            {/* Watermark to prevent recording */}
            <div className="absolute top-4 right-4 text-white/20 text-[10px] select-none">
              USERID: {state.user.id} | {new Date().toLocaleDateString()}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{lessons[activeLesson]}</h1>
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <span>{course.title}</span>
                <span>•</span>
                <span>Part {activeLesson + 1} of {lessons.length}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold hover:bg-slate-200">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700">
                Next Lesson <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-8">
            <div className="flex gap-8 border-b border-slate-100 dark:border-slate-800 mb-8">
              <button className="border-b-2 border-indigo-600 pb-4 px-2 font-bold text-indigo-600">Overview</button>
              <button className="pb-4 px-2 font-bold text-slate-400 hover:text-slate-600">Resources</button>
              <button className="pb-4 px-2 font-bold text-slate-400 hover:text-slate-600">Questions (12)</button>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                In this lesson, we break down the core architecture of the system. We'll look at how components communicate and why we chose specific patterns for performance and security.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50 flex gap-3 mt-6">
                <Info className="text-amber-600 shrink-0" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  Note: Make sure to download the project boilerplate from the resources tab before starting the live coding segment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Column */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit sticky top-24">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold">Course Content</h3>
            <div className="text-xs text-slate-400 mt-1">{lessons.length} Lessons • 1h 45m Total</div>
          </div>
          <div className="py-2">
            {lessons.map((lesson, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLesson(idx)}
                className={`w-full text-left px-6 py-4 flex items-start gap-3 transition-colors hover:bg-white dark:hover:bg-slate-800 ${activeLesson === idx ? 'bg-white dark:bg-slate-800 border-l-4 border-indigo-600' : ''}`}
              >
                <div className="mt-1">
                  {idx < activeLesson ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
                  ) : activeLesson === idx ? (
                    <Play className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-700" />
                  )}
                </div>
                <div>
                  <div className={`text-sm font-bold ${activeLesson === idx ? 'text-indigo-600' : 'text-slate-700 dark:text-slate-300'}`}>
                    {idx + 1}. {lesson}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">15:00</div>
                </div>
              </button>
            ))}
          </div>
          <div className="p-6 border-t border-slate-200 dark:border-slate-800">
            <button className="w-full flex items-center justify-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 py-3 rounded-xl font-bold hover:bg-indigo-100 transition-colors">
              <MessageSquare className="w-4 h-4" /> Chat with Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
