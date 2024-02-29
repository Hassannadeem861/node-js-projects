const Tblnotes = require("../../models/Database_hostdebtors_model/tblnotes.model");


// Create and Save a new Tbltmpctran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Datetime) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblnotes
  const tblnotes = {
    Datetime: req.body.Datetime,
    DebtorCode: req.body.DebtorCode,
    NoteNo: req.body.Reference ,
    DNote: req.body.DNote ,
    User: req.body.User ,


  };

  // Save Tblnotes in the database
  Tblnotes.create(tblnotes)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblnotes.",
      });
    });
};

// Retrieve all tblnotes from the database.
exports.findAll = (req, res) => {
  const Date = req.query.Datetime;
  var condition = Date ? { Datetime: { [Op.like]: `%${Datetime}%` } } : null;

  Tblnotes.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblnotes.",
      });
    });
};

// Find a single Tblnotes with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblnotes.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblnotes with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblnotes with id=" + id,
      });
    });
};

// Update a tblnotes by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblnotes.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblnotes was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update tblnotes with id=${id}. Maybe Tblnotes was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblnotes with id=" + id,
      });
    });
};

// Delete a Tblnotes with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblnotes.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblnotes was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblnotes with id=${id}. Maybe Tblnotes was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblnotes with id=" + id,
      });
    });
};

// Delete all Tbltmpctran from the database.
exports.deleteAll = (req, res) => {
    Tblnotes.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblnotes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblnotes.",
      });
    });
};

// Find all published Tblnotes
exports.findAllPublished = (req, res) => {
    Tblnotes.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblnotes.",
      });
    });
};
