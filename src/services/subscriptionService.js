import api from './api';

export const subscriptionService = {
  // Get all subscription plans
  getPlans: async () => {
    const response = await api.get('/subscriptions/plans');
    return response.data;
  },

  // Subscribe to a plan
  subscribe: async (planId, paymentDetails) => {
    const response = await api.post('/subscriptions/subscribe', {
      planId,
      paymentDetails,
    });
    return response.data;
  },

  // Get user's current subscription
  getMySubscription: async () => {
    const response = await api.get('/subscriptions/my-subscription');
    return response.data;
  },

  // Cancel subscription
  cancelSubscription: async () => {
    const response = await api.post('/subscriptions/cancel');
    return response.data;
  },
};

export default subscriptionService;
