import React from "react";

//redux
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

//Styling and Animation
import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={clickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
};
export default CartIcon;
