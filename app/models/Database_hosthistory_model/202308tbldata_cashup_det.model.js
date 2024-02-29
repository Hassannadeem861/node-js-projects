// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const TblDataCashupDet = sequelize1.define("202308tbldata_cashup_det", {
      cashupnum: {
        type: Sequelize.DOUBLE,
      },
      CashupType: {
        type: Sequelize.STRING(11),
      },
      EntityDesc: {
        type: Sequelize.STRING(50),
        
      },
      decl00001: {
        type: Sequelize.DOUBLE,
        
      },
      decl00002: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl00005: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl00010: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl00020: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl00050: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl00100: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
      decl00200: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
      decl00500: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
      decl01000: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl02000: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl05000: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl10000: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      decl20000: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      declcash: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      declcard: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      declcheque: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      declfloat: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      declfloat: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      declpayout: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      salescash: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      salescard: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      salescheque: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      salestotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      salesaccount: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      transfers: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      ddeposit: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      totalsales: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      totalssalescnt: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      payout: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      totalssalescnt: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      empties: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      emptiescnt: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
      refunds: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
      paycash: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
      paycard: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
      paycheque: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      paytotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      cashtotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      cashdecl: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      chequetotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      chequedecl: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      cardtotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      carddecl: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      discglobal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      discitem: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      discvalue: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      disctotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      itemvoids: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      linevoids: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      salevoids: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      opendrawer: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
      },
  
      globaldisc: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
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
        type: Sequelize.INTEGER,
      },
      cashout: {
        type: Sequelize.STRING,
      },
        });
  
        module.exports= TblDataCashupDet;
  