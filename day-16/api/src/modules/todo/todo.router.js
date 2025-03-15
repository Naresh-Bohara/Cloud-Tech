const { Router } = require("express");
const bodyValidator = require("../../middleware/request-validator.middleware");
const { createTodoDTO } = require("./todo.request");
const todoCtrl = require("./todo.controller");

todoRouter = Router();

todoRouter.get("/new", todoCtrl.add)
todoRouter.post("/", bodyValidator(createTodoDTO), todoCtrl.create);
todoRouter.get("/", todoCtrl.getAll)

module.exports = todoRouter;