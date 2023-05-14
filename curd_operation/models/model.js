const { default: mongoose } = require('mongoose');


const newSchema=new mongoose.Schema({
    name:String,
    age:Number,
    location:String
});


const users=new mongoose.model('user',newSchema);

module.exports=users;