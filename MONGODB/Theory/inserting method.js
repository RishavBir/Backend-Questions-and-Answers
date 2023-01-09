



//  What is the syntax for inserting a document into a collection in MongoDB?



/*

There are two methods of inserting data in mongodb

a) insertOne() : 

                        db.collection.insertOne({
                            name: "John",
                            age: 30,
                            city: "New York"
                        })


b) insertMany() :

                         db.collection.insertMany([
                        {
                            name: "Alice",
                            age: 25,
                            city: "Chicago"
                        },
                        {
                            name: "Bob",
                            age: 35,
                            city: "Los Angeles"
                        }
                        ])



*/