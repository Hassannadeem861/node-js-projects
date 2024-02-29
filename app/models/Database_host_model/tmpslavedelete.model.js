// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpslavedelete = sequelize2.define("tmpslavedelete", {
        StockCode: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
          },
          StockBarcode: {
            type: Sequelize.STRING(50),
            allowNull: true
          },
          Description1: {
            type: Sequelize.STRING(60),
            allowNull: true
          },
          Description2: {
            type: Sequelize.STRING(60),
            allowNull: true
          },
          MajorNo: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          Sub1No: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          Sub2No: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          StockOnHand: {
            type: Sequelize.DOUBLE,
            allowNull: true
          }   });
  
          module.exports = Tmpslavedelete;
  
  