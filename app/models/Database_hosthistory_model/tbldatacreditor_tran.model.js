const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatacreditor_tran = sequelize1.define("tbldatacreditor_tran", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldatacreditor_tran;
  