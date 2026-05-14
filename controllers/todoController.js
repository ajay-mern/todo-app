const getTodos = (req, res) => {
    res.send("get all the todos")
}

const createTodo = (req, res) => {
    res.send("create todo")
}

const updateTodo = (req, res) => {
    res.send("update the todo")
}

const deleteTodo = (req, res) => {
    res.send("delete the todo")
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo }