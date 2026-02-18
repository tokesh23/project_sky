import React from "react";
import { MdElectricBolt } from "react-icons/md";
import "./intro.css";
import { SiCommerzbank } from "react-icons/si";
import { IoStopwatchOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import imgside from "../../assets/image/Bifacial Solar Modules Explained 🌞.jpg"
 
const IntroPage = () => {
  return (
    <div className=" ">
      <div className="container-fluid bg-light">
        <div className="row justify-content-center text-center mb-4 ">
          <h1 className="fw-bold mt-3">
            Comprehensive Solar Panel Services
          </h1>

          <p style={{ fontWeight: 300 }} className="">
            From routine installations to emergency repairs, we handle all your electrical needs
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-3 shadow bg-white m-2 p-4 text-center rounded">
            <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center">
              <MdElectricBolt className="fs-3" />
            </div>
            <h3>Residential Electrical</h3>
            <p>Complete home wiring and installations</p>
          </div>

          <div className="col-md-3 shadow bg-white m-2 p-4 text-center rounded">
            <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center">
              
            <SiCommerzbank className="fs-2" />

            </div>
              <h3>Commercial Services</h3>
            <p>Solar panel maintenance and servicing</p>
          </div>

          <div className="col-md-3 shadow bg-white m-2 p-4 text-center rounded">
            <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center">
            <IoStopwatchOutline className="fs-2"/>
            </div>
            <h3>24/7 Emergency</h3>
            <p>Emergency electrical repairs</p>
          </div>

          <div className="col-md-3 shadow bg-white m-2 p-4 text-center rounded">
            <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center">
     <GrServices className="fs-2"/>
            </div>
            <h3>Free Services</h3>
            <p>we provide free services</p>
          </div>

              <div className="col-md-3 shadow bg-white m-2 p-4 text-center rounded">
            <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center">
  <FaMoneyCheck className="fs-3" />
            </div>
            <h3>
                Finance Facilty
            </h3>
            <p>we provide free Finance</p>
          </div>

             <div className="col-md-3 shadow bg-white m-2 p-4 text-center rounded">
            <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center">
     <MdOutlineFreeCancellation className="fs-2" />
            </div>
            <h3>
                SubCidy Facility
            </h3>
            <p>we provide free Finance</p>
          </div>

          
        </div>
       <div className="container mt-5">
  <div className="row align-items-center bg-white py-5">
    
    {/* Left Content */}
    <div className="col-md-6 mb-4 mb-md-0">
      <h1 className="fw-bold mb-4">
        Your Trusted Electrical Partner <br /> Since 2010
      </h1>

      <p className="text-muted">
        At BrightVolt Solutions, we pride ourselves on delivering exceptional
        electrical services with an unwavering commitment to quality and safety.
        Our team of highly trained and certified electricians brings years of
        experience to every project.
      </p>

      <p className="text-muted">
        Whether it's residential wiring, commercial installations, or emergency
        repairs, we approach every job with the same dedication to excellence
        and customer satisfaction.
      </p>

      {/* Stats */}
      <div className="row text-center text-md-start mt-4">
        <div className="col-4">
          <h4 className="fw-bold">4+</h4>
          <small className="text-muted">Years Experience</small>
        </div>
        <div className="col-4">
          <h4 className="fw-bold">500+</h4>
          <small className="text-muted">Projects Completed</small>
        </div>
        <div className="col-4">
          <h4 className="fw-bold">100%</h4>
          <small className="text-muted">Satisfaction Rate</small>
        </div>
      </div>

      <button className=" mt-4 px-4 py-2 border border-none shadow rounded-3" style={{background:"orange", color:"white"}}>
        Learn More About Us
      </button>
    </div>

    {/* Right Image Section */}
    <div className="col-md-6 position-relative text-center">
      <img
        src={imgside}  // <-- apni image path yaha lagayein
        alt="Electrician"
        className="img-fluid rounded"
        style={{height:"440px", width:"620px"}}

      />

      {/* Overlay Badge */}
      {/* <div
        className="position-absolute bg-warning px-4 py-3 rounded shadow"
        style={{ bottom: "20px", left: "20px" }}
      >
        <h6 className="fw-bold mb-1">Licensed & Insured</h6>
        <small>Certified Professionals</small>
      </div> */}
    </div>

  </div>
</div>
             
      </div>
    </div>
  );
};

export default IntroPage;
