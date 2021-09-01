import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

// export const selectCollection = (collectionURLParam) => {
//   createSelector([selectShopCollections], (collections) =>
//     collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionURLParam])
//   );
// };

export const selectShopCollectionsForPreview = createSelector([selectShopCollections], (collections) =>
  collections ? Object.values(collections) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) => (collections ? collections[collectionUrlParam] : null));

export const selectIsFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!shop.collections);
