

/*
Agregation in Mongodb allow us to  create a pipeline and each pipeline consist of some stages and these stages 
perform some sort of functions.
*/



var pipeline  = [{$match:{name:"Rishav"}}]

db.getCollection("User").aggregate(pipeline)