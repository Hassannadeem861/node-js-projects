const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatacashup_det = sequelize1.define("tbldatacashup_det", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldatacashup_det;
  