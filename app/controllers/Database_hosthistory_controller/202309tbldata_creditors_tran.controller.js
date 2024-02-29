const Tbldata_creditors_tran = require("../../models/Database_hosthistory_model/202309tbldata_creditors_tran.model");


// Create and Save a new Tbldata_creditors_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.DateTime) {
    res.status(400).send({ message: "All fields are required!" });
    return;
  }

  // Create a Tbldata_creditors_tran
  const tbldata_creditors_tran = {
    DateTime: req.body.DateTime,
    Creditorcode: req.body.Creditorcode,
    Reference: req.body.Reference,
    Description: req.body.Description,
    TransType: req.body.TransType,
    Amount: req.body.Amount,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
    VAT: req.body.VAT,
    UserName: req.body.UserName,
    CreditorName: req.body.CreditorName,
  };

  // Save Tbldata_creditors_tran in the database
  Tbldata_creditors_tran.create(tbldata_creditors_tran)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_creditors_tran."
      });
    });
};

// Retrieve all Tbldata_creditors_trans from the database
exports.findAll = (req, res) => {
  Tbldata_creditors_tran.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tbldata_creditors_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_creditors_tran.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tbldata_creditors_tran with id=" + id
      });
    });
};

// Update a Tbldata_creditors_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_creditors_tran.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tbldata_creditors_tran was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_creditors_tran with id=${id}. Maybe Tbldata_creditors_tran was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tbldata_creditors_tran with id=" + id
      });
    });
};

// Delete a Tbldata_creditors_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_creditors_tran.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tbldata_creditors_tran was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_creditors_tran with id=${id}. Maybe Tbldata_creditors_tran was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tbldata_creditors_tran with id=" + id
      });
    });
};

// Delete all Tbldata_creditors_trans from the database
exports.deleteAll = (req, res) => {
  Tbldata_creditors_tran.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tbldata_creditors_trans were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};
