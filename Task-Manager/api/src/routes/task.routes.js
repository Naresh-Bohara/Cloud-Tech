import { Router } from "express";
import TaskModel from "../models/task.model.js";
import UserModel from "../models/user.model.js";
import checkLogin from "../middlewares/auth.middleware.js";

const taskRouter = Router();

taskRouter.post("/",checkLogin, async(req, res)=>{
    try{
        const {title, description} = req.body;
        const {id} = req.headers
        const newTask = new TaskModel({title: title, description: description})
        const saveTask = await newTask.save();
        const taskId = saveTask._id
        await UserModel.findByIdAndUpdate(id, {$push:{tasks:taskId._id}});
        res.json({
            message: "task created successfully."
        })
    }catch(err){
        console.log(err)
        res.json({
            message: "Internal Server Error."
        })
    }
})

taskRouter.get("/", checkLogin, async(req, res)=>{
    try{
        const {id} = req.headers;
        const userData = await UserModel.findById(id).populate({
            path:"tasks",
            options: {sort: {createdAt: -1}}
        });
        res.json({
            data: userData
        })
    }catch(err){
        console.log(err);
        res.json({
            message: "Internal Server Error."
        })
    }
})

export default taskRouter;