import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selector";

//Components
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import WithSpinner from "../../components/with-spinner/WithSpinner";

//pages
import CollectionPage from "../collection/CollectionPage";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  const isCollectionFetching = useSelector(selectIsFetching);
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, []);

  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />}
      />
    </div>
  );
};
export default Shop;
