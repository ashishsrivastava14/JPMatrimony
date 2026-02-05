import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { subscriptionService } from '../../services/subscriptionService';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './Membership.css';

const Membership = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const data = await subscriptionService.getPlans();
      setPlans(data);
    } catch (error) {
      // Mock data
      setPlans([
        {
          id: 1,
          name: 'Basic',
          price: 0,
          duration: 'Free Forever',
          features: [
            { name: 'Create Profile', included: true },
            { name: 'View 10 Profiles', included: true },
            { name: 'Send Interest', included: false },
            { name: 'View Contact Details', included: false },
            { name: 'Chat Support', included: false },
            { name: 'Priority Listing', included: false },
          ],
          popular: false,
        },
        {
          id: 2,
          name: 'Silver',
          price: 1999,
          duration: '3 Months',
          features: [
            { name: 'Create Profile', included: true },
            { name: 'View 50 Profiles', included: true },
            { name: 'Send 20 Interests', included: true },
            { name: 'View 10 Contact Details', included: true },
            { name: 'Chat Support', included: true },
            { name: 'Priority Listing', included: false },
          ],
          popular: false,
        },
        {
          id: 3,
          name: 'Gold',
          price: 3999,
          duration: '6 Months',
          features: [
            { name: 'Create Profile', included: true },
            { name: 'View Unlimited Profiles', included: true },
            { name: 'Send 50 Interests', included: true },
            { name: 'View 30 Contact Details', included: true },
            { name: 'Chat Support', included: true },
            { name: 'Priority Listing', included: true },
          ],
          popular: true,
        },
        {
          id: 4,
          name: 'Platinum',
          price: 7999,
          duration: '12 Months',
          features: [
            { name: 'Create Profile', included: true },
            { name: 'View Unlimited Profiles', included: true },
            { name: 'Send Unlimited Interests', included: true },
            { name: 'View Unlimited Contact Details', included: true },
            { name: '24/7 Premium Support', included: true },
            { name: 'Featured Profile', included: true },
          ],
          popular: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = (plan) => {
    if (plan.price === 0) {
      navigate('/register');
    } else {
      // Navigate to payment page
      console.log('Subscribe to', plan);
      alert('Payment integration would be implemented here');
    }
  };

  if (loading) return <div className="loading">Loading plans...</div>;

  return (
    <div className="membership-page">
      <div className="membership-hero">
        <div className="container">
          <h1>Membership Plans</h1>
          <p>Choose the perfect plan for your matrimonial journey</p>
        </div>
      </div>

      <div className="container">
        <div className="plans-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h2>{plan.name}</h2>
                <div className="plan-price">
                  {plan.price === 0 ? (
                    <span className="free">Free</span>
                  ) : (
                    <>
                      <span className="currency">₹</span>
                      <span className="amount">{plan.price.toLocaleString()}</span>
                    </>
                  )}
                </div>
                <div className="plan-duration">{plan.duration}</div>
              </div>

              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={feature.included ? 'included' : 'excluded'}>
                      {feature.included ? (
                        <FaCheck className="icon-check" />
                      ) : (
                        <FaTimes className="icon-times" />
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSubscribe(plan)}
                className={`btn-subscribe ${plan.popular ? 'btn-popular' : ''}`}
              >
                {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="membership-benefits">
          <h2>Why Choose Our Membership?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>✓ Verified Profiles</h3>
              <p>All profiles are manually verified for authenticity</p>
            </div>
            <div className="benefit-card">
              <h3>✓ Privacy Protection</h3>
              <p>Your information is secure and confidential</p>
            </div>
            <div className="benefit-card">
              <h3>✓ Dedicated Support</h3>
              <p>Our team is here to help you at every step</p>
            </div>
            <div className="benefit-card">
              <h3>✓ Success Rate</h3>
              <p>Thousands of successful matches every year</p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>How do I upgrade my plan?</h4>
              <p>You can upgrade your plan anytime from your profile settings.</p>
            </div>
            <div className="faq-item">
              <h4>Can I cancel my subscription?</h4>
              <p>Yes, you can cancel your subscription anytime. No questions asked.</p>
            </div>
            <div className="faq-item">
              <h4>Are there any hidden charges?</h4>
              <p>No, the price you see is what you pay. No hidden charges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
