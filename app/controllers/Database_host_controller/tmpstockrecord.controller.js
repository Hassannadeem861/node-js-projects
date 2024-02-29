const Tmpstockrecord = require("../../models/Database_host_model/tmpstockrecord.model");

// Create and Save a new Tmpstockrecord
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpstockrecord
  const tmpstockrecord = {
    StockCode: req.body.StockCode,
    StockBarCode: req.body.StockBarCode,
    Description1: req.body.Description1,
    MajorNo: req.body.MajorNo,
    Sub1No: req.body.Sub1No,
    Sub2No: req.body.Sub2No,
    AvarageCostPrice: req.body.AvarageCostPrice,
    LastCostPrice: req.body.LastCostPrice,
    VatPercentage: req.body.VatPercentage,
    DefaultSellingPrice: req.body.DefaultSellingPrice,
    SOH: req.body.SOH,
    MajorDescription: req.body.MajorDescription,
    Sub1Description: req.body.Sub1Description,
    Sub2Description: req.body.Sub2Description,
    TotalCost: req.body.TotalCost,
    TotalSelling: req.body.TotalSelling,
   
  };

  // Save Tmpstockrecord in the database
  Tmpstockrecord.create(tmpstockrecord)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpstockrecord.",
      });
    });
};

// Retrieve all Tmpstockrecords from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpstockrecord.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstockrecords.",
      });
    });
};

// Find a single Tmpstockrecord with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpstockrecord.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpstockrecord with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpstockrecord with id=" + id,
      });
    });
};

// Update a Tmpstockrecord by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpstockrecord.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstockrecord was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpstockrecord with id=${id}. Maybe Tmpstockrecord was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpstockrecord with id=" + id,
      });
    });
};

// Delete a Tmpstockrecord with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpstockrecord.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstockrecord was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpstockrecord with id=${id}. Maybe Tmpstockrecord was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpstockrecord with id=" + id,
      });
    });
};

// Delete all Tmpstockrecords from the database.
exports.deleteAll = (req, res) => {
  Tmpstockrecord.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpstockrecords were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpstockrecords.",
      });
    });
};

// Find all published Tmpstockrecords
exports.findAllPublished = (req, res) => {
  Tmpstockrecord.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstockrecords.",
      });
    });
};
