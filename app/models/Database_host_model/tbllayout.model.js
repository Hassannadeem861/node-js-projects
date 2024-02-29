// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllayout = sequelize2.define("tbllayout", {
        FirstStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        SecondStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        ThirdStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        FourthStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        FifthStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        SixthStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        SeventhStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        EighthStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        NinthStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        TenthStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        EleventhStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        TwelevethStr: {
            type: Sequelize.STRING(100),
            allowNull: true
        }
    });
  
    module.exports = Tbllayout;

  