// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllaybyefootermsg = sequelize2.define("tbllaybyefootermsg", {
        Sno: {
            type: Sequelize.INTEGER(10),
            allowNull: true
        },
        FooterMsg: {
            type: Sequelize.STRING(255),
            allowNull: true
        }
    });
  
    module.exports = Tbllaybyefootermsg;
  
  