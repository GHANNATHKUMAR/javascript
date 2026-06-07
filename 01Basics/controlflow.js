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



const arr=[1,2,3,4]
for(const num of arr){
    console.log(num)
}

const greeting = "hello world"
for(const greet of greeting){
    console.log(greet) // every character 
}





// maps
// it gives key in order in which i have inserted it 
// but object can give in any order 
const mymap=new Map() // only takes unique value 
mymap.set("In" , "India")
mymap.set("usa","America")
mymap.set("ch","china")
mymap.set("in","india")

console.log(mymap) // it will print key , value pair in form of object 

for ( const key of mymap){
    console.log(key) // it gives in form of array [key , value]
}
for(const [key , value ] of mymap){
    console.log(key,":-",value)
}

// this for of -> loop is not used in case of object 

const myobject ={
    "js" : "javascript" ,
    "cpp" : "c++",
    "rb" : "ruby"
}
for(const key in myobject){ // only key comes here 
    console.log(`${key} is shorcut for ${myobject[key]}`)
}

const arr12=["js","cpp","java"]
for( const key in arr12){
    console.log(key) // 0,1,2,3
    console.log(arr12[key])
}

// and note that we canot apply for in -> loop on object becuase Map is not iterable 


// forEach 

const coding = ["js" , " java "," c++ " , " html "]

coding.forEach(function(element) { // callback function 
    console.log(element) 
})

coding.forEach((element)=>{
    console.log(element)
})

function printme(element) {
    console.log(element)
}

coding.forEach(printme)


coding.forEach((item,index,arr)=>{ // here item , index and full array bhi aata hai 
    console.log(item,index,arr) // js 0 [ 'js', ' java ', ' c++ ', ' html ' ]
//  java  1 [ 'js', ' java ', ' c++ ', ' html ' ]
//  c++  2 [ 'js', ' java ', ' c++ ', ' html ' ]
//  html  3 [ 'js', ' java ', ' c++ ', ' html ' ]
})

const codingobject=[
    {
        filename : "java",
        fileex : "jy"
    },
    {
        filename : "javascript",
        fileex : "js"
    },
    {
        filename : "python",
        fileex : "py"
    }
]
codingobject.forEach((item)=>{
    console.log(item.fileex)
})


