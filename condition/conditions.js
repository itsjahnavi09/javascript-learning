// if
let age=19;
if (age>=18){
    console.log("you can vote");
}
let score=76;
if(score<=50){
    console.log("you passed");
}
let istrue=true;
if(!istrue){
    console.log("yayy");
}

// else
let AGE=15;
if (AGE>=18){
    console.log("you can vote");
}else {
    console.log("too young");
}

let Score=76;
if(Score<=50){
    console.log("you passed");
}else{
    console.log("you failed");
}

// else if
let SCORE=87;
if(SCORE>90){
    console.log("flying colours");
}
else if(80<=SCORE<=90){
    console.log("less flying colours");
}
else{
    console.log("yayy");
}

// switch
let day='monday';
switch(day){
    case 'monday':
        console.log("start of the week");
        break;
    case 'friday':
        console.log("weekend is near");
        break;
    default:
        console.log("yes");
}