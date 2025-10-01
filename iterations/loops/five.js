const coding = ["js", "ruby", "java", "python", "cpp"]

// Example 1: Using regular function
// coding.forEach(function (item) {
//     console.log(item);
// })

// Example 2: Using arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

// Example 3: Using external function
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// Example 4: forEach with all parameters (item, index, array)
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// Example 5: forEach with array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

