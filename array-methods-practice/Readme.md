3.1.1 MAP()
Definition-It is used to create a new array by transforming each element.
Syntax-array.map((item) => {
 return item;
});
Examples 1.
let numbers = [1, 2, 3, 4];

let doubled = numbers.map((num) => {
 return num * 2;
});

console.log(doubled);
Output : [2, 4, 6, 8]

           Explanation: So here doubled[0]= num[0]*2=2
             doubled[1]= num[1]*2=4
             doubled[2]= num[2]*2=6
             doubled[3]= num[3]*2=8

Example 2.
 let names = ["alice", "bob", "carol"];
let capitals = names.map((name) => {
 return name.toUpperCase();
});
console.log(upperNames);
Output: ["ALICE", "BOB", "CAROL"] 
Explanation: here each string is getting converted to upperstring




3.1.2 Filter 
Definition-filter() is used to create a NEW array with only the elements that pass a given condition (return true). Original array is NOT changed.


Syntax:
 array.filter((item) => {
  return condition;
  });


Example 1.
             let scores = [45, 72, 88, 33, 91];
let passing = scores.filter((score) => {
 return score >= 60;
});
console.log(passing);
Output: [72, 88, 91]
Explanation: score above or equal than 60 from the scores array are filtered to passing array.


Example 2
let words = ["cat", "elephant", "dog", "butterfly"];
let longWords = words.filter((word) => {
 return word.length > 4;
});
console.log(longWords);
Output: ["elephant", "butterfly"]
Explanation: word length more than 4 are only allowed 



3.1.3find()


Definition: find() returns the FIRST element that matches the condition. If there is no element it gives undefined.


Syntax:
 array.find((item) => {
   return condition;
 });


Example 1:
let ages = [12, 19, 25, 17, 30];
let firstAdult = ages.find((age) => {
 return age >= 18;
});
console.log(firstAdult);
Output: 19
 Explanation: 19 is the first no. after 18


Example 2:
let users = [
 { id: 1, name: "Alice" },
 { id: 2, name: "Bob" },
 { id: 3, name: "Carol" },
];
let foundUser = users.find((user) => {
 return user.id === 2;
});
console.log(foundUser);
Output: { id: 2, name: "Bob" }
Explanation: First is id===2 so it prints that






3.1.4 forEach()
Definition: forEach() runs a function on EACH element of the array . It does not return anything, only does its work. Use case: printing, logging, ya DOM update karna.


Syntax:
array.forEach((item) => { });

 Example 1:
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
 console.log("I like " + fruit);
});
Output:
I like apple
 I like banana
 I like cherry
Explanation: For every element it printed one line.



Example 2:
let prices = [100, 200, 300];
let total = 0;
prices.forEach((price) => {
 total = total + price;
});
console.log(total);
Output: 600
Explanation: it took all the elements of price to get total.






3.1.5 some()
Definition: Some() checks if AT LEAST ONE element passes the condition. Returns true or false.

Syntax:
 array.some((item) => {
  return condition;
 });


Example 1:
let marks = [40, 55, 30, 20];
let anyPassing = marks.some((mark) => {
 return mark >= 50;
});
console.log(anyPassing);
 Output: true
/Explanation: 55 is greater than 50 hence true

Example 2:
let temps = [22, 25, 28, 24];
let anyHot = temps.some((temp) => {
 return temp > 35;
});
console.log(anyHot);
Output: false
Explanation: no temp is greater than 35 hence false




3.1.6 every()
Definition: every() checks if ALL elements pass the condition. Returns true or false.
 
Syntax:
array.every((item) => {
  return condition;
});

Example 1:
let testScores = [70, 85, 90, 65];
let allPassed = testScores.every((score) => {
 return score >= 60;
});
console.log(allPassed);
 Output: true
 Explanation: every score is greater than 60 hence true

Example 2:
let nums = [2, 4, 5, 8];
let allEven = nums.every((num) => {
 return num % 2 === 0;
});
console.log(allEven);
 Output: false
 Explanation: 5 is odd hence false



3.1.7. sort()

 Definition: sort() arranges elements of an array IN PLACE (original array changes).By default, it sorts strings alphabetically.For Numbers we have to give a compare function.

 Syntax:
 array.sort();                          // strings 
 array.sort((a, b) => a - b);           // numbers ascending
 array.sort((a, b) => b - a);           // numbers descending

 Example 1:
let cities = ["Mumbai", "Delhi", "Agra", "Chennai"];
cities.sort();
console.log(cities);
 Output: ["Agra", "Chennai", "Delhi", "Mumbai"]
 Explanation: Alphabetically A to Z sort 

Example 2:
let numList = [40, 5, 100, 25, 3];
numList.sort((a, b) => a - b);
console.log(numList);
Output: [3, 5, 25, 40, 100]
Explanation: Numbers ascending order sort 
 Note: without (a, b) => a - b numbers are sorted in wrong order.
