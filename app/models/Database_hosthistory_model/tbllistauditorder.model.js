
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditorder = sequelize1.define("listauditorder", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditorder;
  
  