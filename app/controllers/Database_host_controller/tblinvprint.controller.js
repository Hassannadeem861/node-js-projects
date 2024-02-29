const Tblinvprint = require("../../models/Database_host_model/tblinvprint.model");


// Create and Save a new Tblinvprint
exports.create = (req, res) => {
  // Validate request
  if (!req.body.stockcode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblinvprint
  const tblinvprint = {
    stockcode: req.body.stockcode,
    Description: req.body.Description,
    Qty: req.body.Qty,
    UnitPrice: req.body.UnitPrice,
    VAT: req.body.VAT,
    LineTotal: req.body.LineTotal,
    VATNUM: req.body.VATNUM,
    TotalLines: req.body.TotalLines,
    TotalWeight: req.body.TotalWeight,
    InvoiceTotal: req.body.InvoiceTotal,
    SaleNum: req.body.SaleNum,
    ExclLineTotal: req.body.ExclLineTotal,
    AcctNum: req.body.AcctNum,
    AcctName: req.body.AcctName,
    Address1: req.body.Address1,
    Address2: req.body.Address2,
    Address3: req.body.Address3,
    Comments1: req.body.Comments1,
    Comments2: req.body.Comments2,
    Comments3: req.body.Comments3,
    Comments4: req.body.Comments4,
    ExclUnitPrice: req.body.ExclUnitPrice,
    OrderNo: req.body.OrderNo,
    Price: req.body.Price,
    DiscountV: req.body.DiscountV,
    ClerkU: req.body.ClerkU,
    Timet: req.body.Timet,
    Tendered: req.body.Tendered,
    INVDate: req.body.INVDate,
   
   
  };

  // Save Tblinvprint in the database
  Tblinvprint.create(tblinvprint)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblinvprint.",
      });
    });
};

// Retrieve all Tblinvprint from the database.
exports.findAll = (req, res) => {
  const title = req.query.stockcode;
  var condition = title ? { stockcode: { [Op.like]: `%${stockcode}%` } } : null;

  Tblinvprint.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblinvprint.",
      });
    });
};

// Find a single Tblinvprint with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblinvprint.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblinvprint with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblinvprint with id=" + id,
      });
    });
};

// Update a Tblinvprint by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblinvprint.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblinvprint was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblinvprint with id=${id}. Maybe Tblinvprint was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblinvprint with id=" + id,
      });
    });
};

// Delete a Tblinvprint with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblinvprint.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblinvprint was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblinvprint with id=${id}. Maybe Tblinvprint was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblinvprint with id=" + id,
      });
    });
};

// Delete all Tblinvprint from the database.
exports.deleteAll = (req, res) => {
    Tblinvprint.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblinvprint were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblinvprint.",
      });
    });
};

// Find all published Tblinvprint
exports.findAllPublished = (req, res) => {
    Tblinvprint.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblinvprint.",
      });
    });
};
