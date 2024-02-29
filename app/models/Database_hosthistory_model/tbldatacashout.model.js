const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatacashout = sequelize1.define("tbldatacashout", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldatacashout;
  