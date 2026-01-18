
import { Course, CourseCategory } from './types';

export const COURSES: Course[] = [
  {
    id: 'roadmap-01',
    title: 'Web Dev Roadmap 2025: Engineering Mastery',
    description: 'A deep dive into the Software Development Life Cycle (SDLC) and modern architecture. Taught by Raju, this course covers the journey from Requirement Analysis to Deployment.',
    price: 0,
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
    category: CourseCategory.ROADMAP,
    duration: '2 Hours',
    lessons: 7,
    isPremium: false,
    // Updated to the user-provided video ID for embedding
    videoUrl: 'https://www.youtube-nocookie.com/embed/ncztz61eBlg', 
    lessonList: [
      { 
        title: "Introduction to Full Stack Development", 
        videoUrl: "https://www.youtube-nocookie.com/embed/ncztz61eBlg" 
      },
      { title: "Industry Secrets: Project vs Product Based Companies" },
      { title: "SDLC Part 1: Requirement Gathering & Analysis" },
      { title: "SDLC Part 2: Architecture & System Design" },
      { title: "SDLC Part 3: Development Best Practices 2025" },
      { title: "SDLC Part 4: Testing & Quality Assurance" },
      { title: "SDLC Part 5: Deployment & Maintenance Strategies" }
    ]
  },
  {
    id: 'react-01',
    title: 'React Full Course: Zero to Mastery',
    description: 'Master React 18, Hooks, Redux, and modern architectural patterns used in high-scale apps.',
    price: 4999,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    category: CourseCategory.REACT,
    duration: '25 Hours',
    lessons: 45,
    isPremium: true,
    lessonList: [
      "Welcome to React Mastery",
      "Setting up the Dev Environment",
      "JSX and Component Basics",
      "State vs Props",
      "Handling Events",
      "LifeCycle Methods"
    ]
  },
  {
    id: 'python-01',
    title: 'Python for Real-World Systems',
    description: 'Learn Python with a focus on automation, FastAPI backends, and data engineering.',
    price: 3999,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    category: CourseCategory.PYTHON,
    duration: '20 Hours',
    lessons: 38,
    isPremium: true
  },
  {
    id: 'js-01',
    title: 'JavaScript Deep Dive: V8 & Beyond',
    description: 'Understand the internals of JS engine, event loop, and asynchronous programming in depth.',
    price: 2999,
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=800',
    category: CourseCategory.JAVASCRIPT,
    duration: '15 Hours',
    lessons: 30,
    isPremium: true
  },
  {
    id: 'interview-01',
    title: 'Top 50 Interview Questions',
    description: 'Cracking the frontend and backend interviews with Raju. Live coding sessions included.',
    price: 1499,
    thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    category: CourseCategory.INTERVIEW,
    duration: '10 Hours',
    lessons: 20,
    isPremium: true
  }
];

export const RAZORPAY_KEY_ID = "rzp_test_example_id";
