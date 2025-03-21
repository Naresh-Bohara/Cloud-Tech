import { Router } from "express";
import authRouter from "../routes/auth.router.js";
import userRouter from "../routes/user.router.js";

const router = Router();
router.use("/auth", authRouter);
router.use("/users", userRouter)

export default router;
