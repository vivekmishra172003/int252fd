/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sending, setSending] = useState(false); // State to track email sending status

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set sending state to true while sending email
    setSending(true);

    // EmailJS parameters
    const serviceID = 'service_4r5qttg';
    const templateID = 'template_peqiteq';

    emailjs.sendForm(serviceID, templateID, e.target)
      .then(() => {
        setSending(false); // Set sending state to false after successful email sending
        alert('Your message has been sent. Thank you!');
      })
      .catch((error) => {
        setSending(false); // Set sending state to false if there's an error
        alert('Error sending message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div>
      <div className="card-block">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
            <h2></h2>
          </div>
        </div>
        <div style={{ marginLeft: '21%' }}>
          <h4 style={{ color: '#007bff', fontSize: '40px', fontWeight: 600 }}>Contact Us</h4>
          <br />
        </div>
        <div className="row" style={{ marginLeft: '20%' }}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" id="Isminiz" name="Isminiz" placeholder="Name" tabIndex="1" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="Email_Adresiniz" name="Email_Adresiniz" placeholder="E-Mail Address" tabIndex="2" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="Telefon_Numaraniz" name="Telefon_Numaraniz" placeholder="Telephone Number" tabIndex="3" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="Konu" name="Konu" placeholder="Topic " tabIndex="4" />
              </div>
              <div className="form-group">
                <textarea rows="5" cols="50" name="Mesajiniz" className="form-control" id="Mesajiniz" placeholder="Your Message..." tabIndex="5" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" id="button" style={{ color: 'white' }} className="btn btn-primary">
                  {sending ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
