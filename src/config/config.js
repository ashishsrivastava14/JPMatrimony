const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  apiTimeout: import.meta.env.VITE_API_TIMEOUT || 30000,
  appName: import.meta.env.VITE_APP_NAME || 'JP Matrimony',
  appUrl: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  maxFileSize: import.meta.env.VITE_MAX_FILE_SIZE || 5242880, // 5MB
  allowedFileTypes: import.meta.env.VITE_ALLOWED_FILE_TYPES || 'image/jpeg,image/jpg,image/png',
  enableRegistration: import.meta.env.VITE_ENABLE_REGISTRATION === 'true',
  enableSocialLogin: import.meta.env.VITE_ENABLE_SOCIAL_LOGIN === 'true',
};

export default config;
