


                                        // MOVE ZEROES TO RIGHT


function moveZeroes (arr){

    let left = 0, right = 1

    while(left< arr.length && right < arr.length){
        if(arr[left] === 0 && arr[right] !== 0){
            // swap
            [arr[right],arr[left]] = [arr[left],arr[right]]
            left++
            right++
        }else if(arr[left] === 0 && arr[right]=== 0){
            right++
        }else{
            left++
            right++
        }
    }
    return arr
}

console.log(moveZeroes([3,0,-1,6,0,7,3,0,4]))   // [3,-1,6,7,3,4,0,0,0]