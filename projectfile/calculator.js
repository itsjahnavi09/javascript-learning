function calculator(x, y, operation) {

    if (operation === "+")
        return x+y;

    else if (operation ==="-")
        return x-y;

    else if (operation==="*")
        return x*y;

    else if (operation=== "/") {

        if (y===0)
            return "error";

        return x/y;
    }
    else{
        return "Invalid Operator";}
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(20, 4, "/"));
console.log(calculator(12, 2, "*"));
console.log(calculator(10, 0, "/"));