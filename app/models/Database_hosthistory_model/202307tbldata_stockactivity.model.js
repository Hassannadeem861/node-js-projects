// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_stockactivity = sequelize1.define("202307tbldata_stockactivity", {
       
       datetime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      stockcode: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      stockdescription: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      majorno: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      sub1no: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      sub2no: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      openqty: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      closeQty: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      soldQty: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      receivedqty: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      adjustedQty: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      stocktakediffQty: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      usedincombinedQty: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      soldtotalexclselling: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      soldtotalcost: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      rectotalexclselling: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      rectotalcost: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      Hisday: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      HisMonth: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
 
   
    });
  
    module.exports =  Tbldata_stockactivity;
  
  