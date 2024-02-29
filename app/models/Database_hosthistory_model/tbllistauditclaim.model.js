
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditclaim = sequelize1.define("listauditclaim", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditclaim;
  
  