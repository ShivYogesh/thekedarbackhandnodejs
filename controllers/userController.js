const mySQLConnection=require('../database/connection');
const tabelName="tbl_masters_users";
const userModel=require('../dataModels/userModel');
var SQLQuery;

/* START*/
/*  This function Get All Data from Tabel*/
async function handelGetAll(req,response){
   // SQLQuery='select * from '+tabelName;//ye bhi ok ha
    SQLQuery=`select * from ${tabelName}`;
    mySQLConnection.query(SQLQuery,(err,rows)=>{
        if(err)
        {
            return response.status(400).json({msg:"Error From  Post Api Add New : " + err.message});
        }
        else
        {
            return response.status(200).json(rows);
        }
    })// End mySQLConnection
};
/* END */
/* START*/
/*  This function Get  Data By Id from Tabel -Single Record */
async function handelGetById(req,response){
    //SQLQuery='select * from '+tabelName+' where id='+req.params.id; // ye ok ha
    SQLQuery=`select * from ${tabelName} where id=${req.params.id}`;
    console.log('SQLUery : '+SQLQuery);
    mySQLConnection.query(SQLQuery,(err,rows)=>{
    
        if(err)
        {
            return response.status(400).json({msg:"Error From  Post Api Add New : " + err.message});
        }
        else
        {
            return response.status(200).json(rows);
        }
    })// End mySQLConnection
};


/* END */
/* START*/
/*  This function Add A New Record in Tabel */


async function handelAddNewRecord(req,response){
    //SQLQuery="insert into "+tabelName+"(username,pwd,isactive) values("+"'"+username+"','"+pwd+"' ,"+isactive+ ")"; ye bhi ok ha
    SQLQuery=`insert into ${tabelName} (username,pwd,isactive) values('${req.body.username}','${req.body.pwd}',${req.body.isactive})`;
    mySQLConnection.query(SQLQuery,(err,rows)=>{
    
        if(err)
        {
            return response.status(400).json({msg:"Error From  Post Api Add New : " + err.message});
           
        }
        else
        {
            return response.status(200).json({msg:"Record Added Successfully with :"+rows.id});
        }
    })// End mySQLConnection
};

/* END */
/* START*/
/*  This function Update A Old Record By Id in Tabel */



async function handelUpdateById(req,response){

   // SQLQuery="update "+tabelName+" set username='"+req.body.username+"', pwd='"+req.body.pwd+"',isactive='"+req.body.isactive +"' where id="+req.params.id; // ye bhi ok ha 
    SQLQuery=`update ${tabelName} set username='${req.body.username} ',pwd='${req.body.pwd}',isactive=${req.body.isactive} where id=${req.params.id}`;//ye bhi ok ha
    
    mySQLConnection.query(SQLQuery,(err,rows)=>{
    
        if(err)
        {
            return response.status(400).json({msg:"Error From  Update Api : " + err.message});
        }
        else
        {
            return response.status(200).json({msg:"Record Updated Successfully"});
        }
    })// End mySQLConnection
};

/* END */
/* START*/
/*  This function Delete A Record By Id in Tabel */

async function handelDeleteById(req,response){
   // SQLQuery='delete  from '+tabelName+' where id='+req.params.id;//ye bhi ok ha
    SQLQuery=`delete from ${tabelName} where id=${req.params.id}`;
    mySQLConnection.query(SQLQuery,(err,rows)=>{
    
        if(err)
        {
            return response.status(400).json({msg:"Error From  Delete Api : " + err.message});
        }
        else
        {
            return response.status(200).json({msg:"Record Deleted Successfully"});
        }
    })// End mySQLConnection
};
/* END */
module.exports={
    handelGetAll,
    handelGetById,
    handelAddNewRecord,
    handelUpdateById,
    handelDeleteById,
   
};