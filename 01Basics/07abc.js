// array 
//shallow copy -> pass reference -> on change  , also original change
// and deep copy 
const arr=[0,1,2,3,4,5,6,7,8,9,10]


const array2=new Array(1,2,3,4)
console.log(array2[1])

//push (element) -> add element to last.. 
// pop()  -> pop the last elemet.. 

// unshift -> add an element at first and i.e shift all elements.. -> if 10,000 elements arre in array , and if we do unshift then all 10,000 elemets will be shifted -> so very time consuming and also very load on computer .. so it is method.. 
// shift()-> remove element which has inserted to first  position .. 
// includes , indexOf 
console.log(arr)
arr.push(8)
arr.pop()
arr.unshift(11)
arr.shift()
console.log(arr)

// join -> add all elements at last after converting into string 

console.log(array2)
console.log(array2.join()) // a string 
const namearr=['ghannath', ' kumar ' ]
const name=namearr.join() // string 
console.log(name) // string 
console.log(typeof name) // string 

// slice , splice 
 // slice -> only copy element.. 
 // splice -> cut those element portion from original  array  including both index in splice..
 const a=[0,1,2,3,4,5,6,7,8,9,10]
 const ar=a.slice(1,4)  // 1,2,3
 console.log(a) // 0,1,2,3,4,5,6,7,8,9,10 
 const ar1=a.splice(1,4) // 1,2,3,4
 console.log(a) // 0,5,6,7,8,9,10

 // splice-> manupulates original array...
 