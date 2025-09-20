//Number
let age: number = 25;

//String
let name: string = "Alice";

//Boolean
let isStudent: boolean = true;

//Array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

//Tuple
let person: [string, number] = ["Alice", 25];

//any
let anything: any = "Hello";


let count = 5; // Inferred as number

let id: string | number;
id = "ABC123"; // Valid
id = 123; // Valid


interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // Optional property
  }
  
  const student: Person = {
    name: "Alice",
    age: 20,
    isStudent: true
  };

  interface Todo {
    id: number;
    task: string;
    completed: boolean;
  }
  
  class TodoList {
    private todos: Todo[] = [];
  
    addTask(task: string): void {
      const todo: Todo = {
        id: this.todos.length + 1,
        task,
        completed: false
      };
      this.todos.push(todo);
      console.log(`Added: ${task}`);
    }
  
    completeTask(id: number): void {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = true;
        console.log(`Completed: ${todo.task}`);
      } else {
        console.log(`Todo with ID ${id} not found`);
      }
    }
  
    listTasks(): void {
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