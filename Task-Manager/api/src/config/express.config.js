import express from 'express';
import HttpStatus from '../constants/http-status.constants.js';
import './db.config.js';
import router from './router.config.js';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import csrf from 'csurf';

dotenv.config();

const application = express();

// Middleware setup
application.use(express.json()); 
application.use(express.urlencoded({ extended: true }));
application.use(cookieParser());
application.use(helmet());
application.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});
application.use(limiter);

// CSRF Protection Setup
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,  
    secure: process.env.NODE_ENV === 'development ', 
    sameSite: 'Strict', 
  },
  header: 'CSRF-Token', 
});
application.use(csrfProtection);

// Health check route
application.use('/health', (req, res) => {
  res.json({
    status: 'healthy',
    message: "It's perfectly good.",
  });
});

// Send CSRF token to client on the first request
application.get('/api/v1/csrf-token', csrfProtection, (req, res) => {
  res.json({
    csrfToken: req.csrfToken(),
  });
});

// Your API routes
application.use('/api/v1', router);

// 404 handler
application.use((req, res, next) => {
  next({
    statusCode: HttpStatus.NOT_FOUND.statusCode,
    message: HttpStatus.NOT_FOUND.message,
    status: HttpStatus.NOT_FOUND.status,
    data: null,
    options: null,
  });
});

// Error handling middleware
application.use((error, req, res, next) => {
  let statusCode = error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR.statusCode;
  let message = error.message || HttpStatus.INTERNAL_SERVER_ERROR.message;
  let status = error.status || HttpStatus.INTERNAL_SERVER_ERROR.status;
  let data = error.detail || null;

  res.status(statusCode).json({
    message: message,
    status: status,
    data: data,
    options: null,
  });
});

export default application;
