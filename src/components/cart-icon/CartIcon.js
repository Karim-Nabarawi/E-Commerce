import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

//Styling and Animation
import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const itemCount = selectCartItemsCount(state);

  const clickHandler = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={clickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
export default CartIcon;
