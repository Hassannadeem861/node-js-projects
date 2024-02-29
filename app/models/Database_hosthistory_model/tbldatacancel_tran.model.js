const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatacancel_tran = sequelize1.define("tbldatacancel_tran", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldatacancel_tran;
  