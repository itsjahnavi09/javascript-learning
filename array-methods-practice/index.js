const students = [
 { name: "Rahul", marks: 82, passed: true },
 { name: "Aman", marks: 45, passed: false },
 { name: "Priya", marks: 91, passed: true },
 { name: "Sneha", marks: 67, passed: true },
];

// 1
let names=students.map(students => students.name);
console.log(names);

// 2
let fail = students.filter(students => students.marks <= 50);
console.log(fail.map(students =>students.name));

// 3
let topper = students.find(students => students.marks===91);
console.log(topper);

// 4
students.forEach(students => { console.log(students.name + '-'+ students.marks);})

// 5
let anyfailing = students.some(students=> !students.passed);
console.log(anyfailing);

// 6
let allpasing=students.every(students => students.passed)
console.log(allpasing);

// 7
let sorting= students.sort((a,b)=> b.marks - a.marks);
console.log(sorting);