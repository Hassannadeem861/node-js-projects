// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "ipos",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
const { Sequelize } = require('sequelize');

const sequelize1 = new Sequelize({
  database: 'ipos4',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: "mysql", // Replace with your actual database dialect
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize1;