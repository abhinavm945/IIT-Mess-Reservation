/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cardcontext";
import axios from "axios";

const Order = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [orderData, setOrderData] = useState([]);

  const mealPrices = {
    BREAKFAST: 45,
    LUNCH: 60,
    DINNER: 60,
    SNACKS: 20,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:3000/api/saveOrder/orders",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrderData(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchOrders();
  }, []);

  const processPayment = async (orderId) => {
    const token = localStorage.getItem("token");
    try {
      const paymentResult = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 2000);
      });

      const status = paymentResult.success ? "completed" : "failed";
      await axios.patch(
        `http://localhost:3000/api/orders/${orderId}/status`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOrderStatus(status);
    } catch (error) {
      console.error("Error processing payment: ", error);
      setOrderStatus("Failed");
    }
  };

  useEffect(() => {
    if (orderData.length > 0) {
      processPayment(orderData[0]._id); // Assuming we process the first order in the list
    }
  }, [orderData]);

  const calculateItemPrice = (cartItem) => {
    const mealTypePrice = cartItem.mealTypes
      .map((type) => mealPrices[type] || 0)
      .reduce((a, b) => a + b, 0);
    return mealTypePrice * cartItem.persons * cartItem.dates.length;
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Order Details</h1>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Order Summary</h5>
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
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, index) => (
                order.cartData.map((cartItem, cartIndex) => (
                  <tr key={`${order._id}-${cartIndex}`}>
                    <th scope="row">{index + 1}</th>
                    <td>{cartItem.mealTypes.join(", ")}</td>
                    <td>{cartItem.persons}</td>
                    <td>{cartItem.dates.join(", ")}</td>
                    <td>
                      ₹{cartItem.mealTypes
                        .map((type) => mealPrices[type] || 0)
                        .reduce((a, b) => a + b, 0)}
                    </td>
                    <td>
                      ₹{calculateItemPrice(cartItem)}
                    </td>
                    <td>{orderStatus}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
          {orderStatus === "Pending" && (
            <div className="alert alert-warning" role="alert">
              Your payment is being processed. Please wait...
            </div>
          )}
          {orderStatus === "completed" && (
            <div className="alert alert-success" role="alert">
              Your payment was successful! Thank you for your order.
            </div>
          )}
          {orderStatus === "Failed" && (
            <div className="alert alert-danger" role="alert">
              There was an issue with your payment. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
