const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // Ensure this model is correctly defined
const jwt = require("jsonwebtoken"); // Import jwt for token verification
const authenticate = require("../middleware/authenticate");

// Route to save order
router.post("/save", async (req, res) => {
  const { cartData, token } = req.body;

  console.log("Received token:", token); // Log the received token

  try {
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const order = new Order({
      userId: decoded._id,
      cartData,
      token,
      createdAt: new Date(),
      status: "pending",
      totalPrice: cartData.totalPrice, // Ensure totalPrice is included here
    });

    await order.save();
    res.status(200).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Error saving order", error });
  }
});

router.patch("/:id/status", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.status = status;
    await order.save();
    res.status(200).json({ message: "Order status updated successfully" });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Error updating order status", error });
  }
});

// Route to delete an order
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Error deleting order", error });
  }
});

router.get("/orders", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1]; // Get the token from the authorization header
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const orders = await Order.find({ userId: decoded._id });
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders", error });
  }
});

router.delete("/clear", async (req, res) => {
  const userId = req.user.id; // Assuming user ID is available in req.user

  try {
    await Order.deleteMany({ userId });
    res.status(200).json({ message: "All orders deleted successfully" });
  } catch (error) {
    console.error("Error clearing orders:", error);
    res.status(500).json({ message: "Error clearing orders", error });
  }
});

module.exports = router;
