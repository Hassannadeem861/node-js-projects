// tmpibt.controller.js
const Tmpibt = require("../../models/Database_hoststockmaster_model/tmpibt.model");


// Create and Save a new tmpibt
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "DateTime can not be empty!" });
        return;
    }

    const newTmpIBT = {
        DateTime: req.body.DateTime,
        Tran_No: req.body.Tran_No,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        Qty: req.body.Qty,
        Ucost: req.body.Ucost,
        Uselling: req.body.Uselling,
        TotalCost: req.body.TotalCost,
        TotalSelling: req.body.TotalSelling,
        StoreIn: req.body.StoreIn,
        StoreOut: req.body.StoreOut,
        StoreInODBC: req.body.StoreInODBC,
        StoreOutODBC: req.body.StoreOutODBC,
        Status: req.body.Status,
        VATPerc: req.body.VATPerc,
        UInclCost: req.body.UInclCost,
        UExclSelling: req.body.UExclSelling,
        TInclCost: req.body.TInclCost,
        TExclSelling: req.body.TExclSelling,
    };



    // Save tmpibt in the database
    Tmpibt.create(newTmpIBT)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpibt."
            });
        });
};

// Retrieve all Tmpibt from the database.
exports.findAll = (req, res) => {
    Tmpibt.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpibt."
            });
        });
};

// Find a single Tmpibt with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpibt.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpibt with id=" + id
            });
        });
};

// Update a Tmpibt by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpibt.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpibt was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpibt with id=${id}. Maybe Tmpibt was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpibt with id=" + id
            });
        });
};

// Delete a Tmpibt with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpibt.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpibt was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpibt with id=${id}. Maybe Tmpibt was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpibt from the database.
exports.deleteAll = (req, res) => {
    Tmpibt.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpibt were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpibt."
            });
        });
};
