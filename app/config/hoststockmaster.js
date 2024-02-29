const { Sequelize } = require('sequelize');

const sequelize4 = new Sequelize({
  database: 'ipos3',
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

module.exports = sequelize4;