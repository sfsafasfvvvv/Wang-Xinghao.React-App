import React from 'react';
import GridHeader from './GridHeader';
import BoxGroup from './BoxGroup';

function SectionGrid() {
  return (
    <section className="section-grid">
      <GridHeader title="What do you need?" />
      <div className="header-box-alt">
        <BoxGroup />
      </div>
    </section>
  );
}

export default SectionGrid;