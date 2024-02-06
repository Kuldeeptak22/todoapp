import express from "express";
import { addTodoApi, getToDosApi, getTodoApi, updateTodoApi } from "../controllers/todo.controller";

const router = express.Router();
router.post("/add_todo", addTodoApi);
router.get("/get_todos", getToDosApi);
router.get("/get_todo/:todo_id", getTodoApi);
router.put("/update_todo/:todo_id", updateTodoApi);

export default router;
