/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cardcontext";
import axios from "axios";

const Payment = () => {
  const { clearCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:3000/api/saveCart/carts",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCartItems(response.data.orders);

        // Calculate total price from the database
        const total = response.data.orders.reduce((sum, cart) => {
          return sum + cart.cartData.reduce((cartSum, item) => {
            return cartSum + item.itemPrice;
          }, 0);
        }, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching cart items: ", error);
      }
    };

    fetchCartItems();
  }, []);

  const handlePayment = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log("Cart Data:", cartItems); // Log cart data
      console.log("Token:", token); // Log token

      // Save the order
      const response = await axios.post(
        "http://localhost:3000/api/saveOrder/save",
        { cartData: cartItems, token },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Clear the cart
      await axios.delete("http://localhost:3000/api/saveCart/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });

      clearCart();
      alert("Order placed successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Order error:", error);
      alert("Order failed. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Page</h1>
      <h3>Total Amount to be Paid: ₹{totalPrice}</h3>
      <div className="cart-summary">
        <h5>Your Cart</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Meal Time</th>
              <th scope="col">No. of Persons</th>
              <th scope="col">Selected Dates</th>
              <th scope="col">Price per Person</th>
              <th scope="col">Price of the item</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cart, index) =>
              cart.cartData.map((cartItem, cartIndex) => (
                <tr key={`${cart._id}-${cartIndex}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{cartItem.mealTypes?.join(", ") || "N/A"}</td>
                  <td>{cartItem.persons || "N/A"}</td>
                  <td>{cartItem.dates?.join(", ") || "N/A"}</td>
                  <td>
                    ₹{cartItem.persons > 1 ? (cartItem.itemPrice / cartItem.persons).toFixed(2) : cartItem.itemPrice}
                  </td>
                  <td>₹{cartItem.itemPrice || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <form className="payment-form" onSubmit={handlePayment}>
        <button type="submit" className="btn btn-primary btn-lg">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
