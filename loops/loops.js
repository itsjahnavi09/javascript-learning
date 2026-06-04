// for
let age = 20;

if (age >= 18) {
  console.log("You can vote!");
}

let score = 45;

if (score >= 50) {
  console.log("You passed!");
}


let isit = true;

if (!isit) {
  console.log("yaay");
}

// else
let AGE = 15;

if (AGE >= 18) {
  console.log("You can vote!");
} else {
  console.log("Too young");
}


let Score = 72;

if (Score >= 50) {
  console.log("Passed!");
} else {
  console.log("Failed");}

// elseif
let SCORE = 75;

if (SCORE >= 90) {
  console.log("Grade: A");
} else if (SCORE >= 70) {
  console.log("Grade: B");
}  else {
  console.log("Fail");
}

// switch
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("No day");
}