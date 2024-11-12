const mySQLConnection = require('../database/connection');
const dataModel = require('../dataModels/userSQUModel');

/* ********************  START ********************************/
/*  This function Return All  Record From Tabel */
async function handelgetall(req, response) {

  try {
    await dataModel.sync();
    data = await dataModel.findAll();
    return response.status(200).json({ msg: "Task Complet : ", data1: data });
  } catch (error) {
    return response.status(400).json({ msg: "Error : ", data1: error });
  }


};
/*********************** END **********************************/
/* ********************  START ********************************/

/*  This function Return All  Record in Tabel */
async function handelgetbyid(req, response) {
 try {
  await dataModel.sync();
  console.log("Id By Param " + req.params.id);
  foundeddata = await dataModel.findAll({
    where: { id: req.params.id },
  });
  return response.status(200).json({ msg: "Data found by Getbyid: ", data: foundeddata });
 } catch (error) {
  return response.status(400).json({ msg: "Error : ", data1: error });
 }
  

};

/*********************** END **********************************/
/* ********************  START ********************************/

/*  This function Return One   Record from  Tabel acording Username */
async function handelgetbyusername(req, response) {
  try {
    await dataModel.sync();
  console.log(req.body.username);
  foundeddata = await dataModel.findAll({
    where: { username: req.body.username },
  });
  return response.status(200).json({ msg: "Data found by Getbyid: ", data: foundeddata });
  } catch (error) {
    return response.status(400).json({ msg: "Error : ", data1: error });
  }
  

};

/*********************** END **********************************/
/* ********************  START ********************************/
/*  This function Add A New Record in Tabel */
async function handelCreate(req, response) {
  try {
    await dataModel.sync();
  const data = dataModel.create({ id: req.body.id, username: req.body.username, pwd: req.body.pwd, isactive: req.body.isactive });
  return response.status(200).json({ msg: "Data Save : ", data1: (await data).toJSON() });
  } catch (error) {
    return response.status(400).json({ msg: "Error : ", data1: error });
  }
  

};

/*********************** END **********************************/
/* ********************* START ********************************/
/*  This function Update  A Old Record in Tabel */
async function handelUpdatebyid(req, response) {
  try {
    await dataModel.sync();
  const data = await dataModel.update(
    {
      username: req.body.username,
      pwd: req.body.pwd,
      isactive: req.body.isactive
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  return response.status(200).json({ msg: "Data Save : ", data1: data });
  } catch (error) {
    return response.status(400).json({ msg: "Error : ", data1: error });
  }
  

};
/*********************** END **************************************/
/*********************** START ************************************/

/*  This function Delete  A Old Record From Tabel */
async function handelDeletebyid(req, response) {
  try {
    const data=await dataModel.destroy({where:{id:req.params.id} });
    return response.status(200).json({ msg: "Data Deleted : " ,data1:data});
  } catch (error) {
    return response.status(400).json({ msg: "Error : ", data1: error });
  }
  

};
/*********************** END **************************************/

module.exports = {
  handelCreate,
  handelDeletebyid,
  handelgetall,
  handelgetbyid,
  handelUpdatebyid,
  handelgetbyusername,


};