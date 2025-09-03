import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'IT Director',
      company: 'TechCorp Solutions',
      content: 'Versitel has transformed our business communications. The call quality is exceptional, SMS integration is seamless, and their support team is always there when we need them.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Operations Manager',
      company: 'Global Industries',
      content: 'We switched to Versitel two years ago and haven\'t looked back. The reliability and cost savings have been tremendous for our multi-location business.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      position: 'CEO',
      company: 'StartupHub',
      content: 'As a growing startup, we needed a scalable phone and messaging solution. Versitel delivered exactly what we needed with voice and SMS services, plus room to grow.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials section no-top-padding">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card fade-in">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-position">{testimonial.position}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
