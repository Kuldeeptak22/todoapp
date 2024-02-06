import express from "express";
import { addTodoApi, getToDosApi } from "../controllers/todo.controller";

const router = express.Router();
router.post("/add_todo", addTodoApi);
router.get("/get_todos", getToDosApi);

export default router;
