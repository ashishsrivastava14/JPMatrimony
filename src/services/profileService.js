import api from './api';

export const profileService = {
  // Get all profiles with filters
  getProfiles: async (filters = {}) => {
    const response = await api.get('/profiles', { params: filters });
    return response.data;
  },

  // Get profile by ID
  getProfileById: async (id) => {
    const response = await api.get(`/profiles/${id}`);
    return response.data;
  },

  // Create new profile
  createProfile: async (profileData) => {
    const response = await api.post('/profiles', profileData);
    return response.data;
  },

  // Update profile
  updateProfile: async (id, profileData) => {
    const response = await api.put(`/profiles/${id}`, profileData);
    return response.data;
  },

  // Delete profile
  deleteProfile: async (id) => {
    const response = await api.delete(`/profiles/${id}`);
    return response.data;
  },

  // Upload profile photo
  uploadPhoto: async (id, formData) => {
    const response = await api.post(`/profiles/${id}/photos`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Request contact information
  requestContact: async (profileId) => {
    const response = await api.post(`/profiles/${profileId}/contact`);
    return response.data;
  },

  // Get my profile
  getMyProfile: async () => {
    const response = await api.get('/profiles/me');
    return response.data;
  },

  // Advanced search
  searchProfiles: async (searchParams) => {
    const response = await api.post('/search', searchParams);
    return response.data;
  },
};

export default profileService;
