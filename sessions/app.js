const express=require('express');
const session=require('express-session');
const cookies=require('cookie');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const app=express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));  // use to parse no-encoded data 
app.use(bodyParser.json());  //used to parse incoming request bodies that are in JSON format


app.use(session({
    secret:'secret key ',
    resave:false,    // Only session is saved if mofification are done 
    saveUninitialized:false   // if session is initlized then only it saves . 
}));

app.get('/setsession',(req,res)=>{
    req.session.username='Tejas'  // name is stored in session object
   
    res.cookie('name',`${req.sessionID}`); // cookie set with session ID 
    
    console.log(req.session);
    
    res.send("Session created  and session ID send in cookies ! ");
    console.log('Sesssuiin ID ',req.sessionID);
});


app.get('/sessioncheck',(req,res)=>{
    console.log(req.cookies);
    if(req.sessionID == req.cookies.name)
    {
        console.log("User is validated ");
        res.send("User is vlaidated ");
    }
    else{
        console.log("User is not validated ");
        res.send("USer is not validated ");
    }
});

app.listen(3000,()=>{
    console.log("App listerning at port 3000 ");
});