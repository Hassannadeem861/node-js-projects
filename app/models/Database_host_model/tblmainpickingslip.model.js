// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblmainpickingslip = sequelize2.define("tblmainpickingslip", {
        Description: {
        type: Sequelize.STRING,
      },
      Qty: {
        type: Sequelize.STRING,
      },
      SlipType: {
        type: Sequelize.STRING,
      },
      TranID: {
        type: Sequelize.STRING,
      },
      Blank2: {
        type: Sequelize.STRING,
      },
      Blank3: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tblmainpickingslip;
  
  