import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ data }) => {
  return (
    <div style={{ backgroundImage: `url(${data.imageUrl})` }} className={`${data.size} menu-item`}>
      <div className="content">
        <h1 className="title">{data.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
