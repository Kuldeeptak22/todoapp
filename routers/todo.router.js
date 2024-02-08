import express from "express";
import {
  addTodoApi,
  deleteTodoApi,
  getToDosApi,
  getTodoApi,
  removeTodoApi,
  updateTodoApi,
} from "../controllers/todo.controller.js";

const router = express.Router();
router.post("/add_todo", addTodoApi);
router.get("/get_todos", getToDosApi);
router.get("/get_todo/:todo_id", getTodoApi);
router.put("/update_todo/:todo_id", updateTodoApi);
router.delete("/delete_todo/:todo_id", deleteTodoApi);
router.delete("/remove_todo/:todo_id", removeTodoApi);

export default router;
