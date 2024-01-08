
const containerTodo = document.getElementById("containerTodo")
function showTodo(list) {
    containerTodo.textContent = ""; // Clear previous content
    for (const todo of list.todoItems) {
        const title = document.createElement("p");
        const description = document.createElement("p");
        const dueDate = document.createElement("p");
        const priority = document.createElement("p");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        title.textContent = "Title: " + todo.title;
        description.textContent = "Descriptioon: " + todo.description;
        dueDate.textContent = "Due date: " + todo.dueDate;
        priority.textContent = "Priority: " + todo.priority;
        
        deleteButton.addEventListener("click", () => {
            deleteTodo(list, todo)
        })
        
        containerTodo.appendChild(title);
        containerTodo.appendChild(description);
        containerTodo.appendChild(dueDate);
        containerTodo.appendChild(priority);
        containerTodo.appendChild(deleteButton)
    }
}

function deleteTodo(list, todo) {
    const confirmDelete = confirm("Are you sure you want to delete this todo?");
    
    if (confirmDelete) {
        const todoIndex = list.todoItems.indexOf(todo);
        if (todoIndex !== -1) {
            list.todoItems.splice(todoIndex, 1);
            showTodo(list); // Update the displayed todo items after deletion
        }
    }
}


export {showTodo};