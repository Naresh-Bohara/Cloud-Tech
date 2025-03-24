import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[2]; 
    if (!token) return res.status(401).json({ message: "Access Denied" });
    console.log("Token:", token);
    try {
        const loggedinUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = loggedinUser;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: "Invalid Token" });
    }
};

export default authenticateJWT;
