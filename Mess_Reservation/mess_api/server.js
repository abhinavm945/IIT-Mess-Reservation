const express = require("express");
const session = require("express-session");
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/saveOrder");
const cartRoutes = require("./routes/saveCart");


dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB".bgGreen.white);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:".bgRed.white, error);
  });

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/users", userRoutes);
app.use("/api/saveOrder", orderRoutes);
app.use("/api/saveCart", cartRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`.bgMagenta.black);
});
