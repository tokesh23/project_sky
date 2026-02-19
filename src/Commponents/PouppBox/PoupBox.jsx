import React, { useState, useEffect } from "react";
import "./Poup.css";
import logpop from "../../assets/image/logosky-removebg-preview.png"
 

const PopupBox = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="overlay">
      <div className="popup-box">
        <button
          className="close-btn"
          onClick={() => setShowPopup(false)}
        >
          ×
        </button>

        <h2 className="company-title">
          Sky Fuel Energy Ltd
        </h2>

        <p className="subtitle " style={{fontStyle:"600px"}}>Welcome  <img src={logpop} alt="" style={{width:"50px"}}/></p>

        <form className="form-box">
          <div className="input-group">
            <label htmlFor="email">Your Name </label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Your Number</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupBox;
