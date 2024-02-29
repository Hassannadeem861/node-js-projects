const Tblcprice = require("../../models/Database_host_model/tblcprice.model");


// Create a new record
exports.create = (req, res) => {
    // Validate request
    if (!req.body.sDateTime) {
        res.status(400).send({
            message: "All fields are required!"
        });
        return;
    }

    // Create a Tblcprice object
    const tblcprice = {
        sDateTime: req.body.sDateTime,
        InvoiceNo: req.body.InvoiceNo,
        SellingPrice: req.body.SellingPrice,
        SoldQty: req.body.SoldQty
    };

    // Save Tblcprice object to the database
    Tblcprice.create(tblcprice)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tblcprice."
            });
        });
};

// Retrieve all records
exports.findAll = (req, res) => {
    Tblcprice.findAll()
        .then((tblcprice) => {
            res.send(tblcprice);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblcprice.",
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tblcprice.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tblcprice with id=" + id
        });
      });
  };

// Update a record by ID
exports.update = (req, res) => {
    const id = req.params.id;

    Tblcprice.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblcprice record was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblcprice with id=${id}. Maybe Tblcprice record was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblcprice record with id=" + id
            });
        });
};

// Delete a record by ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblcprice.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblcprice record was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tblcprice with id=${id}. Maybe Tblcprice record was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tblcprice record with id=" + id
            });
        });
};

// Delete all records
exports.deleteAll = (req, res) => {
    Tblcprice.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tblcprice records were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tblcprice records."
            });
        });
};
