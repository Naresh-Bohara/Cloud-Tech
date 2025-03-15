const HttpStatus = require("../../constats/http-status.constants");
const todoSvc = require("./todo.service");

class TodoController {
    create = async (req, res, next) => {
        try {
            const formattedData = await todoSvc.transformCreateDTO(req.body);
            const todo = await todoSvc.createTodo(formattedData);

            res.redirect('/api/v1/todos'); 
        } catch (exception) {
            console.error("Error creating todo:", exception);
            next(exception);
        }
    };

    add = async(req, res, next)=>{
        res.render('index')
    }

    getAll = async (req, res, next) => {
        try {
            const todos = await todoSvc.getAllTodos();
            const totalTodos = todos.length;
            const completedTodos = todos.filter(todo => todo.status === 'completed').length;
            const remainingTodos = todos.filter(todo => todo.status === 'pending').length;

            res.render('todo', {
                todos: todos,
                message: "All todos fetched successfully.",
                totalTodos,
                completedTodos,
                remainingTodos
            });
        } catch (exception) {
            console.error("Error fetching todos:", exception);
            next(exception);
        }
    };

    edit = async (req, res, next) => {
        try {
            const todo = await todoSvc.getTodoById(req.params.id);
            if (!todo) return res.status(404).send("Todo not found");

            res.render('edit', { todo });
        } catch (exception) {
            console.error("Error fetching todo:", exception);
            next(exception);
        }
    };

    update = async (req, res, next) => {
        try {
            const updatedTodo = await todoSvc.updateTodo(req.params.id, req.body);
            if (!updatedTodo) return res.status(404).send("Todo not found");

            res.redirect('/api/v1/todos');
        } catch (exception) {
            console.error("Error updating todo:", exception);
            next(exception);
        }
    };

    delete = async (req, res, next) => {
        try {
            await todoSvc.deleteTodo(req.params.id);
            res.redirect('/api/v1/todos');
        } catch (exception) {
            console.error("Error deleting todo:", exception);
            next(exception);
        }
    };
}

const todoCtrl = new TodoController();
module.exports = todoCtrl;
