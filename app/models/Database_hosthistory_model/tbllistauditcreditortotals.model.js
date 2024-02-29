const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditcreditortotals = sequelize1.define("listauditcreditortotals", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditcreditortotals;
  