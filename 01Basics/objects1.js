const tinderuser=new Object()
console.log(tinderuser) // empty object 

const tinderuser1={}
console.log(tinderuser1) // empty object 

const tinderuser2={}
tinderuser2.id="12345"
tinderuser2.name="ghannath"
tinderuser2.isloggedin=true

console.log(tinderuser2)
const regularuser={
    email:"ghannath@gmail.com",
    fullname : {
        userfullname : {
            firstname : "ghannath",
            lastname:"kumar"

        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)
console.log(regularuser.fullname.userfullname?.firstname) // optional chaining by ?

const obj1={
    1 :"a",
    2:"b"
}
const obj2={
    3 :"a",
    4 :"b"
}
const obj3={obj1,obj2} // here actually objects are copied inside that 

const obj4=Object.assign({},obj1,obj2) // assign method copy and return value and {}-> it emans all value swil go inside empty {}
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj5={...obj1, ...obj2}  // here also,  easy spread obj1 and obj2 by ...
console.log(obj5) 
const users=[
    {
        id:"123",
        email : "ghananthk@gmail.com"
    }
,
{
id:"12334",
email:"hbfghf;@gmail.com"
}    
] // array of objects  so array ke andar bahut sare objects 

users[1].email
console.log(users[1].email)
const user={
    name : "ghannth",
    "email":"ghad@gmail.com"
}

console.log(Object.keys(user)) // and return array this method

console.log(Object.values (user)) // all values 
console.log(Object.entries(user)) // each key value as an aray 

console.log(user.hasOwnProperty('isLoggedin')) // to check that user has this key or not 



