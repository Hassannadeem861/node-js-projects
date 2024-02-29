const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmpstocktake = sequelize2.define('tbltmpstocktake', {
    StockCode: {
        type: DataTypes.STRING(19),
        allowNull: true,
    },
    StockBarcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    Description: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    SOH: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    StockCount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    S_NO: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
// }, {
//     tableName: 'tbltmpstocktake',
//     timestamps: false,
//     indexes: [
//         {
//             unique: true,
//             fields: ['StockCode'],
//         },
//     ],
});

module.exports = Tbltmpstocktake;
