const express=require('express');
const router=express.Router();
const user=require('../model/users');
const bcrypt=require('bcrypt');

router.post('/login',async(req,res)=>{
    const email1=req.body.email;
    const password1=req.body.password;
    console.log(password1, user);
    const result=await user.findOne({email:email1}); // .exec return promise 
    console.log("result:",result);
    if(result)
    {
        console.log(result.password);
    //    const newhash=bcrypt.hash(password1,10);
        const res1 = await bcrypt.compare(password1,result.password);
            console.log(res1);
            if(!res1)
            {
                console.log("Wrong credentials ! "+res1);
                res.send("Wrong creadentials ! ");
            }
            else
            {
                console.log("Login secuss ! "+res1);
                res.send("Login sucess ! ");
            }
       };
       
    }) 

        // if(result.password==password1)
        // {
        //     console.log("Login sucessful");
        //     res.send("Login Sucessful ");
        // }


// const securepassword1=await bcrypt.compare(password1,result.password);

//         console.log(securepassword1);
//         if(securepassword1)
//         {
//             console.log("Login sucessful");
//             res.send("Login Sucessful ");
//         }
//         else{
//             res.send("Wrong password ! ");
//             console.log("Wrong passowrd ");
//         }
//     }
//     else{
//         console.log("Email not regrster ");
//         res.send("Email not regester ");
//     }


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

    const result= await user.findOne({email:email1});
    if(result)
    {
        res.send("User already regrester ");
        console.log("User already regrester ");

    }
    else{
        bcrypt.hash(email1,10, (err, res1)=>{
            if(err){
                return res.send(err)
            }
            console.log(res1);
            const insert1=new user({
                email:email1,
                password:res1
            });

            const result=insert1.save()
            .then(user=>{
                console.log("USer regrsterd ");
                res.send("User regrester ");
            })
            .catch(e=>{
                console.log("error  !");
                res.send("error");
            });

        }); // hash( text , salts rounds)



    }
}
    
})

module.exports=router;