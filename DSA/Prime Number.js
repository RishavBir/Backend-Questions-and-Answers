

// Check the PRIME NUMBERS


function prime(arr){

    let result =[]

    arr.forEach(element => {
        let factor = 0

        for(let i=0; i<=element; i++){
            if(element % i === 0){
                factor++
            }
        }

        if(factor === 2){
            result.push(element)
        }
    });

return result
}

console.log(prime([2,5,8,9,3]))   //[2,5,3]