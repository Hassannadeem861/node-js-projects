// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmprepair = sequelize2.define("tmprepair", {
        RepairFault: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
         });
  
         module.exports = Tmprepair;
  
  