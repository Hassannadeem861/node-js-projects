
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditstockrecord = sequelize1.define("tbllistauditstockrecord", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditstockrecord;
  
  