import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import './Contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData(form.current);
      
      const data = {
        name: formDataObj.get('name') || '',
        email: formDataObj.get('email') || '',
        company: formDataObj.get('company') || '',
        subject: formDataObj.get('subject') || 'Contact Form Submission',
        address: formDataObj.get('address') || '',
        phone: formDataObj.get('phone') || '',
        country: formDataObj.get('country') || '',
        skype: formDataObj.get('skype') || '',
        note: formDataObj.get('note') || '',
        time: formDataObj.get('time') || '',
        contact_method: formDataObj.get('contact_method') || ''
      };

      // Check if EmailJS is properly configured
      if (emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY' || !emailjsConfig.publicKey) {
        // Show popup with form data for fallback
        setFormData(data);
        setShowPopup(true);
        form.current.reset();
      } else {
        // Use EmailJS if properly configured
        console.log('Sending email via EmailJS...');
        console.log('Service ID:', emailjsConfig.serviceId);
        console.log('Template ID:', emailjsConfig.templateId);
        console.log('Public Key:', emailjsConfig.publicKey);
        
        // Prepare data in the exact format EmailJS expects
        const emailData = {
          title: data.subject,
          name: data.name,
          email: data.email,
          company: data.company,
          subject: data.subject,
          address: data.address,
          phone: data.phone,
          country: data.country,
          skype: data.skype,
          note: data.note,
          time: data.time,
          contact_method: data.contact_method
        };
        
        console.log('Sending data:', emailData);
        
        try {
          const result = await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            emailData,
            emailjsConfig.publicKey
          );
          
          console.log('EmailJS result:', result);
          console.log('Email sent successfully!');
          setFormData(data);
          setShowPopup(true);
          form.current.reset();
        } catch (emailError) {
          console.error('EmailJS specific error:', emailError);
          throw emailError;
        }
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendEmail = () => {
    if (!formData) return;

    const emailBody = `New contact form submission from Versitel website:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Subject: ${formData.subject}
Address: ${formData.address}
Phone: ${formData.phone}
Country: ${formData.country}
Skype ID: ${formData.skype}

Message:
${formData.note}

Best time to contact: ${formData.time}
Preferred contact method: ${formData.contact_method}

---
This message was sent from the Versitel contact form.`;
    
    const mailtoLink = `mailto:snehalreddy186@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-content">
          {/* Top Row: Form and Contact Details side by side */}
          <div className="top-section">
            <div className="contact-form-section">
              <h3>Please fill in the form, Our executive will contact you as early as possible</h3>
              <p className="contact-intro">
                We pride ourselves in treating every project, no matter how small or large, 
                with the same amount of attention and care, and make a point to respond to 
                inquiries and other communications promptly.
              </p>
              <p className="contact-info">
                It is easy to contact us. We would like every visitor of ours to feel special. 
                To help us fulfill this please choose the most appropriate email listed below. 
                Our team will respond to you as soon as possible.
              </p>
              
              <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Work Phone:</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Country / Region:</label>
                    <select id="country" name="country">
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="skype">Skype Id:</label>
                    <input type="text" id="skype" name="skype" placeholder="Enter Skype Id" />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="note">Note:</label>
                  <textarea id="note" name="note" rows={4}></textarea>
                </div>
                
                <div className="form-group">
                  <label>What is the best time to contact you?</label>
                  <div className="radio-group">
                    <label><input type="radio" name="time" value="morning" /> Morning</label>
                    <label><input type="radio" name="time" value="afternoon" /> Afternoon</label>
                    <label><input type="radio" name="time" value="evening" /> Evening</label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Which is the best way to contact you?</label>
                  <div className="radio-group">
                    <label><input type="radio" name="contact_method" value="phone" /> Phone</label>
                    <label><input type="radio" name="contact_method" value="email" /> E-Mail</label>
                    <label><input type="radio" name="contact_method" value="fax" /> Fax</label>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
            
            <div className="contact-details">
              <h4>Mail us @:</h4>
              <p>support@versitel.net</p>
              
              <h4>International offices:</h4>
              
              <div className="office">
                <h5>USA:</h5>
                <p>VERSITEL TECHFLARE HUB LLC</p>
                <p>418 BROADWAY STE R ALBANY</p>
                <p>NY 12207</p>
              </div>
              
              <div className="office">
                <h5>SINGAPORE:</h5>
                <p>VERSITEL PTE LTD</p>
                <p>2A Hougang Street</p>
                <p>11, THE MINTON</p>
                <p>Singapore 538752</p>
              </div>
              
              <div className="payment-image">
                <img src="/images/contact_payment_processing.jpg" alt="Payment Processing" className="payment-img" />
              </div>
            </div>
          </div>
          
          {/* Bottom Section: Banking Information full width */}
          <div className="banking-info">
            <h3>BANK WIRING INFORMATION</h3>
            <p className="banking-intro">
              Dear Valued Customer,<br />
              Versitel Pte. Ltd. Payment/Bank Wiring Information. By wire transfer Please send all the payments in US Dollars to the following Bank.
            </p>
            
            <div className="bank-details">
              <div className="bank-section">
                <h4>SINGAPORE OCBC BANK USD$ A/C</h4>
                <div className="bank-info">
                  <p><strong>Beneficiary Name:</strong> VERSITEL PTE. LTD.</p>
                  <p><strong>Beneficiary Address:</strong> 16 Collyer Quay</p>
                  <p>Level 18-01 Collyer Quay</p>
                  <p>Singapore : 049318</p>
                  <p><strong>Account Number:</strong> 503158586301</p>
                  <p><strong>Bank:</strong> OCBC Bank, Singapore</p>
                  <p><strong>Branch Address:</strong> 65 CHULIA STREET OCBC CENTRE SINGAPORE 049513</p>
                  <p><strong>Swift code:</strong> OCBCSGSG</p>
                </div>
              </div>
              
              <div className="bank-section">
                <h4>SINGAPORE OCBC BANK SGD$ A/C</h4>
                <div className="bank-info">
                  <p><strong>Beneficiary Name:</strong> VERSITEL PTE. LTD.</p>
                  <p><strong>Beneficiary Address:</strong> 16 Collyer Quay</p>
                  <p>Level 18-01 Collyer Quay</p>
                  <p>Singapore : 049318</p>
                  <p><strong>Account Number:</strong> 653880088001</p>
                  <p><strong>Bank:</strong> OCBC Bank, Singapore</p>
                  <p><strong>Branch Address:</strong> 65 CHULIA STREET OCBC CENTRE SINGAPORE 049513</p>
                  <p><strong>Swift code:</strong> OCBCSGSG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>✅ Thank You!</h3>
              <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
            </div>
            <div className="popup-body">
              <p><strong>Your message has been received!</strong></p>
              <p>We'll get back to you at <strong>{formData?.email}</strong> as soon as possible.</p>
              
              {emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY' && (
                <div className="email-instructions">
                  <p><strong>For immediate delivery:</strong></p>
                  <button className="email-btn" onClick={handleSendEmail}>
                    📧 Send via Email Client
                  </button>
                  <p><small>This will open your email program with the message pre-filled</small></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;