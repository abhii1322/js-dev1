1 // singleton - when we declare using literals, singleton is not created (singleton is created using constructor)

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek VERMA",
    [mySym]: "mykey1",
    age : 18,
    location: "jaipur",
    email: "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abhi@chatgpt.com"
// Object.freeze(JsUser) // freeze prevents modifications
JsUser.email = "abhi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js user");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
