import React, { useState } from "react";
import ShopData from "./shop.data";

import CollectionPreview from "../../components/preview-collection/CollectionPreview";

const Shop = () => {
  console.log(ShopData);
  const [collections, setCollections] = useState(ShopData);
  return (
    <div className="shop">
      <h1>Collection</h1>
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
};
export default Shop;
