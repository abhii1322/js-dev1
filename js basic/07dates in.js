// DATES

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2025,0,21,5,7)
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date ("01-14-2025")
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date ()
//console.log(newDate);
//console.log(newDate.getDay());
//console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})



