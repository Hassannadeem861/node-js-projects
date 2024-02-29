const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const TblTmpVoucher = sequelize2.define('tbl_tmp_voucher', {
    Vocuher_no: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    DateTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    Amount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    User: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    VoucherType: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
// }, {
//     tableName: 'tbl_tmp_voucher',
//     timestamps: false,
//     indexes: [
//         {
//             unique: true,
//             fields: ['Vocuher_no'],
//         },
//     ],
});

module.exports = TblTmpVoucher;
