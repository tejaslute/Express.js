const mongoose=require('mongoose');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const validator=require('validator');
//const users=require('./models/model');
//const con=require('./models/conn');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;


mongoose.connect("mongodb+srv://tejaslute24:Tejas123@cluster1.k05vg76.mongodb.net/CURD",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Sucessful ! ")
}).catch((err)=>{
    console.log(err,'no')
});


// custom validation 

// const newSchema=new mongoose.Schema({
//     name:String,
//     age:{
//         type:Number,
//         validate(value){
//             if(value<3)
//             {
//                 throw err;
//             }
//         }
//     },
//     location:String
// });

// Validation using valiadro 
const newSchema=new mongoose.Schema({
    name:String,
        email:{
            type:String,
            unique:true,
            required:true,
            validate(value)
            {
                if(!validator.isEmail(value))
                {   
                    throw new Error("Email invalid ")
                }
            }
        }
    ,
    location:String
});
const users=new mongoose.model('user',newSchema);



app.post('/upload',async(req,res)=>{
    try{
        const user1=new users({
            name:req.body.name,
            age:req.body.age,
            location:req.body.location
        });

        const result=await user1.save();
        console.log("user saved \n " ,result);
        res.send(result);
    }catch(err){
        console.log(err);
    }
});




app.listen(PORT,()=>{
    console.log(`App listening at PORT ${PORT}`);
});
