
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listcashupdeclare = sequelize1.define("tbllistcashupdeclare", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listcashupdeclare;
  
  