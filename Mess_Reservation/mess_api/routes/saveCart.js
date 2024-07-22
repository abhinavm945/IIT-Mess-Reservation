const express = require("express");
const router = express.Router();
const Cart = require("../models/cart"); // Ensure this model is correctly defined
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

router.post("/save", async (req, res) => {
  const { cartData, token } = req.body;

  try {
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const newCart = new Cart({
      userId: decoded._id,
      cartData,
      token,
      createdAt: new Date(),
      status: "pending",
      totalPrice: cartData.totalPrice,
    });

    await newCart.save();
    res.status(200).json({ message: "Cart saved successfully" });
  } catch (error) {
    console.error("Error saving cart:", error);
    res.status(500).json({ message: "Error saving cart", error });
  }
});

router.get("/carts", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const carts = await Cart.find({ userId: decoded._id });
    res.status(200).json({ orders: carts });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders", error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await Cart.findByIdAndDelete(id);
    if (!cart) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ message: "Error deleting cart item", error });
  }
});

module.exports = router;
