const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldataadjustment = sequelize1.define("tbldataadjustment", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldataadjustment;
  