
import { Course, CourseCategory } from './types';

export const COURSES: Course[] = [
  {
    id: 'react-01',
    title: 'React Full Course: Zero to Mastery',
    description: 'Master React 18, Hooks, Redux, and modern architectural patterns used in high-scale apps.',
    price: 4999,
    thumbnail: 'https://picsum.photos/seed/react/800/450',
    category: CourseCategory.REACT,
    duration: '25 Hours',
    lessons: 45,
    isPremium: true
  },
  {
    id: 'python-01',
    title: 'Python for Real-World Systems',
    description: 'Learn Python with a focus on automation, FastAPI backends, and data engineering.',
    price: 3999,
    thumbnail: 'https://picsum.photos/seed/python/800/450',
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
    thumbnail: 'https://picsum.photos/seed/js/800/450',
    category: CourseCategory.JAVASCRIPT,
    duration: '15 Hours',
    lessons: 30,
    isPremium: true
  },
  {
    id: 'roadmap-01',
    title: 'Web Dev Roadmap 2025',
    description: 'A comprehensive guide on what to learn and in what order to land a job at big tech companies.',
    price: 0,
    thumbnail: 'https://picsum.photos/seed/roadmap/800/450',
    category: CourseCategory.ROADMAP,
    duration: '2 Hours',
    lessons: 5,
    isPremium: false
  },
  {
    id: 'interview-01',
    title: 'Top 50 Interview Questions',
    description: 'Cracking the frontend and backend interviews with Raju. Live coding sessions included.',
    price: 1499,
    thumbnail: 'https://picsum.photos/seed/interview/800/450',
    category: CourseCategory.INTERVIEW,
    duration: '10 Hours',
    lessons: 20,
    isPremium: true
  }
];

export const RAZORPAY_KEY_ID = "rzp_test_example_id"; // Never store Secret here
