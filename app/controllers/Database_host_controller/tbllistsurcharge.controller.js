const Tbllistsurcharge = require("../../models/Database_host_model/tbllistsurcharge.model");

// Create and Save a new Tbllistsurcharge
exports.create = (req, res) => {
  // Validate request
  if (!req.body.tblName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllistsurcharge
  const tbllistsurcharge = {
    tblName: req.body.tblName,
   
  };

  // Save Tbllistsurcharge in the database
  Tbllistsurcharge.create(tbllistsurcharge)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllistsurcharge.",
      });
    });
};

// Retrieve all Tbllistsurcharges from the database.
exports.findAll = (req, res) => {
  const title = req.query.tblName;
  var condition = title ? { tblName: { [Op.like]: `%${tblName}%` } } : null;

  Tbllistsurcharge.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllistsurcharges.",
      });
    });
};

// Find a single Tbllistsurcharge with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllistsurcharge.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllistsurcharge with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllistsurcharge with id=" + id,
      });
    });
};

// Update a Tbllistsurcharge by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllistsurcharge.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllistsurcharge was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllistsurcharge with id=${id}. Maybe Tbllistsurcharge was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllistsurcharge with id=" + id,
      });
    });
};

// Delete a Tbllistsurcharge with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllistsurcharge.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllistsurcharge was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllistsurcharge with id=${id}. Maybe Tbllistsurcharge was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllistsurcharge with id=" + id,
      });
    });
};

// Delete all Tbllistsurcharges from the database.
exports.deleteAll = (req, res) => {
  Tbllistsurcharge.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllistsurcharges were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllistsurcharges.",
      });
    });
};

// Find all published Tbllistsurcharges
exports.findAllPublished = (req, res) => {
  Tbllistsurcharge.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllistsurcharges.",
      });
    });
};
