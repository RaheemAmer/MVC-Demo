function greeting(firstName) {
    console.log("Hello " + firstName);
}
greeting("Raheem");
// ---------------
function toUpper(str) {
    console.log(str.toUpperCase());
}
toUpper("raheem");
// ---------------
function convInch(length) {
    console.log(length * 2.54);
}
convInch(10);
// ---------------
let numbs = [1, 2, 3, 4, 5, 6];
function resultSum() {
    for (i = 0; i < numbs.length; i++) {
        console.log("The result is" + " " + (numbs[i] + 2));
    }
}
resultSum();
// ---------------
let numbs2 = [1, 2, 3, 4, 5, 6];
function resSum2() {
    numbs2.forEach(num => console.log("The result is" + " " + (num + 2)));
    // or 
    numbs2.forEach(function (num) {
        console.log("The result is" + " " + (num + 2));
    });
}
resSum2();
// ---------------
let numbs3 = ["raheem1", "raheem2", "raheem3"];
function capitalizeArr() {
    for (i = 0; i < numbs3.length; i++) {
        numbs3.push(numbs3[i].toUpperCase())
        console.log(numbs3[i].toUpperCase())
    };
}
capitalizeArr();

let numbs4 = ["raheem1", "raheem2", "raheem3"];
function capitalizeArr() {
    for (i = 0; i < numbs4.length; i++) {
        console.log(numbs4[i].toUpperCase())
    };
}
capitalizeArr();
// ---------------
let numbs5 = [1, 2, 3, 4, 5, 6];
function arrayDouble() {
    for (i = 0; i < numbs5.length; i++) {
        for (x = 0; x < 2; x++) {
            console.log(numbs5[i])
        }
    }
}
arrayDouble();
// ---------------
function arraySum() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}
arraySum();
// ---------------
function toUpper(stringArr) {
    let result = [];

    stringArr.forEach(function (str) {
        result.push(str.toUpperCase());
    });

    console.log(result);
}
toUpper(['hello', 'world']);
// ---------------
function twoSum() {
    let numbs = [1, 2, 3, 4, 5];
    let target = 2;
    for (i = 0; i < numbs.length; i++) {
        console.log("The Answer is " + (numbs[i] + target));
    };
}
twoSum();
// ---------------
function toUpper(arrStr) {
    let newArr = [];
    arrStr.forEach(function (arr) {
        newArr.push(arr.toUpperCase());
    });
    console.log(newArr);
}
toUpper(["raheem", "egypt"]);
// ---------------
// Set up a <button id="todo-button">To Do</button> so that when you click the button, the text inside changes to "Done" (hint: use .innerText)
<button id="todo-button">To Do</button>
let todoBtn = document.querySelector("#todo-button");
todoBtn.addEventListener("click", function () {
    todoBtn.innerText = "Done";
});
// ---------------


