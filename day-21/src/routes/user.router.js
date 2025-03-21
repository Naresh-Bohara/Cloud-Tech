import { Router } from "express";

import authenticateJWT from  "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/profile", authenticateJWT, (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.user });
});

export default userRouter;
