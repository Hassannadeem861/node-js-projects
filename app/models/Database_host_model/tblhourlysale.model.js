// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblhourlysale = sequelize2.define("tblhourlysale", {
        StockCode: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        RTime: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        StockDescription: {
            type: Sequelize.STRING(60),
            allowNull: true
        },
        Qty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        TotalCost: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        TotalSelling: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        GP: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        GPValue: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
    });
  
    module.exports = Tblhourlysale; // 'tblgrvcombined' instead of 'Tblgrvcombined'

