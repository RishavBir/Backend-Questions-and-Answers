


                                    
                                            // LINEAR SEARCH



function searching (arr,val){

for(let i=0; i<arr.length; i++){
    if(arr[i] === val){
        return i
    }
}
return -1
}

console.log(searching([2,4,5,3,1,7],1))  // 4