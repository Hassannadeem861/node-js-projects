// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatastockactivity = sequelize1.define("tbldatastockactivity", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
    module.exports =  Tbldatastockactivity;
  
  