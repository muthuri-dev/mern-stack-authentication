const mongoose= require('mongoose');
const schema= mongoose.Schema;

const registerSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const register= mongoose.model('register',registerSchema);

module.exports=register;