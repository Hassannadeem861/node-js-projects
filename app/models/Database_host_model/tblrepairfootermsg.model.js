// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblrepairfootermsg = sequelize2.define("tblrepairfootermsg", {
        Sno: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        FooterMsg: {
            type: Sequelize.STRING,
            allowNull: true
        }    });
  
        module.exports = Tblrepairfootermsg;
  
  