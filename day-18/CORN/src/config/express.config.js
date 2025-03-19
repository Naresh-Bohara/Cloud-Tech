// require("../schedular1")
// require("../schedular2")
require("../schedular3")
const express = require("express");

const application = express();

application.use(express.json());
application.use(express.urlencoded({extended: true}));

application.use("/health", (req, res)=>{
    res.json({
        status: "healthy",
        message: "It's perfectly good."
    })
})

//not found handler
application.use((req, res, next)=>{
    next({
        statusCode: 404,
        message: "Not Found.",
        status: "NOT_FOUND"
    })
})

//error handler middleware
application.use((error, req, res, next)=>{
    let statusCode = statusCode || 500;
    let message = error.message || "Internal Server Error";
    let status =error.status || "INTERNAL_SERVER_ERROR";
    let data = error.detail || null;

    res.status(statusCode).json({
        statusCode: statusCode,
        message: error.message,
        status: error.status,
        data: error.detail,
        options: null
    })
})

module.exports = application;