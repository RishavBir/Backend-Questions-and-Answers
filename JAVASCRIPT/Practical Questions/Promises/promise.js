
/*
Promises are use to handle the asynchonous operations in nodejs.
They are also use to avoid complex callback hell situation.
*/



function sum(a,b){
    return new Promise ((res,rej)=>{
        res(a+b)
    })
}

sum(2,9).then((fulfil)=>{
    console.log(fulfil)
}).catch((err)=>{
    console.log(err)
})

//////////////////////////////////////////////////////////////////////////////////////////////////


                                            // Coverting PROMISE INTO CALLBACKS

function sum(a, b, callback) {
    return new Promise((res, rej) => {
      res(a + b);
    }).then(callback, (error) => {
      callback(error);
    });
  }
  
  sum(2, 9, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
  
