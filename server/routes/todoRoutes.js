import express from "express";
import todoController from "../controllers/todoController.js";

const router = express.Router();

// api Routes
router.get('/todo', todoController.getAllTodo)
router.post('/todo', todoController.addNewTodo)
router.post('/todo/:id', todoController.getSingleData)
router.put('/todo/:id', todoController.upDateTodo)
router.delete('/todo/:id', todoController.deleteTodo)

export default router;