const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  cartData: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
