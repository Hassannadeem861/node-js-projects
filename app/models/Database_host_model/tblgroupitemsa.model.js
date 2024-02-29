// tblgroupitems.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblgroupitemsa = sequelize2.define("tblgroupitemsa", {
        GroupNo: {
        type: Sequelize.STRING,
      },
      GroupName: {
        type: Sequelize.STRING,
      },
      StockCode: {
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.STRING,
      },
      GPosition: {
        type: Sequelize.INTEGER,
      },
    });
  
    module.exports = Tblgroupitemsa;
  
  