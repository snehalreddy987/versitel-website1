import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-intro">
          <h2 className="section-title">WELCOME TO VERSITEL</h2>
          <div className="about-pillars">
            <div className="pillar">
              <div className="pillar-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide state-of-the-art Internet-connected telephone systems and SMS messaging solutions. In addition to that, our business philosophy is to provide appropriate solutions and ensure customer satisfaction as a priority.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">📚</div>
              <h3>Our History</h3>
              <p>Along with our upstream providers, our expertise lies in years' of experience in telephony, information and communication technology, and system installation and support.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">⚙️</div>
              <h3>Our Technology</h3>
              <p>Our system is based on leading VoIP platform. We also use a unique secure web-based management portal, which allows us to provision phone systems quickly and easily.</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">VERSITEL</h3>
            <p className="about-description">
              VERSITEL is the collaborative brain child of network communications and software experts to create a revolutionary VoIP and SMS service that is reliable, sophisticated, and affordable. Leveraging their decades of experience working in the hi-tech capital of the world, designing and building the most advanced communications technologies, VERSITEL combines the best of customer services & technical know how of established market leaders. Our rapidly expanding business, which now includes many partners across different geographies, is a testament to our creative model.
            </p>
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">GOAL</h3>
            <p className="about-description">
              To provide high quality international calls and SMS messaging services at low rates, and it is active both on the retail market, and on the international carrier wholesale market. It has point of presence in SINGAPORE interconnects with dozens of major carriers in many countries. VERSITEL's Retail VoIP and SMS platform serves telecom operators across continents. Our clients are ranging from small start-ups to leading VoIP carriers, business and residential service providers, calling card and call shop operators, international call forwarding, PC-to-Phone and call back services.
            </p>
          </div>
        </div>

                <div className="about-visual">
          <div className="support-banner">
            <img src="/images/WhatsApp Image 2025-08-29 at 20.17.50_b533c87d.jpg" alt="Customer Support Representative" className="support-image" />
            <div className="support-overlay">
              <div className="support-item">
                <div className="support-icon">⚙️</div>
                <span>Second to none maintenance cover</span>
              </div>
              <div className="support-item">
                <div className="support-icon">⏱️</div>
                <span>Quick response time, providing long term solutions</span>
              </div>
              <div className="support-item">
                <div className="support-icon">🗺️</div>
                <span>Professional and helpful advice where ever you need it</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
