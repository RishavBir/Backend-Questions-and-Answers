
/*

JWT stands for jsonwebtoken. It is used for verification purposes. After succesfull login , jwt is created for 
that particular user in the backend.

----> JWT consist of three parts:
    a) Header    b) Payload     C) Signature

Header >>>> It consist of some algorithm
payload >>>> It consist of some Claims. Here claims means data about the users.
Signature >>>> It basically verify the user with their credentials they provide while log in.

*/


// EG >>>> 

let encodedData = jwt.sign({name:"rishav"},process.env.SECRET)
let decodedData = jwt.verify(encodedData, process.env.SECRET)

console.log(encodedData,decodedData)