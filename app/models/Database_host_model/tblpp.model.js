// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblpp = sequelize2.define("tblpp", {
        Sdate: {
            type: Sequelize.STRING,
            allowNull: true
        },
        DocNo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        StockCode: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Qty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        ACost: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        Aselling: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        LineTotal: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        AGPV: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        AGPP: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
    });
  
    module.exports = Tblpp;
  
  