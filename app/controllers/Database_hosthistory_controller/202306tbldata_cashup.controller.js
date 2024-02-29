const Tbldata_cashup = require("../../models/Database_hosthistory_model/202306tbldata_cashup.model");


// Create and Save a new Tbldata_cashup
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cashupnum) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldata_cancel_tran
  var tbldata_cashup = {
    cashupnum: req.body.cashupnum,
    DateTime: req.body.DateTime,
    username: req.body.username,
    CashUpDone: req.body.CashUpDone,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
   

  };
  console.log('CREATE DATA IN DATABASE :', Tbldata_cashup);

  // Save Tbldata_cancel_tran in the Tbldata_cashup
  Tbldata_cashup.create(tbldata_cashup)
    .then((data) => {
      console.log('RESPONSE :', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('RESPONSE ERR :', err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_cashup.",
      });
    });
};

// Retrieve all Tbldata_cashup from the database.
exports.findAll = (req, res) => {
  const Date = req.query.cashupnum;
  var condition = Date ? { cashupnum: { [Op.like]: `%${cashupnum}%` } } : null;

  Tbldata_cashup.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cashup.",
      });
    });
};

// Find a single Tbldata_cashup with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_cashup with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_cashup with id=" + id,
      });
    });
};

// Update a Tbldata_cashup by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cashup was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_cashup with id=${id}. Maybe Tbldata_cancel_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_cashup with id=" + id,
      });
    });
};

// Delete a Tbldata_cashup with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cashup was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_cashup with id=${id}. Maybe Tbldata_cashup was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_cashup with id=" + id,
      });
    });
};

// Delete all Tbldata_cashup from the database.
exports.deleteAll = (req, res) => {
    Tbldata_cashup.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_cashup were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_cashup.",
      });
    });
};

// Find all published Tbldata_cashup
exports.findAllPublished = (req, res) => {
    Tbldata_cashup.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cashup.",
      });
    });
};
