const mySQLConnection = require('../database/connection');
const tabelName = "tbl_usermaster";
var _userModel = require('../dataModels/userModel');
var _userModelforJWT=require('../dataModels/userModel');
var _loginApiModel = require('../dataModels/apiLoginModel');
const jswTokan = require('jsonwebtoken');
require('dotenv').config();
//const secretKey=process.config.SECRETKEY;
const secretKey = 'i am Yogesh Sharma';
/* START*/
/*  This function Get  Data By Id from Tabel -Single Record */
async function handelchkLogin(req, response) {
    try {
        
       // Set Intial Value In Object _loginApiModel
        _loginApiModel.loginStatus = false;
        _loginApiModel.statusCode = 301;
        _loginApiModel.msg = "1st Stage - ";
        // Geting Data From URL Boady and Asiening in to Local Object
        _userModel.username = req.body.username;
        _userModel.pwd = req.body.pwd;
        _userModelforJWT.username=req.body.username;// a Difrent User Model For Creating A JWT Token Removing Password form Model

        // Prepare SQL Query 
        var SQLQuery = "select * from " + tabelName + " where username='" + _userModel.username + "'";
        // Log Incoming Request in Log
        console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
        mySQLConnection.query(SQLQuery, (err, rows) => {
            if (err) {
                _loginApiModel.msg = " SQL Query Err Stage Wrong Login Detail : " + err.message;
                return response.status(_loginApiModel.statusCode).json({ _loginApiModel });
            }
            else {
                if (rows.length > 0) {
                    //console.log(`user name and password matching result  :  ${rows[0].username} == ${_userModel.username} && ${rows[0].pwd} == ${_userModel.pwd}`);
                    //console.log(rows[0].username == _userModel.username && rows[0].pwd == _userModel.pwd);
                    if (rows[0].username == _userModel.username && rows[0].pwd == _userModel.pwd) {


                        jswTokan.sign({ _userModelforJWT }, secretKey, { expiresIn: '4h' }, (err, tokean) => {
                            if (err) {
                                _loginApiModel.msg = "Error in JSW Token" + err.message
                                return response.status(_loginApiModel.statusCode).json({ _loginApiModel });
                            }
                            else {
                                _loginApiModel.loginStatus = true;
                                _loginApiModel.statusCode = 200;
                                _loginApiModel.msg = " Login Sucessfull";
                               // _loginApiModel.tokan = JSON.stringify(tokean);
                               _loginApiModel.tokan = tokean;
                                console.log("Tokean From Issue Athuerty : "+_loginApiModel.tokan);
                                return response.status(_loginApiModel.statusCode).json({ _loginApiModel });
                            }

                        }
                            // return response.status(_loginApiModel.statusCode).json( {_loginApiModel} );

                        );
                    } /* End for  This  if (rows[0].username == _userModel.username && rows[0].pwd == _userModel.pwd) */
                    else {          /*  if (rows[0].username == _userModel.username && rows[0].pwd == _userModel.pwd)   if No Record Found Againset Reuested Data /user name */
                        _loginApiModel.msg = " Wrong Password  : ";
                        return response.status(_loginApiModel.statusCode).json({ _loginApiModel });
                    }
                }
                else { /* if (rows.length > 0) Wrong User Name */
                    _loginApiModel.msg = " Wrong User Name : ";
                    return response.status(_loginApiModel.statusCode).json({ _loginApiModel });
                }

            }
        })
    } catch (err) {
        _loginApiModel.loginStatus = false;
        _loginApiModel.statusCode = 301;
        _loginApiModel.msg = " Catch Block and Err Msg is  : " + err.message;
        return response.status(_loginApiModel.statusCode).json({ _loginApiModel });
    }

    // return response.status(_loginApiModel.statusCode).json( _loginApiModel );
    // End mySQLConnection
}; /*End for This -> async function handelchkLogin(req, response) {*/
/* END */
module.exports = {
    handelchkLogin,
};