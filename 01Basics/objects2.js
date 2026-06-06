// objest 
// destructure of object 
const course = {
    coursename:"cs12345",
    price :"12345",
    courseInstructor : "hitesh"

}
// const {courseInstructor} = course
// console.log(courseInstructor) 
const {courseInstructor: instructor} = course  // yahi hai destructure
console.log(instructor)

// API VALUE COMES IN FORM OF  json
// method fetch and get 
// take value from fetch api calls , store in a variable and we know object how to use 
// and sometimes data comes in array of objects 



