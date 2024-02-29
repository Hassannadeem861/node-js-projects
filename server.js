const express = require('express');
const bodyParser = require('body-parser');
const jwtMiddleware = require('./app/middleware/authMiddleware');
const roleMiddleware = require('./app/middleware/roleMiddleware');
const dbConfig = require('./app/config/hostthisstory');
const database1Config = require('./app/config/host');
const database3Config = require('./app/config/hostdebtors');
const database4Config = require('./app/config/hoststockmaster');

///database host start
const User = require('./app/models/Database_host_model/user.model');
const Tbladdress = require('./app/models/Database_host_model/tbladdress.model');
const Tblauditsales = require('./app/models/Database_host_model/tblauditsales.model');
const Tblavgcategorysale = require('./app/models/Database_host_model/tblavgcategorysale.model');
const Tblavgsuppliersale = require('./app/models/Database_host_model/tblavgsuppliersale.model');
const Tblbarcode = require('./app/models/Database_host_model/tblbarcode.model');
const Tblcashout = require('./app/models/Database_host_model/tblcashout.model');
const Tblcombineditems = require('./app/models/Database_host_model/tblcombineditems.model');
const Tblcompany = require('./app/models/Database_host_model/tblcompany.model');
const Tblcounterpickingslip = require('./app/models/Database_host_model/tblcounterpickingslip.model');
const Tblcounters = require('./app/models/Database_host_model/tblcounters.model');
const Tblcprice = require('./app/models/Database_host_model/tblcprice.model');
const Tblcurrentsale = require('./app/models/Database_host_model/tblcurrentsale.model');
const Tbldata_current_tran = require('./app/models/Database_host_model/tbldata_current_tran.model');
const Tbldatabase = require('./app/models/Database_host_model/tbldatabase.model');
const Tbldeliverydet = require('./app/models/Database_host_model/tbldeliverydet.model');
const Tbldrawer = require('./app/models/Database_host_model/tbldrawer.model');
const Tbleod = require('./app/models/Database_host_model/tbleod.model');
const Tblexcelfile = require('./app/models/Database_host_model/tblexcelfile.model');
const Tblfloat = require('./app/models/Database_host_model/tblfloat.model');
const Tblfootermsg = require('./app/models/Database_host_model/tblfootermsg.model');
const Tblgroupitems = require('./app/models/Database_host_model/tblgroupitems.model');
const Tblgroupitemsa = require('./app/models/Database_host_model/tblgroupitemsa.model');
const Tblgroups = require('./app/models/Database_host_model/tblgroups.model');
const Tblgrvcombined = require('./app/models/Database_host_model/tblgrvcombined.model');
const Tblgrvdata = require('./app/models/Database_host_model/tblgrvdata.model');
const Tblhourlysale = require('./app/models/Database_host_model/tblhourlysale.model');
const Tblinvprint = require('./app/models/Database_host_model/tblinvprint.model');
const Tblinvprintsurcharge = require('./app/models/Database_host_model/tblinvprintsurcharge.model');
const Tbllaybyefootermsg = require('./app/models/Database_host_model/tbllaybyefootermsg.model');
const Tbllayout = require('./app/models/Database_host_model/tbllayout.model');
const Tbllinkcodes = require('./app/models/Database_host_model/tbllinkcodes.model');
const Tbllistcombined = require('./app/models/Database_host_model/tbllistcombined.model');
const Tbllistsurcharge = require('./app/models/Database_host_model/tbllistsurcharge.model');
const Tbl_listtable = require('./app/models/Database_host_model/tbllisttable.model');
const Tbllivebusiness = require('./app/models/Database_host_model/tbllivebusiness.model');
const Tbllivebusinessturnover = require('./app/models/Database_host_model/tbllivebusinessturnover.model');
const Tbllivecashier = require('./app/models/Database_host_model/tbllivecashier.model');
const Tbllivecashierturnover = require('./app/models/Database_host_model/tbllivecashierturnover.model');
const Tblmainpickingslip = require('./app/models/Database_host_model/tblmainpickingslip.model');
const Tblposscale = require('./app/models/Database_host_model/tblposscale.model');
const Tblpp = require('./app/models/Database_host_model/tblpp.model');
const Tblpp1 = require('./app/models/Database_host_model/tblpp1.model');
const Tblquotefootermsg = require('./app/models/Database_host_model/tblquotefootermsg.model');
const Tblrepairfootermsg = require('./app/models/Database_host_model/tblrepairfootermsg.model');
const Tblsettings = require('./app/models/Database_host_model/tblsettings.model');
const Tmpdata_salesrep_tran = require('./app/models/Database_host_model/tmpdata_salesrep_tran.model');
const Tmpdelivery = require('./app/models/Database_host_model/tmpdelivery.model');
const Tmpdsales = require('./app/models/Database_host_model/tmpdsales.model');
const Tmphistorystocktake = require('./app/models/Database_host_model/tmphistorystocktake.model');
const Tmpinvoicesearch = require('./app/models/Database_host_model/tmpinvoicesearch.model');
const Tmpinvoicesearch2 = require('./app/models/Database_host_model/tmpinvoicesearch2.model');
const Tmpinvprint = require('./app/models/Database_host_model/tmpinvprint.model');
const Tmpmaindelete = require('./app/models/Database_host_model/tmpmaindelete.model');
const Tmpprtstocktake = require('./app/models/Database_host_model/tmpprtstocktake.model');
const Tmpquotedet = require('./app/models/Database_host_model/tmpquotedet.model');
const Tmprefunds = require('./app/models/Database_host_model/tmprefunds.model');
const Tmprepair = require('./app/models/Database_host_model/tmprepair.model');
const Tmpserialsale = require('./app/models/Database_host_model/tmpserialsale.model');
const Tmpslavedelete = require('./app/models/Database_host_model/tmpslavedelete.model');
const Tmpstockadjustments = require('./app/models/Database_host_model/tmpstockadjustments.model');
const Tmpstockonhand = require('./app/models/Database_host_model/tmpstockonhand.model');
const Tmpstockrecord = require('./app/models/Database_host_model/tmpstockrecord.model');
const Tmpstocktake = require('./app/models/Database_host_model/tmpstocktake.model');
const Tmpsurcharge = require('./app/models/Database_host_model/tmpsurcharge.model');
const Tmpugrv = require('./app/models/Database_host_model/tmpugrv.model');
const Tmpustocktake = require('./app/models/Database_host_model/tmpustocktake.model');
const Updatedate = require('./app/models/Database_host_model/updatedate.model');
// HASSAN NADEEM 

const Tbltmpdailysales = require('./app/models/Database_host_model/tbltmpdailysales.model');
const Tbltmpdebtransactions = require('./app/models/Database_host_model/tbltmpdebtransactions.modle');
const Tbltmpinvoices = require('./app/models/Database_host_model/tbltmpinvoices.modle');
const Tbltmppayout = require('./app/models/Database_host_model/tbltmppayout.modle');
const Tbltmpprodperform = require('./app/models/Database_host_model/tbltmpprodperform.modle');
const Tbltmpprodperform1 = require('./app/models/Database_host_model/tbltmpprodperform1.modle');
const Tbltmpstockmove = require('./app/models/Database_host_model/tbltmpstockmove.modle');
const Tbltmpstocktake = require('./app/models/Database_host_model/tbltmpstocktake.modle');
const Tbltransactionv = require('./app/models/Database_host_model/tbltransactionv.modle');
const Tbl_tmp_voucher = require('./app/models/Database_host_model/tbl_tmp_voucher.modle');
const Tmpairtimesale = require('./app/models/Database_host_model/tmpairtimesale.modle');
const Tmpauditgrv = require('./app/models/Database_host_model/tmpauditgrv.modle');
const Tmpauditgrvo = require('./app/models/Database_host_model/tmpauditgrvo.modle');
const Tmpauditgrvprint = require('./app/models/Database_host_model/tmpauditgrvprint.modle');
const Tmpauditorderprint = require('./app/models/Database_host_model/tmpauditorderprint.modle');
const Tmpauditsales = require('./app/models/Database_host_model/tmpauditsales.modle');
const Tmpavgsale = require('./app/models/Database_host_model/tmpavgsale.modle');
const Tmpcashbank_tran = require('./app/models/Database_host_model/tmpcashbank_tran.modle');
const Tmpchartofaccounts_tran = require('./app/models/Database_host_model/tmpchartofaccounts_tran.modle');
const Tmpcombineditems = require('./app/models/Database_host_model/tmpcombineditems.modle');
const Tmpdata_current_tran = require('./app/models/Database_host_model/tmpdata_current_tran.modle');
const Tmpdata_salesrep = require('./app/models/Database_host_model/tmpdata_salesrep.modle');

///database host end

///database hosthistory start

const Tbldata_cancel_tran = require('./app/models/Database_hosthistory_model/202306tbldata_cancel_tran.model');
const Tbldata_cashup_d_et = require('./app/models/Database_hosthistory_model/202306tbldata_cashup_det.model');
const Tbldata_cash_up = require('./app/models/Database_hosthistory_model/202306tbldata_cashup.model');
const Tbldata_currenttran = require('./app/models/Database_hosthistory_model/202306tbldata_current_tran.model');
const Tbldata_price = require('./app/models/Database_hosthistory_model/202306tbldata_price.model');
const Tbldata_stockactivity = require('./app/models/Database_hosthistory_model/202306tbldata_stockactivity.model');
const Tbldebtor_tran = require('./app/models/Database_hosthistory_model/202306tbldebtor_tran.model');
const Tbldata_adjustment = require('./app/models/Database_hosthistory_model/202307tbldata_adjustment.model');
const Tbl_data_cashup = require('./app/models/Database_hosthistory_model/202307tbldata_cashup.model');
const Tbl_data_cashup_det = require('./app/models/Database_hosthistory_model/202307tbldata_cashup_det.model');
const Tbldatacurrenttran = require('./app/models/Database_hosthistory_model/202307tbldata_current_tran.model');
const Tbl_data_price = require('./app/models/Database_hosthistory_model/202307tbldata_price.model');
const Tbl_data_stockactivity = require('./app/models/Database_hosthistory_model/202307tbldata_stockactivity.model');
const Tbldebtortran = require('./app/models/Database_hosthistory_model/202307tbldebtor_tran.model');
const Tbldata_adjus_tment = require('./app/models/Database_hosthistory_model/202308tbldata_adjustment.model');
const Tbldata_canceltran = require('./app/models/Database_hosthistory_model/202308tbldata_cancel_tran.model');
const Tbl_data_cash_up = require('./app/models/Database_hosthistory_model/202308tbldata_cashup.model');
const Tbldatacashupdet = require('./app/models/Database_hosthistory_model/202308tbldata_cashup_det.model');
const Tbldata08_current_tran = require('./app/models/Database_hosthistory_model/202308tbldata_current_tran.model');
const Tbldatap_rice = require('./app/models/Database_hosthistory_model/202308tbldata_price.model');
const Tbldata_stocktake = require('./app/models/Database_hosthistory_model/202308tbldata_stocktake.model');
const Tbldata_stock_activity = require('./app/models/Database_hosthistory_model/202308tbldata_stockactivity.model');
const Tbl_debtor_tran = require('./app/models/Database_hosthistory_model/202308tbldebtor_tran.model');
const Tblpayout = require('./app/models/Database_hosthistory_model/202308tblpayout.model');
const Tbl_datacanceltran = require('./app/models/Database_hosthistory_model/202309tbldata_cancel_tran.model');
const Tbldata_cashu_p = require('./app/models/Database_hosthistory_model/202309tbldata_cashup.model');
const Tbldata_cashup_de_t = require('./app/models/Database_hosthistory_model/202309tbldata_cashup_det.model');
const Tbldata_creditors_tran = require('./app/models/Database_hosthistory_model/202309tbldata_creditors_tran.model');
const Tbl_data_currenttran = require('./app/models/Database_hosthistory_model/202309tbldata_current_tran.model');
const Tbldata_grn_det = require('./app/models/Database_hosthistory_model/202309tbldata_grn_det.model');
const Tbl_dataprice = require('./app/models/Database_hosthistory_model/202309tbldata_price.model');
const Tbl_data_stock_activity = require('./app/models/Database_hosthistory_model/202309tbldata_stockactivity.model');
const Tbldata_stock_take = require('./app/models/Database_hosthistory_model/202309tbldata_stocktake.model');
const Tbldebtort_ran = require('./app/models/Database_hosthistory_model/202309tbldebtor_tran.model');
const Tbl_data_canceltran = require('./app/models/Database_hosthistory_model/202310tbldata_cancel_tran.model');
const Tb_ldatacashup = require('./app/models/Database_hosthistory_model/202310tbldata_cashup.model');
const T_bldata_cashup_det = require('./app/models/Database_hosthistory_model/202310tbldata_cashup_det.model');
const Tbl_datacurrenttran = require('./app/models/Database_hosthistory_model/202310tbldata_current_tran.model');
const Tbldatapr_ice = require('./app/models/Database_hosthistory_model/202310tbldata_price.model');
const Tbldata_stockac_tivity = require('./app/models/Database_hosthistory_model/202310tbldata_stockactivity.model');
const Tb_ldebtortran = require('./app/models/Database_hosthistory_model/202310tbldebtor_tran.model');
const Tbldatacancelt_ran = require('./app/models/Database_hosthistory_model/202311tbldata_cancel_tran.model');
const Tbldatacanceltr_an = require('./app/models/Database_hosthistory_model/202312tbldata_cancel_tran.model');
const Tbldatac_ashup = require('./app/models/Database_hosthistory_model/202312tbldata_cashup.model');
const Tbldata_cashupdet = require('./app/models/Database_hosthistory_model/202312tbldata_cashup_det.model');
const Tb_ldatacurrent_tran = require('./app/models/Database_hosthistory_model/202312tbldata_current_tran.model');
const Tb_ldataprice = require('./app/models/Database_hosthistory_model/202312tbldata_price.model');
const Tbl_datastockactivity = require('./app/models/Database_hosthistory_model/202312tbldata_stockactivity.model');
const Tbldata_canc_eltran = require('./app/models/Database_hosthistory_model/202401tbldata_cancel_tran.model');
const Tbldataca_shup = require('./app/models/Database_hosthistory_model/202401tbldata_cashup.model');
const Tbl_datacashupdet = require('./app/models/Database_hosthistory_model/202401tbldata_cashup_det.model');
const Tbl_datacurrenttr_an = require('./app/models/Database_hosthistory_model/202401tbldata_current_tran.model');
const Tbldatapric_e = require('./app/models/Database_hosthistory_model/202401tbldata_price.model');
const Tbldatastock_activity = require('./app/models/Database_hosthistory_model/202401tbldata_stockactivity.model');
const Tbldebtortra_n = require('./app/models/Database_hosthistory_model/202401tbldebtor_tran.model');
const Tbldataadjustment = require('./app/models/Database_hosthistory_model/tbldataadjustment.model');
const Tbldatacancel_tran = require('./app/models/Database_hosthistory_model/tbldatacancel_tran.model');
const Tbldatacashout = require('./app/models/Database_hosthistory_model/tbldatacashout.model');
const Tbldatacashup = require('./app/models/Database_hosthistory_model/tbldatacashup.model');
const Tbldatacashup_det = require('./app/models/Database_hosthistory_model/tbldatacashup_det.model');
const Tbldatacreditor_tran = require('./app/models/Database_hosthistory_model/tbldatacreditor_tran.model');
const Tbldatacurrent_tran = require('./app/models/Database_hosthistory_model/tbldatacurrent_tran.model');
const Tbldatadebtor_tran = require('./app/models/Database_hosthistory_model/tbldatadebtor_tran.model');
const Tbldatagrv = require('./app/models/Database_hosthistory_model/tbldatagrv.model');
const Tbldatapayout = require('./app/models/Database_hosthistory_model/tbldatapayout.model');
const Tbldataprice = require('./app/models/Database_hosthistory_model/tbldataprice.model');
const Tbldatasalesserialitems = require('./app/models/Database_hosthistory_model/tbldatasalesserialitems.model');
const Tbldatastockactivity = require('./app/models/Database_hosthistory_model/tbldatastockactivity.mode');
const Tbldatastocktake = require('./app/models/Database_hosthistory_model/tbldatastocktake.model');
const Tbllistauditclaim = require('./app/models/Database_hosthistory_model/tbllistauditclaim.model');
const Tbllistauditcreditortotals = require('./app/models/Database_hosthistory_model/tbllistauditcreditortotals.model');
const Tbllistauditdebtor = require('./app/models/Database_hosthistory_model/tbllistauditdebtor.model');
const Tbllistauditdebtortotals = require('./app/models/Database_hosthistory_model/tbllistauditdebtortotals.model');
const Tbllistauditorder = require('./app/models/Database_hosthistory_model/tbllistauditorder.model');
const Tbllistauditpayments = require('./app/models/Database_hosthistory_model/tbllistauditpayments.model');
const Tbllistauditrefunds = require('./app/models/Database_hosthistory_model/tbllistauditrefunds.model');
const Tbllistauditsplittender = require('./app/models/Database_hosthistory_model/tbllistauditsplittender.model');
const Tbllistauditstockrecord = require('./app/models/Database_hosthistory_model/tbllistauditstockrecord.model');
const Tbllistauditstockvalue = require('./app/models/Database_hosthistory_model/tbllistauditstockvalue.model');
const Tbllistauditsupplier = require('./app/models/Database_hosthistory_model/tbllistauditsupplier.model');
const Tbllistcashupdeclare = require('./app/models/Database_hosthistory_model/tbllistcashupdeclare.model');
const Tbllistcredage = require('./app/models/Database_hosthistory_model/tbllistcredage.model');
const Tbllistposaccpay = require('./app/models/Database_hosthistory_model/tbllistposaccpay.model');
const Tbllisttable = require('./app/models/Database_hosthistory_model/tbllisttable.model');
const Tbltmp = require('./app/models/Database_hosthistory_model/tbltmp.model');

///database hosthistory end

///database hostdebtors start
const Tbl_list = require('./app/models/Database_hostdebtors_model/tablelisttable.model');
const Tbl_ageinfo = require('./app/models/Database_hostdebtors_model/tblageinfo.model');
const Tbl_Debtorimport = require('./app/models/Database_hostdebtors_model/debtorimport.model');
const Tbl_Debtors_tran = require('./app/models/Database_hostdebtors_model/tbl_debtors_tran.model');
const Tbl_Address = require('./app/models/Database_hostdebtors_model/tbladress.model');
const Tbl_Contractmanager = require('./app/models/Database_hostdebtors_model/tblcontractmanager.model');
const Tbl_Contractmanagerdet = require('./app/models/Database_hostdebtors_model/tblcontractmanagerdet.model');
const Tbl_Debtor = require('./app/models/Database_hostdebtors_model/tbldebtor.model');
const Tbl_Debtors_copy = require('./app/models/Database_hostdebtors_model/tbldebtor_copy.model');
const Tbl_Debtor_groups = require('./app/models/Database_hostdebtors_model/tbldebtor_groups.model');
const Tbl_Debtor_tran = require('./app/models/Database_hostdebtors_model/tbldebtor_tran.model');
const Tbl_Debtorscounters = require('./app/models/Database_hostdebtors_model/tbldebtorscounters.model');
const Tbl_Notes = require('./app/models/Database_hostdebtors_model/tblnotes.model');
const Tbl_TMPCtran = require('./app/models/Database_hostdebtors_model/tbltmpctran.model');

///database hostdebtors end


///database Host-Stock-Master start

const Tbl_ibt_category = require('./app/models/Database_hoststockmaster_model/tbl_ibt_category.model');
const Tbl_ibt_category_sub1 = require('./app/models/Database_hoststockmaster_model/tbl_ibt_category_sub1.model');
const Tbl_ibt_category_sub1_update = require('./app/models/Database_hoststockmaster_model/tbl_ibt_category_sub1_update.model');
const Tbl_ibt_category_sub2 = require('./app/models/Database_hoststockmaster_model/tbl_ibt_category_sub2.model');
const Tbl_ibt_category_sub2_update = require('./app/models/Database_hoststockmaster_model/tbl_ibt_category_sub2_update.model');
const Tbl_ibt_category_update = require('./app/models/Database_hoststockmaster_model/tbl_ibt_category_update.model');
const Tbl_ibt_comboitems = require('./app/models/Database_hoststockmaster_model/tbl_ibt_comboitems.model');
const Tbl_ibt_comboitems_update = require('./app/models/Database_hoststockmaster_model/tbl_ibt_comboitems_update.model');
const Tbl_ibt_counter = require('./app/models/Database_hoststockmaster_model/tbl_ibt_counter.model');
const Tbl_ibt_grn = require('./app/models/Database_hoststockmaster_model/tbl_ibt_grn.model');
const Tbl_ibt_grn_det = require('./app/models/Database_hoststockmaster_model/tbl_ibt_grn_det.model');
const Tbl_ibt_locations = require('./app/models/Database_hoststockmaster_model/tbl_ibt_locations.model');
const Tbl_ibt_products = require('./app/models/Database_hoststockmaster_model/tbl_ibt_products.model');
const Tbl_ibt_products_update = require('./app/models/Database_hoststockmaster_model/tbl_ibt_products_update.model');
const Tbl_ibt_product_details = require('./app/models/Database_hoststockmaster_model/tbl_ibt_product_details.model');
const Tbl_ibt_product_details_update = require('./app/models/Database_hoststockmaster_model/tbl_ibt_product_details_update.model');
const Tbl_ibt_qtyprices = require('./app/models/Database_hoststockmaster_model/tbl_ibt_qtyprices.model');
const Tbl_ibt_qtyprices_update = require('./app/models/Database_hoststockmaster_model/tbl_ibt_qtyprices_update.model');
const Tbl_ibt_status = require('./app/models/Database_hoststockmaster_model/tbl_ibt_status.model');
const Tbl_ibt_transactions = require('./app/models/Database_hoststockmaster_model/tbl_ibt_transactions.model');
const Tbl_ibt_users = require('./app/models/Database_hoststockmaster_model/tbl_ibt_users.model');
const Tbl_ibt_users_access = require('./app/models/Database_hoststockmaster_model/tbl_ibt_users_access.model');
const Tmpauditgrv1 = require('./app/models/Database_hoststockmaster_model/tmpauditgrv.model');
const Tmpauditgrvprint1 = require('./app/models/Database_hoststockmaster_model/tmpauditgrvprint.model');
const Tmpauditorder = require('./app/models/Database_hoststockmaster_model/tmpauditorder.model');
const Tmpauditorderprint1 = require('./app/models/Database_hoststockmaster_model/tmpauditorderprint.model');
const Tmpauditsales1 = require('./app/models/Database_hoststockmaster_model/tmpauditsales.model');
const Tmpbarcode1 = require('./app/models/Database_hoststockmaster_model/tmpbarcode.model');
const Tmpdailyinv1 = require('./app/models/Database_hoststockmaster_model/tmpdailyinv.model');

///database Host-Stock-Master end



const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(express.json());

// Define Sequelize instances for each database
const sequelize1 = dbConfig;
const sequelize2 = database1Config;
const sequelize3 = database3Config;
const sequelize4 = database4Config;

// Associate models with respective Sequelize instances
const sequelizeConfigurations = [
  {
    name: 'hostthisstory',
    sequelize: sequelize1,
    models: [
      User,
      Tbldata_cancel_tran,
      Tbl_datacanceltran,
      Tbl_data_canceltran,
      Tbldata_canceltran,
      Tbldatacancelt_ran,
      Tbldatacanceltr_an,
      Tbldata_canc_eltran,
      Tbldata_cashup_d_et,
      Tbl_data_cashup_det,
      Tbldata_cashup_de_t,
      Tbl_datacashupdet,
      Tbldata_cashupdet,
      T_bldata_cashup_det,
      Tbldatacashupdet,
      Tbldata_cash_up,
      Tbl_data_cashup,
      Tbldatac_ashup,
      Tbldataca_shup,
      Tbl_data_cash_up,
      Tb_ldatacashup,
      Tbldata_cashu_p,
      Tbldata08_current_tran,
      Tbldata_currenttran,
      Tbl_data_currenttran,
      Tbldatacurrenttran,
      Tb_ldatacurrent_tran,
      Tbl_datacurrenttran,
      Tbl_datacurrenttr_an,
      Tbldata_price,
      Tbl_data_price,
      Tbldatapric_e,
      Tb_ldataprice,
      Tbldatapr_ice,
      Tbl_dataprice,
      Tbldatap_rice,
      Tbldata_stockactivity,
      Tbl_data_stockactivity,
      Tbldata_stock_activity,
      Tbldatastock_activity,
      Tbl_datastockactivity,
      Tbl_data_stock_activity,
      Tbldata_stockac_tivity,
      Tbldebtor_tran,
      Tbldebtortra_n,
      Tb_ldebtortran,
      Tbldebtort_ran,
      Tbl_debtor_tran,
      Tbldebtortran,
      Tbldata_adjustment,
      Tbldata_adjus_tment,
      Tbldata_stocktake,
      Tbldata_stocktake,
      Tblpayout,
      Tbldata_creditors_tran,
      Tbldata_grn_det,
      Tbldataadjustment,
      Tbldatacancel_tran,
      Tbldatacashout,
      Tbldatacashup,
      Tbldatacashup_det,
      Tbldatacreditor_tran,
      Tbldatacurrent_tran,
      Tbldatadebtor_tran,
      Tbldatagrv,
      Tbldatapayout,
      Tbldataprice,
      Tbldatasalesserialitems,
      Tbldatastockactivity,
      Tbldatastocktake,
      Tbllistauditclaim,
      Tbllistauditcreditortotals,
      Tbllistauditdebtor,
      Tbllistauditdebtortotals,
      Tbllistauditorder,
      Tbllistauditpayments,
      Tbllistauditrefunds,
      Tbllistauditsplittender,
      Tbllistauditstockrecord,
      Tbllistauditstockvalue,
      Tbllistauditsupplier,
      Tbllistcashupdeclare,
      Tbllistcredage,
      Tbllistposaccpay,
      Tbllisttable,
      Tbltmp,
    ]
  },
  {
    name: 'host',
    sequelize: sequelize2,
    models: [
      User,
      Tbladdress,
      Tblauditsales,
      Tblavgcategorysale,
      Tblavgsuppliersale,
      Tblbarcode,
      Tblcashout,
      Tblcombineditems,
      Tblcompany,
      Tblcounterpickingslip,
      Tblcounters,
      Tblcprice,
      Tblcurrentsale,
      Tbldata_current_tran,
      Tbldatabase,
      Tbldeliverydet,
      Tbldrawer,
      Tbleod,
      Tblexcelfile,
      Tblfloat,
      Tblfootermsg,
      Tblgroupitems,
      Tblgroupitemsa,
      Tblgroups,
      Tblgrvcombined,
      Tblgrvdata,
      Tblhourlysale,
      Tblinvprint,
      Tblinvprintsurcharge,
      Tbllaybyefootermsg,
      Tbllayout,
      Tbllinkcodes,
      Tbllistcombined,
      Tbllistsurcharge,
      Tbl_listtable,
      Tbllivebusiness,
      Tbllivebusinessturnover,
      Tbllivecashier,
      Tbllivecashierturnover,
      Tblmainpickingslip,
      Tblposscale,
      Tblpp,
      Tblpp1,
      Tblquotefootermsg,
      Tblrepairfootermsg,
      Tblsettings,
      Tmpdata_salesrep_tran,
      Tmpdelivery,
      Tmpdsales,
      Tmphistorystocktake,
      Tmpinvoicesearch,
      Tmpinvoicesearch2,
      Tmpinvprint,
      Tmpmaindelete,
      Tmpprtstocktake,
      Tmpquotedet,
      Tmprefunds,
      Tmprepair,
      Tmpserialsale,
      Tmpslavedelete,
      Tmpstockadjustments,
      Tmpstockonhand,
      Tmpstockrecord,
      Tmpstocktake,
      Tmpsurcharge,
      Tmpugrv,
      Tmpustocktake,
      Updatedate,
      // HASSAN NADEEM 
      Tbltmpdailysales,
      Tbltmpdebtransactions,
      Tbltmpinvoices,
      Tbltmppayout,
      Tbltmpprodperform,
      Tbltmpprodperform1,
      Tbltmpstockmove,
      Tbltmpstocktake,
      Tbltransactionv,
      Tbl_tmp_voucher,
      Tmpairtimesale,
      Tmpauditgrv,
      Tmpauditgrvo,
      Tmpauditgrvprint,
      Tmpauditorderprint,
      Tmpauditsales,
      Tmpavgsale,
      Tmpcashbank_tran,
      Tmpchartofaccounts_tran,
      Tmpcombineditems,
      Tmpdata_current_tran,
      Tmpdata_salesrep
    ]
  },
  {
    name: 'hostdebtors',
    sequelize: sequelize3,
    models: [
      User,
      Tbl_list,
      Tbl_ageinfo,
      Tbl_Debtorimport,
      Tbl_Debtors_tran,
      Tbl_Address,
      Tbl_Contractmanager,
      Tbl_Contractmanagerdet,
      Tbl_Debtor,
      Tbl_Debtors_copy,
      Tbl_Debtor_groups,
      Tbl_Debtor_tran,
      Tbl_Debtorscounters,
      Tbl_Notes,
      Tbl_TMPCtran
    ]
  },
  {
    name: 'hoststockmaster',
    sequelize: sequelize4,
    models: [
      Tbl_ibt_category,
      Tbl_ibt_category_sub1,
      Tbl_ibt_category_sub1_update,
      Tbl_ibt_category_sub2,
      Tbl_ibt_category_sub2_update,
      Tbl_ibt_category_update,
      Tbl_ibt_comboitems,
      Tbl_ibt_comboitems_update,
      Tbl_ibt_counter,
      Tbl_ibt_grn,
      Tbl_ibt_grn_det,
      Tbl_ibt_locations,
      Tbl_ibt_products,
      Tbl_ibt_products_update,
      Tbl_ibt_product_details,
      Tbl_ibt_product_details_update,
      Tbl_ibt_qtyprices,
      Tbl_ibt_qtyprices_update,
      Tbl_ibt_status,
      Tbl_ibt_transactions,
      Tbl_ibt_users,
      Tbl_ibt_users_access,
      Tmpauditgrv1,
      Tmpauditgrvprint1,
      Tmpauditorder,
      Tmpauditorderprint1,
      Tmpauditsales1,
      Tmpbarcode1,
      Tmpdailyinv1,
    ]
  }
];


console.log("all model ha", sequelizeConfigurations);


// Loop through each database configuration
sequelizeConfigurations.forEach(db => {
  // Check if models array includes user model
  const isUserModelIncluded = db.models.some(model => model?.name === 'user');

  // If user model is included, log the database name
  if (isUserModelIncluded) {
    console.log(`User model is connected to ${db?.name}`);
  }
});

// Array to hold promises for database connection
const connectionPromises = [];

// Connect to each database and synchronize models
for (const databaseConfig of sequelizeConfigurations) {
  const connectionPromise = databaseConfig.sequelize.authenticate()
    .then(() => {
      console.log(`Connected to ${databaseConfig.name} database`);
      return databaseConfig.sequelize.sync({ alter: true });
    })
    .then(() => {
      console.log(`Models synchronized with ${databaseConfig.name}`);
    })
    .catch((error) => {
      console.error(`Error connecting to ${databaseConfig.name} database:`, error);
      throw error; // Propagate the error to reject the main promise
    });

  connectionPromises.push(connectionPromise);
}

// Start the server after all sequelize are connected and models are synchronized
Promise.allSettled(connectionPromises)
  .then((results) => {
    const successResults = results.filter(result => result.status === 'fulfilled');
    if (successResults.length === connectionPromises.length) {
      console.log('All sequelize connected and models synchronized');
      startServer(); // Define the startServer function and call it here
    } else {
      console.error('Not all sequelize were connected successfully');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Error connecting to sequelize:', error);
    process.exit(1);
  });

// Define the startServer function here
function startServer() {
  // Apply your JWT verification middleware
  app.use(jwtMiddleware.verifyToken);

  // Your role-based middleware goes here, use it where needed
  // Example for an admin route
  app.use('/admin', roleMiddleware.isAdmin);

  // Sample route requiring admin role
  app.get('/admin/dashboard', roleMiddleware.isAdmin, (req, res) => {
    res.json({ message: 'Admin dashboard' });
  });

  // Sample route requiring specific permissions
  app.get('/user/settings', roleMiddleware.checkAdminOrPermission(['updateUser']), (req, res) => {
    res.json({ message: 'User settings page' });
  });

  // Connect to the database and synchronize models for sequelize2
  sequelize2.authenticate()
    .then(() => {
      console.log('Connected to the database');
      return sequelize2.sync({ alter: true });
    })
    .then(() => {
      console.log('Models synchronized with the database');
      return User.findOne({ where: { username: "admin" } });
    })
    .then((adminUser) => {
      if (!adminUser) {
        // Create admin user
        return User.create({
          username: "admin",
          password: "admin", // You should hash the password in a real-world scenario
          role: "admin",
          permissions: ["updateUser", "deleteUser", "viewUsers"],
        });
      } else {
        console.log("Admin user already exists");
        return null;
      }
    })
    .then((createdAdmin) => {
      if (createdAdmin) {
        console.log("Admin user created", createdAdmin);
      }

      // Start the server
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
      process.exit(1); // Exit the process with a non-zero status code
    });


}
/// database host start routes
require("./app/routes/Database_host_routes/user.routes")(app);
require("./app/routes/Database_host_routes/tbladdress.routes")(app);
require("./app/routes/Database_host_routes/tblauditsales.routes")(app);
require("./app/routes/Database_host_routes/tblavgcategorysale.routes")(app);
require("./app/routes/Database_host_routes/tblavgsuppliersale.routes")(app);
require("./app/routes/Database_host_routes/tblbarcode.routes")(app);
require("./app/routes/Database_host_routes/tblcashout.routes")(app);
require("./app/routes/Database_host_routes/tblcombineditems.routes")(app);
require("./app/routes/Database_host_routes/tblcompany.routes")(app);
require("./app/routes/Database_host_routes/tblcounterpickingslip.routes")(app);
require("./app/routes/Database_host_routes/tblcounters.routes")(app);
require("./app/routes/Database_host_routes/tblcprice.routes")(app);
require("./app/routes/Database_host_routes/tblcurrentsale.routes")(app);
require("./app/routes/Database_host_routes/tbldatabase.routes")(app);
require("./app/routes/Database_host_routes/tbldata_current_tran.routes")(app);
require("./app/routes/Database_host_routes/tbldeliverydet.routes")(app);
require("./app/routes/Database_host_routes/tbldrawer.routes")(app);
require("./app/routes/Database_host_routes/tbleod.routes")(app);
require("./app/routes/Database_host_routes/tblexcelfile.routes")(app);
require("./app/routes/Database_host_routes/tblfloat.routes")(app);
require("./app/routes/Database_host_routes/tblfootermsg.routes")(app);
require("./app/routes/Database_host_routes/tblgroupitems.routes")(app);
require("./app/routes/Database_host_routes/tblgroupitemsa.routes")(app);
require("./app/routes/Database_host_routes/tblgroups.routes")(app);
require("./app/routes/Database_host_routes/tblhourlysale.routes")(app);
require("./app/routes/Database_host_routes/tblgrvcombined.routes")(app);
require("./app/routes/Database_host_routes/tblgrvdata.routes")(app);
require("./app/routes/Database_host_routes/tblinvprint.routes")(app);
require("./app/routes/Database_host_routes/tblinvprintsurcharge.routes")(app);
require("./app/routes/Database_host_routes/tbllaybyefootermsg.routes")(app);
require("./app/routes/Database_host_routes/tbllayout.routes")(app);
require("./app/routes/Database_host_routes/tbllinkcodes.routes")(app);
require("./app/routes/Database_host_routes/tbllistcombined.routes")(app);
require("./app/routes/Database_host_routes/tbllistsurcharge.routes")(app);
require("./app/routes/Database_host_routes/tbllisttable.routes")(app);
require("./app/routes/Database_host_routes/tbllivebusiness.routes")(app);
require("./app/routes/Database_host_routes/tbllivebusinessturnover.routes")(app);
require("./app/routes/Database_host_routes/tbllivecashier.routes")(app);
require("./app/routes/Database_host_routes/tbllivecashierturnover.routes")(app);
require("./app/routes/Database_host_routes/tblmainpickingslip.routes")(app);
require("./app/routes/Database_host_routes/tblposscale.routes")(app);
require("./app/routes/Database_host_routes/tblpp.routes")(app);
require("./app/routes/Database_host_routes/tblpp1.routes")(app);
require("./app/routes/Database_host_routes/tblquotefootermsg.routes")(app);
require("./app/routes/Database_host_routes/tblsettings.routes")(app);
// 
require("./app/routes/Database_host_routes/tmpdata_salesrep_tran.routes")(app);
require("./app/routes/Database_host_routes/tmpdelivery.routes")(app);
require("./app/routes/Database_host_routes/tmpdsales.routes")(app);
require("./app/routes/Database_host_routes/tmphistorystocktake.routes")(app);
require("./app/routes/Database_host_routes/tmpinvoicesearch.routes")(app);
require("./app/routes/Database_host_routes/tmpinvoicesearch2.routes")(app);
require("./app/routes/Database_host_routes/tmpinvprint.routes")(app);
require("./app/routes/Database_host_routes/tmpmaindelete.routes")(app);
require("./app/routes/Database_host_routes/tmpprtstocktake.routes")(app);
require("./app/routes/Database_host_routes/tmpquotedet.routes")(app);
require("./app/routes/Database_host_routes/tmprefunds.routes")(app);
// 
require("./app/routes/Database_host_routes/tblrepairfootermsg.routes")(app);
require("./app/routes/Database_host_routes/updatedate.routes")(app);
require("./app/routes/Database_host_routes/tmpustocktake.routes")(app);
require("./app/routes/Database_host_routes/tmpugrv.routes")(app);
require("./app/routes/Database_host_routes/tmpsurcharge.routes")(app);
require("./app/routes/Database_host_routes/tmpstocktake.routes")(app);
require("./app/routes/Database_host_routes/tmpstockrecord.rutes")(app);
require("./app/routes/Database_host_routes/tmpstockonhand.routes")(app);
require("./app/routes/Database_host_routes/tmpstockadjustments.routes")(app);
require("./app/routes/Database_host_routes/tmpslavedelete.routes")(app);
require("./app/routes/Database_host_routes/tmpserialsale.routes")(app);
require("./app/routes/Database_host_routes/tmprepair.routes")(app);
// HASSAN NADEEM 
require("./app/routes/Database_host_routes/tbltmpdailysales.routes")(app);
require("./app/routes/Database_host_routes/tbltmpdebtransactions.routes")(app);
require("./app/routes/Database_host_routes/tbltmpinvoices.routes")(app);
require("./app/routes/Database_host_routes/tbltmppayout.routes")(app);
require("./app/routes/Database_host_routes/tbltmpprodperform.routes")(app);
require("./app/routes/Database_host_routes/tbltmpprodperform1.routes")(app);
require("./app/routes/Database_host_routes/tbltmpstockmove.routes")(app);
require("./app/routes/Database_host_routes/tbltmpstocktake.routes")(app);
require("./app/routes/Database_host_routes/tbltransactionv.routes")(app);
require("./app/routes/Database_host_routes/tbl_tmp_voucher.routes")(app);
require("./app/routes/Database_host_routes/tmpairtimesale.routes")(app);
require("./app/routes/Database_host_routes/tmpauditgrv.routes")(app);
require("./app/routes/Database_host_routes/tmpauditgrvo.routes")(app);
require("./app/routes/Database_host_routes/tmpauditgrvprint.routes")(app);
require("./app/routes/Database_host_routes/tmpauditorderprint.routes")(app);
require("./app/routes/Database_host_routes/tmpauditsales.routes")(app);
require("./app/routes/Database_host_routes/tmpavgsale.routes")(app);
require("./app/routes/Database_host_routes/tmpcashbank_tran.routes")(app);
require("./app/routes/Database_host_routes/tmpchartofaccounts_tran.routes")(app);
require("./app/routes/Database_host_routes/tmpcombineditems.routes")(app);
require("./app/routes/Database_host_routes/tmpdata_current_tran.routes")(app);
require("./app/routes/Database_host_routes/tmpdata_salesrep.routes")(app);


/// database host end routes



/// database hosthistory start routes

require("./app/routes/Database_hosthistory_routes/202306tbldata_cancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202306tbldata_cashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/202306tbldata_cashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202306tbldata_current_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202306tbldata_price.routes")(app);
require("./app/routes/Database_hosthistory_routes/202306tbldata_stockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/202306tbldebtor_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202307tbldata_adjustment.routes")(app);
require("./app/routes/Database_hosthistory_routes/202307tbldata_cashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/202307tbldata_cashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202307tbldata_current_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202307tbldata_price.routes")(app);
require("./app/routes/Database_hosthistory_routes/202307tbldata_stockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/202307tbldebtor_tran.routers")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_adjustment.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_cancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_cashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_cashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_current_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_price.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_stockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldata_stocktake.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tbldebtor_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202308tblpayout.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_cancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_cashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_cashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_creditors_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_current_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_grn_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_price.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_stockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldata_stocktake.routes")(app);
require("./app/routes/Database_hosthistory_routes/202309tbldebtor_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202310tbldata_cancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202310tbldata_cashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/202310tbldata_cashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202310tbldata_current_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202310tbldata_price.routes")(app);
require("./app/routes/Database_hosthistory_routes/202310tbldata_stockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/202310tbldebtor_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202311tbldata_cancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202312tbldata_cancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202312tbldata_cashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/202312tbldata_cashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202312tbldata_current_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202312tbldata_price.routes")(app);
require("./app/routes/Database_hosthistory_routes/202312tbldata_stockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/202401tbldata_cancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202401tbldata_cashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/202401tbldata_cashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/202401tbldata_current_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/202401tbldata_price.routes")(app);
require("./app/routes/Database_hosthistory_routes/202401tbldata_stockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/202401tbldebtor_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldataadjustment.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatacancel_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatacashout.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatacashup.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatacashup_det.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatacreditor_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatacurrent_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatadebtor_tran.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatagrv.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatapayout.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldataprice.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatasalesserialitems.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatastockactivity.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbldatastocktake.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditclaim.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditcreditortotals.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditdebtor.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditdebtortotals.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditorder.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditpayments.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditrefunds.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditsplittender.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditstockrecord.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditstockvalue.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistauditsupplier.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistcashupdeclare.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistcredage.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllistposaccpay.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbllisttable.routes")(app);
require("./app/routes/Database_hosthistory_routes/tbltmp.routes")(app);

/// database hosthistory end routes



/// database hostdebtor start routes

require("./app/routes/Database_hostdebtors_routes/tblageinfo.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbl_list.route")(app);
require("./app/routes/Database_hostdebtors_routes/debtorimport.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbl_debtors.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbladress.route")(app);
require("./app/routes/Database_hostdebtors_routes/tblcontractmanager.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tblcontractmanagerdet.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbldebtor.routes ")(app);
require("./app/routes/Database_hostdebtors_routes/tbldebtor_copy.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbldebtor_groups.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbldebtor_tran.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbldebtorscounters.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tblnotes.routes")(app);
require("./app/routes/Database_hostdebtors_routes/tbltmpctran.routes")(app);

/// database hostdebtor end routes


/// database Host-Stock-Master start routes

require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_category.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_category_sub1.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_category_sub1_update.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_category_sub2.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_category_sub2_update.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_category_update.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_comboitems.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_comboitems_update.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_counter.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_grn.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_grn_det.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_locations.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_products.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_products_update.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_product_details.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_product_details_update.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_qtyprices.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_qtyprices_update.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_status.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_transactions.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_users.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tbl_ibt_users_access.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tmpauditgrv.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tmpauditgrvprint.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tmpauditorder.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tmpauditorderprint.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tmpauditsales.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tmpbarcode.routes")(app);
require("./app/routes/Database_hoststockmaster_routes/tmpdailyinv.routes")(app);

/// database Host-Stock-Master end routes



app.get('/data', async (req, res) => {
  try {
    const allData = {};

    // Fetch data from all tables of the "host" database
    const hostDatabaseConfig = sequelizeConfigurations.find(config => config.name === 'host');
    if (hostDatabaseConfig) {
      allData['host'] = {};
      for (const model of hostDatabaseConfig.models) {
        const tableName = model.getTableName();
        const data = await model.findAll();
        allData['host'][tableName] = data;
      }
    }

    // Fetch data from all tables of all databases except "host"
    for (const config of sequelizeConfigurations.filter(config => config.name !== 'host')) {
      allData[config.name] = {};
      for (const model of config.models) {
        const tableName = model.getTableName();

        // Skip fetching data if the table is "users"
        if (tableName === 'users') continue;

        const data = await model.findAll();
        allData[config.name][tableName] = data;
      }
    }

    res.json(allData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});











