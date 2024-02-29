const Tblpayout = require("../../models/Database_hosthistory_model/202308tblpayout.model");

// Create and Save a new Tblpayout
exports.create = (req, res) => {
  // Validate request
  if (!req.body.TransactionNum) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblpayout
  const tblpayout = {
   
    TransactionNum: req.body.TransactionNum,
    datetime: req.body.datetime,
    Clerk_Name: req.body.Clerk_Name ,
    Amount: req.body.Amount,
    Reason: req.body.Reason,
    CashupNum: req.body.CashupNum ,
    Incashup: req.body.Incashup,
    Computername: req.body.Computername,
    Hisyear: req.body.Hisyear ,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
   
  };

  // Save Tblpayout in the database
  Tblpayout.create(tblpayout)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tblpayout.",
      });
    });
};

// Retrieve all Tblpayout from the database.
exports.findAll = (req, res) => {
  const title = req.query.TransactionNum;
  var condition = title ? { TransactionNum: { [Op.like]: `%${TransactionNum}%` } } : null;

  Tblpayout.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblpayout.",
      });
    });
};

// Find a single Tblpayout with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblpayout.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblpayout with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblpayout with id=" + id,
      });
    });
};

// Update a Tblpayout by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblpayout.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblpayout was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblpayout with id=${id}. Maybe Tblpayout was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblpayout with id=" + id,
      });
    });
};

// Delete a Tblpayout with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblpayout.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblpayout was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblpayout with id=${id}. Maybe Tblpayout was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblpayout with id=" + id,
      });
    });
};

// Delete all Tblpayout from the database.
exports.deleteAll = (req, res) => {
    Tblpayout.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblpayout were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblpayout.",
      });
    });
};

// Find all published Tblpayout
exports.findAllPublished = (req, res) => {
    Tblpayout.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblpayout.",
      });
    });
};
