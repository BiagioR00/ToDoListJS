import { showTodo } from "./todoitemsList";
import { toDoItem } from "./todoItem";

function List(title) {
    this.title = title;
    this.todoItems = [];
}

const container = document.getElementById("container");
const containerTodo = document.getElementById("containerTodo")
const dialog = document.getElementById("listDialog");
const dialogTodo = document.getElementById("todoDialog");
const newListButton = document.getElementById("newList");
const newTodoButton = document.getElementById("newTodo");
const form = document.getElementById("form");
const formNewTodo = document.getElementById("formNewTodo");
let selectedListIndex = 0;

const listArray = [];
const defaultList = new List("Default");
listArray.push(defaultList);

function showList() {
    container.textContent = "";
    for (let i = 0; i < listArray.length; i++) {
        const para = document.createElement("button");
        para.textContent = listArray[i].title;
        para.addEventListener("click", () => {
            selectList(i);
            showTodo(listArray[i]);
        });
        
        container.appendChild(para);
    }
}

function addNewList() {
    const title = document.getElementById("listName").value;
    const newList = new List(title);
    listArray.push(newList);
    dialog.close();
    showList();
    form.reset(); // Reset the form
}

function selectList(index) {
    selectedListIndex = index;
}
function newTodo() {
    const title = document.getElementById("todoTitle").value;
    const description = document.getElementById("todoDescription").value;
    const dueDate = document.getElementById("todoDueDate").value;
    const priority = document.getElementById("todoPriority").value;

    const todo = new toDoItem(title, description, dueDate, priority);
    listArray[selectedListIndex].todoItems.push(todo);
    dialogTodo.close();
    showList(); // Update the list display after adding a new todo
    formNewTodo.reset();
   
}
newListButton.addEventListener("click", () => {
    dialog.showModal();
});

newTodoButton.addEventListener("click", () => {
    dialogTodo.showModal();
})


form.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewList();
});

formNewTodo.addEventListener("submit", (event) => {
    event.preventDefault();
    newTodo();
})




export { showList, addNewList };
