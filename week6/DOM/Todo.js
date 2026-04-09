import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todo) {
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todo, 'text-box');
        this.completeBtn = new Button('', 'complete-btn');
        this.delBtn = new Button('', 'del-btn');

        const completeIcon = new Image();
        completeIcon.src = "./O.png";
        completeIcon.alt = "완료";

        const deleteIcon = new Image();
        deleteIcon.src = "./trash.png";
        deleteIcon.alt = "삭제";

        this.completeBtn.appendNode(completeIcon);
        this.delBtn.appendNode(deleteIcon);
    }

    addRow() {
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    getRow() {
        return this.row;
    }

    getCompleteBtn() {
        return this.completeBtn.node;
    }

    getDelBtn() {
        return this.delBtn.node;
    }

    getInnerText() {
        return this.textBox.node;
    }
}

export default Todo;