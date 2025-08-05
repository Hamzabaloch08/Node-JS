import express from "express";
import {
  createTodo,
  getTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
} from "../controllers/todoController.mjs";

export const todoRoutes = express.Router();

todoRoutes.get("/todos", getTodos);
todoRoutes.get("/todos/:id", getSingleTodo);
todoRoutes.post("/todos", createTodo);
todoRoutes.put("/todos/:id", updateTodo);
todoRoutes.delete("/todos/:id", deleteTodo);
todoRoutes.delete("/todos", deleteAllTodos);