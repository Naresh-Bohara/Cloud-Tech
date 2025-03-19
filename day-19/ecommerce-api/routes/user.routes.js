const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// Get All Users with Filtering, Pagination & Sorting
router.get("/", async (req, res) => {
  try {
    const { name, age, sort, page = 1, limit = 10 } = req.query;
    let query = {};

    if (name) query.name = new RegExp(name, "i"); // Case-insensitive search
    if (age) query.age = age;

    const users = await User.find(query)
      .sort(sort ? { [sort]: 1 } : {}) // Sorting
      .skip((page - 1) * limit) // Pagination
      .limit(Number(limit));

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create User
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  Add virtual fields using $addFields
router.get('/users/with-fullname', async (req, res) => {
    try {
      const users = await User.aggregate([
        { $addFields: { fullName: { $concat: ["$name", " ", "Doe"] } } },
      ]);
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
