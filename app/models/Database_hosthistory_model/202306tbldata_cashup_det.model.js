// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_cashup_det = sequelize1.define("202306tbldata_cashup_det", {
    
          cashupnum: {
            type: Sequelize.DOUBLE,
            allowNull: false,
          },
          CashupType: {
            type: Sequelize.STRING(11),
            collate: 'latin1_swedish_ci',
          },
          EntityDesc: {
            type: Sequelize.STRING(50),
            collate: 'latin1_swedish_ci',
          },
          decl00001: Sequelize.DOUBLE,
          decl00002: Sequelize.DOUBLE,
          decl00005: Sequelize.DOUBLE,
          decl00010: Sequelize.DOUBLE,
          decl00020: Sequelize.DOUBLE,
          decl00050: Sequelize.DOUBLE,
          decl00100: Sequelize.DOUBLE,
          decl00200: Sequelize.DOUBLE,
          decl00500: Sequelize.DOUBLE,
          decl01000: Sequelize.DOUBLE,
          decl02000: Sequelize.DOUBLE,
          decl05000: Sequelize.DOUBLE,
          decl10000: Sequelize.DOUBLE,
          decl20000: Sequelize.DOUBLE,
          declcash: Sequelize.DOUBLE,
          declcard: Sequelize.DOUBLE,
          declcheque: Sequelize.DOUBLE,
          declfloat: Sequelize.DOUBLE,
          declpayout: Sequelize.DOUBLE,
          salescash: Sequelize.DOUBLE,
          salescard: Sequelize.DOUBLE,
          salescheque: Sequelize.DOUBLE,
          salestotal: Sequelize.DOUBLE,
          salesaccount: Sequelize.DOUBLE,
          transfers: Sequelize.DOUBLE,
          ddeposit: Sequelize.DOUBLE,
          totalsales: Sequelize.DOUBLE,
          totalssalescnt: Sequelize.DOUBLE,
          payout: Sequelize.DOUBLE,
          empties: Sequelize.DOUBLE,
          emptiescnt: Sequelize.DOUBLE,
          refunds: Sequelize.DOUBLE,
          paycash: Sequelize.DOUBLE,
          paycard: Sequelize.DOUBLE,
          paycheque: Sequelize.DOUBLE,
          paytotal: Sequelize.DOUBLE,
          cashtotal: Sequelize.DOUBLE,
          cashdecl: Sequelize.DOUBLE,
          chequetotal: Sequelize.DOUBLE,
          chequedecl: Sequelize.DOUBLE,
          cardtotal: Sequelize.DOUBLE,
          carddecl: Sequelize.DOUBLE,
          discglobal: Sequelize.DOUBLE,
          discitem: Sequelize.DOUBLE,
          discvalue: Sequelize.DOUBLE,
          disctotal: Sequelize.DOUBLE,
          itemvoids: Sequelize.DOUBLE,
          linevoids: Sequelize.DOUBLE,
          salevoids: Sequelize.DOUBLE,
          opendrawer: Sequelize.DOUBLE,
          globaldisc: Sequelize.DOUBLE,
          Hisyear: {
            type: Sequelize.STRING(10),
            collate: 'latin1_swedish_ci',
          },
          HisMonth: {
            type: Sequelize.STRING(10),
            collate: 'latin1_swedish_ci',
          },
          Hisday: {
            type: Sequelize.STRING(10),
            collate: 'latin1_swedish_ci',
          },
          payddeposit: Sequelize.DOUBLE,
          cashout: Sequelize.DOUBLE,
        });
      
        module.exports  = Tbldata_cashup_det;
      
      
  

  