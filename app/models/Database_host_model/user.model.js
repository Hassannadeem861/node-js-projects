// // user.model.js
// const { Sequelize } = require('sequelize');
// const sequelize2 = require('../../config/database1');
//   const User = sequelize2.define("user", {
//     username: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     role: {
//       type: Sequelize.STRING,
//     },
//     permissions: {
//       type: Sequelize.JSON, // Store permissions as JSON
//     },
//   });
//   module.exports = User;


// user.model.js

// const sequelize1 = require('../../config/db.config');

// const sequelize3 = require('../../config/database3');
// const sequelize4 = require('../../config/database4');

// Common attributes for user model
// const commonAttributes = {
// // user.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');




  const User = sequelize2.define("user", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
    },
    permissions: {
      type: Sequelize.JSON, // Store permissions as JSON
    },
  });

  module.exports = User;
  // module.exports = {
  //   User: User,
  //   sequelize: sequelize,
  // };

// Importing the School model from the second database
// const School = sequelize3.import('./');
// const Tbldeladdress = require("../../models/Database_hostdebtors_model/tablelisttable.model");
// const Tblageinfo = require("../../models/Database_hostdebtors_model/tblageinfo.model");

// // Establishing association between User and School
// User.belongsTo(Tbldeladdress); // Assuming there's a foreign key in User table referencing School
// User.belongsTo(Tblageinfo);

