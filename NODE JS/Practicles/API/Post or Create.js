

                                    
                                            // CREATE / POST API

/*

const mongoose  = require("mongoose")
const userData = require("./userModel")


const postingData = async function(req,res){
    try{
        let data = req.body
        const createData = await userData.create(data)
        res.status(201).send({status:true, msg:"successfully created", data:createData})
    }
    catch(err){
        res.status(500).send({status:false, msg:"not posted"})
    }
}



module.exports.postingData  = postingData

*/