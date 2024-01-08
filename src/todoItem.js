function toDoItem(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const item = new toDoItem("Hello", "HelloHello", "20-02-2023", "Urgent");

console.log(item.title, item.description, item.dueDate, item.priority)


export {toDoItem}