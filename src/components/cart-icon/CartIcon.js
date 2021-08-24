import React from "react";

//Styling and Animation
import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
};
export default CartIcon;
