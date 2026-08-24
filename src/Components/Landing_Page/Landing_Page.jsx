
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const Landing_Page = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const authToken = sessionStorage.getItem("auth-token");

    if (authToken) {
      navigate("/find-doctor");
    } else {
      navigate("/signup");
    }
  };

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

          <button
            className="button"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing_Page;
