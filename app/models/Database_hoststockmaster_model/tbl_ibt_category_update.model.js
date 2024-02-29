const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIBTCategoryUpdate = sequelize4.define('tbl_ibt_category_update', {
    MajorNo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
    MajorDescription: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    AvarageMarkup: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    VatPercentage: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    MaximumDiscount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    DefaultCalculation: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    MenuItem: {
        type: DataTypes.TINYINT,
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
//     tableName: 'tbl_ibt_category_update',
//     timestamps: false,
//     primaryKey: ['MajorNo', 'StoreLocationName', 'StoreLocationODBC'],
//     uniqueKeys: {
//         DepartmentNo: {
//             fields: ['MajorNo'],
//         },
//     },
//     indexes: {
//         DepartmentMajor: {
//             fields: ['MajorDescription'],
//         },
//     },
});

module.exports = TblIBTCategoryUpdate;
