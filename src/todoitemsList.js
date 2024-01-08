
const containerTodo = document.getElementById("containerTodo")
function showTodo(list) {
    containerTodo.textContent = ""; // Clear previous content
    for (const todo of list.todoItems) {
        const title = document.createElement("p");
        const description = document.createElement("p");
        const dueDate = document.createElement("p");
        const priority = document.createElement("p");
        title.textContent = "Title: " + todo.title;
        description.textContent = "Descriptioon: " + todo.description;
        dueDate.textContent = "Due date: " + todo.dueDate;
        priority.textContent = "Priority: " + todo.priority;  
        containerTodo.appendChild(title);
        containerTodo.appendChild(description);
        containerTodo.appendChild(dueDate);
        containerTodo.appendChild(priority);
    }
}

export {showTodo};