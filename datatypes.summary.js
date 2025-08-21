1// Primitive data types

// 7 types: String , Number, Boolean, null , undefined, Symbol , BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 345557788889n


//Reference type or Non primitive

//Array, object, function

const heros = ["shaktiman" ,"spiderman", "doga"] // arrays

//object
{
    name: "hitesh",
    age: 22,
}

// funtion

function myFunction = function(){
    console.log("hello world");
    
}
