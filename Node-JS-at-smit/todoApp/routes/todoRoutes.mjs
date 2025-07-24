import express from "express"
import { nanoid } from "nanoid";
import { successResponse, errorResponse } from '../utils/responses.mjs';

const router = express.Router();

let todos = [
    { id: nanoid(), title: "Learn Node" },
];

router.get('/todos', (req, res) => {
    res.status(200).json(successResponse("Todo Fetch successfully", todos));
});

router.post('/todos', (req, res) => {
    const { title } = req.body

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json(errorResponse("Title is required and must be a non-empty string"));
    }

    const newTodo = {
        id: nanoid(),
        title
    }

    todos.push(newTodo);
    res.status(201).json(successResponse("Todo Created successfully", newTodo))
})

router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json(errorResponse("Invalid request body"));
    }

    if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
        return res.status(400).json(errorResponse("Title must be a non-empty string if provided"));
    }

    let todoFound = false;

    todos = todos.map(todo => {
        if (todo.id === id) {
            todoFound = true;
            return {
                ...todo,
                title: title !== undefined ? title : todo.title,
            };
        }
        return todo;
    });

    return todoFound
        ? res.status(200).json(successResponse("Todo updated successfully", todos))
        : res.status(404).json(errorResponse("Todo not found"));
});


router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;

    const originalTodosLength = todos.length
    todos = todos.filter(todo => todo.id !== id);

    if (todos.length === originalTodosLength) {
        res.status(404).json(errorResponse("Todo Not Found"));
    }

    res.status(200).json(successResponse("Todo Delete successfully", todos));
});

router.delete('/todos', (req, res) => {
    todos = []
    res.status(200).json((successResponse("All todos deleted successfully", todos)))
})


export default router;