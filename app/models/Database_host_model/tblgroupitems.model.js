// tblgroupitems.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblgroupitems = sequelize2.define("tblgroupitems", {
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
  
    module.exports = Tblgroupitems;
  