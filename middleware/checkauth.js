const jswTokan = require('jsonwebtoken');
require('dotenv').config();
const secretKey = 'i am Yogesh Sharma';

module.exports = (req, res, next) => {
    try {
        const headerstr = String(req.headers.authorization);
        const tokenstr = headerstr.split(" ")[1];
        console.log("tokan value from checkauth : "+tokenstr);
        if (tokenstr) {
           // const istokeanValid=jswTokan.verify(token,process.env.SECRETKEY);
            // Geting Payload From Tokean
            jswTokan.verify(tokenstr,secretKey,(error,authdata)=>{
                if(error){
                    console.log("eeror in towkan verifiying"+error);
                    res.status(400).json({ msg: "Error in Tokan /Invalid Tokan"});
                }
                else{
                    next();
                }
               
            });
            //next();
            
        }
        else {
            res.status(400).json({ msg: "Error in Tokan /Invalid Tokan" });
        }
    } catch (error) {
        console.log("Error in JWT Tokan Chaking : "+error);
        res.status(400).json({ msg: "Error in Tokan /Invalid Tokan" + error });
    }
}