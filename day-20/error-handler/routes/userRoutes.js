const express = require("express");
const {
  getUserWithTryCatch,
  getUserWithAsyncHandler,
  getUserWithWrapper,
} = require("../controllers/userController");

const router = express.Router();

router.get("/try-catch/:id", getUserWithTryCatch);
router.get("/async-handler/:id", getUserWithAsyncHandler);
router.get("/wrapper/:id", getUserWithWrapper);

module.exports = router;
