import React, { useContext } from "react";
import "./Nav.css";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  return (
    <nav>
      <div className="nav__left"> Gadget Store</div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" placeholder="search item" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-cart-plus"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
