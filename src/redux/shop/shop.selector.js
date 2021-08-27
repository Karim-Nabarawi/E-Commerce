import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

// export const selectCollection = (collectionURLParam) => {
//   createSelector([selectShopCollections], (collections) =>
//     collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionURLParam])
//   );
// };

export const selectShopCollectionsForPreview = createSelector([selectShopCollections], (collections) =>
  Object.values(collections)
);

export const selectCollection = (collectionURLParam, collections) => {
  return collections[collectionURLParam];
};
