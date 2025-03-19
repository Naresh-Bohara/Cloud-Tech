require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Import Routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/orders", require("./routes/order.routes"));



// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGODB_NAME,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Failed", error.message);
    process.exit(1);
  }
};
connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));
