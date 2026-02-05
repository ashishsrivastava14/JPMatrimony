import api from './api';

export const adminService = {
  // User Management
  getUsers: async (filters = {}) => {
    const response = await api.get('/admin/users', { params: filters });
    return response.data;
  },

  approveUser: async (userId) => {
    const response = await api.put(`/admin/users/${userId}/approve`);
    return response.data;
  },

  blockUser: async (userId, reason) => {
    const response = await api.put(`/admin/users/${userId}/block`, { reason });
    return response.data;
  },

  deleteUser: async (userId) => {
    const response = await api.delete(`/admin/users/${userId}`);
    return response.data;
  },

  // Profile Management
  getAdminProfiles: async (filters = {}) => {
    const response = await api.get('/admin/profiles', { params: filters });
    return response.data;
  },

  verifyProfile: async (profileId) => {
    const response = await api.put(`/admin/profiles/${profileId}/verify`);
    return response.data;
  },

  rejectProfile: async (profileId, reason) => {
    const response = await api.put(`/admin/profiles/${profileId}/reject`, { reason });
    return response.data;
  },

  // Analytics & Reports
  getDashboardStats: async () => {
    const response = await api.get('/admin/stats');
    return response.data;
  },

  getActivityLogs: async (filters = {}) => {
    const response = await api.get('/admin/activity-logs', { params: filters });
    return response.data;
  },

  getReports: async (type, dateRange) => {
    const response = await api.get('/admin/reports', {
      params: { type, ...dateRange },
    });
    return response.data;
  },

  // Content Management
  getContent: async () => {
    const response = await api.get('/admin/content');
    return response.data;
  },

  updateContent: async (contentData) => {
    const response = await api.put('/admin/content', contentData);
    return response.data;
  },

  uploadBanner: async (formData) => {
    const response = await api.post('/admin/content/banners', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Subscription Management
  getSubscriptions: async () => {
    const response = await api.get('/admin/subscriptions');
    return response.data;
  },

  createPlan: async (planData) => {
    const response = await api.post('/admin/subscriptions/plans', planData);
    return response.data;
  },

  updatePlan: async (planId, planData) => {
    const response = await api.put(`/admin/subscriptions/plans/${planId}`, planData);
    return response.data;
  },

  deletePlan: async (planId) => {
    const response = await api.delete(`/admin/subscriptions/plans/${planId}`);
    return response.data;
  },
};

export default adminService;
