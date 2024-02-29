const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltransactionv = sequelize2.define('tbltransactionv', {
    SaleNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    TransactionNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Hismonth: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Hisday: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Hisyear: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
// }, {
//     tableName: 'tbltransactionv',
//     timestamps: false,
//     indexes: [
//         {
//             unique: true,
//             fields: ['SaleNum'],
//         },
//         {
//             unique: true,
//             fields: ['TransactionNum'],
//         },
//     ],
});

module.exports = Tbltransactionv;
