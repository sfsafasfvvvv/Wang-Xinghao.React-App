// src/components/Header.js

import React from 'react';

import headerImg from './header-img.png'; // 引入header-img.png

function Header() {
  return (
    <header className="top-section">
      <div className="header-box">
        <div className="icon-box0"></div>
      </div>
      <div className="header-box">
        <div className="content-text">
          <h1>Create your dream with us! <span className="emphasize">Enjoy!</span></h1>
          <p>Our team offers a wide range of services. We work professionally and responsibly. You won't be disappointed!</p>
          <button className="action-btn">Learn more...</button>
        </div>
        <div className="img-container">
          <img src={headerImg} alt="Mobile Image" className="mobile-img" />
        </div>
      </div>
    </header>
  );
}

export default Header;