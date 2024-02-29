const Tbldeladdress = require("../../models/Database_hostdebtors_model/tbladress.model");


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.DelAddCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const tbl_adress = {
    DelAddCode: req.body.DelAddCode,
    CustomerCode: req.body.CustomerCode,
    CustomerDadd1: req.body.CustomerDadd1,
    CustomerDadd2: req.body.CustomerDadd2,
    CustomerDadd3: req.body.CustomerDadd3,
    CustomerDCode: req.body.CustomerDCode,
    DefaultAdd: req.body.DefaultAdd,
  };


  // Save Tutorial in the database
  Tbldeladdress.create(tbl_adress)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tbl_debtor_tran.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const DelAddCode = req.query.DelAddCode;
  var condition = DelAddCode ? { DelAddCode: { [Op.like]: `%${DelAddCode}%` } } : null;

  Tbldeladdress.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbl_address.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldeladdress.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find tbl_address with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving tbl_address with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldeladdress.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbl_address was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update tbl_address with id=${id}. Maybe tbl_address was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating tbl_address with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldeladdress.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbl_address was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete tbl_address with id=${id}. Maybe tbl_debtor_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete tbl_address with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tbldeladdress.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} tbl_address were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbl_address.",
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
Tbldeladdress.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbl_address.",
      });
    });
};
