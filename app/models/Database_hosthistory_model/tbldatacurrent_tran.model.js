// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatacurrent_tran = sequelize1.define("tbldatacurrent_tran", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
    module.exports =  Tbldatacurrent_tran;
  
  