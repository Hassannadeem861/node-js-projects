const Tbldata_current_tran = require("../../models/Database_hosthistory_model/202307tbldata_current_tran.model");


// Create and Save a new Tbldata_curr_ent_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldata_current_tran
  var tbldata_current_tran = {
    datetime: req.body.datetime,
    salenum: req.body.salenum,
    transactionnum: req.body.transactionnum,
    stockdescription: req.body.stockdescription,
    majorno: req.body.majorno,
    sub1no: req.body.sub1no,
    sub2no: req.body.sub2no,
    
    CreditInvoiceNo: req.body.CreditInvoiceNo,
    itemdiscount: req.body.itemdiscount,
    valuediscount: req.body.valuediscount,
    stockdescription: req.body.stockdescription,
    qty: req.body.qty,
    stockunitprice: req.body.stockunitprice,
    vatpercentage: req.body.vatpercentage,
   
   vatflag: req.body.vatflag,
   clerknum: req.body.clerknum,
   ClerkName: req.body.ClerkName,
   paymenttype: req.body.paymenttype,
   CehqueNum: req.body.CehqueNum,
   AccountNum: req.body.AccountNum,
   CookingMsg: req.body.CookingMsg,

externalordernum: req.body.externalordernum,
serialitem: req.body.serialitem,
computername: req.body.computername,
serialnum: req.body.serialnum,
averagecostprice: req.body.averagecostprice,
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
clerkcashup: req.body.clerkcashup,

  };
  console.log('CREATE DATA IN DATABASE :', Tbldata_current_tran);

  // Save tbldata_current_tran in the tbldata_curr_ent_tran
  Tbldata_current_tran.create(tbldata_current_tran)
    .then((data) => {
      console.log('RESPONSE :', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('RESPONSE ERR :', err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tbldata_current_tran.",
      });
    });
};

// Retrieve all Tbldata_curr_ent_tran from the database.
exports.findAll = (req, res) => {
  const Date = req.query.datetime;
  var condition = Date ? { datetime: { [Op.like]: `%${datetime}%` } } : null;

  Tbldata_current_tran.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_current_tran.",
      });
    });
};

// Find a single Tbldata_curr_ent_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_current_tran.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_curr_ent_tran with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_current_tran with id=" + id,
      });
    });
};

// Update a Tbldata_curr_ent_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_current_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_current_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_current_tran with id=${id}. Maybe Tbldata_cancel_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_current_tran with id=" + id,
      });
    });
};

// Delete a Tbldata_current_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_current_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_current_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_current_tran with id=${id}. Maybe Tbldata_current_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_current_tran with id=" + id,
      });
    });
};

// Delete all Tbldata_current_tran from the database.
exports.deleteAll = (req, res) => {
    Tbldata_current_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_current_tran were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_current_tran.",
      });
    });
};

// Find all published Tbldata_current_tran
exports.findAllPublished = (req, res) => {
    Tbldata_current_tran.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_current_tran.",
      });
    });
};
