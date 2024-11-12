const express=require('express');
const mySQLConnection=require('./database/connection');
const bodyparser=require('body-parser');
const teting01Router=require('./routes/testing01');
const testing02Router=require('./routes/testing02');
const userRoute=require('./routes/userRoute');
const usersqRoute=require('./routes/usersquRoute');
const tenderindexRoute=require('./routes/tenderindexRote');
const loginRoute=require('./routes/loginRote');
const cors=require('cors');
require('dotenv').config();
const app=express();

//Midelware

app.use(cors({
    origin:"*",
}));

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/testing01',teting01Router);
app.use('/testing02',testing02Router);
app.use('/api/user/',userRoute);
app.use('/api/squ/',usersqRoute);

app.use('/api/tenderindex',tenderindexRoute);
app.use('/login',loginRoute);

 
//Port No
const PORT=process.env.PORT ||5000;
app.get('/',(req,res)=>{res.send('<h1>Server Home Page this Page Is Working for Testing Only</h1>')});
app.listen(PORT);