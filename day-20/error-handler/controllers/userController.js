const asyncHandler = require("express-async-handler");
const asyncWrapper = require("../middlewares/asyncWrapper");

let users = [{ id: "1", name: "Naresh" }, { id: "2", name: "Harish" }];

// Try-Catch (Basic Approach)
const getUserWithTryCatch = async (req, res, next) => {
  try {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

// express-async-handler (Cleaner Async Handling)
const getUserWithAsyncHandler = asyncHandler(async (req, res, next) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.json({ success: true, data: user });
});

// Wrapper Function (Best DRY Approach)
const getUserWithWrapper = asyncWrapper(async (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }
  res.json({ success: true, data: user });
});

module.exports = { getUserWithTryCatch, getUserWithAsyncHandler, getUserWithWrapper };
