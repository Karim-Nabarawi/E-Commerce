import React from "react";
import { useHistory } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

//Styling and Animation
import "./cart-dropdown.styles.scss";

//componenet
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(selectCartItems);

  const submitHandler = () => {
    dispatch(toggleCartHidden());
    history.push(`/checkout`);
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton onClick={submitHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
export default CartDropdown;
