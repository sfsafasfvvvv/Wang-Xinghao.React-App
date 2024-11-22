import React from 'react';
import BoxItem from './BoxItem';

function BoxGroup() {
  return (
    <div className="box-group">
      <BoxItem iconClass="icon-box1" title="First Element" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <BoxItem iconClass="icon-box2" title="Second Element" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <BoxItem iconClass="icon-box3" title="Third Element" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </div>
  );
}

export default BoxGroup;