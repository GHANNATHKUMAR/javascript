// scope 
// note taht scope and object literals are different 
// scope is {}that comes after if , else and function 
if(true){
    let a=5
    const b=7
    var c=5
}
// console.log(a) // error 
// console.log(b) // error 
console.log(c)  // value comesas 5 which is very dangerous 
// so always  use let and cnst 

let a=300 
if(true) {
    let a=10 
    console.log("inner : "+   a) //10 
}
console.log("gloabla: " + a) // 300 

// note that in code environment mein gloabal scope alag alag hai when we check through node and when we check through browser vahan global scope alaga hai 



let b=300 
if(true) { 
    console.log(b) // temporal dead zone , if we use same variable inside local scope , not try to use access global scope like this , else error we will get 
    let b=10 
    console.log("inner : "+   b ) //10 
}
console.log("gloabla: " + b ) // 300 



// scope level and minihoisting 
// nested scoping 



// function declaration methods 
addone(5) // no problem we can use before declaration 
function addone(num){
    return num+1
}

addtwo(8) // here error becuase in this case we cannot use it before declaration 
const addtwo=function(num) {
    return num+2
}

