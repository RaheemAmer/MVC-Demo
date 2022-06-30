// //Declaring a todos variables with values
// let toDoList1 = 'Get groceries';
// let toDoList2 = 'Wash car';
// let toDoList3 = 'Make dinner';
let todos = ['Get groceries', 'Wash car', 'Make dinner'];

// Loop on array
todos.forEach(function (todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});

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