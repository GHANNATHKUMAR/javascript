// two types of data types : primitive(number , string , boolean ,(symbol  is used to make uniqueness) even if we take same value , undefined ) and nonprimitive (array , object , function )

// stack and heap 
// primitives make copy of varianle 
// but in nonprimitives they pass reference 





// *****************8String ****************

const firstname="ghannath"
const lastname="kumar"
const fullname=firstname+lastname
console.log(fullname)
console.log(`full name is ${firstname} and last name ${lastname}`)

const name="ghananth"
const repo=34
console.log(`In repo of ${name} there are ${repo}.. `)


const gamename=new String("Ghannath-kumar")
console.log(gamename[0])
console.log(gamename[1])
console.log(gamename.__proto__)
console.log(gamename.length) 
console.log(gamename.toUpperCase()) // but not chnaged original string 
console.log(gamename.charAt(2))
console.log(gamename.indexOf('h'))
const newstr=gamename.substring(0,4)
console.log(newstr)
const newstr1=gamename.slice(0,4)
console.log(newstr1)
const newstr2=gamename.slice(-8,10) // -> th-k here we can take -8 based on negative index i.e -8 to 10.. 
console.log(newstr2)

// trim nd replace 

const name1="      ghannat h    "
const newname=name1.trim() //remove white spaces from start and end 
console.log(newname) 

const url="ghannath20%k.com"
console.log(url.replace("20%","-")) 
console.log(url.includes("20%"))  // true 
console.log(url.includes("prabhat")) 

const city = "patna-darbhanga-saharsha"
const cityname=city.split("-")
console.log(cityname)