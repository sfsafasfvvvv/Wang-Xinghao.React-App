import React from 'react';
import IconBox from './IconBox';
import HeaderText from './HeaderText';
import ImageContainer from './ImageContainer';

function Header() {
  return (
    <header className="top-section">
      <div className="header-box">
        <IconBox />
      </div>
      <div className="header-box">
        <HeaderText />
        <ImageContainer />
      </div>
    </header>
  );
}

export default Header;