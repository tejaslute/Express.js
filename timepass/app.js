const mongoose=require('mongoose');


const express=require('express');
const app=express();
const conn1=mongoose.connect('mongodb+srv://Tejas:ByLmIqtRTsbpk84l@cluster0.uqnxct7.mongodb.net/Student',{useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Succefull ");
}).catch((err)=>{
    console.log(err);
});

const playlist=new mongoose.Schema({
    name:String,
    d_no:Number,
    add:String
})

const data=new mongoose.model("company",playlist);

const caller= async()=>{
    try{

        const d1=new data({
            name:"Tejas",
            d_no:30,
            add:"Rahata"
        })

       // const result= await d.save();
       // console.log(result);


        const d2=new data({
            name:"Sanket",
            d_no:40,
            add:"Shirdi"
        })

        const d3=new data({
            name:"Pranav",
            d_no:50,
            add:"Rahata"
        })

        const result= await data.insertMany([d1,d2,d3]);
        console.log(result);
        console.log("data saved ! ");
    }catch(err){
        console.log(err);
    }

}

const display=async()=>{
    try{
        
        const result=await data.find({name:"Tejas"});
        console.log("Display result ");
        console.log(result);
    }catch(err)
    {
        console.log(err);
    }
};

const display_1=async()=>{
    try{
        
        const result=await data.find({d_no:{$gt:30}});
        console.log("Display result ");
        console.log(result);
    }catch(err)
    {
        console.log(err);
    }
};
//caller();

display();

app.listen(3000,()=>{
    console.log("App listening at 3000 ");
});

