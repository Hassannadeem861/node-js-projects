// controllers/202308tbldata08_current_tran.controller.js

const Tbldata08_current_tran = require("../../models/Database_hosthistory_model/202308tbldata_current_tran.model");

// Create and Save a new Tbldata08_current_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({
      message: "Datetime can not be empty!",
    });
    return;
  }

 // Create a Tbldata08_current_tran
 const tbldata08currenttran = {
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

  // Save Tbldata08_current_tran in the database
  Tbldata08_current_tran.create(tbldata08currenttran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Tbldata08_current_tran.",
      });
    });
};

// Retrieve all Tbldata08_current_tran from the database
exports.findAll = (req, res) => {
  Tbldata08_current_tran.findAll()
    .then((Tbldata08_current_trans) => {
      res.send(Tbldata08_current_trans);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata08_current_trans.",
      });
    });
};

// Find a single Tbldata08_current_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata08_current_tran.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata08_current_tran with id=" + id,
      });
    });
};

// Update a Tbldata08_current_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata08_current_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata08_current_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata08_current_tran with id=${id}. Maybe Tbldata08_current_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata08_current_tran with id=" + id,
      });
    });
};

// Delete a Tbldata08_current_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata08_current_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata08_current_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata08_current_tran with id=${id}. Maybe Tbldata08_current_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata08_current_tran with id=" + id,
      });
    });
};

// Delete all Tbldata08_current_tran from the database
exports.deleteAll = (req, res) => {
  Tbldata08_current_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata08_current_trans were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata08_current_trans.",
      });
    });
};
