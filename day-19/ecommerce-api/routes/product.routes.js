const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

// Get All Products with Filtering, Pagination & Sorting
router.get("/", async (req, res) => {
  try {
    const { category, price, sort, page = 1, limit = 10 } = req.query;
    let query = {};

    if (category) query.category = category;
    if (price) query.price = { $lte: price }; // Filter by price less than or equal

    const products = await Product.find(query)
      .sort(sort ? { [sort]: 1 } : {}) // Sorting
      .skip((page - 1) * limit) // Pagination
      .limit(Number(limit));

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
