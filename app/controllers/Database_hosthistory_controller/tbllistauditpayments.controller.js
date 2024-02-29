const Listauditpayments = require("../../models/Database_hosthistory_model/tbllistauditpayments.model");


// Create and Save a new Listauditpayments
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditpayments
  const listauditpayments = {
    Name: req.body.Name,
  };

  // Save Listauditpayments in the database
  Listauditpayments.create(listauditpayments)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditpayments.",
      });
    });
};

// Retrieve all Listauditpaymentss from the database.
exports.findAll = (req, res) => {
  Listauditpayments.findAll()
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

// Find a single Listauditpayments with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditpayments.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditpayments with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditpayments with id=" + id });
    });
};

// Update a Listauditpayments by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditpayments.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditpayments was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditpayments with id=${id}. Maybe Listauditpayments was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditpayments with id=" + id });
    });
};

// Delete a Listauditpayments with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditpayments.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditpayments was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditpayments with id=${id}. Maybe Listauditpayments was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditpayments with id=" + id });
    });
};

// Delete all Listauditpaymentss from the database.
exports.deleteAll = (req, res) => {
  Listauditpayments.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditpaymentss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
