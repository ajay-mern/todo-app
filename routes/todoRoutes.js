const express = require("express")
const router = express.Router()
const { getTodos, updateTodo, deleteTodo, createTodo } = require("../controllers/todoController")
router.get('/', getTodos)

router.post("/", createTodo)

router.put('/:id', updateTodo)

router.delete("/:id", deleteTodo)

module.exports = router