// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbllisttable = sequelize1.define("tbllisttable", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
    module.exports =  Tbllisttable;
  
  