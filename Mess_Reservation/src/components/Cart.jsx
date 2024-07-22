/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cardcontext";
import axios from "axios";

const Cart = () => {
  const { cartData, setCartData } = useContext(CartContext);
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

        // Debugging: Log the API response
        console.log("API Response:", response.data.orders);

        // Calculate total price from the database
        const total = response.data.orders.reduce((sum, cart) => {
          // Debugging: Log the totalPrice for each cart item
          console.log("Cart Total Price:", cart.totalPrice);
          return sum + cart.totalPrice;
        }, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching cart items: ", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleDelete = async (cartId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3000/api/saveCart/${cartId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        const updatedCartItems = cartItems.filter((cart) => cart._id !== cartId);
        setCartItems(updatedCartItems);
        // Recalculate total price after deletion
        const total = updatedCartItems.reduce((sum, cart) => sum + cart.totalPrice, 0);
        setTotalPrice(total);
      }
    } catch (error) {
      console.error("Error deleting cart item: ", error);
    }
  };

  const handleProceedToPayment = () => {
    navigate("/payment", { state: { totalPrice } });
  };

  const handleAddItem = () => {
    navigate("/checkout");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Cart</h1>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Your Cart</h5>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Meal Time</th>
                <th scope="col">No. of Persons</th>
                <th scope="col">Selected Dates</th>
                <th scope="col">Price per Person</th>
                <th scope="col">Price of the item</th>
                <th scope="col">Actions</th>
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
                      ₹{cartItem.persons > 1 ? (cartItem.totalPrice / cartItem.persons).toFixed(2) : cartItem.totalPrice}
                    </td>
                    <td>
                      ₹{cartItem.totalPrice || "N/A"}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(cart._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="text-right">
            <h4>Total Price: ₹{totalPrice}</h4>
            <button
              className="btn btn-primary btn-lg m-2"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </button>
            <button
              className="btn btn-secondary btn-lg m-2"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
