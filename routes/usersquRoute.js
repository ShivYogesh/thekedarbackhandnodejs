
const express=require('express');
const router=express.Router();
const {handelgetall,handelCreate}=require('../controllers/userSQUController');
const {handelgetbyid,handelUpdatebyid,handelDeletebyid,handelgetbyusername}=require('../controllers/userSQUController');
const checkAuth=require('../middleware/checkauth');
/*  *********** Start *****************   */
// This Route is Route as [/api/user]
/*  ************ End ****************   */
//This Method is Geting All User by user route
//router.route('/').get(checkAuth,handelGetAll)
router.route('/').get(handelgetall).post(handelCreate);
router.route('/:id').get(handelgetbyid).put(handelUpdatebyid).delete(handelDeletebyid);
router.route('/getbyusername').post(handelgetbyusername);


module.exports=router;


