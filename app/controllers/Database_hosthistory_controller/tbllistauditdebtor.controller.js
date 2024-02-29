const Listauditdebtors = require("../../models/Database_hosthistory_model/tbllistauditdebtor.model");


// Create and Save a new Listauditdebtors
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditdebtors
  const listauditdebtors = {
    Name: req.body.Name,
  };

  // Save Listauditdebtors in the database
  Listauditdebtors.create(listauditdebtors)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditdebtors.",
      });
    });
};

// Retrieve all Listauditdebtorss from the database.
exports.findAll = (req, res) => {
  Listauditdebtors.findAll()
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

// Find a single Listauditdebtors with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditdebtors.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditdebtors with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditdebtors with id=" + id });
    });
};

// Update a Listauditdebtors by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditdebtors.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditdebtors was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditdebtors with id=${id}. Maybe Listauditdebtors was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditdebtors with id=" + id });
    });
};

// Delete a Listauditdebtors with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditdebtors.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditdebtors was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditdebtors with id=${id}. Maybe Listauditdebtors was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditdebtors with id=" + id });
    });
};

// Delete all Listauditdebtorss from the database.
exports.deleteAll = (req, res) => {
  Listauditdebtors.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditdebtorss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
