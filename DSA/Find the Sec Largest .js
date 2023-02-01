



// Find the second largest element from the array


function secLargestElement (arr){
    let first = -1 , second = -1

    for(let i=0; i<arr.length; i++){
        if(first < second){
            first = second
            first  = arr[i]
        }else if(second<arr[i] && first != arr[i]){
            second = arr[i]
        }
    }
    return second
}

console.log(secLargestElement([3,8,7,4,-1]))