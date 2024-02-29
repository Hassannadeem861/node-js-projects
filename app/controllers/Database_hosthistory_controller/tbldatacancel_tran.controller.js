const Tbldatacancel_tran = require("../../models/Database_hosthistory_model/tbldatacancel_tran.model");


// Create and Save a new Tbldatacancel_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldatacancel_tran
  const tbldatacancel_tran = {
    Name: req.body.Name,
  };

  // Save Tbldatacancel_tran in the database
  Tbldatacancel_tran.create(tbldatacancel_tran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatacancel_tran.",
      });
    });
};

// Retrieve all Tbldatacancel_trans from the database.
exports.findAll = (req, res) => {
  Tbldatacancel_tran.findAll()
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

// Find a single Tbldatacancel_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatacancel_tran.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldatacancel_tran with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldatacancel_tran with id=" + id });
    });
};

// Update a Tbldatacancel_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatacancel_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacancel_tran was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldatacancel_tran with id=${id}. Maybe Tbldatacancel_tran was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldatacancel_tran with id=" + id });
    });
};

// Delete a Tbldatacancel_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatacancel_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacancel_tran was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldatacancel_tran with id=${id}. Maybe Tbldatacancel_tran was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldatacancel_tran with id=" + id });
    });
};

// Delete all Tbldatacancel_trans from the database.
exports.deleteAll = (req, res) => {
  Tbldatacancel_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatacancel_trans were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
