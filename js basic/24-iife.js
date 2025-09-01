// Immediately Invoked Function Expression (IIFE)

(function chai (){     // this is named iife because we give name chai 
    console.log(`DB CONNECTED`);
    
})() ;   //global scope ke pollution se problem hoti h kai baar  to global scope ke variable ya jo bhi declaration h ko htane ke liye iife ka use krte h hm 


( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
}
)('abhishek')
 


// do iife likne ke liye we use ; in the end of first function
