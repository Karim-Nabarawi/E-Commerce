import React from "react";

//redux
import { useSelector } from "react-redux";
import { selectCollection, selectShopCollections } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/CollectionItem";

//Styling and Animation
import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collection = selectCollection(match.params.collectionId, useSelector(selectShopCollections)); //selectCollection(match.params.collectionId);
  return (
    <div className="collection-page">
      <span className="title">{collection.title}</span>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionPage;
