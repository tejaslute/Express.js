const express=require('express');
const mongoose=require('mongoose');
const cookie=require('cookie');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const session=require('express-session');

const app=express();

app.use(bodyParser.urlencoded({extended:false})); // for decoded data 
app.use(bodyParser.json());   // for json format 

app.use(session({
    secret:'hello',
    resave:true,
    saveUninitialized:false
}));


mongoose.connect("mongodb+srv://tejaslute24:Tejas123@cluster1.k05vg76.mongodb.net/okkk").then(()=>{
    console.log("Connection Sucess")
}).catch((err)=>{
    console.log(err);
});

const Schema1 = new mongoose.Schema({
    count:Number
});

const views1=new mongoose.model('countt',Schema1);


app.get('/setcount',async(req,res)=>{
    if(req.session.veiws)
    {
        req.session.views++;
        res.write('<p> No. of views: '
            + req.session.views + '</p>')
        res.end();
    }else{
        req.session.views=1;
        console.log("User visited for first time ! ");
    }
    const result=new views1({
        count:req.session.views
    });

    const result1=await result.save();
    console.log(result1);
});

app.get('/getcount',(req,res)=>{
    const result=views1.find();
    console.log(result);
});

app.listen(3000,()=>{
    console.log("App listening at port 3000 ! ");
})


