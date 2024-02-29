// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');
    const Tbldebtor_copy = sequelize3.define("tbldebtor_copy", {
        DebtorCode: {
            type: Sequelize.STRING,
            allowNull: false,            
        },
        DebtorName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        DebtorType: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        BankName: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        BankAccName: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        BankAccNo: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        BankBranchCode: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        BankBranName: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        DebtorInitials: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        DebtorTitle: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        DebtorJoinDate: {
            type: Sequelize.DATE,
            defaultValue: null
        },
        IDNumber: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        DebtorAdd1: Sequelize.STRING,
        DebtorAdd2: Sequelize.STRING,
        DebtorAdd3: Sequelize.STRING,
        DebtorAddPosCode: Sequelize.STRING,
        DebtorPost1: Sequelize.STRING,
        DebtorPost2: Sequelize.STRING,
        DebtorPost3: Sequelize.STRING,
        DebtorPostalCode: Sequelize.STRING,
        DebtorCity: Sequelize.STRING,
        DebtorCountry: Sequelize.STRING,
        DebtorContact: Sequelize.STRING,
        DebtorCell: Sequelize.STRING,
        DebtorPhone: Sequelize.STRING,
        DebtorFax: Sequelize.STRING,
        DebtorEMail: Sequelize.STRING,
        VatReg: Sequelize.BOOLEAN,
        VatRegNo: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        AccountSystem: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        AccTerms: Sequelize.STRING,
        AcctPrice: Sequelize.STRING,
        DiscPerc: Sequelize.DOUBLE,
        InterestPercentage: Sequelize.DOUBLE,
        CreditLimit: Sequelize.DOUBLE,
        CurrentBalance: Sequelize.DOUBLE,
        BalanceForward: Sequelize.DOUBLE,
        '30days': Sequelize.DOUBLE,
        '60days': Sequelize.DOUBLE,
        '90days': Sequelize.DOUBLE,
        '120days': Sequelize.DOUBLE,
        '150days': Sequelize.DOUBLE,
        '180days': Sequelize.DOUBLE,
        StopDate: Sequelize.DATE,
        StopBy: Sequelize.STRING,
        PrintStatement: Sequelize.BOOLEAN,
        LastBF: Sequelize.DATE,
        blank: Sequelize.BOOLEAN,
        DailyLimit: Sequelize.DECIMAL(16, 2)
    });

    module.exports= Tbldebtor_copy;
