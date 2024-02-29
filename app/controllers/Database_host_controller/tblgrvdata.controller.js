const Tblgrvdata = require("../../models/Database_host_model/tblgrvdata.model");


// Create and Save a new Tblgrvdata
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblgrvdata
  const tblgrvdata = {
    StockCode: req.body.StockCode,
    StockBarCode: req.body.StockBarCode,
    Description1: req.body.Description1,
    Description2: req.body.Description2,
    Deptnot: req.body.Deptnot,
    DeptName: req.body.DeptName,
    sub1no: req.body.sub1no,
    sub2no: req.body.sub2no,
    SOH: req.body.SOH,
    CostPrice: req.body.CostPrice,
    VatP: req.body.VatP,
    DSEllingPrice: req.body.DSEllingPrice,
    SSellingPrice: req.body.SSellingPrice,
   
  };

  // Save Tblgrvdata in the database
  Tblgrvdata.create(tblgrvdata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblgrvdata.",
      });
    });
};

// Retrieve all Tblgrvdata from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tblgrvdata.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblgrvdata.",
      });
    });
};

// Find a single Tblgrvdata with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblgrvdata.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblgrvdata with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblgrvdata with id=" + id,
      });
    });
};

// Update a Tblgrvdata by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblgrvdata.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblgrvdata was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblgrvdata with id=${id}. Maybe Tblgrvdata was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblgrvdata with id=" + id,
      });
    });
};

// Delete a Tblgrvdata with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblgrvdata.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblgrvdata was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblgrvdata with id=${id}. Maybe Tblgrvdata was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblgrvdata with id=" + id,
      });
    });
};

// Delete all Tblgrvdata from the database.
exports.deleteAll = (req, res) => {
    Tblgrvdata.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblgrvdata were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblgrvdata.",
      });
    });
};

// Find all published Tblgrvdata
exports.findAllPublished = (req, res) => {
    Tblgrvdata.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblgrvdata.",
      });
    });
};
