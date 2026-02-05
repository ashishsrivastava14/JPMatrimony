import './SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      coupleName: 'Priya & Rahul',
      date: 'Married in December 2025',
      story: 'We met through JP Matrimony and instantly connected. After a few meetings, we knew we were meant for each other. Thank you for bringing us together!',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
    },
    {
      id: 2,
      coupleName: 'Anjali & Vikram',
      date: 'Married in November 2025',
      story: 'Finding the right partner seemed impossible until we found JP Matrimony. The platform made it so easy to connect with like-minded individuals.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400',
    },
    {
      id: 3,
      coupleName: 'Neha & Arjun',
      date: 'Married in October 2025',
      story: 'JP Matrimony helped us find each other despite being in different cities. The verified profiles gave us confidence in our search.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
    },
    {
      id: 4,
      coupleName: 'Shreya & Karthik',
      date: 'Married in September 2025',
      story: 'We are grateful to JP Matrimony for this wonderful platform. It helped our families connect and we found our perfect match!',
      image: 'https://images.unsplash.com/photo-1529634597633-c0163da995e5?w=400',
    },
  ];

  return (
    <div className="success-stories-page">
      <div className="stories-hero">
        <div className="container">
          <h1>Success Stories</h1>
          <p>Real couples, real love stories</p>
        </div>
      </div>

      <div className="container">
        <div className="intro-section">
          <h2>Love Found Here</h2>
          <p>
            Every day, thousands of people find love through JP Matrimony. Here are some of their beautiful stories 
            that inspire us to continue our mission of connecting hearts.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.coupleName} />
              </div>
              <div className="story-content">
                <h3>{story.coupleName}</h3>
                <div className="story-date">{story.date}</div>
                <p>{story.story}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="share-story-section">
          <h2>Share Your Success Story</h2>
          <p>Found your life partner through JP Matrimony? We'd love to hear your story!</p>
          <a href="/contact" className="btn-share">Share Your Story</a>
        </div>

        <div className="testimonials-section">
          <h2>What Our Members Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>JP Matrimony made our search so much easier. The verified profiles and excellent support helped us find the perfect match.</p>
              <div className="author">- Rajesh & Kavita</div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>We are grateful for this platform. It brought our families together and we couldn't be happier with our decision.</p>
              <div className="author">- Amit & Pooja</div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>The best matrimonial service we've used. Professional, secure, and effective. Highly recommended!</p>
              <div className="author">- Suresh & Deepika</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
