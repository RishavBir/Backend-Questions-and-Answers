


                                            // Sum of two arrays


function sumOfArrays(arr1, arr2) {
    let result = [];
    let length = Math.max(arr1.length, arr2.length);
  
    for (let i = 0; i < length; i++) {
      let sum = (arr1[i] || 0) + (arr2[i] || 0);
      result.push(sum);
    }
  
    return result;
  }
  

console.log(sumOfArrays([2,3,4,5],[6,7,8,9]))