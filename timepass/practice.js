const mongoose=require('mongoose');
const express=require('express');
const app=express();

mongoose.connect("mongodb+srv://tejaslute24:Tejas123@cluster1.k05vg76.mongodb.net/ok",{useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    console.log("Connection sucessfull");
}).catch((err)=>{
    console.log(err);
})


const playlist= new mongoose.Schema({
    "name":String,
    "no":Number,
    "place":String

})

const playlist_model=new mongoose.model("data",playlist);

const insert_doc=async ()=>{
    try{
        const react1=new playlist_model({
            name:"Tejas",
            no:100,
            place:"rahata"
        })

        const javascript1=new playlist_model({
            name:"Sanket",
            no:200,
            place:"rahata"
        })

        const node1=new playlist_model({
            name:"pranav",
            no:300,
            place:"shirdi"
        })


        const result=await playlist_model.insertMany([react1,javascript1,node1]);
        console.log(result);
        const result1=await playlist_model.exists({name:"pranav"});
        if(result)
        {
            console.log("Present");
        }
        else{
            console.log("Not present");
        }
    }catch(err)
    {
        console.log(err);
    }
}

insert_doc();