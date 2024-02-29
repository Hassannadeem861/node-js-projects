const Tbllinkcodes = require("../../models/Database_host_model/tbllinkcodes.model");


// Create and Save a new Tbllinkcodes
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCodeIndex) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllinkcodes
  const tbllinkcodes = {
    StockCodeIndex: req.body.StockCodeIndex,
    StockDescription: req.body.StockDescription,
    LinkCode: req.body.LinkCode,
    LinkDescription: req.body.LinkDescription,
    PackSize: req.body.PackSize,
    UCost: req.body.UCost,
    Uselling: req.body.Uselling,
    GpP: req.body.GpP,
    cMarkup: req.body.cMarkup,
    GroupNo: req.body.GroupNo,
    ItemNo: req.body.ItemNo,
  
    
  };

  // Save Tbllinkcodes in tbllinkcodesthe database
  Tbllinkcodes.create(tbllinkcodes)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllinkcodes.",
      });
    });
};

// Retrieve all Tbllinkcodes from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCodeIndex;
  var condition = title ? { StockCodeIndex: { [Op.like]: `%${StockCodeIndex}%` } } : null;

  Tbllinkcodes.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllinkcodes.",
      });
    });
};

// Find a single Tbllinkcodes with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllinkcodes.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllinkcodes with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllinkcodes with id=" + id,
      });
    });
};

// Update a Tbllinkcodes by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllinkcodes.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllinkcodes was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllinkcodes with id=${id}. Maybe Tbllinkcodes was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllinkcodes with id=" + id,
      });
    });
};

// Delete a Tbllinkcodes with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllinkcodes.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllinkcodes was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllinkcodes with id=${id}. Maybe Tbllinkcodes was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllinkcodes with id=" + id,
      });
    });
};

// Delete all Tbllinkcodes from the database.
exports.deleteAll = (req, res) => {
    Tbllinkcodes.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllinkcodes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllinkcodes.",
      });
    });
};

// Find all published Tbllinkcodes
exports.findAllPublished = (req, res) => {
    Tbllinkcodes.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllinkcodes.",
      });
    });
};
