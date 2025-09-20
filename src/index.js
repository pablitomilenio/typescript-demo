"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Number
let age = 25;
//String
let name = "Alice";
//Boolean
let isStudent = true;
//Array
let numbers = [1, 2, 3];
let names = ["Alice", "Bob", "Charlie"];
//Tuple
let person = ["Alice", 25];
//any
let anything = "Hello";
let count = 5; // Inferred as number
let id;
id = "ABC123"; // Valid
id = 123; // Valid
const student = {
    name: "Alice",
    age: 20,
    isStudent: true
};
class TodoList {
    todos = [];
    addTask(task) {
        const todo = {
            id: this.todos.length + 1,
            task,
            completed: false
        };
        this.todos.push(todo);
        console.log(`Added: ${task}`);
    }
    completeTask(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: ${todo.task}`);
        }
        else {
            console.log(`Todo with ID ${id} not found`);
        }
    }
    listTasks() {
        console.log("Tasks:");
        this.todos.forEach(todo => {
            console.log(`ID: ${todo.id}, Task: ${todo.task}, Completed: ${todo.completed}`);
        });
    }
}
// Usage
const myList = new TodoList();
myList.addTask("Learn TypeScript");
myList.addTask("Build a project");
myList.completeTask(1);
myList.listTasks();
//# sourceMappingURL=index.js.map