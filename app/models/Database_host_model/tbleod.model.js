// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbleod = sequelize2.define("tbleod", {
      GroupNo: {
        type: Sequelize.STRING,
      },
      GroupName: {
        type: Sequelize.STRING,
      },
      StockCode: {
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.STRING,
      },
      DSold: {
        type: Sequelize.DOUBLE,
      },
      DGP: {
        type: Sequelize.DOUBLE,
      },
      DOdy: {
        type: Sequelize.DOUBLE,
      },
      Dcounted: {
        type: Sequelize.DOUBLE,
      },
      DDiffer: {
        type: Sequelize.DOUBLE,
      },
      GPosition: {
        type: Sequelize.INTEGER,
      }
    });
  
    module.exports = Tbleod;

  