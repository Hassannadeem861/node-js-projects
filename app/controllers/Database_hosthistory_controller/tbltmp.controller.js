const Tmp = require("../../models/Database_hosthistory_model/tbltmp.model");


// Create and Save a new Tmp
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({ message: "StockCode and InvoiceNumber cannot be empty!" });
    return;
  }

  // Create a Tmp
  const tmp = {
    StockCode: req.body.StockCode,
    InvoiceNumber: req.body.InvoiceNumber,
    Description: req.body.Description,
    Field1: req.body.Field1,
    Field2: req.body.Field2,
    Field3: req.body.Field3,
    Field4: req.body.Field4,
    Field5: req.body.Field5,
    Field6: req.body.Field6,
    Field7: req.body.Field7,
    ClerkName: req.body.ClerkName,
  };

  // Save Tmp in the database
  Tmp.create(tmp)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmp.",
      });
    });
};

// Retrieve all Tmps from the database.
exports.findAll = (req, res) => {
  Tmp.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Tmp with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmp.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Tmp not found with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tmp with id=" + id });
    });
};

// Update a Tmp by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmp.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tmp was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tmp with id=${id}. Maybe Tmp was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tmp with id=" + id });
    });
};

// Delete a Tmp with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmp.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tmp was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tmp with id=${id}. Maybe Tmp was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tmp with id=" + id });
    });
};

// Delete all Tmps from the database.
exports.deleteAll = (req, res) => {
  Tmp.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmps were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    });
};
