function calulateCartPrice(val1,val2,...num1){    // ... this is rest operator it is used for multiple values 
    return num1
} 

//console.log(calulateCartPrice(200,188,300,2000));


const user = {
    username: "abhishek",
    prices: 199

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}and prise is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "abhishek",
    price:199
})

const myNewArray = [200,400,600,100]

function resturnSecondValue(getArray){
    return getArray[1]

}
//console.log(resturnSecondValue(myNewArray));
console.log(resturnSecondValue([200,400,600,100]));
