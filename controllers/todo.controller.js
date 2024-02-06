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

export const getTodoApi = async (req, res) => {
  try {
    const todoID = req.params.todo_id;
    const todoData = await TodoModel.findOne({ status: 1, _id: todoID });
    if (todoData) {
      return res.status(200).json({
        data: todoData,
        message: "Item fetched Successfully...!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTodoApi = async (req, res) => {
  try {
    const todoID = req.params.todo_id;
    const { name, description } = req.body;

    const updateTodoData = await TodoModel.updateOne(
      {
        _id: todoID,
      },
      {
        $set: {
          name,
          description,
        },
      }
    );

    if (updateTodoData.matchedCount) {
      return res.status(200).json({
        message: "Item has been Successfully Updated..!.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTodoApi = async (req, res) => {
  try {
    const todoID = req.params.todo_id;

    const deletedTodo = await TodoModel.updateOne(
      { _id: todoID },
      {
        $set: {
          status: 0,
        },
      }
    );
    if (deletedTodo.acknowledged) {
      return res.status(200).json({
        message: "Item has been Successfully Deleted..!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const removeTodoApi = async (req, res) => {
  try {
    const todoID = req.params.todo_id;
    const removedData = await TodoModel.deleteOne({ _id: todoID });
    if (removedData.acknowledged) {
      return res.status(200).json({
        message: "Item has been Successfully Updated..!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
