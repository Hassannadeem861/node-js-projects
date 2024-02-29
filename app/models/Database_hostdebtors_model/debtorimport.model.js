// models/tbldebtorinfo.js

// const { Sequelize } = require('sequelize');
// const sequelize = require('../config/database'); // Adjust the path if needed

const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');

const Debtorimport = sequelize3.define('debtorimport', {
  DebtorCode: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    collate: 'latin1_swedish_ci',
  },

  DebtorName: {
    type: Sequelize.STRING(40),
    collate: 'latin1_swedish_ci',
  },

  DebtorInitials: {
    type: Sequelize.STRING(10),
    collate: 'latin1_swedish_ci',
  },

  DebtorTitle: {
    type: Sequelize.STRING(15),
    collate: 'latin1_swedish_ci',
  },

  DebtorJoinDate: {
    type: Sequelize.DATE,
  },

  IDNumber: {
    type: Sequelize.STRING(20),
    collate: 'latin1_swedish_ci',
  },

  DebtorAdd1: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorAdd2: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorAdd3: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorAddPosCode: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorPost1: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorPost2: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorPost3: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorPostalCode: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorCity: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorCountry: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorContact: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorCell: {
    type: Sequelize.STRING(15),
    collate: 'latin1_swedish_ci',
  },

  DebtorPhone: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorFax: {
    type: Sequelize.STRING(30),
    collate: 'latin1_swedish_ci',
  },

  DebtorEMail: {
    type: Sequelize.TEXT,
    collate: 'latin1_swedish_ci',
  },

  CreditLimit: {
    type: Sequelize.DOUBLE,
  },

  CurrentBalance: {
    type: Sequelize.DOUBLE,
  },

  BalanceForward: {
    type: Sequelize.DOUBLE,
  },

  _30days: {
    type: Sequelize.DOUBLE,
  },

  _60days: {
    type: Sequelize.DOUBLE,
  },

  _90days: {
    type: Sequelize.DOUBLE,
  },

  _120days: {
    type: Sequelize.DOUBLE,
  },

  _150days: {
    type: Sequelize.DOUBLE,
  },

  _180days: {
    type: Sequelize.DOUBLE,
  },

  StopDate: {
    type: Sequelize.DATE,
  },

  StopBy: {
    type: Sequelize.STRING(50),
    collate: 'latin1_swedish_ci',
  },

  PrintStatement: {
    type: Sequelize.BOOLEAN,
  },

  OpenItemStateNum: {
    type: Sequelize.INTEGER,
  },

  LastBF: {
    type: Sequelize.DATE,
  },

  PrefClerk: {
    type: Sequelize.STRING(50),
    collate: 'latin1_swedish_ci',
  },

  PrefCommu: {
    type: Sequelize.STRING(50),
    collate: 'latin1_swedish_ci',
  },

  MemCard: {
    type: Sequelize.STRING(100),
    collate: 'latin1_swedish_ci',
  },

  PayAsYouGo: {
    type: Sequelize.BOOLEAN,
  },

  SendSMSNotification: {
    type: Sequelize.BOOLEAN,
  },

  DailyLimit: {
    type: Sequelize.INTEGER,
  },
}, {
  // Other model configurations (timestamps, tableName, etc.)
});


module.exports = Debtorimport;