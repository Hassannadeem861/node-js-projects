
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditdebtortotals = sequelize1.define("listauditdebtortotals", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditdebtortotals;
  
  