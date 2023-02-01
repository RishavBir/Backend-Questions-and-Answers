


                                                // GET API


/*

const mongoose  =  require ("mongoose")
const userData = require("./userModel")



const gettingData = async function(req,res){
    try{
        let userId = req.params.id
        const fetchDetails = await userData.findOne({_id:userId})
        res.status(200).send({status:true, msg:"getting the data successfully", data:fetchDetails})
    }
    catch(err){
        res.status(500).send({status:false, msg:"not getting the data"})
    }
}


module.exports.gettingData = gettingData

*/