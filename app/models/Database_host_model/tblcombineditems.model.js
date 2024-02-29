const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblcombineditems = sequelize2.define("tblcombineditems", {
        StockCode: {
            type: Sequelize.STRING,
        },
        Description: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        combStockCode: {
            type: Sequelize.STRING,
        },
        combStockDescription: {
            type: Sequelize.STRING,
        },
        Quantity: {
            type: Sequelize.DOUBLE,
        },
        Itype: {
            type: Sequelize.STRING,
        }
    }, {
        // Define primary key
        primaryKey: true,
        // Define indexes
        indexes: [
            {
                unique: true,
                fields: ['StockCode', 'combStockCode']
            },
            {
                fields: ['combStockCode']
            },
            {
                fields: ['StockCode']
            }
        ]
    });

    module.exports = Tblcombineditems;

