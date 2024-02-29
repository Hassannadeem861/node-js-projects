
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditrefunds = sequelize1.define("tbllistauditrefunds", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditrefunds;
  
  