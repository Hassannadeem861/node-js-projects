// models/tblageinfo.js

// const { Sequelize } = require('sequelize');
// const sequelize = require('../config/database'); // Adjust the path if needed
const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');


// module.exports = (sequelize, Sequelize) => {

const TblAgeInfo = sequelize3.define('tblAgeInfo', {
  Datetime: {
    type: Sequelize.DATE,
  },

  // DebtorCode: {
  //   type: Sequelize.STRING(40),
  //   collate: 'latin1_swedish_ci',
  // },

  // Agingno: {
  //   type: Sequelize.DOUBLE,
  // },

  // PreviousAgeDate: {
  //   type: Sequelize.DATE,
  // },

  // CurrentAgeDate: {
  //   type: Sequelize.DATE,
  // },

  // BalanceForward: {
  //   type: Sequelize.DOUBLE,
  // },

  // CurrentBalance: {
  //   type: Sequelize.DOUBLE,
  // },

  // _30days: {
  //   type: Sequelize.DOUBLE,
  // },

  // _60days: {
  //   type: Sequelize.DOUBLE,
  // },

  // _90days: {
  //   type: Sequelize.DOUBLE,
  // },

  // _120days: {
  //   type: Sequelize.DOUBLE,
  // },

  // _150days: {
  //   type: Sequelize.DOUBLE,
  // },

  // _180days: {
  //   type: Sequelize.DOUBLE,
  // },

  // User: {
  //   type: Sequelize.STRING(20),
  //   collate: 'latin1_swedish_ci',
  // },

  // Hisyear: {
  //   type: Sequelize.STRING(10),
  //   collate: 'latin1_swedish_ci',
  // },

  // Hismonth: {
  //   type: Sequelize.STRING(10),
  //   collate: 'latin1_swedish_ci',
  // },

  // Hisday: {
  //   type: Sequelize.STRING,
  //   collate: 'latin1_swedish_ci',
  // },
}, {
  // Other model configurations (timestamps, tableName, etc.)
});

module.exports = TblAgeInfo;

// return TblAgeInfo;
// };
