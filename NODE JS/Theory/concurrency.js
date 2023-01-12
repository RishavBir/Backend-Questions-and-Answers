




// How Modejs handle concurrency ??


/*

---- Nodejs can execute more than one code simultaneously because of LIBUV Library
---- LIBUV Library create multiple thread and each thread are responsible for the execution of one code.
---- Because Node.js uses a single thread but with the use of LIBUV it acn create multiple thread for 
     all event handling, it can handle a large number of concurrent connections with less 
     overhead compared to thread-based models.


*/
