import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ data }) => {
  return (
    <div className={`${data.size} menu-item`}>
      <div style={{ backgroundImage: `url(${data.imageUrl})` }} className="background-image"></div>
      <div className="content">
        <h1 className="title">{data.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
