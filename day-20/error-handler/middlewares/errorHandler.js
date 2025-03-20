const errorHandler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || "Internal Server Error";
    let status = error.status || "error";
    let data = error.detail || null;
  
    res.status(statusCode).json({
      statusCode,
      message,
      status,
      data,
      options: null,
    });
  };
  
  module.exports = errorHandler;
  