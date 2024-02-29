const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblcashout = sequelize2.define("tblcashout", {
        Amount: {
        type: Sequelize.DOUBLE,
      },
    });
  
    module.exports = Tblcashout;
