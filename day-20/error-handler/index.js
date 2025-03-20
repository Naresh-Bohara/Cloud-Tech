const express = require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
