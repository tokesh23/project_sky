import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-white">
            
            <p className="top-text mb-3">
              ELECTRICAL SOLUTIONS PROVIDER
            </p>

            <h1 className="hero-title mb-4">
              Powering homes and <br />
              businesses safely, <br />
              efficiently, and on time
            </h1>

            <p className="hero-desc mb-4">
              At BrightVolt Solutions, we deliver top-quality electrical services 
              with a focus on safety, reliability, and customer satisfaction. 
              Licensed electricians you can trust.
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-primary-custom">
                Get Free Estimate
              </button>
              <button className="btn btn-light px-4 py-2 fw-semibold">
                View Services
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
