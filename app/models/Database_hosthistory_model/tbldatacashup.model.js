const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatacashup = sequelize1.define("tbldatacashup", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldatacashup;
  