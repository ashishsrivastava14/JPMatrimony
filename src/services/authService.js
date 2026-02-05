import api from './api';

export const authService = {
  // User Authentication
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      // Mock user login for development
      if (email === 'user@example.com' && password === 'password123') {
        return {
          success: true,
          token: 'mock-user-token-' + Date.now(),
          user: {
            id: 1,
            email: 'user@example.com',
            name: 'Test User',
            role: 'user',
          },
        };
      }
      throw new Error('Invalid credentials');
    }
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      // Mock: Return user from localStorage for development
      const userStr = localStorage.getItem('user');
      if (userStr) {
        return JSON.parse(userStr);
      }
      throw error;
    }
  },

  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    const response = await api.post('/auth/reset-password', { token, newPassword });
    return response.data;
  },

  // Admin Authentication
  adminLogin: async (email, password) => {
    try {
      const response = await api.post('/auth/admin/login', { email, password });
      return response.data;
    } catch (error) {
      // Mock admin login for development
      if (email === 'admin@example.com' && password === 'admin123') {
        return {
          success: true,
          token: 'mock-admin-token-' + Date.now(),
          user: {
            id: 1,
            email: 'admin@example.com',
            name: 'Admin User',
            role: 'admin',
          },
        };
      }
      // If credentials don't match, also check if it's a backend error or mock
      console.error('Admin login error:', error);
      throw error;
    }
  },
};

export default authService;
