import React from "react";

//redux
import { useDispatch } from "react-redux";
import { clearItem } from "../../redux/cart/cart.actions";

//Styling and Animation
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(clearItem(cartItem));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
