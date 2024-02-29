const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_grn_det = sequelize1.define("202309tbldata_grn_det", {
      datetime: {
        type: Sequelize.DATE,
      },
      invoicenumber: {
        type: Sequelize.STRING,
      },
      transactionnumber: {
        type: Sequelize.DOUBLE,
      },
      stockcode: {
        type: Sequelize.STRING,
      },
      creditoritemcode: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      quantityreceived: {
        type: Sequelize.DOUBLE,
      },
      bonusquantity: {
        type: Sequelize.DOUBLE,
      },
      quantityordered: {
        type: Sequelize.DOUBLE,
      },
      exclusiveunitcost: {
        type: Sequelize.DOUBLE,
      },
      inclusiveunitcost: {
        type: Sequelize.DOUBLE,
      },
      markup: {
        type: Sequelize.DOUBLE,
      },
      exclusiveselling: {
        type: Sequelize.DOUBLE,
      },
      inclusiveselling: {
        type: Sequelize.DOUBLE,
      },
      vatpercentage: {
        type: Sequelize.DOUBLE,
      },
      discount1: {
        type: Sequelize.DOUBLE,
      },
      discount2: {
        type: Sequelize.DOUBLE,
      },
      discountcurrency: {
        type: Sequelize.DOUBLE,
      },
      linetotal: {
        type: Sequelize.DOUBLE,
      },
      grvnum: {
        type: Sequelize.DOUBLE,
      },
      shipping: {
        type: Sequelize.DOUBLE,
      },
      handling: {
        type: Sequelize.DOUBLE,
      },
      other: {
        type: Sequelize.DOUBLE,
      },
      subtotal: {
        type: Sequelize.DOUBLE,
      },
      discount: {
        type: Sequelize.DOUBLE,
      },
      vat: {
        type: Sequelize.DOUBLE,
      },
      suppliercode: {
        type: Sequelize.STRING,
      },
      user: {
        type: Sequelize.STRING,
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
      shipsuppl: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldata_grn_det;
  
  