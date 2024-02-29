const Tmpstockadjustments = require("../../models/Database_host_model/tmpstockadjustments.model");


// Create and Save a new Tmpstockadjustments
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpstockadjustments
  const tmpstockadjustments = {
    StockCode: req.body.StockCode,
    Description: req.body.Description,
    OldQty: req.body.OldQty,
    NewQty: req.body.NewQty,
    Hisday: req.body.Hisday,
    HisMonth: req.body.HisMonth,
    HisYear: req.body.HisYear,
    AdjQty: req.body.AdjQty,
   
   
  };

  // Save Tmpstockadjustments in the database
  Tmpstockadjustments.create(tmpstockadjustments)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpstockadjustments.",
      });
    });
};

// Retrieve all Tmpstockadjustmentss from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpstockadjustments.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstockadjustmentss.",
      });
    });
};

// Find a single Tmpstockadjustments with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpstockadjustments.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpstockadjustments with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpstockadjustments with id=" + id,
      });
    });
};

// Update a Tmpstockadjustments by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpstockadjustments.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstockadjustments was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpstockadjustments with id=${id}. Maybe Tmpstockadjustments was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpstockadjustments with id=" + id,
      });
    });
};

// Delete a Tmpstockadjustments with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpstockadjustments.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstockadjustments was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpstockadjustments with id=${id}. Maybe Tmpstockadjustments was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpstockadjustments with id=" + id,
      });
    });
};

// Delete all Tmpstockadjustmentss from the database.
exports.deleteAll = (req, res) => {
  Tmpstockadjustments.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpstockadjustmentss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpstockadjustmentss.",
      });
    });
};

// Find all published Tmpstockadjustmentss
exports.findAllPublished = (req, res) => {
  Tmpstockadjustments.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstockadjustmentss.",
      });
    });
};
