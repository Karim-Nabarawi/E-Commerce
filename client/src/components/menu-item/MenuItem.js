import React from "react";
import { useHistory } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`/${linkUrl}`)}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image"></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
