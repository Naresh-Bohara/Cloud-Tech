import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import UserModel from "../models/user.model.js";

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await UserModel.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already taken. Choose another." });

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) return res.status(400).json({ message: "Email already exists. Choose another." });

        if (username.length < 3) return res.status(400).json({ message: "Username must be at least 3 characters long." });

        const hashPass = await bcrypt.hash(password, 10);

        const newUser = new UserModel({ email, username, password: hashPass });
        await newUser.save();

        return res.status(201).json({ message: "Signup successful!" });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error." });
    }
});

authRouter.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await UserModel.findOne({ username });
        if (!existingUser) return res.status(401).json({ message: "Invalid credentials." });

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

        const payload = { id: existingUser._id, username: existingUser.username, jti: uuidv4() };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10h" });

        return res.status(200).json({ message: "Login successful!", id: existingUser._id, token });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error." });
    }
});

export default authRouter;
