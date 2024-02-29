const Tblrepairfootermsg = require("../../models/Database_host_model/tblrepairfootermsg.model");


// Create and Save a new Tblrepairfootermsg
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Sno) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblrepairfootermsg
  const tblrepairfootermsg = {
    Sno: req.body.Sno,
    FooterMsg: req.body.FooterMsg,
   
  };

  // Save Tblrepairfootermsg in the database
  Tblrepairfootermsg.create(tblrepairfootermsg)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblrepairfootermsg.",
      });
    });
};

// Retrieve all Tblrepairfootermsgs from the database.
exports.findAll = (req, res) => {
  const title = req.query.Sno;
  var condition = title ? { Sno: { [Op.like]: `%${Sno}%` } } : null;

  Tblrepairfootermsg.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblrepairfootermsgs.",
      });
    });
};

// Find a single Tblrepairfootermsg with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblrepairfootermsg.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblrepairfootermsg with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblrepairfootermsg with id=" + id,
      });
    });
};

// Update a Tblrepairfootermsg by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblrepairfootermsg.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblrepairfootermsg was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblrepairfootermsg with id=${id}. Maybe Tblrepairfootermsg was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblrepairfootermsg with id=" + id,
      });
    });
};

// Delete a Tblrepairfootermsg with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblrepairfootermsg.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblrepairfootermsg was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblrepairfootermsg with id=${id}. Maybe Tblrepairfootermsg was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblrepairfootermsg with id=" + id,
      });
    });
};

// Delete all Tblrepairfootermsgs from the database.
exports.deleteAll = (req, res) => {
  Tblrepairfootermsg.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblrepairfootermsgs were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblrepairfootermsgs.",
      });
    });
};

// Find all published Tblrepairfootermsgs
exports.findAllPublished = (req, res) => {
  Tblrepairfootermsg.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblrepairfootermsgs.",
      });
    });
};
