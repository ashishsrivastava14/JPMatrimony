# Developer Quick Reference

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## URLs

- Development: http://localhost:3000
- Admin Panel: http://localhost:3000/admin/login

## Test Accounts

**User:**
- Email: user@example.com
- Password: password123

**Admin:**
- Email: admin@example.com
- Password: admin123

## Common Tasks

### Add a New Page
1. Create component in `src/pages/user/` or `src/pages/admin/`
2. Create corresponding CSS file
3. Add route in `src/App.jsx`
4. Add navigation link in Header or AdminLayout

### Add a New API Endpoint
1. Add service method in appropriate service file
2. Use `api` instance from `src/services/api.js`
3. Add mock data fallback for development
4. Handle errors with try-catch

### Update Colors
Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #8B1538;
  --primary-dark: #C41E3A;
}
```

### Add New Form Field
1. Add field to form JSX
2. Add validation if needed
3. Update service method to include new field
4. Update backend API schema

## Project Structure Quick Reference

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components (routes)
├── services/       # API calls
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── utils/          # Helper functions
├── config/         # Configuration
└── styles/         # Global CSS
```

## Important Files

- **src/App.jsx** - Main router and layout
- **src/contexts/AuthContext.jsx** - Authentication state
- **src/services/api.js** - Axios configuration
- **src/config/config.js** - Environment variables
- **.env** - Local environment config

## API Response Format

```javascript
// Success
{
  success: true,
  data: {...},
  message: "Operation successful"
}

// Error
{
  success: false,
  error: "Error message",
  errors: {...}
}
```

## Component Patterns

### Functional Component Template
```jsx
import React, { useState, useEffect } from 'react';
import './ComponentName.css';

const ComponentName = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Side effects
  }, []);

  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Protected Route Usage
```jsx
<Route path="/protected" element={
  <PrivateRoute>
    <ProtectedPage />
  </PrivateRoute>
} />
```

### Admin Route Usage
```jsx
<Route path="/admin/*" element={
  <AdminRoute>
    <AdminLayout />
  </AdminRoute>
} />
```

## Common Hooks

### useAuth (from AuthContext)
```javascript
const { user, login, logout, isAdmin } = useAuth();
```

### useForm (custom hook)
```javascript
const {
  values,
  errors,
  handleChange,
  handleSubmit
} = useForm(initialValues, onSubmit);
```

## CSS Classes

### Utility Classes
- `.container` - Centered container with max-width
- `.text-center` - Center text
- `.mt-1`, `.mt-2`, etc. - Margin top
- `.mb-1`, `.mb-2`, etc. - Margin bottom
- `.p-1`, `.p-2`, etc. - Padding

### Button Classes
- `.btn` - Base button
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-success` - Success button
- `.btn-danger` - Danger button

### Card Class
- `.card` - Card component with shadow

## Environment Variables

Required in `.env`:
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=JP Matrimony
VITE_MAX_FILE_SIZE=5242880
```

## Error Handling Pattern

```javascript
try {
  const response = await service.method();
  if (response.data) {
    // Success
    toast.success('Success message');
  }
} catch (error) {
  console.error('Error:', error);
  toast.error(error.response?.data?.message || 'Error message');
}
```

## Mock Data Development

When backend is not available, services return mock data:
```javascript
// Example from profileService.js
getAllProfiles: async () => {
  try {
    const response = await api.get('/profiles');
    return response.data;
  } catch (error) {
    // Mock data fallback
    return { data: mockProfiles };
  }
}
```

## Styling Guidelines

1. Use CSS variables for colors
2. Keep component styles in separate files
3. Use BEM naming convention
4. Mobile-first responsive design
5. Use flexbox/grid for layouts

## Performance Tips

1. Use React.memo for expensive components
2. Lazy load routes with React.lazy()
3. Optimize images (use WebP, lazy loading)
4. Use pagination for large lists
5. Debounce search inputs

## Security Checklist

- [ ] JWT tokens stored in localStorage
- [ ] Protected routes implemented
- [ ] Input validation on forms
- [ ] XSS protection (React default)
- [ ] CSRF tokens (backend)
- [ ] HTTPS in production
- [ ] Environment variables for secrets

## Deployment Checklist

- [ ] Update .env for production
- [ ] Build production bundle
- [ ] Test all routes
- [ ] Test authentication flow
- [ ] Verify API endpoints
- [ ] Check responsive design
- [ ] Test on multiple browsers
- [ ] Add analytics tracking
- [ ] Configure CDN
- [ ] Set up error monitoring

## Troubleshooting

### Issue: Blank page
- Check browser console for errors
- Verify all imports are correct
- Check if API is running

### Issue: Authentication not working
- Verify token in localStorage
- Check API endpoint in .env
- Test with mock data

### Issue: Styles not applying
- Check CSS import paths
- Clear browser cache
- Verify CSS file exists

### Issue: Routes not working
- Check Route paths in App.jsx
- Verify React Router version
- Check for conflicting routes

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: add feature description"

# Push to remote
git push origin feature/feature-name

# Create pull request on GitHub
```

## Commit Message Format

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/config changes

## Resources

- React Docs: https://react.dev
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
- Axios: https://axios-http.com

## Need Help?

1. Check documentation files
2. Review code comments
3. Search existing issues
4. Contact team lead
