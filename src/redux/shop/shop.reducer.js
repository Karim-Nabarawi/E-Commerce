import ShopData from "./shop.data";

const initState = {
  collections: ShopData,
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
