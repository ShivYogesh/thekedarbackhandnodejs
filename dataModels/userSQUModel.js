const {  DataTypes } = require('sequelize');
const sequelize =require('../squlizeconnection');

const userSQUModel=sequelize.define('tbl_masters_users',{
    id:{type:DataTypes.NUMBER,allowNull:false,primaryKey:true},
    username:{type:DataTypes.STRING,allowNull:false},
    pwd:{type:DataTypes.STRING,allowNull:false},
    isactive:{type:DataTypes.BOOLEAN}
},
{ 
    tabelName:'tbl_masters_users',
    timestamps: false,

}
);
 
module.exports =userSQUModel;