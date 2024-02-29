const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIBTCategorySub1 = sequelize4.define('tbl_ibt_category_sub1', {
    MajorNo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
    Sub1No: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
    Sub1Description: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    StoreLocationName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
    },
    StoreLocationODBC: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
    },
    StoreMainName: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    StoreMainODBC: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    Status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
// }, {
//     tableName: 'tbl_ibt_category_sub1',
//     timestamps: false,
//     primaryKey: ['MajorNo', 'Sub1No', 'StoreLocationName', 'StoreLocationODBC'],
//     indexes: {
//         MajorNoIndex: {
//             fields: ['MajorNo'],
//         },
//         Sub1DescriptionIndex: {
//             fields: ['Sub1Description'],
//         },
//         Sub1NoIndex: {
//             fields: ['Sub1No'],
//         },
//     },
});

module.exports = TblIBTCategorySub1;
