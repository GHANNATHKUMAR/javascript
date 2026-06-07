// forEach not returnanyvalue 

// but filter return value 

const mynum = [0,1,2,3,,4,5,6,,7,8,9,20]
const newnum=[]
mynum.forEach((element)=>{
    if(element>2) newnum.push(element)
})

console.log(newnum)

const  mynum2=mynum.filter((item)=>{
    return item>2
})
const  mynum3=mynum.filter((item)=> item>2) // filter return and it is only one statement so we can return like this 

console.log(mynum2,mynum3)

// now next is map which is a callback function 

const arr = [0,1,2,3,,4,5,6,7,8,9,20]
const newarr=arr.map((num)=> num+10)
// const newarr=arr.map((num)=> {
//    return num+10
// })
console.log(newarr)

// chaining 
const newarr1=arr.map((num)=>num*10).map((num)=>num+5).filter((num)=>num>10) // so multiple method applied here 

console.log(newarr1)

// reduce method 

const mynums=[1,2,3,4,5]
let intialvalue=0
const mytotal=mynums.reduce((accumulator , currentval)=>{
    return accumulator+currentval
},intialvalue)

const mytotal2=mynums.reduce((accumulator , currentval)=>{
    return accumulator+currentval
},2)
console.log(mytotal2) 


const shopping=[
    {
        course : "python",
        price : 50000
    }
    ,
     {
        course : "java",
        price : 500
    },
     {
        course : "fullsatck",
        price : 300
    }

]
const total=shopping.reduce((accum,currentval)=>{
    return accum+currentval.price // added 
},0)
console.log(total) 


// note 
// foreach -> callback function , not returnanything  //(item , index , full array ) 
// map -> return fulkl array  , filter -> element based on condition -> callback function 
// reduce -> also itis an calback function 

