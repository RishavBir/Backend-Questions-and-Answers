

/*
Shallow copy are used to copy the memory location of the object and not change the value of the object.
It only used for single objects and not the multiple objects.
*/



let obj = {name:"Rishav"}    // here it is only working for single object
let user ={...obj}
user.name = "Sohardo"

console.log(obj)


////////////////////////////////////////////////////////

let obj1 = {name:"rishav",
                address:{ city:"Kolkata"}}    //  See here shallow copy method is not working

let user1 = {...obj1}
user1.address.city = "Gurgaon"

console.log(obj1)