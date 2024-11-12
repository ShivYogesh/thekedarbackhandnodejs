const express=require('express');
const router=express.Router();
const {handelGetAll,handelGetById,handelAddNewRecord,handelUpdateById,handelDeleteById}=require('../controllers/tenderindexController');


//This Method is Geting All User by user route
router.route('/').get(handelGetAll).post(handelAddNewRecord);// calling differ function from a single route path
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