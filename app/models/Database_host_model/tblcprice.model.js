const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblcprice = sequelize2.define("tblcprice", {
        sDateTime: {
            type: Sequelize.DATE,
        },
        InvoiceNo: {
            type: Sequelize.INTEGER,
        },
        SellingPrice: {
            type: Sequelize.DOUBLE,
        },
        SoldQty: {
            type: Sequelize.DOUBLE,
        }
    }, {
        indexes: [
            {
                name: 'Stockcode',
                fields: ['sDateTime']
            }
        ]
    });

    module.exports = Tblcprice;

