// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblsettings = sequelize2.define("tblsettings", {
        Sno: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        FooterMsg: {
            type: Sequelize.STRING,
            allowNull: true
        }    });
  
        module.exports = Tblsettings;

  