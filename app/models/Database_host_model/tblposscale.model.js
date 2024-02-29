// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblposscale = sequelize2.define("tblposscale", {
        ScaleType: {
        type: Sequelize.STRING,
      },
      ComPort: {
        type: Sequelize.STRING,
      },
      BaudRate: {
        type: Sequelize.STRING,
      },
      Parity: {
        type: Sequelize.STRING,
      },
      DataBit: {
        type: Sequelize.STRING,
      },
      StopBit: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tblposscale;
  
  