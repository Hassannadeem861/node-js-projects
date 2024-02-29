// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblquotefootermsg = sequelize2.define("tblquotefootermsg", {
        Sno: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        FooterMsg: {
            type: Sequelize.STRING,
            allowNull: true
        }    });
  
        module.exports = Tblquotefootermsg;
  
  