// tblfootermsg.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblfootermsg = sequelize2.define("tblfootermsg", {
        Sno: {
        type: Sequelize.INTEGER,
      },
      FooterMsg: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tblfootermsg;
  