const Tblbarcode = require("../../models/Database_host_model/tblbarcode.model");


// Create and Save a new Tblbarcode
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "Fields cannot be empty!" });
        return;
    }

    // Create a Tblbarcode
    const tblbarcode = {
        StockCode: req.body.StockCode,
        Barcode: req.body.Barcode,
        Description1: req.body.Description1,
        SellingPrice: req.body.SellingPrice,
        PrintQty: req.body.PrintQty
    };

    // Save Tblbarcode in the database
    Tblbarcode.create(tblbarcode)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tblbarcode."
            });
        });
};

// Retrieve all Tblbarcode from the database.
exports.findAll = (req, res) => {
    Tblbarcode.findAll()
        .then((tblbarcode) => {
            res.send(tblbarcode);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblbarcode.",
            });
        });
};


// Find a single Tblbarcode with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblbarcode.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblbarcode with id=" + id
            });
        });
};

// Update a Tblbarcode by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblbarcode.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tblbarcode was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tblbarcode with id=${id}. Maybe Tblbarcode was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tblbarcode with id=" + id,
            });
        });
};


// Delete a Tblbarcode with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblbarcode.destroy({
        where: { id: id }, // Corrected primary key to 'id'
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tblbarcode was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tblbarcode with id=${id}. Maybe Tblbarcode was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tblbarcode with id=" + id,
            });
        });
};

// Delete all Tblbarcode from the database.
exports.deleteAll = (req, res) => {
    Tblbarcode.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tblbarcode were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tblbarcode.",
            });
        });
};
