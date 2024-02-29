const Tmpugrv = require("../../models/Database_host_model/tmpugrv.model");

// Create and Save a new Tmpugrv
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpugrv
  const tmpugrv = {
    StockCode: req.body.StockCode,
    S_No: req.body.S_No,
    Description: req.body.Description,
    RcvQty: req.body.RcvQty,
    CostPrice: req.body.CostPrice,
    SellingPrice: req.body.SellingPrice,
    VATP: req.body.VATP,
  
  };

  // Save Tmpugrv in the database
  Tmpugrv.create(tmpugrv)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpugrv.",
      });
    });
};

// Retrieve all Tmpugrvs from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpugrv.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpugrvs.",
      });
    });
};

// Find a single Tmpugrv with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpugrv.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpugrv with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpugrv with id=" + id,
      });
    });
};

// Update a Tmpugrv by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpugrv.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpugrv was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpugrv with id=${id}. Maybe Tmpugrv was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpugrv with id=" + id,
      });
    });
};

// Delete a Tmpugrv with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpugrv.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpugrv was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpugrv with id=${id}. Maybe Tmpugrv was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpugrv with id=" + id,
      });
    });
};

// Delete all Tmpugrvs from the database.
exports.deleteAll = (req, res) => {
  Tmpugrv.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpugrvs were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpugrvs.",
      });
    });
};

// Find all published Tmpugrvs
exports.findAllPublished = (req, res) => {
  Tmpugrv.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpugrvs.",
      });
    });
};
