let student={
    name :"jahnavi",
    age:19,
    branch:'CSE',
};
console.log(student);
console.log(student.name);
console.log(student["name"]);

student.age = 20;
console.log(student.age);
student.college = "Jaypee";
console.log(student);

let name={
    name:"jj",
    address:{
        city:"noida",
        state:"up",
    }
};
console.log(name.address.city);