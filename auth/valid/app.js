require('./db/conn');
const bcrypt=require('bcrypt');
const bodyParseer=require('body-parser');
const express=require('express');
const app=express();
const router=require('./routes/route');
app.use(bodyParseer.urlencoded({extended:false})); 
app.use(bodyParseer.json()) // used to handle json format 
app.use(router);
app.listen(3000,()=>{
    console.log("App lisening at port 3000");
});

