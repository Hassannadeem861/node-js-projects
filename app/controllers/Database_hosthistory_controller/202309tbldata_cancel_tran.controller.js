const Tbldata_cancel_tran = require("../../models/Database_hosthistory_model/202309tbldata_cancel_tran.model");


// Create and Save a new Tbldata_cancel_tran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldata_cancel_tran
  var tbldata_cancel_tran = {
    datetime: req.body.datetime,
    Stockcode: req.body.Stockcode,
    Description: req.body.Description,
    UsrPwd: req.body.UsrPwd,
    Usr: req.body.Usr,
    OverridePwd: req.body.OverridePwd,
    OverrideUsr: req.body.OverrideUsr,
    Computer: req.body.Computer,
    MajorNum: req.body.MajorNum,
    Sub1Num: req.body.Sub1Num,
    Sub2Num: req.body.Sub2Num,
    Qty: req.body.Qty,
    ExclCostPrice: req.body.ExclCostPrice,
    InclSellingPrice: req.body.InclSellingPrice,
    vatPercentage: req.body.vatPercentage,
    tableNum: req.body.tableNum,
    Hisday: req.body.Hisday,
    HisMonth: req.body.HisMonth,
    Hisyear: req.body.Hisyear,


  };
  console.log('CREATE DATA IN DATABASE :', tbldata_cancel_tran);

  // Save Tbldata_cancel_tran in the dTbldata_cancel_tranatabase
  Tbldata_cancel_tran.create(tbldata_cancel_tran)
    .then((data) => {
      console.log('RESPONSE :', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('RESPONSE ERR :', err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_cancel_tran.",
      });
    });
};

// Retrieve all Tbldata_cancel_tran from the database.
exports.findAll = (req, res) => {
  const Date = req.query.datetime;
  var condition = Date ? { datetime: { [Op.like]: `%${datetime}%` } } : null;

  Tbldata_cancel_tran.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cancel_tran.",
      });
    });
};

// Find a single Tbldata_cancel_tran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_cancel_tran.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_cancel_tran with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_cancel_tran with id=" + id,
      });
    });
};

// Update a Tbldata_cancel_tran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_cancel_tran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cancel_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_cancel_tran with id=${id}. Maybe Tbldata_cancel_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_cancel_tran with id=" + id,
      });
    });
};

// Delete a Tbldata_cancel_tran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_cancel_tran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cancel_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_cancel_tran with id=${id}. Maybe Tbldata_cancel_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_cancel_tran with id=" + id,
      });
    });
};

// Delete all Tbldata_cancel_tran from the database.
exports.deleteAll = (req, res) => {
  Tbldata_cancel_tran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_cancel_tran were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_cancel_tran.",
      });
    });
};

// Find all published Tbldata_cancel_tran
exports.findAllPublished = (req, res) => {
  Tbldata_cancel_tran.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cancel_tran.",
      });
    });
};
