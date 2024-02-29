const Listauditrefunds = require("../../models/Database_hosthistory_model/tbllistauditrefunds.model");

// Create and Save a new Listauditrefunds
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditrefunds
  const listauditrefunds = {
    Name: req.body.Name,
  };

  // Save Listauditrefunds in the database
  Listauditrefunds.create(listauditrefunds)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditrefunds.",
      });
    });
};

// Retrieve all Listauditrefundss from the database.
exports.findAll = (req, res) => {
  Listauditrefunds.findAll()
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

// Find a single Listauditrefunds with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditrefunds.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditrefunds with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditrefunds with id=" + id });
    });
};

// Update a Listauditrefunds by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditrefunds.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditrefunds was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditrefunds with id=${id}. Maybe Listauditrefunds was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditrefunds with id=" + id });
    });
};

// Delete a Listauditrefunds with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditrefunds.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditrefunds was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditrefunds with id=${id}. Maybe Listauditrefunds was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditrefunds with id=" + id });
    });
};

// Delete all Listauditrefundss from the database.
exports.deleteAll = (req, res) => {
  Listauditrefunds.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditrefundss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
