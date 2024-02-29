const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
  const Tblpayout = sequelize1.define("202308tblpayout", {
      TransactionNum: {
          type: Sequelize.DOUBLE,
          allowNull: true
      },
      datetime: {
          type: Sequelize.DATE,
          allowNull: true
      },
      Clerk_Name: {
          type: Sequelize.STRING(75),
          collate: 'latin1_swedish_ci',
          allowNull: true
      },
      Amount: {
          type: Sequelize.DOUBLE,
          allowNull: true
      },
      Reason: {
          type: Sequelize.STRING(100),
          collate: 'latin1_swedish_ci',
          allowNull: true
      },
      CashupNum: {
          type: Sequelize.INTEGER(11),
          allowNull: true
      },
      Incashup: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      Computername: {
          type: Sequelize.STRING(50),
          collate: 'latin1_swedish_ci',
          allowNull: true
      },
      PosPayout: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      ClerkCashup: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      Hisyear: {
          type: Sequelize.STRING(10),
          collate: 'latin1_swedish_ci',
          allowNull: true
      },
      HisMonth: {
          type: Sequelize.STRING(10),
          collate: 'latin1_swedish_ci',
          allowNull: true
      },
      Hisday: {
          type: Sequelize.STRING,
          collate: 'latin1_swedish_ci',
          allowNull: true
      }
  }, {
      // Add additional options here
  });

  module.exports =  Tblpayout;

