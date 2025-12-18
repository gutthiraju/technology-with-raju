
import { User, AuthState } from '../types';

// In a real app, these methods would call Python FastAPI endpoints
export const authService = {
  login: async (email: string, password: string): Promise<AuthState> => {
    // Simulate API delay
    await new Promise(r => setTimeout(r, 800));
    
    // In production: POST /api/auth/login -> returns { token, user }
    const mockUser: User = {
      id: 'u123',
      name: 'Test Student',
      email: email,
      purchasedCourses: [],
      role: 'student'
    };
    
    const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_data";
    
    localStorage.setItem('raju_auth_token', mockToken);
    localStorage.setItem('raju_user', JSON.stringify(mockUser));
    
    return { user: mockUser, token: mockToken, isAuthenticated: true };
  },

  logout: () => {
    localStorage.removeItem('raju_auth_token');
    localStorage.removeItem('raju_user');
    window.location.hash = '/login';
  },

  getCurrentState: (): AuthState => {
    try {
      const token = localStorage.getItem('raju_auth_token');
      const userStr = localStorage.getItem('raju_user');
      if (token && userStr) {
        const user = JSON.parse(userStr);
        return { user, token, isAuthenticated: true };
      }
    } catch (e) {
      console.error("Failed to parse auth state from localStorage", e);
      localStorage.removeItem('raju_auth_token');
      localStorage.removeItem('raju_user');
    }
    return { user: null, token: null, isAuthenticated: false };
  },

  updatePurchasedCourses: (courseId: string) => {
    try {
      const userStr = localStorage.getItem('raju_user');
      if (userStr) {
        const user = JSON.parse(userStr) as User;
        if (!user.purchasedCourses.includes(courseId)) {
          user.purchasedCourses.push(courseId);
          localStorage.setItem('raju_user', JSON.stringify(user));
          return user;
        }
      }
    } catch (e) {
      console.error("Failed to update purchased courses", e);
    }
    return null;
  }
};
