const Tbldataadjustment = require("../../models/Database_hosthistory_model/tbldataadjustment.model");


// Create and Save a new Tbldataadjustment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldataadjustment
  const tbldataadjustment = {
    Name: req.body.Name,
  };

  // Save Tbldataadjustment in the database
  Tbldataadjustment.create(tbldataadjustment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldataadjustment.",
      });
    });
};

// Retrieve all Tbldataadjustments from the database.
exports.findAll = (req, res) => {
  Tbldataadjustment.findAll()
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

// Find a single Tbldataadjustment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldataadjustment.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldataadjustment with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldataadjustment with id=" + id });
    });
};

// Update a Tbldataadjustment by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldataadjustment.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldataadjustment was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldataadjustment with id=${id}. Maybe Tbldataadjustment was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldataadjustment with id=" + id });
    });
};

// Delete a Tbldataadjustment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldataadjustment.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldataadjustment was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldataadjustment with id=${id}. Maybe Tbldataadjustment was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldataadjustment with id=" + id });
    });
};

// Delete all Tbldataadjustments from the database.
exports.deleteAll = (req, res) => {
  Tbldataadjustment.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldataadjustments were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
