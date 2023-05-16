const express=require('express');
const router=express.Router();
const user=require('../model/users');

router.post('/login',async(req,res)=>{
    const email1=req.body.email;
    const password1=req.body.password;

    const result=await user.findOne({email:email1}).exec(); // .exec return promise 
    console.log(result);
    if(result)
    {
       
        if(result.password==password1)
        {
            console.log("Login sucessful");
            res.send("Login Sucessful ");
        }
        else{
            res.send("Wrong password ! ");
            console.log("Wrong passowrd ");
        }
    }
    else{
        console.log("Email not regrster ");
        res.send("Email not regester ");
    }
});

router.post('/regester',async(req,res)=>{
    const email1=req.body.email;
    const password1=req.body.password;
    const cpassword1=req.body.cpassword;
    if(password1!=cpassword1)
    {
        res.send("Please reentered password ! ");
        // res.redirect('/regester') 
        
    }
    else{

    const result= await user.findOne({email:email1}).exec();
    if(result)
    {
        res.send("User already regrester ");
        console.log("User already regrester ");

    }
    else{

        const insert1=new user({
            email:email1,
            password:password1
        });

        const result=await insert1.save();

        if(result){
            console.log("USer regrsterd ");
            res.send("User regrester ");
        }
        else{
            console.log("error  !");
            res.send("error");
        }
    }
}
    
})

module.exports=router;