import TodoModel from "../models/todo.model";

export const addTodoApi = (req, res) => {
  try {
    const { name, description } = req.body;
    const saveTodo = new TodoModel({
      name,
      description,
    });
    saveTodo.save();
    if (saveTodo) {
      return res.status(201).json({
        data: saveTodo,
        message: "Item has been added successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getToDosApi = async (req, res) => {
  try {
    const todoData = await TodoModel.find({
      status: 1,
    });
    if (todoData) {
      return res.status(200).json({
        data: todoData,
        message: "data fetched successfully",
        total: todoData.length,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


