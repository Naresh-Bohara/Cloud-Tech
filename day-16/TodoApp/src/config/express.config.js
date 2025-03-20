const express = require("express");
const path = require("path"); 
const HttpStatus = require("../constats/http-status.constants");
require("./db.config");
const router = require("./todo.config");
const application = express();

const methodOverride = require("method-override");
application.use(methodOverride("_method"));

application.set('view engine', 'ejs');

application.set('views', path.join(__dirname, '../views')); 

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

application.use("/health", (req, res) => {
    res.json({
        status: "healthy",
        message: "It's perfectly good."
    });
});

// main router
application.get("/", (req, res) => {
    res.render("home");   
});

application.use("/api/v1", router);

// not found handler
application.use((req, res, next) => {
    next({
        statusCode: HttpStatus.NOT_FOUND.statusCode,
        message: "Not Found",
        status: "NOT_FOUND"
    });
});

// error handler middleware
application.use((error, req, res, next) => {
    let statusCode = error.statusCode;
    let message = error.message;
    let status = error.status;
    let data = error.detail || null;

    res.status(statusCode).json({
        statusCode: statusCode,
        message: message,
        status: status,
        data: data,
        options: null
    });
});

module.exports = application;
