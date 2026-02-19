import React from "react";
import "./Contact.css";
import logoimg from "../../assets/image/logosky-removebg-preview.png"

const ContactForm = ({ closepop }) => {
  return (
    <div className="overlay">
      <div className="contact-container">

        {/* Close Button */}
        <button className="close-btn" onClick={closepop}>
          ×
        </button>

        <h2 className="company-name">
          Sky Fuel Energy Pvt Ltd
        </h2>

        <p className="tagline"> 
          <img src={logoimg} alt="" style={{width:"60px"}}/>
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" required className=""/>
          <input type="email" placeholder="Email Address" required className="mt-2" />
          <input type="tel" placeholder="Phone Number" required className="mt-2" />

          {/* <select required className="mt-1">
            <option value="">Select Service</option>
            <option>Residential Solar Installation</option>
            <option>Commercial Solar Setup</option>
          </select> */}

          <textarea rows="4" placeholder="Your Message" required className="mt-2"></textarea>

          <button type="submit" className="submit-btn mt-2">
            Request Free Consultation
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
