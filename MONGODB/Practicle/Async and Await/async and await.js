
/*      ASYNC

The async keyword is used to define an asynchronous function which returns a promise that is resolve or rejected
after the code execution.
*/



/*      AWAIT

Await keyword is used to wait for the promise to be returned.
It can only used inside an Async functuon.
*/



const creatingData = async function (req,res){
    try{
        let data = req.body
        const dataPosted = await userModel.create(data)
        res.status(201).send({status:true, msg:"successfully posted", data:dataPosted})
    }
    catch(err){
        res.status(500).send({status:false, msg:"not created"})
    }
}

module.exports.creatingData = creatingData