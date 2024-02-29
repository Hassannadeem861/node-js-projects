const { DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpCombinedItems = sequelize2.define('tmpcombineditems', {
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: '',
    },
    Description: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    combStockCode: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: '',
    },
    combStockDescription: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    OriginalQuantity: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Qtytomake: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    CalculatedQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
// }, {
//     tableName: 'tmpcombineditems',
//     timestamps: false,
//     indexes: [
//         {
//             name: 'combStockCodeIndex',
//             fields: ['combStockCode'],
//         },
//         {
//             name: 'StockCodeIndex',
//             fields: ['StockCode'],
//         },
//     ],
//     primaryKey: {
//         name: 'primary_key',
//         fields: ['StockCode', 'combStockCode'],
//     },
});

module.exports = TmpCombinedItems;
