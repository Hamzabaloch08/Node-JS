const input = document.querySelector("#input");
const addButton = document.querySelector("#addButton");
const todoList = document.getElementById("todoList");
const deleteButton = document.querySelector(".delete");
const clearAllButton = document.querySelector(".clear-all");

let editMode = false;
let editTodoId = null;

const getAllTodo = async () => {
  try {
    const response = await axios.get("/api/v1/todos");
    const todos = response.data.data;

    todoList.innerHTML = "";

    todos.forEach((todo) => {
      todoList.innerHTML += `
        <li class="todo-item" id="${todo._id}">
          <span class="todo-text">${todo.title}</span>
          <div class="actions">
            <button class="edit" data-id="${todo._id}" >Edit</button>
            <button class="delete" data-id="${todo._id}" >Delete</button>
          </div>
        </li>`;
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

const postTodo = async () => {
  const inputValue = input.value.trim();

  if (!inputValue) {
    alert("Please enter a todo");
    return;
  }

  try {
    if (editMode) {
      await axios.put(`/api/v1/todos/${editTodoId}`, { title: inputValue });
      console.log("Todo updated");
      editMode = false;
      editTodoId = null;
    } else {
      await axios.post("/api/v1/todos", { title: inputValue });
      console.log("Todo added");
    }

    input.value = "";
    getAllTodo();
  } catch (error) {
    console.error("Error saving todo:", error);
  }
};

todoList.addEventListener("click", async (e) => {
  const todoId = e.target.getAttribute("data-id");

  if (e.target.classList.contains("edit")) {
    const todoText = e.target
      .closest("li")
      .querySelector(".todo-text").innerText;

    input.value = todoText;
    input.focus();

    editMode = true;
    editTodoId = todoId;
  }

  if (e.target.classList.contains("delete")) {
    try {
      await axios.delete(`/api/v1/todos/${todoId}`);
      getAllTodo();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }
});

const clearAllTodo = async () => {
  try {
    const response = await axios.delete("/api/v1/todos");
    const todos = response.data.data;
    console.log(response.data.message);

    todoList.innerHTML = todos;
  } catch (error) {
    console.error("Error saving todo:", error);
  }
};

clearAllButton.addEventListener("click", clearAllTodo);
addButton.addEventListener("click", postTodo);

getAllTodo();
