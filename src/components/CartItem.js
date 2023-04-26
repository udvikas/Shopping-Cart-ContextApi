import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";

const CartItem = ({ item }) => {
  const { removeCartItem } = useContext(CartContext);
  return <li className="CartItem__item">
    <img src={item.image} alt="items"/>
    <div>{item.name} {`$${item.price}`}</div>
    <button className="CartItem__button" onClick={() => removeCartItem(item._id)}>Remove</button>

  </li>;
};

export default CartItem;
