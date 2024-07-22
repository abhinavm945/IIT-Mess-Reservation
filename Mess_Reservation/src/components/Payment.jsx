/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/cardcontext";
import axios from "axios";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state;

  const handlePayment = async (event) => {
    event.preventDefault();
    try {
      // Logic to handle the payment submission
      console.log("Payment method:", paymentMethod);
      if (paymentMethod === "UPI") {
        console.log("UPI ID:", upiId);
      } else if (paymentMethod === "CARD") {
        console.log("Card Details:", cardDetails);
      }

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating payment processing time

      // Clear the cart
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:3000/api/saveOrder/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });

      clearCart();
      alert("Payment successful!");
      navigate("/cart");
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Page</h1>
      <h3>Total Amount to be Paid: ₹{totalPrice}</h3>
      <form className="payment-form" onSubmit={handlePayment}>
        <fieldset>
          <legend>Choose Payment Method</legend>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="CARD"
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              />
              Credit/Debit Card
            </label>
          </div>
        </fieldset>
        {paymentMethod === "UPI" && (
          <div className="upi-section">
            <label htmlFor="upiId">Enter UPI ID:</label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
        )}
        {paymentMethod === "CARD" && (
          <div className="card-section">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
              required
            />
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={cardDetails.expiryDate}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiryDate: e.target.value })
              }
              required
            />
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary btn-lg">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
