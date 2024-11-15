// src/components/SectionGrid.js

import React from 'react';

function SectionGrid() {
  return (
    <section className="section-grid">
      <h2>What do you need?</h2>
      <div className="header-box-alt">
        <div className="box-group">
          <div className="box-item">
            <div className="icon-box1"></div>
            <h3>First Element</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="box-item">
            <div className="icon-box2"></div>
            <h3>Second Element</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="box-item">
            <div className="icon-box3"></div>
            <h3>Third Element</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionGrid;