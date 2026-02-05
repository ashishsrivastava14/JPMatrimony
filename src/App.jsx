import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

// Layout Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// User Pages
import Home from './pages/user/Home';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import ProfileCreate from './pages/user/ProfileCreate';
import ProfileEdit from './pages/user/ProfileEdit';
import ProfileDetail from './pages/user/ProfileDetail';
import ProfileListing from './pages/user/ProfileListing';
import Search from './pages/user/Search';
import Membership from './pages/user/Membership';
import ContactUs from './pages/user/ContactUs';
import AboutUs from './pages/user/AboutUs';
import SuccessStories from './pages/user/SuccessStories';
import MyProfile from './pages/user/MyProfile';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminProfiles from './pages/admin/AdminProfiles';
import AdminSubscriptions from './pages/admin/AdminSubscriptions';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminContent from './pages/admin/AdminContent';

// Route Guards
import PrivateRoute from './components/auth/PrivateRoute';
import AdminRoute from './components/auth/AdminRoute';

import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="profiles" element={<AdminProfiles />} />
              <Route path="subscriptions" element={<AdminSubscriptions />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="content" element={<AdminContent />} />
            </Route>

            {/* User Routes with Header/Footer */}
            <Route path="*" element={
              <>
                <Header />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profiles" element={<ProfileListing />} />
                    <Route path="/profiles/:id" element={<ProfileDetail />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/success-stories" element={<SuccessStories />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    
                    {/* Protected User Routes */}
                    <Route path="/my-profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
                    <Route path="/profile/create" element={<PrivateRoute><ProfileCreate /></PrivateRoute>} />
                    <Route path="/profile/edit" element={<PrivateRoute><ProfileEdit /></PrivateRoute>} />
                    
                    {/* 404 */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
