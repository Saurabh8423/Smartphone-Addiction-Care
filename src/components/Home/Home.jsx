import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Index() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Nomophobia Test</h1>
        <p className="hero-subtitle">
          Measure your smartphone dependency and get personalized strategies to regain control.
        </p>

        <Link to="/addiction">
          <button className="start-btn">Start Assessment</button>
        </Link>
      </div>

      <div className="cards-section">
        <div className="info-card">
          <h3>✔ Quick Assessment</h3>
          <p>Just answer a few questions to understand your level of smartphone addiction.</p>
        </div>

        <div className="info-card">
          <h3>✔ Smart Strategies</h3>
          <p>Receive tailored recommendations based on your score.</p>
        </div>

        <div className="info-card">
          <h3>✔ Easy To Use</h3>
          <p>Simple UI, fast results, and no unnecessary complexity.</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
