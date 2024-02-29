
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditdebtor = sequelize1.define("listauditdebtor", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditdebtor;
  
  