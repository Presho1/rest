//import express;
const express = require("express");

//initialize the express function
const app = express();

// set yuor port
const port = 8020

//introducing user routes to serer
const userRouter = require('./route/users')
app.use(userRouter)




// listen to the port
app.listen (port,()=>{
    console.log(`successfully created ${port}`)
})