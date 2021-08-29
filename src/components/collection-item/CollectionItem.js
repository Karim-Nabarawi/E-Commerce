import React from "react";
import CustomButton from "../custom-button/CustomButton";

//redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

//redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collecion-item.styles.scss";

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
      <CustomButton inverted onClick={submitHandler} shopButton>
        Add to cart
      </CustomButton>
    </div>
  );
};
export default CollectionItem;
