// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpsurcharge = sequelize2.define("tmpsurcharge", {
        ClerkName: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        DateTime: {
            type: Sequelize.STRING(40),
            allowNull: true
        },
        Surcharge1: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        Surcharge2: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        Surcharge3: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        TotalSurcharge: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        invNo: {
            type: Sequelize.INTEGER(11),
            allowNull: true
        },
        InvTotal: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        VatTotal: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        HisDay: {
            type: Sequelize.STRING(10),
            allowNull: true
        },
        HisMonth: {
            type: Sequelize.STRING(10),
            allowNull: true
        },
        HisYear: {
            type: Sequelize.STRING(10),
            allowNull: true
        }
          });
  
          module.exports = Tmpsurcharge;
  
  