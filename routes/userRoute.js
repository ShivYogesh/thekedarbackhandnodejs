const express=require('express');
const router=express.Router();
const {handelGetAll,handelAddNewRecord}=require('../controllers/userController');
const {handelGetById,handelUpdateById,handelDeleteById}=require('../controllers/userController');
const checkAuth=require('../middleware/checkauth');
/*  *********** Start *****************   */
// This Route is Route as [/api/user]
/*  ************ End ****************   */
//This Method is Geting All User by user route
router.route('/').get(checkAuth,handelGetAll).post(handelAddNewRecord);// calling differ function from a single route path
//router.get('/',handelGetAll);
//router.post(handelAddNewRecord);
router.route('/:id')
.get(handelGetById)
.post(handelAddNewRecord)
.put(handelUpdateById)
.delete(handelDeleteById);
//router.get('/:id',handelGetById);
//router.put('/:id',handelUpdateById);
//router.delete('/:id',handelDeleteById);

module.exports=router;


