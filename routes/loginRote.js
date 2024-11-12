const express=require('express');
const router=express.Router();
const {handelchkLogin}=require('../controllers/loginController');


//This Method is Geting All User by user route
router.route('/').post(handelchkLogin);// calling differ function from a single route path


module.exports=router;