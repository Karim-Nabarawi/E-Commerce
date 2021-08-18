import React from "react";

import "./CollectionPreview.styles.scss";

import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItem }) => (
            <CollectionItem key={id} {...otherItem} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
