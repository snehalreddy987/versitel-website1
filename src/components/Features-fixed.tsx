import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '👍',
      title: 'QUALITY',
      description: 'Unlike some VoIP providers VERSITEL uses its own private, un-contended IP Network in order to guarantee call quality for all its VoIP customers, even at peak call traffic and internet usage times.'
    },
    {
      icon: '🔍',
      title: 'FOCUS',
      description: 'VERSITEL is 100% focused on providing the best Hosted VoIP service available to all our customers. We own our systems and infrastructure and strive for excellence in everything we do.'
    },
    {
      icon: '🔒',
      title: 'RESILIENT',
      description: 'VERSITEL owns and operates a resilient infrastructure across multiple data centres, ensuring unparalleled reliability and a secure network you can trust.'
    },
    {
      icon: '🤝',
      title: 'TRUST',
      description: 'Every day thousands of customers rely on VERSITEL to deliver their business critical telephony. Isn\'t it time you joined them?'
    }
  ];

  return (
    <section className="features section no-bottom-padding">
      <div className="container">
        <h2 className="section-title">Why Choose Versitel?</h2>
        <div className="features-grid grid grid-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card fade-in">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
