// tbleod.controller.js
const Tbleod = require("../../models/Database_host_model/tbleod.model");


// Create and Save a new Tbleod
exports.create = (req, res) => {
  // Validate request
  if (!req.body.GroupNo) {
    res.status(400).send({ message: "GroupNo can not be empty!" });
    return;
  }

  // Create a Tbleod
  const tbleod = {
    GroupNo: req.body.GroupNo,
    GroupName: req.body.GroupName,
    StockCode: req.body.StockCode,
    Description: req.body.Description,
    DSold: req.body.DSold,
    DGP: req.body.DGP,
    DOdy: req.body.DOdy,
    Dcounted: req.body.Dcounted,
    DDiffer: req.body.DDiffer,
    GPosition: req.body.GPosition
  };

  // Save Tbleod in the database
  Tbleod.create(tbleod)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbleod."
      });
    });
};

// Retrieve all Tbleods from the database.
exports.findAll = (req, res) => {
  Tbleod.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbleod."
      });
    });
};

// Find a single Tbleod with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbleod.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tbleod with id=" + id
      });
    });
};

// Update a Tbleod by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbleod.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tbleod was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tbleod with id=${id}. Maybe Tbleod was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tbleod with id=" + id
      });
    });
};

// Delete a Tbleod with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbleod.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tbleod was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tbleod with id=${id}. Maybe Tbleod was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tbleod with id=" + id
      });
    });
};

// Delete all Tbleods from the database.
exports.deleteAll = (req, res) => {
  Tbleod.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tbleods were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbleod."
      });
    });
};
