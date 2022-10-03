const express=require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT ||8081;
const app= express();
const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs');

//mongodb 
const mongoURL= 'mongodb://0.0.0.0/Auth';


//database schema imports
const register=require('./models/schema');


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
});

//posting route (register)

app.post('/register',function(req,res){
    const newRegister=new register({
        name:req.body.name,
        email:req.body.email,
        password:req.body.pass,
    });
    newRegister.save(function(err){
        if(!err){
            console.log({newRegister});
        }else{
            console.log('saving error:  ',err);
        }
    });
});

// posting route (login)

app.post('/login',async function(req,res){
     const user= await register.findOne({
        email:req.body.email,
        password:req.body.pass
    });
    if(user){
        return res.json({status:'ok',user:true});
    }else{
        return res.json({status:'error',user:false});
    }
});