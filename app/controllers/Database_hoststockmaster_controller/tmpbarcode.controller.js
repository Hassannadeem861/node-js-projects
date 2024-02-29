// tmpbarcode.controller.js
const Tmpbarcode = require("../../models/Database_hoststockmaster_model/tmpbarcode.model");


// Create and Save a new tmpbarcode
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }


    const newTmpBarcode = {
        StockCode: req.body.StockCode,
        barcode: req.body.barcode,
        Description: req.body.Description,
    };



    // Save Tmpbarcode in the database
    Tmpbarcode.create(newTmpBarcode)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpbarcode."
            });
        });
};

// Retrieve all Tmpbarcode from the database.
exports.findAll = (req, res) => {
    Tmpbarcode.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpbarcode."
            });
        });
};

// Find a single Tmpbarcode with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpbarcode.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpbarcode with id=" + id
            });
        });
};

// Update a Tmpbarcode by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpbarcode.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpbarcode was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpbarcode with id=${id}. Maybe Tmpbarcode was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpbarcode with id=" + id
            });
        });
};

// Delete a Tmpbarcode with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpbarcode.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpbarcode was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpbarcode with id=${id}. Maybe Tmpbarcode was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpbarcode from the database.
exports.deleteAll = (req, res) => {
    Tmpbarcode.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpbarcode were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpbarcode."
            });
        });
};
