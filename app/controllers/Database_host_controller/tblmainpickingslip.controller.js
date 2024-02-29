const Tblmainpickingslip = require("../../models/Database_host_model/tblmainpickingslip.model");


// Create and Save a new Tblmainpickingslip
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Description) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblmainpickingslip
  const tblmainpickingslip = {
    Description: req.body.Description,
    Qty: req.body.Qty,
    SlipType: req.body.SlipType ,
    TranID: req.body.TranID,
    Blank2: req.body.Blank2,
    Blank3: req.body.Blank3 ,
  };

  // Save Tblmainpickingslip in the database
  Tblmainpickingslip.create( tblmainpickingslip)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblmainpickingslip.",
      });
    });
};

// Retrieve all Tblmainpickingslips from the database.
exports.findAll = (req, res) => {
  const title = req.query.Description;
  var condition = title ? { Description: { [Op.like]: `%${Description}%` } } : null;

  Tblmainpickingslip.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblmainpickingslips.",
      });
    });
};

// Find a single Tblmainpickingslip with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblmainpickingslip.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblmainpickingslip with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblmainpickingslip with id=" + id,
      });
    });
};

// Update a Tblmainpickingslip by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblmainpickingslip.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblmainpickingslip was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblmainpickingslip with id=${id}. Maybe Tblmainpickingslip was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblmainpickingslip with id=" + id,
      });
    });
};

// Delete a Tblmainpickingslip with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblmainpickingslip.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblmainpickingslip was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblmainpickingslip with id=${id}. Maybe Tblmainpickingslip was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblmainpickingslip with id=" + id,
      });
    });
};

// Delete all Tblmainpickingslips from the database.
exports.deleteAll = (req, res) => {
  Tblmainpickingslip.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblmainpickingslips were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblmainpickingslips.",
      });
    });
};

// Find all published Tblmainpickingslips
exports.findAllPublished = (req, res) => {
  Tblmainpickingslip.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblmainpickingslips.",
      });
    });
};
