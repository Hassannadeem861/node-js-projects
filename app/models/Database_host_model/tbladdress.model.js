const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbladdress = sequelize2.define("tbladdress", {
        laddress: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tbladdress;
