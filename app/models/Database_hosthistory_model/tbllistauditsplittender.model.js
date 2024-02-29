
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditsplittender = sequelize1.define("tbllistauditsplittender", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditsplittender;
  
  