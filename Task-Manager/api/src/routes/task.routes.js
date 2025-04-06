import { Router } from "express";
import TaskModel from "../models/task.model.js";
import UserModel from "../models/user.model.js";
import checkLogin from "../middlewares/auth.middleware.js";

const taskRouter = Router();

// Helper: Ensure header id is valid
const validateUserId = (req, res) => {
    const userId = req.headers.id;
    if (!userId) {
        res.status(400).json({ message: "User ID is required in headers." });
        return null;
    }
    return userId;
};

// Helper: Ensure the task belongs to the user
const checkTaskOwnership = async (taskId, userId) => {
    const user = await UserModel.findById(userId);
    return user?.tasks?.includes(taskId);
};

// Create Task
taskRouter.post("/", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const { title, description, important = false } = req.body;

        const newTask = new TaskModel({ title, description, important });
        const savedTask = await newTask.save();

        await UserModel.findByIdAndUpdate(userId, { $push: { tasks: savedTask._id } });

        res.status(201).json({
            message: "Task created successfully.",
            task: savedTask,
        });
    } catch (err) {
        console.error("POST /tasks:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Get All Tasks
taskRouter.get("/", checkLogin, async (req, res) => {
    try {
        const userId = validateUserId(req, res);
        if (!userId) return;

        const user = await UserModel.findById(userId)
            .populate({
                path: "tasks",
                options: { sort: { createdAt: -1 } },
            })
            .select("username email tasks"); 

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.json({
            username: user.username,
            email: user.email,
            tasks: user.tasks,
        });
    } catch (error) {
        console.error("GET /tasks:", error);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Delete Task
taskRouter.delete("/:id", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const taskId = req.params.id;
        const task = await TaskModel.findById(taskId);

        if (!task) return res.status(404).json({ message: "Task not found." });

        const ownsTask = await checkTaskOwnership(taskId, userId);
        if (!ownsTask) return res.status(403).json({ message: "Unauthorized task access." });

        await TaskModel.findByIdAndDelete(taskId);
        await UserModel.findByIdAndUpdate(userId, { $pull: { tasks: taskId } });

        res.json({ message: "Task deleted successfully." });
    } catch (err) {
        console.error("DELETE /tasks/:id:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Update Task
taskRouter.put("/:id", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const taskId = req.params.id;
        const { title, description } = req.body;

        const ownsTask = await checkTaskOwnership(taskId, userId);
        if (!ownsTask) return res.status(403).json({ message: "Unauthorized task access." });

        const updatedTask = await TaskModel.findByIdAndUpdate(taskId, { title, description }, { new: true });

        res.json({ message: "Task updated successfully.", task: updatedTask });
    } catch (err) {
        console.error("PUT /tasks/:id:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Toggle Important
taskRouter.put("/important/:id", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const taskId = req.params.id;
        const task = await TaskModel.findById(taskId);

        if (!task) return res.status(404).json({ message: "Task not found." });

        const ownsTask = await checkTaskOwnership(taskId, userId);
        if (!ownsTask) return res.status(403).json({ message: "Unauthorized task access." });

        task.important = !task.important;
        await task.save();

        res.json({ message: "Task importance updated.", task });
    } catch (err) {
        console.error("PUT /important/:id:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Toggle Completed
taskRouter.put("/completed/:id", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const taskId = req.params.id;
        const task = await TaskModel.findById(taskId);

        if (!task) return res.status(404).json({ message: "Task not found." });

        const ownsTask = await checkTaskOwnership(taskId, userId);
        if (!ownsTask) return res.status(403).json({ message: "Unauthorized task access." });

        task.complete = !task.complete;
        await task.save();

        res.json({ message: "Task completion updated.", task });
    } catch (err) {
        console.error("PUT /completed/:id:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Get Important Tasks
taskRouter.get("/important", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const user = await UserModel.findById(userId).populate({
            path: "tasks",
            match: { important: true },
            options: { sort: { createdAt: -1 } },
        });

        res.json({ tasks: user?.tasks || [] });
    } catch (err) {
        console.error("GET /important:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Get Completed Tasks
taskRouter.get("/complete", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const user = await UserModel.findById(userId).populate({
            path: "tasks",
            match: { complete: true },
            options: { sort: { createdAt: -1 } },
        });

        res.json({ tasks: user?.tasks || [] });
    } catch (err) {
        console.error("GET /complete:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

// Get Incompleted Tasks
taskRouter.get("/incomplete", checkLogin, async (req, res) => {
    const userId = validateUserId(req, res);
    if (!userId) return;

    try {
        const user = await UserModel.findById(userId).populate({
            path: "tasks",
            match: { complete: false },
            options: { sort: { createdAt: -1 } },
        });

        res.json({ tasks: user?.tasks || [] });
    } catch (err) {
        console.error("GET /complete:", err);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

export default taskRouter;
