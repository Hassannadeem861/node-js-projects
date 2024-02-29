const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_cashup_det = sequelize1.define("202309tbldata_cashup_det", {
      // Additional fields from 202310tbldata_cashup table
      cashupnum: {
        type: Sequelize.DOUBLE,
      },
      CashupType: {
        type: Sequelize.STRING,
      },
      EntityDesc: {
        type: Sequelize.STRING,
      },
      decl00001: {
        type: Sequelize.DOUBLE,
      },
      decl00002: {
        type: Sequelize.DOUBLE,
      },
      decl00005: {
        type: Sequelize.DOUBLE,
      },
      decl00010: {
        type: Sequelize.DOUBLE,
      },
      decl00020: {
        type: Sequelize.DOUBLE,
      },
      decl00050: {
        type: Sequelize.DOUBLE,
      },
      decl00100: {
        type: Sequelize.DOUBLE,
      },
      decl00200: {
        type: Sequelize.DOUBLE,
      },
      decl00500: {
        type: Sequelize.DOUBLE,
      },
      decl01000: {
        type: Sequelize.DOUBLE,
      },
      decl02000: {
        type: Sequelize.DOUBLE,
      },
      decl05000: {
        type: Sequelize.DOUBLE,
      },
      decl10000: {
        type: Sequelize.DOUBLE,
      },
      decl20000: {
        type: Sequelize.DOUBLE,
      },
      declcash: {
        type: Sequelize.DOUBLE,
      },
      declcard: {
        type: Sequelize.DOUBLE,
      },
      declcheque: {
        type: Sequelize.DOUBLE,
      },
      declfloat: {
        type: Sequelize.DOUBLE,
      },
      declpayout: {
        type: Sequelize.DOUBLE,
      },
      salescash: {
        type: Sequelize.DOUBLE,
      },
      salescard: {
        type: Sequelize.DOUBLE,
      },
      salescheque: {
        type: Sequelize.DOUBLE,
      },
      salestotal: {
        type: Sequelize.DOUBLE,
      },
      salesaccount: {
        type: Sequelize.DOUBLE,
      },
      transfers: {
        type: Sequelize.DOUBLE,
      },
      ddeposit: {
        type: Sequelize.DOUBLE,
      },
      totalsales: {
        type: Sequelize.DOUBLE,
      },
      totalssalescnt: {
        type: Sequelize.DOUBLE,
      },
      payout: {
        type: Sequelize.DOUBLE,
      },
      empties: {
        type: Sequelize.DOUBLE,
      },
      emptiescnt: {
        type: Sequelize.DOUBLE,
      },
      refunds: {
        type: Sequelize.DOUBLE,
      },
      paycash: {
        type: Sequelize.DOUBLE,
      },
      paycard: {
        type: Sequelize.DOUBLE,
      },
      paycheque: {
        type: Sequelize.DOUBLE,
      },
      paytotal: {
        type: Sequelize.DOUBLE,
      },
      cashtotal: {
        type: Sequelize.DOUBLE,
      },
      cashdecl: {
        type: Sequelize.DOUBLE,
      },
      chequetotal: {
        type: Sequelize.DOUBLE,
      },
      chequedecl: {
        type: Sequelize.DOUBLE,
      },
      cardtotal: {
        type: Sequelize.DOUBLE,
      },
      carddecl: {
        type: Sequelize.DOUBLE,
      },
      discglobal: {
        type: Sequelize.DOUBLE,
      },
      discitem: {
        type: Sequelize.DOUBLE,
      },
      discvalue: {
        type: Sequelize.DOUBLE,
      },
      disctotal: {
        type: Sequelize.DOUBLE,
      },
      itemvoids: {
        type: Sequelize.DOUBLE,
      },
      linevoids: {
        type: Sequelize.DOUBLE,
      },
      salevoids: {
        type: Sequelize.DOUBLE,
      },
      opendrawer: {
        type: Sequelize.DOUBLE,
      },
      globaldisc: {
        type: Sequelize.DOUBLE,
      },
      Hisyear: {
        type: Sequelize.STRING,
      },
      HisMonth: {
        type: Sequelize.STRING,
      },
      Hisday: {
        type: Sequelize.STRING,
      },
      payddeposit: {
        type: Sequelize.DOUBLE,
      },
      cashout: {
        type: Sequelize.DOUBLE,
      },
    });
  
    module.exports =  Tbldata_cashup_det;

