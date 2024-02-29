const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbldatabase = sequelize2.define("tbldatabase", {
        LocationName: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tbldatabase;
