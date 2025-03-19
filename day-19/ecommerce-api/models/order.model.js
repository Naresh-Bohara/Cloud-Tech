const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    }
  ],
  totalPrice: Number,
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
