import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
//firebase
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
//Components
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import WithSpinner from "../../components/with-spinner/WithSpinner";

//pages
import CollectionPage from "../collection/CollectionPage";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    });
  });

  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
      />
    </div>
  );
};
export default Shop;
