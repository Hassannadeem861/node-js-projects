const Tbldatadebtor_tran = require("../../models/Database_hosthistory_model/tbldatadebtor_tran.model");


// Create and Save a new tbldatadebtor_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a tbldatadebtor_tran
  const tbldatadebtor_tran = {
    Name: req.body.Name,
   
  };

  // Save Tutorial in the database
  Tbldatadebtor_tran.create(tbldatadebtor_tran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatadebtor_tran.",
      });
    });
};

// Retrieve all Tbldatadebtor_tran from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = title ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldatadebtor_tran.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatadebtor_tran.",
      });
    });
};

// Find a single Tbldatadebtor_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatadebtor_tran.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldatadebtor_tran with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldatadebtor_tran with id=" + id,
      });
    });
};

// Update a Tbldatadebtor_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatadebtor_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatadebtor_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldatadebtor_tran with id=${id}. Maybe Tbldatadebtor_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldatadebtor_tran with id=" + id,
      });
    });
};

// Delete a Tbldatadebtor_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatadebtor_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatadebtor_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldatadebtor_tran with id=${id}. Maybe Tbldatadebtor_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldatadebtor_tran with id=" + id,
      });
    });
};

// Delete all Tbldatadebtor_tran from the database.
exports.deleteAll = (req, res) => {
    Tbldatadebtor_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatadebtor_tran were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldatadebtor_tran.",
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tbldatadebtor_tran.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatadebtor_tran.",
      });
    });
};
