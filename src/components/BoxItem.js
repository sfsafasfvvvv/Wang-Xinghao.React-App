import React from 'react';

function BoxItem({ iconClass, title, description }) {
  return (
    <div className="box-item">
      <div className={iconClass}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BoxItem;