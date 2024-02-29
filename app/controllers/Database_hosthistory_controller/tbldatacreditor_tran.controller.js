const Tbldatacreditor_tran = require("../../models/Database_hosthistory_model/tbldatacreditor_tran.model");


// Create and Save a new Tbldatacreditor_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldatacreditor_tran
  const tbldatacreditor_tran = {
    Name: req.body.Name,
  };

  // Save Tbldatacreditor_tran in the database
  Tbldatacreditor_tran.create(tbldatacreditor_tran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatacreditor_tran.",
      });
    });
};

// Retrieve all Tbldatacreditor_trans from the database.
exports.findAll = (req, res) => {
  Tbldatacreditor_tran.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving listauditclaims.",
      });
    });
};

// Find a single Tbldatacreditor_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatacreditor_tran.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldatacreditor_tran with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldatacreditor_tran with id=" + id });
    });
};

// Update a Tbldatacreditor_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatacreditor_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacreditor_tran was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldatacreditor_tran with id=${id}. Maybe Tbldatacreditor_tran was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldatacreditor_tran with id=" + id });
    });
};

// Delete a Tbldatacreditor_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatacreditor_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacreditor_tran was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldatacreditor_tran with id=${id}. Maybe Tbldatacreditor_tran was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldatacreditor_tran with id=" + id });
    });
};

// Delete all Tbldatacreditor_trans from the database.
exports.deleteAll = (req, res) => {
  Tbldatacreditor_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatacreditor_trans were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
