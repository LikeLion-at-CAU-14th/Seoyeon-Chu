import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

class TodoController {
    constructor(todo) {
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        });

        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        });
    }

    addTodo() {
        const todoList = document.getElementById("to-do-list");
        todoList.appendChild(this.newTodo.addRow());
    }

    delTodo() {
        this.newTodo.getRow().remove();
    }

    doneTodo() {
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');
    }

    static moveAllDoneTodos() {
        const rows = document.querySelectorAll("#to-do-list .row");

        rows.forEach((row) => {
            const textNode = row.querySelector(".text-box");
            const completeBtn = row.querySelector(".complete-btn");

            if (
                textNode.classList.contains("done-text") ||
                completeBtn.classList.contains("done-btn")
            ) {
                const completeController = new CompleteController(textNode.innerText);
                completeController.addComplete();
                row.remove();
            }
        });
    }
}

export default TodoController;