import './Services.css';

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        
        <div className="services-intro">
          <p className="services-description">
            Versitel Phones specialises in the supply, installation and support of hosted VoIP telephone systems and SMS messaging services.
          </p>
          <p className="services-explanation">
            What this means is that a Versitel system is different from a traditional phone system in two main areas...
          </p>
        </div>

        <div className="services-steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Introduction</h3>
            <p>First, the connection of your telephones to the global public phone network is handled by a data connection rather than by traditional analogue or ISDN connections. This gives you reduced line rental costs, especially if you have a significant number of incoming lines.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>VoIP Telephony</h3>
            <p>Second, the actual switching of phone calls is not carried out on your premises.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Call Capacity</h3>
            <p>So, instead of the traditional concept of you having your own private telephone switch (PBX) on your premises, all the switching functions are carried out centrally.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Advantage Of Hosted</h3>
            <p>We provide a soft-switch which in reality is a cluster of computer servers and related hardware all located in a secure data centre. For resilience, the whole of the core switching system is duplicated in a second, geographically separated data centre as well.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">5</div>
            <h3>SMS Integration</h3>
            <p>Beyond voice communications, our platform seamlessly integrates SMS messaging services, allowing you to send and receive text messages through the same unified system. Perfect for notifications, alerts, and customer communications.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">6</div>
            <h3>Phones Anywhere</h3>
            <p>All of this adds up to reduced costs and increased flexibility for both voice and SMS communications.</p>
          </div>
        </div>

        <div className="competitive-rates-section">
          <div className="rates-banner">
            <div className="rates-content">
              <h2>We know how important it is for you to offer competitive services to your clients</h2>
              <p>That is why we passionately work on providing you with the most competitive rates and quality service in the VoIP and SMS market.</p>
              
              <div className="quality-features">
                <div className="quality-item">
                  <div className="quality-icon">💰</div>
                  <div>
                    <h4>Highest Quality</h4>
                    <p>Our premium product is more than 90% CLI routes with support of FAX, SMS, and DTMF; some which are from direct PTT's, which contains the highest voice quality and SMS delivery rates available in today's market. It is intended for retail traffic, mobile operators, and calling card companies.</p>
                  </div>
                </div>
                
                <div className="quality-item">
                  <div className="quality-icon">🚚</div>
                  <div>
                    <h4>Wholesale Services</h4>
                    <p>versitel provides A-Z international and domestic voice call termination and SMS messaging services at excellent rates to our resellers and wholesalers, so they can provide the best possible service to their customers. Designed for Wholesale, Our Wholesale product is the ideal choice for Power Routers using Least Cost Routing (LCR). It is designed for the specific needs of wholesale and overflow traffic. Being wholesale, technical support and call quality are usually good, but can't be guaranteed.</p>
                  </div>
                </div>
                
                <div className="quality-item">
                  <div className="quality-icon">⚙️</div>
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>versitel is able to customize this product for customers who have a high traffic volume for specific destinations. We do not require our customers to use our other rate decks in order to take advantage of our aggressive rates. As a matter of fact, we might be able to offer you more aggressive rates for certain destinations, depending on the volume of traffic.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rates-visual">
              <img src="/images/WhatsApp Image 2025-08-29 at 20.32.50_3c569714.jpg" alt="Business Team" className="rates-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;