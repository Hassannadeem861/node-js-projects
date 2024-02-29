// tblexcelfile.controller.js
const Tblexcelfile = require("../../models/Database_host_model/tblexcelfile.model");


// Create and Save a new Tblexcelfile
exports.create = (req, res) => {
  // Validate request
  if (!req.body.a || !req.body.b || !req.body.c) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tblexcelfile
  const tblexcelfile = {
    a: req.body.a,
    b: req.body.b,
    c: req.body.c
  };

  // Save Tblexcelfile in the database
  Tblexcelfile.create(tblexcelfile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblexcelfile."
      });
    });
};

// Retrieve all Tblexcelfiles from the database.
exports.findAll = (req, res) => {
  Tblexcelfile.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tblexcelfiles."
      });
    });
};

// Find a single Tblexcelfile with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblexcelfile.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tblexcelfile with id=" + id
      });
    });
};

// Update a Tblexcelfile by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblexcelfile.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tblexcelfile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tblexcelfile with id=${id}. Maybe Tblexcelfile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tblexcelfile with id=" + id
      });
    });
};

// Delete a Tblexcelfile with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblexcelfile.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tblexcelfile was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tblexcelfile with id=${id}. Maybe Tblexcelfile was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tblexcelfile with id=" + id
      });
    });
};

// Delete all Tblexcelfiles from the database.
exports.deleteAll = (req, res) => {
  Tblexcelfile.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tblexcelfiles were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tblexcelfiles."
      });
    });
};
