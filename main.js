// //Declaring a todos variables with values
// let toDoList1 = 'Get groceries';
// let toDoList2 = 'Wash car';
// let toDoList3 = 'Make dinner';
let todos = ['Get groceries', 'Wash car', 'Make dinner'];

// Loop on array
render();

// // Push a new element to the last index of an array
// todos.push("Get a job");

// // Pop the last element from the array
// todos.pop();


// //A function to display the todos
// function addTodo(todoTitle) {
//     let element = document.createElement('div');
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// }

// //Calling the toDos function
// addTodo("New Todo");
// addTodo(toDoList1);
// addTodo(toDoList2);
// addTodo(toDoList3);



// Set up a <div id="counter">0</div>, a button with the label "Up", and a variable: let count = 0; so that when clicking the button, the number in the div increases by 1. (hint: use count = count + 1;)
let count = 0;
function incrBtn() {
    let button = document.getElementById('counter');
    button.innerText = count += 1;
}
function decBtn() {
    let button = document.getElementById('counter');
    button.innerText = count -= 1;
}
function addTask() {
    let textBox = document.getElementById('todo-title');
    let title = textBox.value;
    todos.push(title);
    render();
}
function removeTask() {
    let textBox = document.getElementById('todo-title');
    let title = textBox.value;
    todos.pop(title);
    render();
}

function changeText() {
    let btn = document.getElementById('todo-button');
    btn.innerText = "Done";
}

function createDiv() {
    let element = document.createElement('div');
    let textBox = document.getElementById('todo-title');
    let title = textBox.value;
    element.innerText = title;
    document.body.appendChild(element);
}

function render() {
    // reset our list after updating
    document.getElementById('todo-list').innerHTML = '';
    todos.forEach(function (todoTitle) {
        let element = document.createElement('div');
        element.innerText = todoTitle;
        let todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}