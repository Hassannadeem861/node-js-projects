// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllinkcodes = sequelize2.define("tbllinkcodes", {
        StockCodeIndex: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        StockDescription: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        LinkCode: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        LinkDescription: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        PackSize: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        UCost: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        Uselling: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        GpP: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        cMarkup: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        GroupNo: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        ItemNo: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
    });
  
    module.exports = Tbllinkcodes;

  