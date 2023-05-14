const con11=require('./db/conn');
const express=require('express');
const app=express();
app.use(con11.conn1())
app.get('/',(req,res)=>{
    res.send("Connection establish ");
    
});

app.listen(3000);