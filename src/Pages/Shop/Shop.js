import React from "react";
import { Route } from "react-router-dom";

//Components
import CollectionOverview from "../../components/collection-overview/CollectionOverview";

//pages
import CollectionPage from "../collection/CollectionPage";

const Shop = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
export default Shop;
