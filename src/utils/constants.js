// User profile data constants
export const RELIGIONS = [
  'Hindu',
  'Muslim',
  'Christian',
  'Sikh',
  'Buddhist',
  'Jain',
  'Others',
];

export const MARITAL_STATUS = [
  'Never Married',
  'Divorced',
  'Widowed',
  'Awaiting Divorce',
];

export const EDUCATION_LEVELS = [
  'High School',
  'Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'PhD',
];

export const FAMILY_TYPES = [
  'Joint Family',
  'Nuclear Family',
];

export const FAMILY_VALUES = [
  'Traditional',
  'Moderate',
  'Liberal',
];

export const INCOME_RANGES = [
  'Less than ₹2 Lakhs',
  '₹2-5 Lakhs',
  '₹5-10 Lakhs',
  '₹10-15 Lakhs',
  '₹15-20 Lakhs',
  '₹20+ Lakhs',
];

// Height options in feet and inches
export const HEIGHTS = [
  "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"",
  "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"",
  "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
  "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"",
];

// Age range for filters
export const AGE_RANGE = {
  min: 18,
  max: 60,
};

// API endpoints
export const API_ENDPOINTS = {
  AUTH: '/auth',
  PROFILES: '/profiles',
  SEARCH: '/search',
  SUBSCRIPTIONS: '/subscriptions',
  ADMIN: '/admin',
};

// Subscription plan features
export const SUBSCRIPTION_FEATURES = {
  BASIC: ['Create Profile', 'View 10 Profiles'],
  SILVER: ['Create Profile', 'View 50 Profiles', 'Send 20 Interests', 'View 10 Contacts'],
  GOLD: ['Create Profile', 'Unlimited Profiles', 'Send 50 Interests', 'View 30 Contacts', 'Priority Listing'],
  PLATINUM: ['All Gold Features', 'Unlimited Everything', '24/7 Premium Support', 'Featured Profile'],
};

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_MIN_LENGTH: 'Password must be at least 6 characters',
  PASSWORD_MISMATCH: 'Passwords do not match',
  NETWORK_ERROR: 'Network error. Please try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  SERVER_ERROR: 'Server error. Please try again later.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  REGISTRATION: 'Registration successful!',
  LOGIN: 'Login successful!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  SUBSCRIPTION: 'Subscription successful!',
  INTEREST_SENT: 'Interest sent successfully!',
  CONTACT_REQUEST: 'Contact request sent!',
};
