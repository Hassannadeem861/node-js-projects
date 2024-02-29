const Listauditdebtortotals = require("../../models/Database_hosthistory_model/tbllistauditdebtortotals.model");


// Create and Save a new Listauditdebtortotals
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditdebtortotals
  const listauditdebtortotals = {
    Name: req.body.Name,
  };

  // Save Listauditdebtortotals in the database
  Listauditdebtortotals.create(listauditdebtortotals)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditdebtortotals.",
      });
    });
};

// Retrieve all Listauditdebtortotalss from the database.
exports.findAll = (req, res) => {
  Listauditdebtortotals.findAll()
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

// Find a single Listauditdebtortotals with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditdebtortotals.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditdebtortotals with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditdebtortotals with id=" + id });
    });
};

// Update a Listauditdebtortotals by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditdebtortotals.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditdebtortotals was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditdebtortotals with id=${id}. Maybe Listauditdebtortotals was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditdebtortotals with id=" + id });
    });
};

// Delete a Listauditdebtortotals with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditdebtortotals.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditdebtortotals was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditdebtortotals with id=${id}. Maybe Listauditdebtortotals was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditdebtortotals with id=" + id });
    });
};

// Delete all Listauditdebtortotalss from the database.
exports.deleteAll = (req, res) => {
  Listauditdebtortotals.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditdebtortotalss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
