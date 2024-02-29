
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditstockvalue = sequelize1.define("tbllistauditstockvalue", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditstockvalue;
  
