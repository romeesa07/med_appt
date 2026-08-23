import React from "react";
import "./LandingPage.css";

const Landing_Page = () => {
  return (
    <section className="hero-section">
      <div>
        <div data-aos="fade-up" className="flex-hero">
          <h1>
            Your Health
            <br />
            <span className="text-gradient">
              Our Responsibility
            </span>
          </h1>

          <div className="blob-cont">
            <div className="blue blob"></div>
          </div>

          <div className="blob-cont">
            <div className="blue1 blob"></div>
          </div>

          <h4>
            Your health is our priority. Book appointments with trusted
            healthcare professionals and take control of your well-being.
          </h4>

          <a href="#services">
            <button className="button">Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing_Page;