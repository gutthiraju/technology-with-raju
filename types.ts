
export enum CourseCategory {
  REACT = 'React',
  PYTHON = 'Python',
  JAVASCRIPT = 'JavaScript',
  ROADMAP = 'Roadmap',
  INTERVIEW = 'Interview Prep'
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
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  purchasedCourses: string[];
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
