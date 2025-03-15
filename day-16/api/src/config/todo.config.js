const { Router } = require("express");
const todoRouter  = require("../modules/todo/todo.router")

router = Router();
router.use("/todos", todoRouter);

module.exports = router;