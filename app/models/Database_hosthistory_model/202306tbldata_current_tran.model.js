const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
  const Tbldata_current_tran = sequelize1.define("202306tbldata_current_tran", {
      DateTime: {
          type: Sequelize.DATE,
      },
      salenum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      transactionnum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      stockcode: {
          type: Sequelize.STRING(100), // Reduced length
      },
      stockdescription: {
          type: Sequelize.STRING(255),
      },
      majorno: {
          type: Sequelize.STRING(50), // Reduced length
      },
      sub1no: {
          type: Sequelize.STRING(50), // Reduced length
      },
      sub2no: {
          type: Sequelize.STRING(50), // Reduced length
      },
      CreditInvoiceNo: {
          type: Sequelize.STRING(100), // Reduced length
      },
      itemdiscount: {
          type: Sequelize.STRING(100), // Reduced length
      },
      valuediscount: {
          type: Sequelize.STRING(100), // Reduced length
      },
      qty: {
          type: Sequelize.STRING(100), // Reduced length
      },
      stockunitprice: {
          type: Sequelize.STRING(100), // Reduced length
      },
      vatpercentage: {
          type: Sequelize.STRING(100), // Reduced length
      },
      vatflag: {
          type: Sequelize.STRING(100), // Reduced length
      },
      clerknum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      ClerkName: {
          type: Sequelize.STRING(255),
      },
      paymenttype: {
          type: Sequelize.STRING(100), // Reduced length
      },
      CehqueNum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      Cardnum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      AccountNum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      CookingMsg: {
          type: Sequelize.STRING(255),
      },
      externalordernum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      serialitem: {
          type: Sequelize.STRING(100), // Reduced length
      },
      computername: {
          type: Sequelize.STRING(100), // Reduced length
      },
      serialnum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      averagecostprice: {
          type: Sequelize.STRING(100), // Reduced length
      },
      lastcostprice: {
          type: Sequelize.STRING(100), // Reduced length
      },
      linetotal: {
          type: Sequelize.STRING(100), // Reduced length
      },
      InvoiceTotal: {
          type: Sequelize.STRING(100), // Reduced length
      },
      PickingSlip: {
          type: Sequelize.STRING(100), // Reduced length
      },
      accinvoicenum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      comment: {
          type: Sequelize.TEXT, // Changed to TEXT for potentially large comments
      },
      cashupnum: {
          type: Sequelize.STRING(100), // Reduced length
      },
      incashup: {
          type: Sequelize.STRING(100), // Reduced length
      },
      possale: {
          type: Sequelize.STRING(100), // Reduced length
      },
      transfer: {
          type: Sequelize.STRING(100), // Reduced length
      },
      tendered: {
          type: Sequelize.STRING(100), // Reduced length
      },
      Hisyear: {
          type: Sequelize.STRING(100), // Reduced length
      },
      HisMonth: {
          type: Sequelize.STRING(100), // Reduced length
      },
      Hisday: {
          type: Sequelize.STRING(100), // Reduced length
      },
      sliptype: {
          type: Sequelize.STRING(100), // Reduced length
      },
      clerkcashup: {
          type: Sequelize.STRING(100), // Reduced length
      },
  }, {
    // Added ROW_FORMAT=DYNAMIC to optimize row size
    // options: {
    //   charset: 'utf8mb4',
    //   collate: 'utf8mb4_unicode_ci',
    //   // Added ROW_FORMAT=DYNAMIC
    //   // This helps to store variable-length columns more efficiently
    //   // as only the length of the actual content is stored,
    //   // rather than a fixed-length allocation.
    //   // It's especially useful for large VARCHAR fields.
    //   // You may also try ROW_FORMAT=COMPRESSED
    //   // to compress data further.
    //   // Make sure your MySQL version supports this option.
    //   rowFormat: 'DYNAMIC'
    // }
  });

  module.exports =  Tbldata_current_tran;

