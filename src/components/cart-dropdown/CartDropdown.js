import React from "react";

//Styling and Animation
import "./cart-dropdown.styles.scss";

//componenet
import CustomButton from "../custom-button/CustomButton";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
export default CartDropdown;
