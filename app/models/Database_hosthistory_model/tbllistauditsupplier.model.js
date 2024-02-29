
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listauditsupplier = sequelize1.define("tbllistauditsupplier", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listauditsupplier;
  
  