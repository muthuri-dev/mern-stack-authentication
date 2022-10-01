const express=require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT ||8081;
const app= express();
const jwt= require('jsonwebtoken');

//mongodb 
const mongoURL= 'mongodb://0.0.0.0/Auth';

//moddlewares
app.use(bodyParser.json());
app.use(cors());

//connecting to the database and server
mongoose.connect(mongoURL)
.then(function(){
    app.listen(PORT, function(error){
        if(!error){
            console.log(`App connected through port ${PORT}`);
        }else{
            console.log('Error: ',error);
        }
    })
}).catch(function(error){
    console.log('Mongo Error: ',error);
});

//Application Routes

//get route

app.get('/',function(req,res){
    res.json({
        mess:'server running'
    });
})