
/*

//  What is a replica set in MongoDB?

ANS >>>>
        a)  In MongoDB, a replica set is a group of MongoDB instances that maintain the same data set.
        b)  A replica set includes one primary instance and one or more secondary instances.
        c)  The primary instance receives all write operations, while the secondary instances 
            replicate the primary instance's data.

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



//  How does it provide high availability and data redundancy?


/*

ANS>>>> a) Replica sets provide high availability and data redundancy by ensuring that data 
           is always available and can be recovered in case of a failure.
        b) If the primary instance fails, one of the secondary instances will be automatically elected as the new 
           primary instance, and the replica set will continue to accept write operations.

*/