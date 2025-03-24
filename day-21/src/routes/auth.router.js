import jwt from "jsonwebtoken";
import UserModel  from "../models/user.model.js"

import { Router } from "express";

const authRouter = Router();

const generateToken = (user) => {
    return jwt.sign({ id: user._id, name: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

authRouter.post("/register", async (req, res) => {
    const { username, password } = req.body;
    
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new UserModel({ username, password });
    await newUser.save();

    res.json({ message: "User registered successfully" });
});
 
authRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user || user.password !== password) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.json({ token });
});

export default authRouter;
