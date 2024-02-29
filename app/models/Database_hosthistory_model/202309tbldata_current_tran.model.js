const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_current_tran = sequelize1.define("202309tbldata_current_tran", {
      datetime: {
        type: Sequelize.DATE,
      },
      salenum: {
        type: Sequelize.DOUBLE,
      },
      transactionnum: {
        type: Sequelize.INTEGER,
      },
      stockcode: {
        type: Sequelize.STRING,
      },
      stockdescription: {
        type: Sequelize.STRING,
      },
      majorno: {
        type: Sequelize.DOUBLE,
      },
      sub1no: {
        type: Sequelize.DOUBLE,
      },
      sub2no: {
        type: Sequelize.DOUBLE,
      },
      CreditInvoiceNo: {
        type: Sequelize.DOUBLE,
      },
      itemdiscount: {
        type: Sequelize.DOUBLE,
      },
      valuediscount: {
        type: Sequelize.DOUBLE,
      },
      qty: {
        type: Sequelize.DOUBLE,
      },
      stockunitprice: {
        type: Sequelize.DOUBLE,
        
      },
      vatpercentage: {
        type: Sequelize.DOUBLE,
        
      },
      vatflag: {
        type: Sequelize.BOOLEAN,
        
      },
      clerknum: {
        type: Sequelize.STRING,
        
      },
      ClerkName: {
        type: Sequelize.STRING,
        
      },
      paymenttype: {
        type: Sequelize.STRING,
        
      },
      CehqueNum: {
        type: Sequelize.STRING,
        
      },
      Cardnum: {
        type: Sequelize.STRING,
        
      },
      AccountNum: {
        type: Sequelize.STRING,
        
      },
      CookingMsg: {
        type: Sequelize.STRING,
        
      },
      externalordernum: {
        type: Sequelize.STRING,
        
      },
      serialitem: {
        type: Sequelize.TEXT,
        
      },
      computername: {
        type: Sequelize.STRING,
        
      },
      serialnum: {
        type: Sequelize.STRING,
        
      },
      averagecostprice: {
        type: Sequelize.DOUBLE,
        
      },
      lastcostprice: {
        type: Sequelize.DOUBLE,
        
      },
      linetotal: {
        type: Sequelize.DOUBLE,
        
      },
      InvoiceTotal: {
        type: Sequelize.DOUBLE,
        
      },
      PickingSlip: {
        type: Sequelize.DOUBLE,
        
      },
      accinvoicenum: {
        type: Sequelize.INTEGER,
        
      },
      comment: {
        type: Sequelize.STRING,
        
      },
      cashupnum: {
        type: Sequelize.DOUBLE,
        
      },
      incashup: {
        type: Sequelize.BOOLEAN,
        
      },
      possale: {
        type: Sequelize.BOOLEAN,
        
      },
      transfer: {
        type: Sequelize.BOOLEAN,
        
      },
      tendered: {
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
      sliptype: {
        type: Sequelize.DOUBLE,
        
      },
      clerkcashup: {
        type: Sequelize.BOOLEAN,
        
      }
    });
  
    module.exports =  Tbldata_current_tran;

