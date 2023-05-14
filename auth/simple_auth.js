//const bodyParser = require('body-parser');
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cookie=require('cookie');
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));  // use to parse no-encoded data 
app.use(bodyParser.json());  //used to parse incoming request bodies that are in JSON format

// mongoose connection 

mongoose.connect('mongodb+srv://tejaslute24:Tejas123@cluster1.k05vg76.mongodb.net/autho',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection sucessful");
}).catch(()=>{
    console.log("Not connected ");
})

// schema creation 

const user=new mongoose.Schema({
    username:String,
    validate(value){
        if(value.length <3)
        {
            throw err ;
        }
    }
   // password:Number
});

// model creation 

const user1=new mongoose.model('friend',user);


// Login with usernmae and password API 





app.post('/login',async(req,res)=>{
    const username1=req.body.username;
   // const password1=req.body.password;

    console.log(username1);

    const find1= await user1.findOne({username:req.body.username}
        
    )
    if(find1)
    {
        res.send("User already present ! ");
        res.send(req.cookies);
    }else{
        const insert_user=new user1({
            username:req.body.username,
           // password:req.body.username
        })

        const result=await insert_user.save();
        console.log("User inserted !");
        res.cookie("username",`${username1}`).send("cookie set ");
        res.send(req.cookies);
        console.log(result);
        res.send(result);
        
    }
})


app.listen(3000,()=>{
    console.log("App listening at 3000 ");
})