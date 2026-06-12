# How setInterval() Works

setInterval() is a JavaScript function that repeatedly executes a function after a specified time interval.

Syntax:

setInterval(functionName, timeInMilliseconds);

Example:

setInterval(updateClock, 1000);

Here:

updateClock is the function to run.
1000 milliseconds = 1 second.

This means the clock updates every second automatically.

How the Clock Works
Create a Date object.
let now = new Date();
Get current hours, minutes, and seconds.
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
Display the time on the webpage.
document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds}`;
Use setInterval() to refresh the time every second.

# Functions Used
appendValue(value)

This function adds the clicked number or operator to the display.

function appendValue(value) {
    display.value += value;
}
clearDisplay()

This function clears the calculator screen.

function clearDisplay() {
    display.value = "";
}
calculate()

This function evaluates the mathematical expression entered by the user and displays the result.

function calculate() {
    display.value = eval(display.value);
}

Example:

User enters: 5 + 3
On pressing =
Output becomes: 8

# What I Learned

Through these tasks, I learned:

Creating user interfaces using HTML.
Styling web pages with CSS.
Manipulating the DOM using JavaScript.
Handling button click events.
Updating webpage content dynamically.
Using functions to organize code.
Working with JavaScript Date objects.
Using setInterval() for repeated execution.
Building interactive projects using frontend technologies.