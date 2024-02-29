const Tblcounters = require("../../models/Database_host_model/tblcounters.model");


// Create and Save a new Tblcounters
exports.create = (req, res) => {
    // Validate request
    if (!req.body.InvNum) {
        res.status(400).send({ message: "InvNum name cannot be empty!" });
        return;
    }

    // Create a Tblcounters
    const tblcounters = {
        InvNum: req.body.InvNum,
        CashupNum: req.body.CashupNum,
        PayoutNum: req.body.PayoutNum,
        ComputerNo: req.body.ComputerNo,
        SaveSale: req.body.SaveSale,
        QuoteNo: req.body.QuoteNo,
        LaybyeNo: req.body.LaybyeNo,
        RepairNo: req.body.RepairNo
    };


  // Save Tblcounters in the database
  Tblcounters.create(tblcounters)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblcounters."
      });
    });
};

// Retrieve all Tblcounters from the database.
exports.findAll = (req, res) => {
    Tblcounters.findAll()
        .then((tblcounters) => {
            res.send(tblcounters);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblcounters.",
            });
        });
};

// Find a single Tblcounters with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblcounters.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tblcounters with id=" + id
      });
    });
};

// Update a Tblcounters by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblcounters.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tblcounters was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tblcounters with id=${id}. Maybe Tblcounters was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tblcounters with id=" + id
      });
    });
};

// Delete a Tblcounters with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tblcounters.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Tblcounters was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Tblcounters with id=${id}. Maybe Tblcounters was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Tblcounters with id=" + id,
        });
      });
  };

// Delete all Tblcounters from the database.
exports.deleteAll = (req, res) => {
  Tblcounters.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblcounters were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblcounters.",
      });
    });
};
