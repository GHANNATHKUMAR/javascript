// immediately invoked function expression 
function hello(){
    console.log("congratulations bhai log ")
}
hello()

const welcome=function(){
    console.log("welcome here for you ");
    
}
welcome()

const welcomes=()=>{
    console.log("welcome here in our program...")
}
welcomes(); 


// NOW IIFE 
// WE USE IT BECUASE WE WANT TO IMMEDIATE EXECUTION AND GLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI HAI KAI BAAR ISILIYE WE USE IT 

(function chai(){ // so it is anonymous and named function 
    console.log(" welcome in chai ");
})(); // here we use it 

(()=> {
    console.log(" welcome in chai1 ")
})(); 


( (name) => {
    console.log(`welcome in chai2 ${name}`)
})('ghannath') ; 





