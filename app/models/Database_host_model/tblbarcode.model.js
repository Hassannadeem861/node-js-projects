const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblbarcode = sequelize2.define("tblbarcode", {
        StockCode: {
            type: Sequelize.STRING,
        },
        Barcode: {
            type: Sequelize.STRING,
        },
        Description1: {
            type: Sequelize.STRING,
        },
        SellingPrice: {
            type: Sequelize.DOUBLE,
        },
        PrintQty: {
            type: Sequelize.DOUBLE,
        }
    });

    module.exports = Tblbarcode;

