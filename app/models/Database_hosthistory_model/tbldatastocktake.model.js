// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatastocktake = sequelize1.define("tbldatastocktake", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
    module.exports =  Tbldatastocktake;
  
  