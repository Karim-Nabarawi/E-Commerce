import React, { useEffect } from "react";
import { Route } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

//Components
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import WithSpinner from "../../components/with-spinner/WithSpinner";

//pages
import CollectionPage from "../collection/CollectionPage";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
      />
    </div>
  );
};
export default Shop;
