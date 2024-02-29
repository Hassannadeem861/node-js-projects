const Tblquotefootermsg = require("../../models/Database_host_model/tblquotefootermsg.model");


// Create and Save a new Tblquotefootermsg
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Sno) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblquotefootermsg
  const tblquotefootermsg = {
    Sno: req.body.Sno,
    FooterMsg: req.body.FooterMsg,
   
  };

  // Save Tblquotefootermsg in the database
  Tblquotefootermsg.create(tblquotefootermsg)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblquotefootermsg.",
      });
    });
};

// Retrieve all Tblquotefootermsgs from the database.
exports.findAll = (req, res) => {
  const title = req.query.Sno;
  var condition = title ? { Sno: { [Op.like]: `%${Sno}%` } } : null;

  Tblquotefootermsg.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblquotefootermsgs.",
      });
    });
};

// Find a single Tblquotefootermsg with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblquotefootermsg.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblquotefootermsg with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblquotefootermsg with id=" + id,
      });
    });
};

// Update a Tblquotefootermsg by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblquotefootermsg.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblquotefootermsg was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblquotefootermsg with id=${id}. Maybe Tblquotefootermsg was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblquotefootermsg with id=" + id,
      });
    });
};

// Delete a Tblquotefootermsg with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblquotefootermsg.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblquotefootermsg was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblquotefootermsg with id=${id}. Maybe Tblquotefootermsg was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblquotefootermsg with id=" + id,
      });
    });
};

// Delete all Tblquotefootermsgs from the database.
exports.deleteAll = (req, res) => {
  Tblquotefootermsg.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblquotefootermsgs were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblquotefootermsgs.",
      });
    });
};

// Find all published Tblquotefootermsgs
exports.findAllPublished = (req, res) => {
  Tblquotefootermsg.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblquotefootermsgs.",
      });
    });
};
