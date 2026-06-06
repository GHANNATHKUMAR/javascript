// singleton object // made by constructor  using object .create // one instacne 
// object literals  -> multiple instances 
const mysym=Symbol("key1")
const jsuser={
    name: "hitesh", // name is key 
    "fullname" : "kuamr", // key is string so can be accessed by only string 
    age: "age",
    location : "patna", // can be access by both bracket and dot 
    email :"ghannathk@gmail.com",
    isloggedIn : "false",
    lastlogindays: ["tuesday","saturday"],
    "sex":male ,
   [mysym]:"mykey1" // important 
} 

console.log(jsuser.name)
console.log(jsuser["email"])
console.log(jsuser["fullname"]) 
console.log(jsuser[mysym]) // mykey1 using symbol  , only this is syntax 

// jsuer.email="chhotu@gmail.com"  // changed email 
// Object.freeze(jsuser) //freezed
// jsuser.email="chatgpt@gmail.com" // no change here due to freeze 

jsuser.greeting=function(){
    console.log("hello bhai log ")
}
jsuser.greetingTwo=function(){
    console.log(`hello bhai ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo()) 


