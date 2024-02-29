const Tbldatabase = require("../../models/Database_host_model/tbldatabase.model");


// Create and Save a new Tbldatabase
exports.create = (req, res) => {
  // Validate request
  if (!req.body.LocationName) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldatabase
  const tbldatabase = {
    LocationName: req.body.LocationName,
  };

  // Save Tbldatabase in the database
  Tbldatabase.create(tbldatabase)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatabase.",
      });
    });
};

// Retrieve all Tbldatabase from the database.
exports.findAll = (req, res) => {
  Tbldatabase.findAll()
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

// Find a single Tbldatabase with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatabase.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldatabase with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldatabase with id=" + id });
    });
};

// Update a Tbldatabase by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatabase.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatabase was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldatabase with id=${id}. Maybe Tbldatabase was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldatabase with id=" + id });
    });
};

// Delete a Tbldatabase with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatabase.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatabase was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldatabase with id=${id}. Maybe Tbldatabase was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldatabase with id=" + id });
    });
};

// Delete all Tbldatabases from the database.
exports.deleteAll = (req, res) => {
  Tbldatabase.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatabases were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
