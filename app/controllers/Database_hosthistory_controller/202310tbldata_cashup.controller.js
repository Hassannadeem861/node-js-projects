const Tbldata_cashup = require("../../models/Database_hosthistory_model/202310tbldata_cashup.model");


// Create and Save a new tbldata_cashup
exports.create = (req, res) => {
  // Validate request
  if(!req.body.cashupnum){
    res.status(400).send({
      message:"Content can not be empty!",
    });
    return;
  }

  // Create a tbldata_cashup
  const tbldata_cashup = {
    cashupnum: req.body.cashupnum,
    datetime: req.body.datetime,
    username: req.body.username,
    CashUpDone: req.body.CashUpDone,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday
  };

  // Save tbldata_cashup in the database
  Tbldata_cashup.create(tbldata_cashup)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tbldata_cashup."
      });
    });
};

// Retrieve all tbldata_cashup from the database
exports.findAll = (req, res) => {
  Tbldata_cashup.findAll()
    .then(tbldata_cashups => {
      res.send(tbldata_cashups);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbldata_cashups."
      });
    });
};

// Find a single tbldata_cashup with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving tbldata_cashup with id=" + id
      });
    });
};

// Update a tbldata_cashup by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tbldata_cashup was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update tbldata_cashup with id=${id}. Maybe tbldata_cashup was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating tbldata_cashup with id=" + id
      });
    });
};

// Delete a tbldata_cashup with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tbldata_cashup was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete tbldata_cashup with id=${id}. Maybe tbldata_cashup was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete tbldata_cashup with id=" + id
      });
    });
};

// Delete all tbldata_cashups from the database
exports.deleteAll = (req, res) => {
  Tbldata_cashup.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} tbldata_cashups were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbldata_cashups."
      });
    });
};
