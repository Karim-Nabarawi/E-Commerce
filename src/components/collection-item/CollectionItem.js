import React from "react";

//redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collecion-item.styles.scss";

import CustomeButton from "../custom-button/CustomButton";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomeButton inverted onClick={submitHandler}>
        Add to cart{" "}
      </CustomeButton>
    </div>
  );
};
export default CollectionItem;
