// controllers/202310tbldata_current_tran.controller.js

const Tbldata_current_tran = require("../../models/Database_hosthistory_model/202310tbldata_current_tran.model");


// Create and Save a new tbldata_current_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({
      message: "Datetime can not be empty!",
    });
    return;
  }

 // Create a tbldata_current_tran
 const tbldata_current_tran = {
    datetime: req.body.datetime,
    salenum: req.body.salenum,
    transactionnum: req.body.transactionnum,
    stockcode: req.body.stockcode,
    stockdescription: req.body.stockdescription,
    majorno: req.body.majorno,
    sub1no: req.body.sub1no,
    sub2no: req.body.sub2no,
    CreditInvoiceNo: req.body.CreditInvoiceNo,
    itemdiscount: req.body.itemdiscount,
    valuediscount: req.body.valuediscount,
    qty: req.body.qty,
    stockunitprice: req.body.stockunitprice,
    vatpercentage: req.body.vatpercentage,
    vatflag: req.body.vatflag,
    clerknum: req.body.clerknum,
    ClerkName: req.body.ClerkName,
    paymenttype: req.body.paymenttype,
    CehqueNum: req.body.CehqueNum,
    Cardnum: req.body.Cardnum,
    AccountNum: req.body.AccountNum,
    CookingMsg: req.body.CookingMsg,
    externalordernum: req.body.externalordernum,
    serialitem: req.body.serialitem,
    computername: req.body.computername,
    serialnum: req.body.serialnum,
    averagecostprice: req.body.averagecostprice,
    lastcostprice: req.body.lastcostprice,
    linetotal: req.body.linetotal,
    InvoiceTotal: req.body.InvoiceTotal,
    PickingSlip: req.body.PickingSlip,
    accinvoicenum: req.body.accinvoicenum,
    comment: req.body.comment,
    cashupnum: req.body.cashupnum,
    incashup: req.body.incashup,
    possale: req.body.possale,
    transfer: req.body.transfer,
    tendered: req.body.tendered,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
    sliptype: req.body.sliptype,
    clerkcashup: req.body.clerkcashup
  };

  // Save tbldata_current_tran in the database
  Tbldata_current_tran.create(tbldata_current_tran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the tbldata_current_tran.",
      });
    });
};

// Retrieve all tbldata_current_tran from the database
exports.findAll = (req, res) => {
  Tbldata_current_tran.findAll()
    .then((tbldata_current_trans) => {
      res.send(tbldata_current_trans);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbldata_current_trans.",
      });
    });
};

// Find a single tbldata_current_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_current_tran.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving tbldata_current_tran with id=" + id,
      });
    });
};

// Update a tbldata_current_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_current_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbldata_current_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update tbldata_current_tran with id=${id}. Maybe tbldata_current_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating tbldata_current_tran with id=" + id,
      });
    });
};

// Delete a tbldata_current_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_current_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbldata_current_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete tbldata_current_tran with id=${id}. Maybe tbldata_current_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete tbldata_current_tran with id=" + id,
      });
    });
};

// Delete all tbldata_current_tran from the database
exports.deleteAll = (req, res) => {
  Tbldata_current_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} tbldata_current_trans were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbldata_current_trans.",
      });
    });
};
