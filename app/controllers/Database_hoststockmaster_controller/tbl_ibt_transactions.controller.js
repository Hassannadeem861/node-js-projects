// tbl_ibt_transactions.controller.js
const Tbl_ibt_transactions = require("../../models/Database_hoststockmaster_model/tbl_ibt_transactions.model");


// Create and Save a new Tbl_ibt_transactions
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "DateTime can not be empty!" });
        return;
    }


    const tbl_ibt_transactions = {
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

    // Save Tbl_ibt_transactions in the database
    Tbl_ibt_transactions.create(tbl_ibt_transactions)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_transactions."
            });
        });
};

// Retrieve all Tbl_ibt_transactions from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_transactions.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_transactions."
            });
        });
};

// Find a single Tbl_ibt_transactions with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_transactions.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_transactions with id=" + id
            });
        });
};

// Update a Tbl_ibt_transactions by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_transactions.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_transactions was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_transactions with id=${id}. Maybe Tbl_ibt_transactions was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_transactions with id=" + id
            });
        });
};

// Delete a Tbl_ibt_transactions with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_transactions.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_transactions was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_transactions with id=${id}. Maybe Tbl_ibt_transactions was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_transactions with id=" + id
            });
        });
};

// Delete all Tbl_ibt_transactions from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_transactions.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_transactions were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_transactions."
            });
        });
};
