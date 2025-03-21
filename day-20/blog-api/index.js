const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const winston = require('./utils/logger');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blog.routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(express.json()); 
app.use(morgan('combined'));  // HTTP request logging using Morgan

app.use('/api/blogs', blogRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || "Internal server Error";
    let status = error.status || INTERNAL_SERVER_ERROR;
    let data = error.detail || null;


    res.status(statusCode).json({
        statusCode: statusCode,
        message: message,
        status: status,
        data: data,
        options: null
    });
});


// MongoDB connection
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.MONGODB_NAME,
      });
      winston.info('MongoDB connected successfully')
    } catch (error) {
        winston.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
  }; 
  connectDB();

// Server start
app.listen(port, () => {
  winston.info(`Server running on port ${port}`);
});
