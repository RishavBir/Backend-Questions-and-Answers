


// FIND THE LARGEST ELEMENT FROM THE ARRAY


function largestElement (arr){

    let largest = -Infinity

    for(let i=0; i<arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestElement([5,3,2,4,9]))