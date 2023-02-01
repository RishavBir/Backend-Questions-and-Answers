


                                                // UPDATE / PUT API


/*

const mongoose = require("mongoose")
const userData = require("./userModel")



const updateData = async function (req,res){
    try{
        const userId = req.params.id
        const data = req.body
        const detailsUpdated = await userData.findOneAndUpdate({_id:userId,data}, new:true)
        res.status(200).send({status:true, msg:"successfully updated", data:detailsUpdated})
    }
    catch(err){
        res.status(500).send({status:false, msg:"not updated"})
    }
}


module.exports.updateData = updateData

*/