import React from "react";

//redux
import { useSelector } from "react-redux";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../preview-collection/CollectionPreview";

//Styling and Animation
import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
};
export default CollectionOverview;
