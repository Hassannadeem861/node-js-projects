const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpAvgSale = sequelize2.define('tmpavgsale', {
    SupplierCode: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    SupplierName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    StockCode: {
        type: Sequelize.STRING,
        defaultValue: '',
    },
    Description1: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    week1: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    week2: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    week3: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    week4: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    week5: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    week6: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    MinStock: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Maxstock: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    StockOnOrder: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    lastcost: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    AvarageCostPrice: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    LastCostPrice: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    MajorNo: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    MajorName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Sub1No: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Sub1Name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Sub2No: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Sub2Name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    // Add additional configurations if needed
});

module.exports = TmpAvgSale;
