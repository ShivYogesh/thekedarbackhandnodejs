const mysql=require('mysql2');
require('dotenv').config();
var mySQLConnection=mysql.createConnection({
   //Local DataBase Info
    /* host:'localhost',
    user:'root',
    password:'root',
    database:'testingDB'
    */
   //Online(clevercloud) DataBase Info
    
    host:'bu6oyaxbau5cai3hwgik-mysql.services.clever-cloud.com',
    user:'uiq1ty8o2r29j4ri',
    password:'bigESzYhOcaYiuWmJMlQ',
    database:'bu6oyaxbau5cai3hwgik'
    
   // host:process.env.DBHOST,
   // user:process.env.DBUSER,
   // password:process.env.DBPASSWORD,
    
    

});
mySQLConnection.connect((err)=>{
    if(err)
    {
        console.log('Error in DB Connection : '+JSON.stringify(err,undefined,2));
    }
    else
    {
       
    }
});

module.exports=mySQLConnection;