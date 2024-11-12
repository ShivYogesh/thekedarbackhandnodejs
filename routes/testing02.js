const express=require('express');
const router=express.Router();

router.get('/01',(req,res)=>{
    res.status(200).send("I am From testing02/01");
});
router.get('/02',(req,res)=>{
    res.status(200).send("I am From testing02/02");
});
router.get('/03',(req,res)=>{
    res.status(200).send("I am From testing03/03");
});
module.exports=router;