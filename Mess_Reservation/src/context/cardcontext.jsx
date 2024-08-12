/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const clearCart = async () => {
    const token = localStorage.getItem("token");

    try {
      // Send a request to the backend to clear the cart in the database
      await axios.delete("http://localhost:3000/api/saveCart/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Clear the cart data locally
      setCartData([]);
    } catch (error) {
      console.error("Error clearing cart: ", error);
      alert("Failed to clear the cart. Please try again.");
    }
  };

  return (
    <CartContext.Provider value={{ cartData, setCartData, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
