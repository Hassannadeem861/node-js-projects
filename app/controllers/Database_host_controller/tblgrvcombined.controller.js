const Tblgrvcombined = require("../../models/Database_host_model/tblgrvcombined.model");


// Create and Save a new Tblgrvcombined
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblgrvcombined
  const tblgrvcombined = {
    StockCode: req.body.StockCode,
    Description: req.body.Description,
    CostPrice: req.body.CostPrice,
    Qty: req.body.Qty,
    ItemTotal: req.body.ItemTotal,
  };

  // Save Tblgrvcombined in the database
  Tblgrvcombined.create(tblgrvcombined)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblgrvcombined.",
      });
    });
};

// Retrieve all Tblgrvcombined from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tblgrvcombined.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblgrvcombined.",
      });
    });
};

// Find a single Tblgrvcombined with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblgrvcombined.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblgrvcombined with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblgrvcombined with id=" + id,
      });
    });
};

// Update a Tblgrvcombined by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblgrvcombined.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblgrvcombined was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblgrvcombined with id=${id}. Maybe Tblgrvcombined was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblgrvcombined with id=" + id,
      });
    });
};

// Delete a Tblgrvcombined with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblgrvcombined.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblgrvcombined was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblgrvcombined with id=${id}. Maybe Tblgrvcombined was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblgrvcombined with id=" + id,
      });
    });
};

// Delete all Tblgrvcombined from the database.
exports.deleteAll = (req, res) => {
    Tblgrvcombined.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblgrvcombined were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblgrvcombined.",
      });
    });
};

// Find all published Tblgrvcombined
exports.findAllPublished = (req, res) => {
    Tblgrvcombined.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblgrvcombined.",
      });
    });
};
