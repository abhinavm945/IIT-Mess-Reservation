/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const clearCart = () => {
    setCartData([]);
  };

  return (
    <CartContext.Provider value={{ cartData, setCartData, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
