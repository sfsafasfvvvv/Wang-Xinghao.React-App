import React from 'react';
import headerImg from './header-img.png'; // 引入header-img.png

function ImageContainer() {
  return (
    <div className="img-container">
      <img src={headerImg} alt="Mobile Image" className="mobile-img" />
    </div>
  );
}

export default ImageContainer;