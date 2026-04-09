import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById("input");
const moveAllDoneBtn = document.getElementById("move-complete");
const input = document.querySelector("input");

addBtn.addEventListener('click', () => {
    if (!input.value.trim()) return;

    const todoController = new TodoController(input.value);
    todoController.addTodo();
    input.value = '';
});

moveAllDoneBtn.addEventListener('click', () => {
    TodoController.moveAllDoneTodos();
});