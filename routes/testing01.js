const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    res.status(200).send("I am From testing01 from external file");
});
route.get('/testing01/02',(req,res)=>{
    res.status(200).send("I am From testing01/02");
});
route.get('/testing01/03',(req,res)=>{
    res.status(200).send("I am From testing01/03");
});
module.exports=route;