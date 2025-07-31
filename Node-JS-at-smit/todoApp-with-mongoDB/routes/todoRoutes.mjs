import express from "express";
import {
  getTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getSingleTodo)
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);
router.delete("/todos", deleteAllTodos);

export default router;
