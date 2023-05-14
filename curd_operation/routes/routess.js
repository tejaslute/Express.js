const express=require('express');
const router=express.Router();
require('../db/conn');
const users=require("../models/model");




router.post('/upload',async(req,res)=>{
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


router.put('/update',async(req,res)=>{
    try{
        const result=await users.updateOne({name:"tejas"},{name:req.body.name});
        console.log('updated');
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
});


router.get('/read',async(req,res)=>{

    try{
        const result=await users.find();
        res.send(result);
        console.log("Users present \n ",result );
    }catch(err)
    {
        console.log(err);
    }
});

router.delete('/delete',async(req,res)=>{
    try{
        const result=await users.deleteOne({name:req.body.name});
        res.send("deleted ");
        console.log(result);
    }catch(err){
        console.log(err);
    }
});

module.exports=router;