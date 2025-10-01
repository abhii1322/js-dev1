function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}
// sayMyName()


function addTwoNumbers(number1, number2) {     // num1 and num2 are parameters
    console.log(number1 + number2)

    // let result = number1 + number2 
    // return result

    return number1 + number2
}
addTwoNumbers(3, 4)  // 3 and 4 are arguments


const result = addTwoNumbers(3, 9)
// console.log("Result:", result);


function loginUserMessage(username) {
    if (username === undefined) {  // or we can write if(!username)
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("abhishek"));

console.log(loginUserMessage()); // when no value is passed, it returns undefined

