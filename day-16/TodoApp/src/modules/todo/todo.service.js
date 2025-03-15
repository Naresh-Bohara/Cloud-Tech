const TodoModel = require("./todo.model");

class TodoService {
    transformCreateDTO = async(req)=>{
        try{
            const {title, description, status} = req;

            // if (!title || !description || !status) {
            //     throw new Error("All fields (title, description, status) are required");
            //   }

            const formattedData = {
                title,
                description,
                status,
              };

              return formattedData;
        }catch(exception){
            throw exception;
        }
    }

    createTodo = async(data)=>{
        try{
            const todoObj = new TodoModel(data)
            return await todoObj.save();
        }catch(exception){
            throw exception;
        }
    }

    getAllTodos = async()=>{
        try{
            return await TodoModel.find({});
        }catch(exception){
            throw exception
        }
    }

    getTodoById = async (id) => {
        try {
            return await TodoModel.findById(id);
        } catch (exception) {
            throw exception;
        }
    };

    updateTodo = async (id, data) => {
        try {
            return await TodoModel.findByIdAndUpdate(id, data, { new: true });
        } catch (exception) {
            throw exception;
        }
    };

    deleteTodo = async (id) => {
        try {
            return await TodoModel.findByIdAndDelete(id);
        } catch (exception) {
            throw exception;
        }
    };
}

const todoSvc = new TodoService();
module.exports = todoSvc;