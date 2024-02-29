const Tblcounterpickingslip = require("../../models/Database_host_model/tblcounterpickingslip.model");


// Create and Save a new Tblcounterpickingslip
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Description) {
        res.status(400).send({ message: "Description name cannot be empty!" });
        return;
    }

    // Create a Tblcounterpickingslip
    const tblcounterpickingslip = {
        Description: req.body.Description,
        Qty: req.body.Qty,
        SlipType: req.body.SlipType,
        TranID: req.body.TranID,
        Blank2: req.body.Blank2,
        Blank3: req.body.Blank3
    };

  // Save Tblcounterpickingslip in the database
  Tblcounterpickingslip.create(tblcounterpickingslip)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblcounterpickingslip."
      });
    });
};


// Retrieve all Tblcounterpickingslip from the database.
exports.findAll = (req, res) => {
    Tblcounterpickingslip.findAll()
        .then((tblcounterpickingslip) => {
            res.send(tblcounterpickingslip);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblcounterpickingslip.",
            });
        });
};

// Find a single Tblcounterpickingslip with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblcounterpickingslip.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tblcounterpickingslip with id=" + id
      });
    });
};

// Update a Tblcounterpickingslip by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblcounterpickingslip.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tblcounterpickingslip was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tblcounterpickingslip with id=${id}. Maybe Tblcounterpickingslip was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tblcounterpickingslip with id=" + id
      });
    });
};

// Delete a Tblcounterpickingslip with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tblcounterpickingslip.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Tblcounterpickingslip was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Tblcounterpickingslip with id=${id}. Maybe Tblcounterpickingslip was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Tblcounterpickingslip with id=" + id,
        });
      });
  };

// Delete all Tblcounterpickingslip from the database.
exports.deleteAll = (req, res) => {
  Tblcounterpickingslip.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblcounterpickingslip were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblcounterpickingslip.",
      });
    });
};
