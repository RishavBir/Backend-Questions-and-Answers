


                                        // BINERY SEARCHING



function searching (arr,val){

arr.sort((a,b)=>{
    return a-b
})

let left = 0, right = arr.length-1

while(left<=right){
    let mid = Math.floor((left+right)/2)

    if(arr[mid]=== val){
        return mid
    }else if(arr[mid] < val){
        left++
    }else{
        right--
    }
}
return -1
}

console.log(searching([2,6,3,-1,8,9],8))  // 4