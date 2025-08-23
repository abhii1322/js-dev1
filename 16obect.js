1 // singleton  literals ki trah declare krte h to singleton nhi bnta h (constructor se krte h to hmesha bnta h )

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek VERMA",
    [mySym]: "mykey1",
    age : 18,
    location: "jaipur",
    email: "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays:  ["Monday","Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "abhi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abhi@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
