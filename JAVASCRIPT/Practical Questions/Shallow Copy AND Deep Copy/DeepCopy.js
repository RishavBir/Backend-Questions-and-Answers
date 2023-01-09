

/*
Similar to Shallow copy i.e copy the location of the memory and not the object. But it is work with both single
object as well as Multiple objects
*/



let obj = {name:"Rishav"}
let user = JSON.parse(JSON.stringify(obj))          //Both work with single as well as multiple obj
user.name = "Rohan"

console.log(obj)

///////////////////////////////////////////////////////////////////////////////////////////////////////


let obj1 = {name:"Rishav",
            address:{
                city:"Kolkata"
            }}
let user1 = JSON.parse(JSON.stringify(obj1))
user1.address.city = "Gurgaon"

console.log(obj1)