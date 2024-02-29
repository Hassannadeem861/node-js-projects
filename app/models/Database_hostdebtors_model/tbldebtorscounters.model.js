// tbldebtorscounters.model.js
const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');
    const Tbldebtorscounters = sequelize3.define("tbldebtorscounters", {
        ContractNo: {
            type: Sequelize.STRING,
        },
        DebitNo: {
            type: Sequelize.INTEGER,
        },
        CreditNo: {
            type: Sequelize.INTEGER,
        },
        PaymentNo: {
            type: Sequelize.INTEGER,
        },
        ClaimNo: {
            type: Sequelize.INTEGER,
        },
        AgingNo: {
            type: Sequelize.INTEGER,
        },
        SettlementNo: {
            type: Sequelize.STRING,
        },
    }, {
        // Define table options if needed
        tableName: 'tbldebtorscounters',
        engine: 'InnoDB', // or any other engine you want
        charset: 'latin1', // or any other charset you want
    });

    // Define additional configurations or associations if needed

    module.exports= Tbldebtorscounters;
