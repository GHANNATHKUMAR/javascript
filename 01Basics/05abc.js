console.log("ghannath kumar ")
const score=500 
console.log(score)

const balance=new Number(100) // now using new keyword -> Number -> many methods are here .. 
console.log(balance)

console.log(balance.toString().length) // here many string methods we can use after converting into 
console.log(balance.toFixed(2)) // 100.00  -> for example we are making ecommeerce app 

console.log(score.toFixed(3))

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(2)) // 24 and it returns the value into String 
console.log(otherNumber.toPrecision(1)) // 2e+1 -> 20 
console.log(otherNumber.toPrecision(3)) // 23.9

const num=1000000
console.log(num.toLocaleString()) // 1,000,000 -> american standard 
console.log(num.toLocaleString('en-IN'))   // 10,00,000 -> Indian standard 

// ************************Maths *******************
// Maths library 
// we cans see many library function in math using concole.log(Math) on doing inspect 
console.log(Math) 
// PI , Sqrt , abs etc 
console.log(Math.abs(-4))  // 4
console.log(Math.round(3.4)) // 3
console.log(Math.round(3.8))  //4 
console.log(Math.ceil(4.6)) // 5
console.log(Math.floor(4.6))  // 4

console.log(Math.min(1,2,3,4,5))
// same as Math.max

console.log(Math.random()) // value will always between 0.0(inclusive) and 1.0 (exclusive)

console.log((Math.random()*10)+1); 

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // for both inclusive [10,20]

