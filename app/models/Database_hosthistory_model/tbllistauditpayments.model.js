
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditpayments = sequelize1.define("tbllistauditpayments", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditpayments;
  
  