//Importing express
const express = require('express');

// importing from routes folders to create aiRoute
const aiRoutes = require('./routes/ai.routes')

//Transferring all the powers of express into app variable
const app = express();

//middleware
app.use(express.json());

//a basic route to check if server is running or not
app.get('/', (req,res)=>{
    res.send("Hello World");
})

//Defining API Routes
// basically means /ai will be served as a main route for all ai related requests
app.use('/ai', aiRoutes);

// exporting app to be used in server.js
module.exports = app;