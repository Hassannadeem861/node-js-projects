// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatadebtor_tran = sequelize1.define("tbldatadebtor_tran", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
    module.exports =  Tbldatadebtor_tran;
  
  