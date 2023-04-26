import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeCartItem = (_id) => {
    dispatch({ type: REMOVE_ITEM, payload: _id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
