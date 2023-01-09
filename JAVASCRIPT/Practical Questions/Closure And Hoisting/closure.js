

// Closure basically give us the access to the inner function from the outer functions.


function names (){
    const givenName = "Rohan"

    function displayName(){
        console.log(givenName)
    }
    displayName()
}
names()