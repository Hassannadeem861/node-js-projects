const Listposaccpay = require("../../models/Database_hosthistory_model/tbllistposaccpay.model");


// Create and Save a new Listposaccpay
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listposaccpay
  const listposaccpay = {
    Name: req.body.Name,
  };

  // Save Listposaccpay in the database
  Listposaccpay.create(listposaccpay)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listposaccpay.",
      });
    });
};

// Retrieve all Listposaccpays from the database.
exports.findAll = (req, res) => {
  Listposaccpay.findAll()
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

// Find a single Listposaccpay with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listposaccpay.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listposaccpay with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listposaccpay with id=" + id });
    });
};

// Update a Listposaccpay by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listposaccpay.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listposaccpay was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listposaccpay with id=${id}. Maybe Listposaccpay was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listposaccpay with id=" + id });
    });
};

// Delete a Listposaccpay with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listposaccpay.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listposaccpay was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listposaccpay with id=${id}. Maybe Listposaccpay was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listposaccpay with id=" + id });
    });
};

// Delete all Listposaccpays from the database.
exports.deleteAll = (req, res) => {
  Listposaccpay.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listposaccpays were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
