const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('bu6oyaxbau5cai3hwgik'/* database */,  'uiq1ty8o2r29j4ri' /* User Name */ , 'bigESzYhOcaYiuWmJMlQ'/* Password */ , {
    host: 'bu6oyaxbau5cai3hwgik-mysql.services.clever-cloud.com',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
  
  try {
     sequelize.authenticate();
    console.log('Squlizeconnection Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  module.exports=sequelize;