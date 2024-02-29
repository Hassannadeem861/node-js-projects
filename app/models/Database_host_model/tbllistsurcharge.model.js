// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllistsurcharge = sequelize2.define("tbllistsurcharge", {
        tblName: {
        type: Sequelize.STRING,
      },

    });
  
    module.exports = Tbllistsurcharge;

  