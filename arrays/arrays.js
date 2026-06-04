let fruits = ['apple','cherry','banana'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);
fruits[1]='mango';
console.log(fruits);

// push
let colours=['red','green'];
colours.push('blue');
console.log(colours);
colours.push('yellow','pink')
console.log(colours);
const newlength = colours.push('orange');
console.log(colours);
console.log(newlength);

// pop
fruits.pop();
console.log(fruits);
const names=['bob','jj','kd'];
const removed=names.pop();
console.log(removed);
console.log(names);

// map
let nums=[1,2,3,4];
let doubled=nums.map((nums)=> nums*2);
console.log(doubled);

let nam=['bob,jj'];
let capat=nam.map((nam)=>nam.toUpperCase());
console.log(capat);

// filter
 let no=[1,2,3,4,5];
 let evenno=no.filter((no)=> no%2===0);
 console.log(evenno);            