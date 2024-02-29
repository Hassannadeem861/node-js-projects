const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpAuditOrderPrint = sequelize2.define("tmpauditorderprint", {
    DateTime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    InvoiceNumber: {
        type: Sequelize.STRING(16),
        allowNull: true
    },
    TransactionNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    StockCode: {
        type: Sequelize.STRING(16),
        allowNull: true
    },
    Description: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    QuantityReceived: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    SOH: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    ExclusiveUnitCost: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    InclusiveUnitCost: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    Markup: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    ExclusiveSelling: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    InclusiveSelling: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    VATPercentage: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    LineTotal: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    OrderNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Subtotal: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    VAT: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    SupplierCode: {
        type: Sequelize.STRING(16),
        allowNull: true
    },
    User: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    hisYear: {
        type: Sequelize.STRING(4),
        allowNull: true
    },
    hisMonth: {
        type: Sequelize.STRING(2),
        allowNull: true
    },
    hisDay: {
        type: Sequelize.STRING(2),
        allowNull: true
    }
// }, {
//     indexes: [
//         {
//             unique: true,
//             fields: ['OrderNum', 'TransactionNumber']
//         },
//         {
//             name: 'GRVNum_Index',
//             fields: ['OrderNum']
//         },
//         {
//             name: 'ProductCode_Index',
//             fields: ['StockCode']
//         },
//         {
//             name: 'SupplierCode_Index',
//             fields: ['SupplierCode']
//         }
//     ],
//     tableName: 'tmpauditorderprint',
//     timestamps: false
});

module.exports = TmpAuditOrderPrint;
