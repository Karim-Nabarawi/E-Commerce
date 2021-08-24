import React from "react";
import { Link } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//firebase
import { auth } from "../../firebase/firebase.utils";

//Styling
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

//component
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { hidden } = useSelector((state) => state.cart);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
