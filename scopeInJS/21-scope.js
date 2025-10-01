// var c = 300

let a = 300
if (true) {
    let a = 10
    const b = 20 
    console.log("INNER", a);
}

// When curly braces {} come with functions or if-else, it's called scope
// Variables inside {} are in block scope, outside are in global scope

console.log(a);
// console.log(b); // error: b is not defined in this scope
// console.log(c);

