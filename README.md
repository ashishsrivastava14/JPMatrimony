# JP Matrimony Website

A modern, full-stack matrimony website built with React, featuring user registration, profile management, advanced search, subscription plans, and a comprehensive admin panel.

## Features

### User Features
- **Authentication**: Secure login and registration with JWT
- **Profile Management**: Complete profile creation with personal, family, educational, and professional details
- **Advanced Search**: Filter profiles by age, caste, religion, location, profession, and more
- **Profile Viewing**: Detailed profile pages with photos and contact options
- **Subscription Plans**: Multiple membership tiers with different features
- **Success Stories**: View and share success stories
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Admin Features
- **User Management**: Approve, block, or delete user accounts
- **Profile Verification**: Review and verify user profiles
- **Subscription Management**: Manage membership plans and payments
- **Analytics Dashboard**: View reports, statistics, and activity logs
- **Content Management**: Update banners, homepage sections, and content

## Tech Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Notifications**: React Toastify
- **Icons**: React Icons
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Modules

## Project Structure

```
JPMatrimony/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/      # Common UI components
│   │   ├── forms/       # Form components
│   │   ├── profile/     # Profile-related components
│   │   └── search/      # Search components
│   ├── pages/           # Page components
│   │   ├── user/        # User-facing pages
│   │   └── admin/       # Admin panel pages
│   ├── services/        # API services
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .env.example         # Environment variables template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Backend API server (or mock API for development)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd JPMatrimony
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## API Integration

The application expects the following API endpoints:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset

### Profiles
- `GET /api/profiles` - Get all profiles (with filters)
- `GET /api/profiles/:id` - Get profile by ID
- `POST /api/profiles` - Create profile
- `PUT /api/profiles/:id` - Update profile
- `DELETE /api/profiles/:id` - Delete profile
- `POST /api/profiles/:id/contact` - Request contact information

### Search
- `POST /api/search` - Advanced search with filters

### Subscriptions
- `GET /api/subscriptions/plans` - Get all plans
- `POST /api/subscriptions/subscribe` - Subscribe to plan
- `GET /api/subscriptions/my-subscription` - Get user's subscription

### Admin
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/approve` - Approve user
- `PUT /api/admin/users/:id/block` - Block user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/admin/activity-logs` - Get activity logs

## Environment Variables

See `.env.example` for all available configuration options.

## User Roles

- **User**: Regular user with profile management and search capabilities
- **Admin**: Full access to admin panel with user and content management

## Design Inspiration

The UI/UX design is inspired by Anuraga Matrimony, featuring:
- Clean, modern interface with card-based layouts
- Warm color scheme (maroon/red primary colors)
- Traditional matrimonial aesthetic
- Easy-to-use search and filter system
- Trust-building elements (verified badges, success stories)

## Security Features

- JWT-based authentication
- Protected routes
- Role-based access control
- Secure password handling (hashing on backend)
- Input validation and sanitization
- XSS protection

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Copyright © 2026 JP Matrimony. All rights reserved.

## Contact

For support or inquiries, please contact:
- Email: info@jpmatrimony.com
- Phone: +91-XXXXXXXXXX
