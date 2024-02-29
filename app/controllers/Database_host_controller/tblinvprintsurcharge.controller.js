const Tblinvprintsurcharge = require("../../models/Database_host_model/tblinvprintsurcharge.model");


// Create and Save a new Tblinvprintsurcharge
exports.create = (req, res) => {
  // Validate request
  if (!req.body.stockcode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblinvprintsurcharge
  const tblinvprintsurcharge = {
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
    ExclUnitSurcharge: req.body.ExclUnitSurcharge,
    OrderNo: req.body.OrderNo,
    Price: req.body.Price,
    DiscountV: req.body.DiscountV,
    ClerkU: req.body.ClerkU,
    Timet: req.body.Timet,
    Tendered: req.body.Tendered,
    Surcharge1: req.body.Surcharge1,
    Surcharge2: req.body.Surcharge2,
    Surcharge3: req.body.Surcharge3,
    SurchargeAmt1: req.body.SurchargeAmt1,
    SurchargeAmt2: req.body.SurchargeAmt2,
    SurchargeAmt3: req.body.SurchargeAmt3,
   
   
  };

  // Save Tblinvprintsurcharge in the database
  Tblinvprintsurcharge.create(tblinvprintsurcharge)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblinvprintsurcharge.",
      });
    });
};

// Retrieve all Tblinvprintsurcharge from the database.
exports.findAll = (req, res) => {
  const title = req.query.stockcode;
  var condition = title ? { stockcode: { [Op.like]: `%${stockcode}%` } } : null;

  Tblinvprintsurcharge.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblinvprintsurcharge.",
      });
    });
};

// Find a single Tblinvprintsurcharge with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblinvprintsurcharge.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblinvprintsurcharge with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblinvprintsurcharge with id=" + id,
      });
    });
};

// Update a Tblinvprintsurcharge by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblinvprintsurcharge.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblinvprintsurcharge was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblinvprintsurcharge with id=${id}. Maybe Tblinvprintsurcharge was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblinvprintsurcharge with id=" + id,
      });
    });
};

// Delete a Tblinvprintsurcharge with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblinvprintsurcharge.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblinvprintsurcharge was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblinvprintsurcharge with id=${id}. Maybe Tblinvprintsurcharge was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblinvprintsurcharge with id=" + id,
      });
    });
};

// Delete all Tblinvprintsurcharge from the database.
exports.deleteAll = (req, res) => {
    Tblinvprintsurcharge.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblinvprintsurcharge were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblinvprintsurcharge.",
      });
    });
};

// Find all published Tblinvprintsurcharge
exports.findAllPublished = (req, res) => {
    Tblinvprintsurcharge.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblinvprintsurcharge.",
      });
    });
};
