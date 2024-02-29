const Tmpserialsale = require("../../models/Database_host_model/tmpserialsale.model");


// Create and Save a new Tmpserialsale
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpserialsale
  const tmpserialsale = {
    StockCode: req.body.StockCode,
    RTime: req.body.RTime,
    StockDescription: req.body.StockDescription,
    Qty: req.body.Qty,
    TotalCost: req.body.TotalCost,
    TotalSelling: req.body.TotalSelling,
    GP: req.body.GP,
    GPValue: req.body.GPValue,
   
   
  };

  // Save Tmpserialsale in the database
  Tmpserialsale.create(tmpserialsale)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpserialsale.",
      });
    });
};

// Retrieve all Tmpserialsales from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpserialsale.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpserialsales.",
      });
    });
};

// Find a single Tmpserialsale with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpserialsale.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpserialsale with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpserialsale with id=" + id,
      });
    });
};

// Update a Tmpserialsale by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpserialsale.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpserialsale was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpserialsale with id=${id}. Maybe Tmpserialsale was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpserialsale with id=" + id,
      });
    });
};

// Delete a Tmpserialsale with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpserialsale.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpserialsale was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpserialsale with id=${id}. Maybe Tmpserialsale was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpserialsale with id=" + id,
      });
    });
};

// Delete all Tmpserialsales from the database.
exports.deleteAll = (req, res) => {
  Tmpserialsale.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpserialsales were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpserialsales.",
      });
    });
};

// Find all published Tmpserialsales
exports.findAllPublished = (req, res) => {
  Tmpserialsale.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpserialsales.",
      });
    });
};
