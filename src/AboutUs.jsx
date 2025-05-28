

import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <header className="aboutus-hero">
        <h1>About Fresh Basket 🥬</h1>
        <p>Delivering Freshness to Your Doorstep – Every Day</p>
      </header>

      <section className="mission-section">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            At Fresh Basket, our mission is simple – to bring the freshest produce,
            dairy, and groceries directly from farms to your table. We aim to provide
            convenience, affordability, and quality for every household.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🌱 Freshness</h3>
            <p>We partner with local farmers to ensure the freshest produce, every time.</p>
          </div>
          <div className="value-card">
            <h3>💚 Trust</h3>
            <p>Transparent sourcing and reliable delivery you can count on.</p>
          </div>
          <div className="value-card">
            <h3>🚀 Innovation</h3>
            <p>We use technology to make grocery shopping simple and seamless.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
           
            <h3>Ratan Sir</h3>
            <p>Founder & Lead Developer</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>

      <section className="join-section">
        <h2>Join Our Journey</h2>
        <p>
          Whether you're a customer, partner, or enthusiast – we'd love for you to be part of our story.
          Let's grow together, one basket at a time.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
