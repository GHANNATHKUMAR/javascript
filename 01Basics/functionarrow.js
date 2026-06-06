// arrow function and js
 const user={
    name :"chhotu",
    email : "ghannthk@gmail.com" ,
    address : function(){
       console.log( `myself is  ${this.name} and my email is ${this.email} `)
    }
 }

 user.address()

 console.log(this) // {} -> empty object but if i wil run this line in browser it gives window object and hence we use all methods like click etc 

 function hello(){
    console.log(this) // many things are here not {}
 } 

//  function chai(){
//     console.log("hello")
//     let username="chhotu"
//     console.log(this.username) // undefined  
//  }

// const welcome=   ()=>{ // arrow function 
//      console.log("hello")
//     let username="chhotu"
//     console.log(this.username) //  here also  undefined   
// }


const addtwo = function(num1,num2){
    return num1+num2
}
console.log(addtwo(3,54))  //57 

// const addthree=(num1,num2,num3) => { //12 
//     return num1+num2+num3 // explicitly return 
// }
// console.log(addthree(3,4,5));

//  const addthree=(num1,num2,num3) =>  num1+num2+num3 // one line return we can do like this  
 const addthree=(num1,num2,num3) =>  ( num1+num2+num3) // best way to use like this inside () 


console.log(addthree(3,4,5)); // 12 

 const myobj=(num1,num2,num3) => ({username : "ghannth"} )  // so for retrun one line and here object is .. so we always use inside () // implicitly return 
 
console.log(addthree(3,4,5)); // 12 

// so explicitly return means we used return method 

