const Tbldata_cashup = require("../../models/Database_hosthistory_model/202308tbldata_cashup.model");


// Create and Save a new Tbldata_cash_up
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cashupnum) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tbldata_cancel_tran
  const tbldata_cash_up = {
    cashupnum: req.body.cashupnum,
    DateTime: req.body.DateTime,
    username: req.body.username,
    CashUpDone: req.body.CashUpDone,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
  };

  // Save Tbldata_cancel_tran in the Tbldata_cash_up
  Tbldata_cashup.create(tbldata_cash_up)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_cash_up.",
      });
    });
};

// Retrieve all Tbldata_cash_up from the database.
exports.findAll = (req, res) => {
  const cashupnum = req.query.cashupnum;
  var condition = cashupnum ? { cashupnum: { [Op.like]: `%${cashupnum}%` } } : null;

  Tbldata_cashup.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cash_up.",
      });
    });
};

// Find a single Tbldata_cash_up with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_cash_up with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_cash_up with id=" + id,
      });
    });
};

// Update a Tbldata_cash_up by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cash_up was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: `Cannot update Tbldata_cash_up with id=${id}. Maybe Tbldata_cancel_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_cash_up with id=" + id,
      });
    });
};

// Delete a Tbldata_cash_up with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cash_up was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Tbldata_cash_up with id=${id}. Maybe Tbldata_cash_up was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_cash_up with id=" + id,
      });
    });
};

// Delete all Tbldata_cash_up from the database.
exports.deleteAll = (req, res) => {
  Tbldata_cashup.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_cash_up were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_cash_up.",
      });
    });
};

// Find all published Tbldata_cash_up
exports.findAllPublished = (req, res) => {
  Tbldata_cashup.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cash_up.",
      });
    });
};
