
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listposaccpay = sequelize1.define("tbllistposaccpay", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listposaccpay;
  
  