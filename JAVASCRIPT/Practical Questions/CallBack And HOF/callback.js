
/*
Callback function are those function that pass onto other functions as an argument.
In nodejs Callback functions are use to handle the asynchronous operations.
*/


const add = (a,b)=>{
    return a+b
}

const calculate = (a,b,operator)=>{
    return operator (a,b)
}

console.log(calculate(8,9,add))  // Here calculate is the Higher order function and add is the Callback.