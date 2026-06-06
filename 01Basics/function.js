function addtwoNumber(number1, number2){
    console.log(number1+number2);
    
}
addtwoNumber(3,4)

// function isloggedin(username){
//     if(username==undefined) {
//         console.log("username is undefiend ")
//         return
//     }
//     return `${username} is a man`
// }
// console.log(isloggedin("ghannath")) 
function isloggedin(username="chhotu"){  // default value  
    if(username==undefined) { //  now never wit will be run  
        console.log("username is undefiend ")
        return
    }
    return `${username} is a man`
}
console.log(isloggedin("ghannath")) 

function calcualtecartprice(...num1){
    return num1
}
console.log(calcualtecartprice(100,200,300,400)) //[ 100, 200, 300, 400 ] 

function calcualtecartprice(val1,val2,...num1){ //...->  rest operator 
    return num1
}
console.log(calcualtecartprice(100,200,300,400,700)) //[  300, 400 ,700  ] 

const pobj={
    name :"ghannath",
    email :"ghannathk@gmail.com"
}
function personobj(myobject) {
    return `my name is ${myobject.name} and my email is ${myobject.email}`   // and note that if iwill do prices instead of price it wil give undefined but in typescript it automatically handle 
    // so we have to also see that email and name is key are there or not 
}
console.log(pobj)
console.log(personobj(pobj)) 

console.log(personobj({
    name:"chhotu" ,
    email :"chhotu@gmail.com"
}))

