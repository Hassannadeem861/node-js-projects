const Tblauditsales = require("../../models/Database_host_model/tblauditsales.model");


// Create and Save a new Tblauditsales
exports.create = (req, res) => {
  // Validate request
  if (!req.body.DateTime) {
    res.status(400).send({ message: "Fields cannot be empty!" });
    return;
  }

  // Create a Tblauditsales
  const tblauditsales = {
    DateTime: req.body.DateTime,
    SaleNum: req.body.SaleNum,
    TransactionNum: req.body.TransactionNum,
    StockCode: req.body.StockCode,
    StockDescription: req.body.StockDescription,
    TableDiscount: req.body.TableDiscount,
    ItemDiscount: req.body.ItemDiscount,
    ValueDiscount: req.body.ValueDiscount,
    Qty: req.body.Qty,
    StockUnitPrice: req.body.StockUnitPrice,
    VatPercentage: req.body.VatPercentage,
    VatFlag: req.body.VatFlag,
    ClerkNum: req.body.ClerkNum,
    ClerkName: req.body.ClerkName,
    PaymentType: req.body.PaymentType,
    ChequeNum: req.body.ChequeNum,
    CardNum: req.body.CardNum,
    AccountNum: req.body.AccountNum,
    CookingMsg: req.body.CookingMsg,
    ExternalOrderNum: req.body.ExternalOrderNum,
    SerialItem: req.body.SerialItem,
    ComputerName: req.body.ComputerName,
    SerialNum: req.body.SerialNum,
    AverageCostPrice: req.body.AverageCostPrice,
    LastCostPrice: req.body.LastCostPrice,
    LineTotal: req.body.LineTotal,
    InvoiceTotal: req.body.InvoiceTotal,
    TipAmount: req.body.TipAmount,
    AccInvoiceNum: req.body.AccInvoiceNum,
    Comment: req.body.Comment,
    CashupNum: req.body.CashupNum,
    InCashUp: req.body.InCashUp,
    PosSale: req.body.PosSale,
    Transfer: req.body.Transfer,
    Tendered: req.body.Tendered,
    hisYear: req.body.hisYear,
    hisMonth: req.body.hisMonth,
    hisday: req.body.hisday,
    PersonCnt: req.body.PersonCnt,
    ClerkCashup: req.body.ClerkCashup
  };

  // Save Tblauditsales in the database
  Tblauditsales.create(tblauditsales)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblauditsales."
      });
    });
};

// Retrieve all Tblauditsales from the database.
exports.findAll = (req, res) => {
    Tblauditsales.findAll()
        .then((tblauditsales) => {
            res.send(tblauditsales);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblauditsales.",
            });
        });
};


// Find a single Tblauditsales with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblauditsales.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tblauditsales with id=" + id
      });
    });
};

// Update a Tblauditsales by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Tblauditsales.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Tblauditsales was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Tblauditsales with id=${id}. Maybe Tblauditsales was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating TblContractManager with id=" + id,
        });
      });
  };


// Delete a Tblauditsales with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tblauditsales.destroy({
      where: { id: id }, // Corrected primary key to 'id'
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Tblauditsales was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Tblauditsales with id=${id}. Maybe Tblauditsales was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Tblauditsales with id=" + id,
        });
      });
  };

  
  // Delete all Tblauditsales from the database.
  exports.deleteAll = (req, res) => {
    Tblauditsales.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Tblauditsales were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Tblauditsales.",
        });
      });
  };

// // Find all published Tblauditsales
// exports.findAllPublished = (req, res) => {
//   Tblauditsales.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Tblauditsales."
//       });
//     });
// };
