import React from "react";
import { useParams } from "react-router-dom";

//redux
import { useSelector } from "react-redux";
import { selectCollection, selectShopCollections } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/CollectionItem";

//Styling and Animation
import "./collection.styles.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
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
