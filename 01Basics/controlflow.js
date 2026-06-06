// js -> if , else etc , sitch 

// faly value -> false , 0 , -0 , BigInt 0n , "", null , undefined , Nan ,"",[], 

// truthy values -> "0" , 'false' , " " , function(){} (note that empty function is truthy value ), 

const emptyobj={}
if(Object.keys(emptyobj).length==0){
    console.log("empty object it is ");
}

// Nullish coalescing operator ?? : null undefined 
let val;
// val=5 ?? 10
// console.log(val) // 5

val=null ?? 10
console.log(val) // 10 -> if comes null then print 10 
val=undefined ?? 18 // same here if comes undefined then print 18 
console.log(val) // 18  

val = null ?? 210 ??15 
console.log(val) // 210 so jab pahla value mil jayega vahi return kar dega

// terniary operator 
// a>b ? print(a)  : print(b)  
