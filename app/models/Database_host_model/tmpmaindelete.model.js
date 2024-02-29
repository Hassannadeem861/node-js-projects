const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tmpmaindelete = sequelize2.define("tmpmaindelete", {
    StockCode: {
        type: Sequelize.STRING,
    },
    StockBarcode: {
        type: Sequelize.STRING,
    },
    Description1: {
        type: Sequelize.STRING,
    },
    Description2: {
        type: Sequelize.STRING,
    },
    MajorNo: {
        type: Sequelize.DOUBLE,
    },
    Sub1No: {
        type: Sequelize.DOUBLE,
    },
    Sub2No: {
        type: Sequelize.DOUBLE,
    },
    StockOnHand: {
        type: Sequelize.DOUBLE,
    }
}, {
    indexes: [
        {
            fields: ['StockCode']
        }
    ]
});

module.exports = Tmpmaindelete;
