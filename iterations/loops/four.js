const myObject = {
    js: 'javasccript',
    cpp: 'C++',
    rb: "ruby"
}

for (const key in myObject) {    // here we use for in loop for of loop is not working for objects
   // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["rb", "python", "java ", "cpp"]    // for of loop

for (const key in programming) {
    console.log(programming[key]);
    
}