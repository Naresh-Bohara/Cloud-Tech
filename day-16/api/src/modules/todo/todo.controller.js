const HttpStatus = require("../../constats/http-status.constants");
const todoSvc = require("./todo.service");

class TodoController {
    create = async (req, res, next) => {
        try {
            const formattedData = await todoSvc.transformCreateDTO(req.body);
            const todo = await todoSvc.createTodo(formattedData);

            // JSON response (optional)
            // res.json({
            //     data: todo,
            //     message: "Todo created successfully.",
            //     status: HttpStatus.OK.status,
            //     options: null
            // });

            res.redirect('/api/v1/todos'); // Redirect to the todos page
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
            
            // JSON response (optional)
            // res.json({
            //     data: todos,
            //     message: "All todos fetched successfully.",
            //     status: HttpStatus.OK.status,
            //     options: null
            // });

            res.render('todo', {
                todos: todos,
                message: "All todos fetched successfully."
            });
        } catch (exception) {
            console.error("Error fetching todos:", exception);
            next(exception);
        }
    };
}

const todoCtrl = new TodoController();
module.exports = todoCtrl;
