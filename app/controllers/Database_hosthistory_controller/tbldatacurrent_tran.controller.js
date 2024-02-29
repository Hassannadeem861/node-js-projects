const Tbldatacurrent_tran = require("../../models/Database_hosthistory_model/tbldatacurrent_tran.model");


// Create and Save a new Tbldatacurrent_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldatacurrent_tran
  const tbldatacurrent_tran = {
    Name: req.body.Name,
   
  };

  // Save Tutorial in the database
  Tbldatacurrent_tran.create(tbldatacurrent_tran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatacurrent_tran.",
      });
    });
};

// Retrieve all Tbldatacurrent_tran from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = title ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldatacurrent_tran.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatacurrent_tran.",
      });
    });
};

// Find a single Tbldatacurrent_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatacurrent_tran.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldatacurrent_tran with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldatacurrent_tran with id=" + id,
      });
    });
};

// Update a Tbldatacurrent_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatacurrent_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatacurrent_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldatacurrent_tran with id=${id}. Maybe Tbldatacurrent_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldatacurrent_tran with id=" + id,
      });
    });
};

// Delete a Tbldatacurrent_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatacurrent_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatacurrent_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldatacurrent_tran with id=${id}. Maybe Tbldatacurrent_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldatacurrent_tran with id=" + id,
      });
    });
};

// Delete all Tbldatacurrent_tran from the database.
exports.deleteAll = (req, res) => {
    Tbldatacurrent_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatacurrent_tran were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldatacurrent_tran.",
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tbldatacurrent_tran.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatacurrent_tran.",
      });
    });
};
