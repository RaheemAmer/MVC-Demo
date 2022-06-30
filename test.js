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

