
export enum CourseCategory {
  REACT = 'React',
  PYTHON = 'Python',
  JAVASCRIPT = 'JavaScript',
  ROADMAP = 'Roadmap',
  INTERVIEW = 'Interview Prep'
}

export interface Lesson {
  title: string;
  videoUrl?: string;
  duration?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: CourseCategory;
  duration: string;
  lessons: number;
  isPremium: boolean;
  videoUrl?: string; // Default video for the course
  lessonList?: (string | Lesson)[]; // Can be simple titles or detailed lesson objects
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  purchasedCourses: string[];
  completedLessons: string[]; // Format: "courseId|lessonIndex"
  role: 'student' | 'admin';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
