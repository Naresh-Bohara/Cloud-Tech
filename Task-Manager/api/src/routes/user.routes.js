import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import UserModel from "../models/user.model.js";

const authRouter = Router();

// Helper function for error responses
const errorResponse = (res, status, message) => res.status(status).json({ message });

// Signup Route
authRouter.post("/signup", async (req, res) => {
    try {
        let { email, username, password } = req.body;

        // Trim and validate input
        email = email.trim().toLowerCase();
        username = username.trim();
        password = password.trim();

        if (!email || !username || !password) 
            return errorResponse(res, 400, "All fields are required.");

        if (username.length < 3) 
            return errorResponse(res, 400, "Username must be at least 3 characters long.");

        if (password.length < 6) 
            return errorResponse(res, 400, "Password must be at least 6 characters long.");

        // Check if username or email already exists (case-insensitive)
        const existingUser = await UserModel.findOne({ username: new RegExp(`^${username}$`, "i") });
        if (existingUser) return errorResponse(res, 400, "Username already taken. Choose another.");

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) return errorResponse(res, 400, "Email already exists. Choose another.");

        // Hash the password
        const hashPass = await bcrypt.hash(password, 12); // Use cost factor 12 for better security

        // Create new user
        const newUser = new UserModel({ email, username, password: hashPass });
        await newUser.save();

        return res.status(201).json({ message: "Signup successful!" });
    } catch (err) {
        console.error("Signup Error:", err);
        return errorResponse(res, 500, "Internal server error.");
    }
});

// Login Route
authRouter.post("/login", async (req, res) => {
    try {
        let { username, password } = req.body;

        // Trim input
        username = username.trim();
        password = password.trim();

        if (!username || !password) 
            return errorResponse(res, 400, "Both username and password are required.");

        // Find user (case-insensitive)
        const existingUser = await UserModel.findOne({ username: new RegExp(`^${username}$`, "i") });
        if (!existingUser) return errorResponse(res, 401, "Invalid credentials.");

        // Compare passwords
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) return errorResponse(res, 401, "Invalid credentials.");

        // Ensure JWT_SECRET is set
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not set in environment variables!");
            return errorResponse(res, 500, "Server configuration error.");
        }

        // Generate JWT token
        const payload = { id: existingUser._id, username: existingUser.username, jti: uuidv4() };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10h" });

        return res.status(200).json({ message: "Login successful!", id: existingUser._id, token });
    } catch (err) {
        console.error("Login Error:", err);
        return errorResponse(res, 500, "Internal server error.");
    }
});

export default authRouter;
