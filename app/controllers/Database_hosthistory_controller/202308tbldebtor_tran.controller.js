const Tbldebtor_tran = require("../../models/Database_hosthistory_model/202308tbldebtor_tran.model");


// Create and Save a new Tbldebtor_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.DateTime) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldebtor_tran
  const tbldebtor_tran = {
   
    DateTime: req.body.DateTime,
    Debtorcode: req.body.Debtorcode,
    Reference: req.body.Reference ,
    Description: req.body.Description,
    TransType: req.body.TransType,
    Amount: req.body.Amount ,
    OrderNo: req.body.OrderNo,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth ,
    Hisday: req.body.Hisday,
    DayEndFinalize: req.body.DayEndFinalize,
    AccountSystem: req.body.AccountSystem ,
    VAT: req.body.VAT,
    BFDate: req.body.BFDate,
    UserName: req.body.UserName ,
    DebtorName: req.body.DebtorName,
   
  };

  // Save Tbldebtor_tran in the database
  Tbldebtor_tran.create(tbldebtor_tran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldebtor_tran.",
      });
    });
};

// Retrieve all Tbldebtor_tran from the database.
exports.findAll = (req, res) => {
  const title = req.query.DateTime;
  var condition = title ? { DateTime: { [Op.like]: `%${DateTime}%` } } : null;

  Tbldebtor_tran.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldebtor_tran.",
      });
    });
};

// Find a single Tbldebtor_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldebtor_tran.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldebtor_tran with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldebtor_tran with id=" + id,
      });
    });
};

// Update a Tbldebtor_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldebtor_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldebtor_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldebtor_tran with id=${id}. Maybe Tbldebtor_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldebtor_tran with id=" + id,
      });
    });
};

// Delete a TutoTbldebtor_tranrial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldebtor_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldebtor_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldebtor_tran with id=${id}. Maybe Tbldebtor_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldebtor_tran with id=" + id,
      });
    });
};

// Delete all Tbldebtor_tran from the database.
exports.deleteAll = (req, res) => {
    Tbldebtor_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldebtor_tran were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldebtor_tran.",
      });
    });
};

// Find all published Tbldebtor_tran
exports.findAllPublished = (req, res) => {
    Tbldebtor_tran.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldebtor_tran.",
      });
    });
};
