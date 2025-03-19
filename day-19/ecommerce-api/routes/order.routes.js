const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

// 1. Get Orders with Filtering, Sorting, Pagination
router.get("/", async (req, res) => {
  try {
    const { customerId, sort, page = 1, limit = 10 } = req.query;
    let query = {};

    if (customerId) query.customerId = customerId;

    const orders = await Order.find(query)
      .populate("customerId", "name email")
      .populate("items.productId", "name price")
      .sort(sort ? { [sort]: 1 } : {})
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Get Category Revenue (Grouping)
router.get("/category-revenue", async (req, res) => {
  try {
    const result = await Order.aggregate([
      { $unwind: "$items" },
      {
        $lookup: {
          from: "products",
          localField: "items.productId",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" },
      {
        $group: {
          _id: "$product.category",
          totalRevenue: { $sum: { $multiply: ["$items.quantity", "$product.price"] } }
        }
      },
      { $sort: { totalRevenue: -1 } }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Filtering Orders ($match)
router.get("/filter", async (req, res) => {
  try {
    const { minPrice = 0, maxPrice = 10000 } = req.query;

    const result = await Order.aggregate([
      { $match: { totalPrice: { $gte: Number(minPrice), $lte: Number(maxPrice) } } }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Sorting Orders ($sort)
router.get("/sort", async (req, res) => {
  try {
    const { sortBy = "totalPrice", order = "desc" } = req.query;
    const sortOrder = order === "desc" ? -1 : 1;

    const result = await Order.aggregate([{ $sort: { [sortBy]: sortOrder } }]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Projection ($project)
router.get("/project", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $project: {
          _id: 0,
          customerId: 1,
          totalPrice: 1,
          orderDate: 1
        }
      }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. Pagination ($limit & $skip)
router.get("/paginate", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const result = await Order.aggregate([
      { $skip: (Number(page) - 1) * Number(limit) },
      { $limit: Number(limit) }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 7. Unwind Orders ($unwind)
router.get("/unwind", async (req, res) => {
  try {
    const result = await Order.aggregate([{ $unwind: "$items" }]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
