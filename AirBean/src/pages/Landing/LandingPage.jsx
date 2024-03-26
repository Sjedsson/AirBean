import React from 'react';
import './LandingPage.css';
import IntroGraphicLeft from '../../assets/intro-graphic-left.svg';
import IntroGraphicRight from '../../assets/intro-graphic-right.svg';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="graphic graphic-left">
        <img src={IntroGraphicLeft} alt="Decorative graphic on the left" />
      </div>
      <div className="content">
        <div className="logo-circle">
          <span>A</span>
        </div>
        <h1>AIR BEAN</h1>
        <p>DRONE-DELIVERED COFFEE</p>
      </div>
      <div className="graphic graphic-right">
        <img src={IntroGraphicRight} alt="Decorative graphic on the right" />
      </div>
    </div>
  );
};

export default LandingPage;
