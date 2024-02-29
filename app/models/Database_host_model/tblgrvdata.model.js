// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblgrvdata = sequelize2.define("tblgrvdata", {
        StockCode: {
            type: Sequelize.STRING(19), // Changed to match the length provided in the SQL schema
            allowNull: true // Modified to match your SQL schema
        },
        StockBarCode: {
            type: Sequelize.STRING(19), // Changed to match the length provided in the SQL schema
            allowNull: true // Modified to match your SQL schema
        },
        Description1: {
            type: Sequelize.STRING(100),
            allowNull: true // Modified to match your SQL schema
        },
        Description2: {
            type: Sequelize.STRING(100),
            allowNull: true // Modified to match your SQL schema
        },
        Deptnot: {
            type: Sequelize.STRING(15),
            allowNull: true // Modified to match your SQL schema
        },
        DeptName: {
            type: Sequelize.STRING(25),
            allowNull: true // Modified to match your SQL schema
        },
        sub1no: {
            type: Sequelize.STRING(11),
            allowNull: true // Modified to match your SQL schema
        },
        sub2no: {
            type: Sequelize.STRING(11),
            allowNull: true // Modified to match your SQL schema
        },
        SOH: {
            type: Sequelize.STRING(10),
            allowNull: true // Modified to match your SQL schema
        },
        CostPrice: {
            type: Sequelize.STRING(10),
            allowNull: true // Modified to match your SQL schema
        },
        VatP: {
            type: Sequelize.STRING(11),
            allowNull: true // Modified to match your SQL schema
        },
        DSEllingPrice: {
            type: Sequelize.STRING(10),
            allowNull: true // Modified to match your SQL schema
        },
        SSellingPrice: {
            type: Sequelize.STRING(10),
            allowNull: true // Modified to match your SQL schema
        }
    });
  
    module.exports = Tblgrvdata; // 'tblgrvcombined' instead of 'Tblgrvcombined'

