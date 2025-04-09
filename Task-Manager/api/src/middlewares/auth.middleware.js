import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import HttpStatus from "../constants/http-status.constants.js";

const checkLogin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(HttpStatus.UNAUTHENTICATED.statusCode).json({ message: "Unauthorized - Access token required." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch user based on decoded token
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(HttpStatus.UNAUTHENTICATED.statusCode).json({ message: "Unauthorized - User not found" });
    }

    req.user = user; 
    next(); 
  } catch (err) {
    console.error(err);
    
    if (err.name === "TokenExpiredError") {
      return res.status(HttpStatus.UNAUTHENTICATED.statusCode).json({ message: "Session expired, please login again" });
    }

    if (err.name === "JsonWebTokenError") {
      return res.status(HttpStatus.UNAUTHENTICATED.statusCode).json({ message: "Invalid token" });
    }

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR.statusCode).json({ message: "Internal server error" });
  }
};

export default checkLogin;
