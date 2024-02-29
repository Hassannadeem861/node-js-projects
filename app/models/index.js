// // index.js
// const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// // db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
// // db.users = require("./user.model.js")(sequelize, Sequelize);
// // db.debtorimport = require("./debtorimport.model.js")(sequelize, Sequelize);
// // db.tblAgeInfo = require("./tblageinfo.model.js")(sequelize, Sequelize);
// // db.tblcontractmanager = require("./tblcontractmanager.model.js")(sequelize, Sequelize);
// // db.tbltmpctrans = require("./tbltmpctran.model.js")(sequelize, Sequelize);
// // db.tblnotes = require("./tblnotes.model.js")(sequelize, Sequelize);
// // db.tbldatacanceltran = require("./202306tbldata_cancel_tran.model.js")(sequelize, Sequelize);
// // db.tbl_debtor_tran = require("./tbl_debtors_tran.model.js")(sequelize, Sequelize);
// // db.tbladress = require("./tbladress.model.js")(sequelize, Sequelize);
// db.tbllist = require("./tablelisttable.model.js")(sequelize, Sequelize);
// // db.tbldebtor_copy = require("./tbldebtor_copy.model.js")(sequelize, Sequelize);
// // db.tbldebtor_tran = require("./tbldebtor_tran.model.js")(sequelize, Sequelize);

// // db.tblcontractmanagerdet = require("./tblcontractmanagerdet.model.js")(sequelize, Sequelize);
// // db.tbldebtor = require("./tbldebtor.model.js")(sequelize, Sequelize);
// // db.tbldebtorscounters = require("./tbldebtorscounters.model.js")(sequelize, Sequelize);
// // db.tbl_tran_cashup_det = require("./202308tbldata_cashup_det.model.js")(sequelize, Sequelize);


// // Sync the database
// db.sequelize
//   // .sync({ force: true })
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

// module.exports = db;



// index.js
const dbConfig = require('./app/config/hostthisstory');
const database1Config = require('./app/config/host');
const database3Config = require('./app/config/hostdebtors');
const database4Config = require('./app/config/hoststockmaster');
const Sequelize = require("sequelize");
const User =require('../models/Database_host_model/user.model.js');


const sequelizeOptions = {
  database: dbConfig.DB,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// Check if dbConfig has pool property
if (dbConfig.pool) {
  // Check if pool has max property
  if (dbConfig.pool.max) {
    sequelizeOptions.pool.max = dbConfig.pool.max;
  }
  // Check if pool has min property
  if (dbConfig.pool.min) {
    sequelizeOptions.pool.min = dbConfig.pool.min;
  }
  // Check if pool has acquire property
  if (dbConfig.pool.acquire) {
    sequelizeOptions.pool.acquire = dbConfig.pool.acquire;
  }
  // Check if pool has idle property
  if (dbConfig.pool.idle) {
    sequelizeOptions.pool.idle = dbConfig.pool.idle;
  }
}

// Create Sequelize instance
const sequelize = new Sequelize(
  sequelizeOptions.database,
  sequelizeOptions.username,
  sequelizeOptions.password,
  {
    host: sequelizeOptions.host,
    dialect: sequelizeOptions.dialect,
    operatorsAliases: sequelizeOptions.operatorsAliases,
    pool: {
      max: sequelizeOptions.pool.max,
      min: sequelizeOptions.pool.min,
      acquire: sequelizeOptions.pool.acquire,
      idle: sequelizeOptions.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Host_Debtors models to be \Start
db.tbllist = require("../models/Database_hostdebtors_model/tablelisttable.model.js")(sequelize, Sequelize);
db.tblageinfo = require("../models/Database_hostdebtors_model/tblageinfo.model.js")(sequelize, Sequelize);
db.debtorimport = require("../models/Database_hostdebtors_model/debtorimport.model.js")(sequelize, Sequelize);
db.tbl_debtors_tran = require("../models/Database_hostdebtors_model/tbl_debtors_tran.model.js")(sequelize, Sequelize);
db.tbladress = require("../models/Database_hostdebtors_model/tbladress.model.js")(sequelize, Sequelize);
db.tblcontractmanager = require("../models/Database_hostdebtors_model/tblcontractmanager.model.js")(sequelize, Sequelize);
db.tblcontractmanagerdet = require("../models/Database_hostdebtors_model/tblcontractmanagerdet.model.js")(sequelize, Sequelize);
db.tbldebtor = require("../models/Database_hostdebtors_model/tbldebtor.model.js")(sequelize, Sequelize);
db.tbldebtor_copy = require("../models/Database_hostdebtors_model/tbldebtor_copy.model.js")(sequelize, Sequelize);
db.tbldebtor_groups = require("../models/Database_hostdebtors_model/tbldebtor_groups.model.js")(sequelize, Sequelize);
db.tbldebtor_tran = require("../models/Database_hostdebtors_model/tbldebtor_tran.model.js")(sequelize, Sequelize);
db.tbldebtorscounters = require("../models/Database_hostdebtors_model/tbldebtorscounters.model.js")(sequelize, Sequelize);
db.tblnotes = require("../models/Database_hostdebtors_model/tblnotes.model.js")(sequelize, Sequelize);
db.tbltmpctran = require("../models/Database_hostdebtors_model/tbltmpctran.model.js")(sequelize, Sequelize);

// Host_Debtors models to be \ended



// Host models to be /Start

db.tbladdress = require("../models/Database_host_model/tbladdress.model.js")(sequelize, Sequelize);
db.tblauditsales = require("../models/Database_host_model/tblauditsales.model.js")(sequelize, Sequelize);
db.tblavgcategorysale = require("../models/Database_host_model/tblavgcategorysale.model.js")(sequelize, Sequelize);
db.tblavgsuppliersale = require("../models/Database_host_model/tblavgsuppliersale.model.js")(sequelize, Sequelize);
db.tblbarcode = require("../models/Database_host_model/tblbarcode.model.js")(sequelize, Sequelize);
db.tblcashout = require("../models/Database_host_model/tblcashout.model.js")(sequelize, Sequelize);
db.tblcombineditems = require("../models/Database_host_model/tblcombineditems.model.js")(sequelize, Sequelize);
db.tblcompany = require("../models/Database_host_model/tblcompany.model.js")(sequelize, Sequelize);
db.tblcounterpickingslip = require("../models/Database_host_model/tblcounterpickingslip.model.js")(sequelize, Sequelize);
db.tblcounters = require("../models/Database_host_model/tblcounters.model.js")(sequelize, Sequelize);
db.tblcprice = require("../models/Database_host_model/tblcprice.model.js")(sequelize, Sequelize);
db.tblcurrentsale = require("../models/Database_host_model/tblcurrentsale.model.js")(sequelize, Sequelize);
db.tbldatabase = require("../models/Database_host_model/tbldatabase.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_host_model/tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldeliverydet = require("../models/Database_host_model/tbldeliverydet.model.js")(sequelize, Sequelize);
db.tbldrawer = require("../models/Database_host_model/tbldrawer.model.js")(sequelize, Sequelize);
db.tbleod = require("../models/Database_host_model/tbleod.model.js")(sequelize, Sequelize);
db.tblexcelfile = require("../models/Database_host_model/tblexcelfile.model.js")(sequelize, Sequelize);
db.tblfloat = require("../models/Database_host_model/tblfloat.model.js")(sequelize, Sequelize);
db.tblfootermsg = require("../models/Database_host_model/tblfootermsg.model.js")(sequelize, Sequelize);
db.tblgroupitems = require("../models/Database_host_model/tblgroupitems.model.js")(sequelize, Sequelize);
db.tblgroupitemsa = require("../models/Database_host_model/tblgroupitemsa.model.js")(sequelize, Sequelize);
db.tblgroups = require("../models/Database_host_model/tblgroups.model.js")(sequelize, Sequelize);
db.tblgrvcombined = require("../models/Database_host_model/tblgrvcombined.model.js")(sequelize, Sequelize);
db.tblgrvdata = require("../models/Database_host_model/tblgrvdata.model.js")(sequelize, Sequelize);
db.tblhourlysale = require("../models/Database_host_model/tblhourlysale.model.js")(sequelize, Sequelize);
db.tblgrvdata = require("../models/Database_host_model/tblgrvdata.model.js")(sequelize, Sequelize);
db.tblinvprint = require("../models/Database_host_model/tblinvprint.model.js")(sequelize, Sequelize);
db.tblinvprintsurcharge = require("../models/Database_host_model/tblinvprintsurcharge.model.js")(sequelize, Sequelize);
db.tbllaybyefootermsg = require("../models/Database_host_model/tbllaybyefootermsg.model.js")(sequelize, Sequelize);
db.tbllayout = require("../models/Database_host_model/tbllayout.model.js")(sequelize, Sequelize);
db.tbllinkcodes = require("../models/Database_host_model/tbllinkcodes.model.js")(sequelize, Sequelize);
db.tbllistsurcharge = require("../models/Database_host_model/tbllistsurcharge.model.js")(sequelize, Sequelize);
db.tbllisttable = require("../models/Database_host_model/tbllisttable.model.js")(sequelize, Sequelize);
db.tbllivebusiness = require("../models/Database_host_model/tbllivebusiness.model.js")(sequelize, Sequelize);
db.tbllivebusinessturnover = require("../models/Database_host_model/tbllivebusinessturnover.model.js")(sequelize, Sequelize);
db.tbllivecashier = require("../models/Database_host_model/tbllivecashier.model.js")(sequelize, Sequelize);
db.tbllivecashierturnover = require("../models/Database_host_model/tbllivecashierturnover.model.js")(sequelize, Sequelize);
db.tblmainpickingslip = require("../models/Database_host_model/tblmainpickingslip.model.js")(sequelize, Sequelize);
db.tblposscale = require("../models/Database_host_model/tblposscale.model.js")(sequelize, Sequelize);
db.tblpp = require("../models/Database_host_model/tblpp.model.js")(sequelize, Sequelize);
db.tblpp1 = require("../models/Database_host_model/tblpp1.model.js")(sequelize, Sequelize);
db.tblquotefootermsg = require("../models/Database_host_model/tblquotefootermsg.model.js")(sequelize, Sequelize);
db.tblrepairfootermsg = require("../models/Database_host_model/tblrepairfootermsg.model.js")(sequelize, Sequelize);
db.tblsettings = require("../models/Database_host_model/tblsettings.model.js")(sequelize, Sequelize);
db.tmpdata_salesrep_tran = require("../models/Database_host_model/tmpdata_salesrep_tran.model.js")(sequelize, Sequelize);
db.tmpdelivery = require("../models/Database_host_model/tmpdelivery.model.js")(sequelize, Sequelize);
db.tmpdsales = require("../models/Database_host_model/tmpdsales.model.js")(sequelize, Sequelize);
db.tmphistorystocktake = require("../models/Database_host_model/tmphistorystocktake.model.js")(sequelize, Sequelize);
db.tmpinvoicesearch = require("../models/Database_host_model/tmpinvoicesearch.model.js")(sequelize, Sequelize);
db.tmpinvoicesearch2 = require("../models/Database_host_model/tmpinvoicesearch2.model.js")(sequelize, Sequelize);
db.tmpinvprint = require("../models/Database_host_model/tmpinvprint.model.js")(sequelize, Sequelize);
db.tmpmaindelete = require("../models/Database_host_model/tmpmaindelete.model.js")(sequelize, Sequelize);
db.tmpprtstocktake = require("../models/Database_host_model/tmpprtstocktake.model.js")(sequelize, Sequelize);
db.tmpquotedet = require("../models/Database_host_model/tmpquotedet.model.js")(sequelize, Sequelize);
db.updatedate = require("../models/Database_host_model/updatedate.model.js")(sequelize, Sequelize);
db.tmpustocktake = require("../models/Database_host_model/tmpustocktake.model.js")(sequelize, Sequelize);
db.tmpugrv = require("../models/Database_host_model/tmpugrv.model.js")(sequelize, Sequelize);
db.tmpsurcharge = require("../models/Database_host_model/tmpsurcharge.model.js")(sequelize, Sequelize);
db.tmpstocktake = require("../models/Database_host_model/tmpstocktake.model.js")(sequelize, Sequelize);
db.tmpstockrecord = require("../models/Database_host_model/tmpstockrecord.model.js")(sequelize, Sequelize);
db.tmpstockonhand = require("../models/Database_host_model/tmpstockonhand.model.js")(sequelize, Sequelize);
db.tmpstockadjustments = require("../models/Database_host_model/tmpstockadjustments.model.js")(sequelize, Sequelize);
db.tmpslavedelete = require("../models/Database_host_model/tmpslavedelete.model.js")(sequelize, Sequelize);
db.tmpserialsale = require("../models/Database_host_model/tmpserialsale.model.js")(sequelize, Sequelize);
db.tmprepair = require("../models/Database_host_model/tmprepair.model.js")(sequelize, Sequelize);
db.users = require("../models/Database_host_model/user.model.js")(sequelize, Sequelize);

// Host models to be \ended



// Hosthistory models to be \Start

db.tbldata_cancel_tran = require("../models/Database_hosthistory_model/202306tbldata_cancel_tran.model.js")(sequelize, Sequelize);
db.tbldata_cashup = require("../models/Database_hosthistory_model/202306tbldata_cashup.model.js")(sequelize, Sequelize);
db.tbldata_cashup_det = require("../models/Database_hosthistory_model/202306tbldata_cashup_det.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_hosthistory_model/202306tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/202306tbldata_price.model.js")(sequelize, Sequelize);
db.tbldata_stockactivity = require("../models/Database_hosthistory_model/202306tbldata_stockactivity.model.js")(sequelize, Sequelize);
db.tbldebtor_tran = require("../models/Database_hosthistory_model/202306tbldebtor_tran.model.js")(sequelize, Sequelize);
db.tbldata_adjustment = require("../models/Database_hosthistory_model/202307tbldata_adjustment.model.js")(sequelize, Sequelize);
db.tbldata_cashup = require("../models/Database_hosthistory_model/202307tbldata_cashup.model.js")(sequelize, Sequelize);
db.tbldata_cashup_det = require("../models/Database_hosthistory_model/202307tbldata_cashup_det.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_hosthistory_model/202307tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/202307tbldata_price.model.js")(sequelize, Sequelize);
db.tbldata_stockactivity = require("../models/Database_hosthistory_model/202307tbldata_stockactivity.model.js")(sequelize, Sequelize);
db.tbldebtor_tran = require("../models/Database_hosthistory_model/202307tbldebtor_tran.model.js")(sequelize, Sequelize);
db.tbldata_adjustment = require("../models/Database_hosthistory_model/202308tbldata_adjustment.model.js")(sequelize, Sequelize);
db.tbldata_cancel_tran = require("../models/Database_hosthistory_model/202308tbldata_cancel_tran.model.js")(sequelize, Sequelize);
db.tbldata_cashup = require("../models/Database_hosthistory_model/202308tbldata_cashup.model.js")(sequelize, Sequelize);
db.tbldata_cashup_det = require("../models/Database_hosthistory_model/202308tbldata_cashup_det.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_hosthistory_model/202308tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/202308tbldata_price.model.js")(sequelize, Sequelize);
db.tbldata_stockactivity = require("../models/Database_hosthistory_model/202308tbldata_stockactivity.model.js")(sequelize, Sequelize);
db.tbldata_stocktake = require("../models/Database_hosthistory_model/202308tbldata_stocktake.model.js")(sequelize, Sequelize);
db.tbldebtor_tran = require("../models/Database_hosthistory_model/202308tbldebtor_tran.model.js")(sequelize, Sequelize);
db.tblpayout = require("../models/Database_hosthistory_model/202308tblpayout.model.js")(sequelize, Sequelize);
db.tbldata_cancel_tran = require("../models/Database_hosthistory_model/202309tbldata_cancel_tran.model.js")(sequelize, Sequelize);
db.tbldata_cashup = require("../models/Database_hosthistory_model/202309tbldata_cashup.model.js")(sequelize, Sequelize);
db.tbldata_cashup_det = require("../models/Database_hosthistory_model/202309tbldata_cashup_det.model.js")(sequelize, Sequelize);
db.tbldata_creditors_tran = require("../models/Database_hosthistory_model/202309tbldata_creditors_tran.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_hosthistory_model/202309tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldata_grn_det = require("../models/Database_hosthistory_model/202309tbldata_grn_det.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/202309tbldata_price.model.js")(sequelize, Sequelize);
db.tbldata_stockactivity = require("../models/Database_hosthistory_model/202309tbldata_stockactivity.model.js")(sequelize, Sequelize);
db.tbldata_stocktake = require("../models/Database_hosthistory_model/202309tbldata_stocktake.model.js")(sequelize, Sequelize);
db.tbldebtor_tran = require("../models/Database_hosthistory_model/202309tbldebtor_tran.model.js")(sequelize, Sequelize);
db.tbldata_cancel_tran = require("../models/Database_hosthistory_model/202310tbldata_cancel_tran.model.js")(sequelize, Sequelize);
db.tbldata_cashup = require("../models/Database_hosthistory_model/202310tbldata_cashup.model.js")(sequelize, Sequelize);
db.tbldata_cashup_det = require("../models/Database_hosthistory_model/202310tbldata_cashup_det.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_hosthistory_model/202310tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/202310tbldata_price.model.js")(sequelize, Sequelize);
db.tbldata_stockactivity = require("../models/Database_hosthistory_model/202310tbldata_stockactivity.model.js")(sequelize, Sequelize);
db.tbldebtor_tran = require("../models/Database_hosthistory_model/202310tbldebtor_tran.model.js")(sequelize, Sequelize);
db.tbldata_cancel_tran = require("../models/Database_hosthistory_model/202311tbldata_cancel_tran.model.js")(sequelize, Sequelize);
db.tbldata_cancel_tran = require("../models/Database_hosthistory_model/202312tbldata_cancel_tran.model.js")(sequelize, Sequelize);
db.tbldata_cashup = require("../models/Database_hosthistory_model/202312tbldata_cashup.model.js")(sequelize, Sequelize);
db.tbldata_cashup_det = require("../models/Database_hosthistory_model/202312tbldata_cashup_det.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_hosthistory_model/202312tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/202312tbldata_price.model.js")(sequelize, Sequelize);
db.tbldata_stockactivity = require("../models/Database_hosthistory_model/202312tbldata_stockactivity.model.js")(sequelize, Sequelize);
db.tbldata_cancel_tran = require("../models/Database_hosthistory_model/202401tbldata_cancel_tran.model.js")(sequelize, Sequelize);
db.tbldata_cashup = require("../models/Database_hosthistory_model/202401tbldata_cashup.model.js")(sequelize, Sequelize);
db.tbldata_cashup_det = require("../models/Database_hosthistory_model/202401tbldata_cashup_det.model.js")(sequelize, Sequelize);
db.tbldata_current_tran = require("../models/Database_hosthistory_model/202401tbldata_current_tran.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/202401tbldata_price.model.js")(sequelize, Sequelize);
db.tbldata_stockactivity = require("../models/Database_hosthistory_model/202401tbldata_stockactivity.model.js")(sequelize, Sequelize);
db.tbldebtor_tran = require("../models/Database_hosthistory_model/202401tbldebtor_tran.model.js")(sequelize, Sequelize);
db.tbldataadjustment = require("../models/Database_hosthistory_model/tbldataadjustment.model.js")(sequelize, Sequelize);
db.tbldatacancel_tran = require("../models/Database_hosthistory_model/tbldatacancel_tran.model.js")(sequelize, Sequelize);
db.tbldatacashout = require("../models/Database_hosthistory_model/tbldatacashout.model.js")(sequelize, Sequelize);
db.tbldatacashup = require("../models/Database_hosthistory_model/tbldatacashup.model.js")(sequelize, Sequelize);
db.tbldatacashup_det = require("../models/Database_hosthistory_model/tbldatacashup_det.model.js")(sequelize, Sequelize);
db.tbldatacreditor_tran = require("../models/Database_hosthistory_model/tbldatacreditor_tran.model.js")(sequelize, Sequelize);
db.tbldatacurrent_tran = require("../models/Database_hosthistory_model/tbldatacurrent_tran.model.js")(sequelize, Sequelize);
db.tbldatadebtor_tran = require("../models/Database_hosthistory_model/tbldatadebtor_tran.model.js")(sequelize, Sequelize);
db.tbldatagrv = require("../models/Database_hosthistory_model/tbldatagrv.model.js")(sequelize, Sequelize);
db.tbldatapayout = require("../models/Database_hosthistory_model/tbldatapayout.model.js")(sequelize, Sequelize);
db.tbldataprice = require("../models/Database_hosthistory_model/tbldataprice.model.js")(sequelize, Sequelize);
db.tbldatasalesserialitems = require("../models/Database_hosthistory_model/tbldatasalesserialitems.model.js")(sequelize, Sequelize);
db.tbldatastockactivity = require("../models/Database_hosthistory_model/tbldatastockactivity.mode.js")(sequelize, Sequelize);
db.tbldatastocktake = require("../models/Database_hosthistory_model/tbldatastocktake.model.js")(sequelize, Sequelize);
db.tbldata_price = require("../models/Database_hosthistory_model/tbllistauditclaim.model.js")(sequelize, Sequelize);
db.tbllistauditcreditortotals = require("../models/Database_hosthistory_model/tbllistauditcreditortotals.model.js")(sequelize, Sequelize);
db.tbllistauditdebtor = require("../models/Database_hosthistory_model/tbllistauditdebtor.model.js")(sequelize, Sequelize);
db.tbllistauditdebtortotals = require("../models/Database_hosthistory_model/tbllistauditdebtortotals.model.js")(sequelize, Sequelize);
db.tbllistauditorder = require("../models/Database_hosthistory_model/tbllistauditorder.model.js")(sequelize, Sequelize);
db.tbllistauditpayments = require("../models/Database_hosthistory_model/tbllistauditpayments.model.js")(sequelize, Sequelize);
db.tbllistauditrefunds = require("../models/Database_hosthistory_model/tbllistauditrefunds.model.js")(sequelize, Sequelize);
db.tbllistauditsplittender = require("../models/Database_hosthistory_model/tbllistauditsplittender.model.js")(sequelize, Sequelize);
db.tbllistauditstockrecord = require("../models/Database_hosthistory_model/tbllistauditstockrecord.model.js")(sequelize, Sequelize);
db.tbllistauditstockvalue = require("../models/Database_hosthistory_model/tbllistauditstockvalue.model.js")(sequelize, Sequelize);
db.tbllistauditsupplier = require("../models/Database_hosthistory_model/tbllistauditsupplier.model.js")(sequelize, Sequelize);
db.tbllistcashupdeclare = require("../models/Database_hosthistory_model/tbllistcashupdeclare.model.js")(sequelize, Sequelize);
db.tbllistcredage = require("../models/Database_hosthistory_model/tbllistcredage.model.js")(sequelize, Sequelize);  
db.tbllistposaccpay = require("../models/Database_hosthistory_model/tbllistposaccpay.model.js")(sequelize, Sequelize);
db.tbllisttable = require("../models/Database_hosthistory_model/tbllisttable.model.js")(sequelize, Sequelize);
db.tbltmp = require("../models/Database_hosthistory_model/tbltmp.model.js")(sequelize, Sequelize);

// hosthistory models to be \ended

// Host-Stock-Master models to be /Start

db.tbldata_creditors_tran = require("../models/Database_hoststockmaster_model/tbldata_creditors_tran.model.js")(sequelize, Sequelize);


// Host-Stock-Master models to be /ended


// Sync the database
db.sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Database synced");
// const User =require('./app/models/Database_host_model/user.model');

    // Check if admin user exists, create one if not
    const adminUser = await db.users.findOne({ where: { username: "admin" } });
    if (!adminUser) {
      // Create admin user
      await db.users.create({
        username: "admin",
        password: "admin", // You should hash the password in a real-world scenario
        role: "admin",
        permissions: ["updateUser", "deleteUser", "viewUsers"],
      });
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }

    // Start the server after ensuring admin user is created
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

module.exports = db;