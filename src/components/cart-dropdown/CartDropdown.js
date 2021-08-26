import React from "react";

//redux
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

//Styling and Animation
import "./cart-dropdown.styles.scss";

//componenet
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItems && cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
export default CartDropdown;
