import { useState } from 'react';
import { FaImage, FaNewspaper, FaQuestionCircle, FaStar, FaSave, FaPlus } from 'react-icons/fa';
import './AdminUsers.css';
import './AdminDashboard.css';

const AdminContent = () => {
  const [activeTab, setActiveTab] = useState('banners');
  const [banners, setBanners] = useState([
    { id: 1, title: 'Welcome Banner', image: 'banner1.jpg', active: true, position: 'home' },
    { id: 2, title: 'Premium Plans', image: 'banner2.jpg', active: true, position: 'membership' },
    { id: 3, title: 'Success Stories', image: 'banner3.jpg', active: false, position: 'home' },
  ]);

  const [successStories, setSuccessStories] = useState([
    { id: 1, couple: 'Priya & Rahul', story: 'We met through JP Matrimony...', status: 'published', date: '2026-01-15' },
    { id: 2, couple: 'Anjali & Vikram', story: 'Finding love was easy...', status: 'published', date: '2026-01-20' },
    { id: 3, couple: 'Neha & Arjun', story: 'Best decision of our lives...', status: 'pending', date: '2026-02-01' },
  ]);

  const [faqs, setFaqs] = useState([
    { id: 1, question: 'How do I create a profile?', answer: 'Click on Register and fill...', active: true },
    { id: 2, question: 'What are the subscription plans?', answer: 'We offer Free, Silver, Gold...', active: true },
    { id: 3, question: 'How to contact support?', answer: 'Email us at support@...', active: true },
  ]);

  const handleToggleBanner = (id) => {
    setBanners(banners.map(b => b.id === id ? { ...b, active: !b.active } : b));
    alert('Banner status updated!');
  };

  const handleDeleteBanner = (id) => {
    if (window.confirm('Delete this banner?')) {
      setBanners(banners.filter(b => b.id !== id));
      alert('Banner deleted!');
    }
  };

  const handlePublishStory = (id) => {
    setSuccessStories(successStories.map(s => s.id === id ? { ...s, status: 'published' } : s));
    alert('Story published!');
  };

  const handleDeleteStory = (id) => {
    if (window.confirm('Delete this story?')) {
      setSuccessStories(successStories.filter(s => s.id !== id));
      alert('Story deleted!');
    }
  };

  const handleToggleFaq = (id) => {
    setFaqs(faqs.map(f => f.id === id ? { ...f, active: !f.active } : f));
    alert('FAQ status updated!');
  };

  const handleDeleteFaq = (id) => {
    if (window.confirm('Delete this FAQ?')) {
      setFaqs(faqs.filter(f => f.id !== id));
      alert('FAQ deleted!');
    }
  };

  return (
    <div className="admin-users-page">
      <div className="page-header">
        <h1>Content Management</h1>
        <p>Manage website content, banners, and stories</p>
      </div>

      <div className="content-tabs">
        <button className={activeTab === 'banners' ? 'active' : ''} onClick={() => setActiveTab('banners')}>
          <FaImage /> Banners
        </button>
        <button className={activeTab === 'stories' ? 'active' : ''} onClick={() => setActiveTab('stories')}>
          <FaStar /> Success Stories
        </button>
        <button className={activeTab === 'faqs' ? 'active' : ''} onClick={() => setActiveTab('faqs')}>
          <FaQuestionCircle /> FAQs
        </button>
        <button className={activeTab === 'pages' ? 'active' : ''} onClick={() => setActiveTab('pages')}>
          <FaNewspaper /> Pages
        </button>
      </div>

      {activeTab === 'banners' && (
        <div className="content-section">
          <div className="section-header">
            <h2>Website Banners</h2>
            <button className="btn-primary">
              <FaPlus /> Add New Banner
            </button>
          </div>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {banners.map(banner => (
                  <tr key={banner.id}>
                    <td>{banner.id}</td>
                    <td>{banner.title}</td>
                    <td>{banner.image}</td>
                    <td><span className="badge">{banner.position}</span></td>
                    <td>
                      <span className={`status-badge status-${banner.active ? 'approved' : 'blocked'}`}>
                        {banner.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="actions">
                      <button onClick={() => handleToggleBanner(banner.id)} className="btn-approve">
                        {banner.active ? 'Deactivate' : 'Activate'}
                      </button>
                      <button onClick={() => handleDeleteBanner(banner.id)} className="btn-delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'stories' && (
        <div className="content-section">
          <div className="section-header">
            <h2>Success Stories</h2>
            <button className="btn-primary">
              <FaPlus /> Add New Story
            </button>
          </div>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Couple</th>
                  <th>Story Preview</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {successStories.map(story => (
                  <tr key={story.id}>
                    <td>{story.id}</td>
                    <td>{story.couple}</td>
                    <td>{story.story.substring(0, 50)}...</td>
                    <td>
                      <span className={`status-badge status-${story.status === 'published' ? 'approved' : 'pending'}`}>
                        {story.status}
                      </span>
                    </td>
                    <td>{story.date}</td>
                    <td className="actions">
                      {story.status === 'pending' && (
                        <button onClick={() => handlePublishStory(story.id)} className="btn-approve">
                          Publish
                        </button>
                      )}
                      <button onClick={() => handleDeleteStory(story.id)} className="btn-delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'faqs' && (
        <div className="content-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <button className="btn-primary">
              <FaPlus /> Add New FAQ
            </button>
          </div>
          <div className="faqs-list">
            {faqs.map(faq => (
              <div key={faq.id} className="faq-item card">
                <div className="faq-header">
                  <h3>{faq.question}</h3>
                  <span className={`status-badge status-${faq.active ? 'approved' : 'blocked'}`}>
                    {faq.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p>{faq.answer}</p>
                <div className="faq-actions">
                  <button onClick={() => handleToggleFaq(faq.id)} className="btn-approve">
                    {faq.active ? 'Deactivate' : 'Activate'}
                  </button>
                  <button onClick={() => handleDeleteFaq(faq.id)} className="btn-delete">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'pages' && (
        <div className="content-section">
          <div className="section-header">
            <h2>Static Pages</h2>
          </div>
          <div className="pages-grid">
            <div className="page-card card">
              <h3>About Us</h3>
              <p>Last updated: 2026-01-15</p>
              <button className="btn-primary">
                <FaSave /> Edit Page
              </button>
            </div>
            <div className="page-card card">
              <h3>Contact Us</h3>
              <p>Last updated: 2026-01-10</p>
              <button className="btn-primary">
                <FaSave /> Edit Page
              </button>
            </div>
            <div className="page-card card">
              <h3>Privacy Policy</h3>
              <p>Last updated: 2026-01-05</p>
              <button className="btn-primary">
                <FaSave /> Edit Page
              </button>
            </div>
            <div className="page-card card">
              <h3>Terms of Service</h3>
              <p>Last updated: 2026-01-05</p>
              <button className="btn-primary">
                <FaSave /> Edit Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContent;
