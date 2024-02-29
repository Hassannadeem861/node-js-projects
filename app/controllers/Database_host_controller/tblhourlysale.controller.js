const Tblhourlysale = require("../../models/Database_host_model/tblhourlysale.model");


// Create and Save a new Tblhourlysale
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblhourlysale
  const tblhourlysale = {
    StockCode: req.body.StockCode,
    RTime: req.body.RTime,
    StockDescription: req.body.StockDescription,
    Qty: req.body.Qty,
    TotalCost: req.body.TotalCost,
    TotalSelling: req.body.TotalSelling,
    GP: req.body.GP,
    GPValue: req.body.GPValue,
   
   
  };

  // Save Tblgrvdata in the database
  Tblhourlysale.create(tblhourlysale)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblhourlysale.",
      });
    });
};

// Retrieve all Tblhourlysale from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tblhourlysale.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblhourlysale.",
      });
    });
};

// Find a single Tblhourlysale with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblhourlysale.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblhourlysale with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblhourlysale with id=" + id,
      });
    });
};

// Update a Tblhourlysale by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblhourlysale.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblhourlysale was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblhourlysale with id=${id}. Maybe Tblhourlysale was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblhourlysale with id=" + id,
      });
    });
};

// Delete a Tblhourlysale with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblhourlysale.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblhourlysale was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblhourlysale with id=${id}. Maybe Tblhourlysale was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblhourlysale with id=" + id,
      });
    });
};

// Delete all Tblhourlysale from the database.
exports.deleteAll = (req, res) => {
    Tblhourlysale.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblhourlysale were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblhourlysale.",
      });
    });
};

// Find all published Tblhourlysale
exports.findAllPublished = (req, res) => {
    Tblhourlysale.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblhourlysale.",
      });
    });
};
