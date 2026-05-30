// Date and Time 
// Dat e-> Objects 
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString()) 
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) // object 

let mycreateDate=new Date(2025, 1 , 24); // y , M , D  // here 1 means february 
console.log(mycreateDate.toLocaleString()) 
console.log(mycreateDate.toLocaleDateString()) // 2/24/2025 
//and important to note that month start from 0 in javascript 
let mydate1=new Date(2025, 1 , 24,5,3); // y , M , D , hour , minute
console.log(mydate1.toLocaleString()) 
console.log(mydate1.toLocaleDateString())

// directly into  year - month - day 
let mydate2=new Date("2026-03-30")
console.log(mydate2.toLocaleString())
console.log(mydate2.toLocaleDateString()) // /30/2026  

let mydate3=new Date("03-31-2026") // m-d-y
console.log(mydate3.toLocaleString())
console.log(mydate3.toLocaleDateString()) 
console.log(mycreateDate.getTime()) // mycreateDate is an object and getTime is a method 

// now timestamp  
let mytimestamp=Date.now()
console.log(mytimestamp) // time 

console.log(mytimestamp/1000) // time in seconds will get 
console.log(Math.floor(mytimestamp/1000))  //1780137832 -> Time in seconds 


let newDate = new Date();  // Date and Time both  
console.log(newDate.getDate()); 
console.log(newDate.getMonth()+1) 
console.log(newDate.getDay()) 
// monday start from 1
// month start from 0 
newDate.toLocaleString('default', {
    weekday: "long"
})



