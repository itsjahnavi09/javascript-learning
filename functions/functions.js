function greeting(){
    console.log("tum kem cho?");
}
greeting();

function greet(name){
    console.log(`hello my name is ${name}`);
}
greet('jahnavi');
greet("sona");

function showdate(){
    let today=new Date().toDateString();
    console.log("Today is " ,today);
}
showdate();

function add(a,b){
    console.log(a+b);
}
add(3,5);

function greeti(name='stranger'){
    console.log(`my name is ${name}`);
}

greeti();
greeti('priya');
// return functions
function subtract(a,b){
    return a-b;
}
let result=subtract(5,4);
console.log(result);

function check (n){
    if (n<0) return "negative";
    return"positive";
}
console.log(check(7));

// arrow function 
const greeto=(name) =>{
    return`hello ${name}`;
};
console.log(greeto('jj'));

const greetoi=(name) => `hello ${name}`;
console.log(greetoi('kd'));

const checkev=(c)=>{
    if (c%2===0){
        return `even`;
    }
    else{
        return `odd`;
    }
}
console.log(checkev(7));
console.log(checkev(4));

const checke=(c)=>{
    return c%2===0;
}
console.log(checke(7));
console.log(checke(4));