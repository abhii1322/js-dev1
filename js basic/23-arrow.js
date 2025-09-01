const user = {
    username: "abhishek",
    price: 999,

     welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
                // this ka use current context btane kee liye krte h

        
     }    

}
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()


//console.log(this);


function chai(){
    let username = "abhishek"
    //console.log(this.username);
    
}
//chai()


//const chai = function(){
    //let username = "abhishek"
    //console.log(this.username);
    
//}
//chai()

const coffee = () => {           // arrow function
    let username = "abhishek"
    console.log(this);
    
}
//coffee()




//syntax of arrow function  () =>  {}

//const addTwo= (num1,num2) => {         // basic arrow function
    //return num1+num2   
//}
//console.log(addTwo(3,4))




//const addTwo= (num1,num2) =>  num1+num2   // implicit return 

//const addTwo= (num1,num2) => ( num1+num2)   // {} ka use krte h to return likhna padta h if we use paranthesis () then we dont use return

const addTwo= (num1,num2) => ({username: "abhishek"})  // object ko return krne ke liye we use paranthesis ()
console.log(addTwo(3,4))



// const  myArray = [2,5,8,9]   //extra
//myArray.forEach()