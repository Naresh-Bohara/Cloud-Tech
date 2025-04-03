import { Router } from "express";
import authRouter from "../routes/user.routes.js";
import taskRouter from "../routes/task.routes.js";

const router = Router();
router.use("/auth", authRouter);
router.use("/tasks", taskRouter)


export default router;
