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
 


 const marvel_heros=["ghannath" , "kumar"]
 const marvel_heros2=["abc" ,"ghf"]
 marvel_heros.push(marvel_heros2)
 console.log(marvel_heros) // [ 'ghannath', 'kumar', [ 'abc', 'ghf' ] ]
 // so here an array has been pushed..-> not merged 

 const marvel_heros3=["jkl","mki"]
 marvel_heros3.concat(marvel_heros) 
 console.log( marvel_heros3.concat(marvel_heros))  // but not chane array->  'jkl', 'mki', 'ghannath', 'kumar', [ 'abc', 'ghf' ] ]
 console.log(marvel_heros3) 

 const x=[1,2,3]
 const y=[3,4,5]
 x.push(y) // chnaged atual array 
 console.log(x)
 const z=x.concat(["ghj","klo"])
 console.log(z)

 // work of spred in js

 const k=[1,2,3,4]
 const l=[7,8,9,10,11,12,13]
 const p=[...k,...l] // all elemtns of k and l spreadly will come in p
 console.log(p) // [1, 2,  3,  4,  7, 8, 9, 10, 11, 12,13] 

 // flat 
 const r=[1,2,3,4,[4,5,6,7],[3,[4,5,6,7,[9,10,11,12,13,]]]]
 const f=r.flat(Infinity) 
 console.log(f)  // all element of array individually will come int it 


 console.log(Array.isArray("ghannath")) // false 
 console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]
 console.log(Array.from({name: "Hitesh"})) // []  empty array becuase they do not find ki key ko aaray banana hhai ya fir value koo  , so isko batana padt hai 

 let score1=100
 let score2=300
 console.log(Array.of(score1,score2)) // [100,300]
