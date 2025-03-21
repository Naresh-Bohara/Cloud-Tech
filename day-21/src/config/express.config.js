import express from "express";
import HttpStatus from "../constants/http-status.constants.js";
import "./db.config.js" 
import router from "./router.config.js";
const application = express();

application.use(express.json());
application.use(express.urlencoded({extended: true}))

application.use("/health", (request, response)=>{
    response.json({
        status: "healthy",
        message: "It's perfectly good."
    })
})

//router
application.use("/api/v1", router);

application.use((request, response, next)=>{
    next({
        statusCode: HttpStatus.NOT_FOUND.statusCode,
        message: HttpStatus.NOT_FOUND.message,
        status: HttpStatus.NOT_FOUND.status,
        data: null,
        options: null
    })
})

application.use((error, request, response, next)=>{
    let statusCode = error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR.statusCode;
    let message = error.message || HttpStatus.INTERNAL_SERVER_ERROR.message;
    let status = error.status || HttpStatus.INTERNAL_SERVER_ERROR.status;
    let data = error.detail || null;

    response.status(statusCode).json({
        message:message,
        status:status,
        data:data,
        options:null,
    })
})


export default application