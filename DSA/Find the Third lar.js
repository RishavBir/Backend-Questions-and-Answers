



                        // Find the Third largest element from the array


// STEP 1>>>

/*
function findThirdLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
      return b - a;
    });
    
    // Return the element at index 2 (the third element)
    return arr[2];
  }
  */



  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // STEP 2 >>



function findThirdLargest(arr) {
    var first = -Infinity, second = -Infinity, third = -Infinity

    for(let i=0; i<arr.length; i++){
        if(first < arr[i]){
            third = second
            second = first
            first = arr[i]
        }else if(second < arr[i]){
            third = second
            second = arr[i]
        }else if(third <  arr[i]){
            third = arr[i]
        }
    }
    return third
}

console.log(findThirdLargest([3,6,7,2,5,8,9,11]))

