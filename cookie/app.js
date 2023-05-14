const express=require('express');
const cookieParser=require('cookie-parser');
const cookie=require('cookie');
const { urlencoded } = require('body-parser');
const app=express();

app.use(cookieParser()); // middleware 
app.use(urlencoded());

app.get('/setcookie',(req,res)=>{
    res.cookie('name','sonu');
    res.cookie('password',`${req.body.password}`);
    console.log(req.body.password);
    res.send('Cookie set ');
    
});

app.get('/getcookie',(req,res)=>{
    console.log(req.cookies.password);
    res.send('cookie Send ');
})

app.listen(3000,()=>{
    console.log("App listening at port 3000");
})