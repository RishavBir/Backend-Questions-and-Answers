


//   What is the role of a primary node in a MongoDB replica set?


/*

ANS >>> 
        -- In mongodb the primary node is only responsible for recieving write operations directly from clients.
        -- All other nodes are read-only and can only serve read operations to clients. 
        -- If the primary node goes down or becomes unavailable, one of the secondary nodes 
           will be elected as the new primary node in order to maintain availability of the replica set.


[NOTE:  Here WRITE operations means modification in data that store in mongodb that is updating, delete etc.]
*/