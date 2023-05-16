require('../db/conn');
const mongoose=require('mongoose');

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true   // validation 
    },
    password:String 
});

const user=new mongoose.model('collect',newSchema);

module.exports=user;