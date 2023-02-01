


                                            // Creating a Server


const express = require("express")
const app = express()
const bodyPaser = require("body-parser")



app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended:true}))


app.use("/",route)


app.listen(process.env.Port||3000, function(){
    console.log("listen to port"+ (process.env.Port||3000))
})

