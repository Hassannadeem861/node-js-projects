const Tbldatacashout = require("../../models/Database_hosthistory_model/tbldatacashout.model");


// Create and Save a new Tbldatacashout
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldatacashout
  const tbldatacashout = {
    Name: req.body.Name,
  };

  // Save Tbldatacashout in the database
  Tbldatacashout.create(tbldatacashout)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatacashout.",
      });
    });
};

// Retrieve all Tbldatacashouts from the database.
exports.findAll = (req, res) => {
  Tbldatacashout.findAll()
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

// Find a single Tbldatacashout with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatacashout.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldatacashout with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldatacashout with id=" + id });
    });
};

// Update a Tbldatacashout by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatacashout.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacashout was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldatacashout with id=${id}. Maybe Tbldatacashout was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldatacashout with id=" + id });
    });
};

// Delete a Tbldatacashout with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatacashout.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacashout was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldatacashout with id=${id}. Maybe Tbldatacashout was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldatacashout with id=" + id });
    });
};

// Delete all Tbldatacashouts from the database.
exports.deleteAll = (req, res) => {
  Tbldatacashout.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatacashouts were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
