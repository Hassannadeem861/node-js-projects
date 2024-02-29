// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatagrv = sequelize1.define("tbldatagrv", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
    module.exports =  Tbldatagrv;
  
  