const Tblcombineditems = require("../../models/Database_host_model/tblcombineditems.model");


// Create and Save a new Tblcombineditems
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode and combStockCode cannot be empty!" });
        return;
    }

    // Create a Tblcombineditems
    const tblcombineditems = {
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        combStockCode: req.body.combStockCode,
        combStockDescription: req.body.combStockDescription,
        Quantity: req.body.Quantity,
        Itype: req.body.Itype
    };

    // Save Tblcombineditems in the database
    Tblcombineditems.create(tblcombineditems)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tblcombineditems."
            });
        });
};

// Retrieve all Tblcombineditems from the database.
exports.findAll = (req, res) => {
    Tblcombineditems.findAll()
        .then((tblcombineditems) => {
            res.send(tblcombineditems);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblcombineditems.",
            });
        });
};

// Find a single Tblcombineditems with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblcombineditems.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblcombineditems with id=" + id
            });
        });
};

// Update a Tblcombineditems by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblcombineditems.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblcombineditems was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblcombineditems with id=${id}. Maybe Tblcombineditems was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblcombineditems with id=" + id
            });
        });
};

// Delete a Tblcombineditems with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblcombineditems.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tblcombineditems was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tblcombineditems with id=${id}. Maybe Tblcombineditems was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tblcombineditems with id=" + id,
            });
        });
};

// Delete all Tblcombineditems from the database.
exports.deleteAll = (req, res) => {
    Tblcombineditems.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tblcombineditems were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tblcombineditems.",
            });
        });
};
