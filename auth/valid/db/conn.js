const mongoose=require('mongoose');
module.exports.connect=mongoose.connect("mongodb+srv://tejaslute24:Tejas123@cluster1.k05vg76.mongodb.net/bb").then(()=>{
    console.log("Connection Sucessful ! ");
}).catch((err)=>{

    console.log(err);
});

