const mongoose=require('mongoose');
require('./db/conn');
require('./models/model');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const routerStud=require('./routes/routess');

app.use(bodyParser.urlencoded({extended:false}));
app.use(routerStud);
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log(`App listening at PORT ${PORT}`);
});
