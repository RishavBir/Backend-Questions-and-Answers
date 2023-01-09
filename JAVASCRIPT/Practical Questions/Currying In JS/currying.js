

/*
Currying in javascript is a method that breaks our complex code into simpler version of code.
It helps us to avoid mistakes while executing the price of code.
*/


const add = a =>{
    return b =>{
        return c=>{
            return a+b+c
        }
    }
}

console.log(add(2)(3)(4))