const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIBTCategorySub2Update = sequelize4.define('tbl_ibt_category_sub2_update', {
    Sub1No: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
    MajorNo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
    Sub2no: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
    Sub2Description: {
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
//     timestamps: false, // Assuming you don't want timestamps
//     primaryKey: ['Sub1No', 'MajorNo', 'Sub2no', 'StoreLocationName', 'StoreLocationODBC'],
//     indexes: {
//         MajorNoIndex: {
//             fields: ['MajorNo'],
//         },
//         Sub1NoIndex: {
//             fields: ['Sub1No'],
//         },
//         Sub2DescriptionIndex: {
//             fields: ['Sub2Description'],
//         },
//         Sub2noIndex: {
//             fields: ['Sub2no'],
//         },
//     },
});

module.exports = TblIBTCategorySub2Update;
