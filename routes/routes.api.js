const router = require("express").Router();
const subtaskRouter = require("../modules/subtasks/subtask.api");
const todoRouter = require("../modules/todos/todo.api");

router.use("/todos", todoRouter);
router.use("/subtasks", subtaskRouter);

module.exports = router;
