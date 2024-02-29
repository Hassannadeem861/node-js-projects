
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Listcredage = sequelize1.define("tbllistcredage", {
      Name: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Listcredage;
  
  