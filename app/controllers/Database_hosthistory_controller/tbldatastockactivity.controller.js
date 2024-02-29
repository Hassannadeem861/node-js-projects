const Tbldatastockactivity = require("../../models/Database_hosthistory_model/tbldatastockactivity.mode");


// Create and Save a new Tbldatastockactivity
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldatastockactivity
  const tbldatastockactivity = {
    Name: req.body.Name,
   
  };

  // Save Tbldatastockactivity in the database
  Tbldatastockactivity.create(tbldatastockactivity)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatastockactivity.",
      });
    });
};

// Retrieve all Tbldatastockactivity from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = title ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldatastockactivity.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatastockactivity.",
      });
    });
};

// Find a single Tbldatastockactivity with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatastockactivity.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldatastockactivity with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldatastockactivity with id=" + id,
      });
    });
};

// Update a Tbldatastockactivity by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatastockactivity.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatastockactivity was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldatastockactivity with id=${id}. Maybe Tbldatastockactivity was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldatastockactivity with id=" + id,
      });
    });
};

// Delete a tbldatastockactivity with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatastockactivity.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatastockactivity was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete tbldatastockactivity with id=${id}. Maybe tbldatastockactivity was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete tbldatastockactivity with id=" + id,
      });
    });
};

// Delete all tbldatastockactivity from the database.
exports.deleteAll = (req, res) => {
    Tbldatastockactivity.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} tbldatastockactivity were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbldatastockactivity.",
      });
    });
};

// Find all published tbldatastockactivity
exports.findAllPublished = (req, res) => {
    Tbldatastockactivity.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbldatastockactivity.",
      });
    });
};
