

// Higher order function are those function that takes callback functions as an argument and return the result



const sum= (a,b) =>{
return a + b
}

const added = (a,b,operator)=>{
    return operator(a,b)
}

console.log(added(5,4,sum))     // Here added is the HOF 