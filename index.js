import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import todoRouter from "./routers/todo.router";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("This is Home page");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/todoList")
  .then(() => {
    console.log("DataBase Connected !!");
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("Server is Running on port http://localhost:" + PORT);
});

app.use("/todos", todoRouter);
