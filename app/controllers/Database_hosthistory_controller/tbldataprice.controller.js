
const Tbldataprice = require("../../models/Database_hosthistory_model/tbldataprice.model");

// Create and Save a new Tbldataprice
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldataprice
  const tbldataprice = {
    Name: req.body.Name,

  };

  // Save Tbldataprice in the database
  Tbldataprice.create(tbldataprice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldataprice.",
      });
    });
};

// Retrieve all Tbldataprice from the database.
exports.findAll = (req, res) => {
  const Date = req.query.Name;
  var condition = Date ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldataprice.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldataprice.",
      });
    });
};

// Find a single Tbldataprice with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldataprice.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldataprice with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldataprice with id=" + id,
      });
    });
};

// Update a Tbldataprice by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldataprice.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldataprice was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldataprice with id=${id}. Maybe Tbldataprice was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldataprice with id=" + id,
      });
    });
};

// Delete a Tbldataprice with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldataprice.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldataprice was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldataprice with id=${id}. Maybe Tbldataprice was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldataprice with id=" + id,
      });
    });
};

// Delete all Tbldataprice from the database.
exports.deleteAll = (req, res) => {
    Tbldataprice.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldataprice were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldataprice.",
      });
    });
};

// Find all published Tbldataprice
exports.findAllPublished = (req, res) => {
    Tbldataprice.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldataprice.",
      });
    });
};
