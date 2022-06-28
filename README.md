# Exercises

### Task1

1. Create a popup with text hello
2. Display today's date in the console
3. Overwrite the webpage and make it displays your name
4. Overwrite the webpage to be empty

### Task1 Answers

1. alert("hello");
2. [The JavaScript Date object helps when working with dates. To create a new object the with current date and time, add the Date variable to your script:]

<pre>
-----------------
var today = new Date();
var date = today.getFullYear() + ":" + today.getMonth() + ":" + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);
console.log(date);
</pre>

3. document.write(alert("Raheem")); || document.body.innerHTML = "Raheem";
4. document.body.remove(); || document.write("");

### Task2

1. Create 2 buttons next to each other with label Up and another with Label down
2. Load JavaScript from within the HTML and write name in the console

### Task2 Answers

1. Code
<pre>
    <button>Up</button>
    <button>Down</button>
</pre>

2. Code
<pre>
   <script>
    console.log("Raheem");
   </script>
</pre>

### Task3

1. Change the value of the todo1 to a number and run typeOf, what's the type?
2. Create 3 variables: month, dayOfMonth, year. Use them as variables to console.log todays date in one line in this format "November 9, 2021"
3. Save the result of (4+5*3) and (4+5)*3 in a variable and console log them
4. Create variable age that saves your age
5. Find typeOF this variable [let msg = 'I am' + age + 'years old';]

### Task3 Answers

1. number
2. var today = new Date();
var date = today.getFullYear() + ":" + today.getMonth() + ":" + today.getDate();
3. let res = 4 + 5 * 3; || let res = (4 + 5) * 3;
4. I am25years old

### Notes

- Using typeOF get the type of the things that's stored inside of the variable
- Div renders invisible box around it's content
- Create functions to reuse pieces of code
