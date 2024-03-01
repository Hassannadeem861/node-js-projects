// tmppayout.controller.js
const Tmppayout = require("../../models/Database_hoststockmaster_model/tmppayout.model");


// Create and Save a new Tmppayout
exports.create = (req, res) => {
    // Validate request
    if (!req.body.TransactionNum) {
        res.status(400).send({ message: "TransactionNum can not be empty!" });
        return;
    }

    const tmppayout = {
        TransactionNum: req.body.TransactionNum,
        Date: req.body.Date,
        Clerk_Name: req.body.Clerk_Name,
        Amount: req.body.Amount,
        Reason: req.body.Reason,
        CashupNum: req.body.CashupNum,
        InCashUp: req.body.InCashUp,
        ComputerName: req.body.ComputerName,
        POSPayOut: req.body.POSPayOut,
        ClerkCashup: req.body.ClerkCashup,
        HisYear: req.body.HisYear,
        HisMonth: req.body.HisMonth,
        HisDay: req.body.HisDay,
    };




    // Save tmppayout in the database
    Tmppayout.create(tmppayout)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmppayout."
            });
        });
};

// Retrieve all Tmppayout from the database.
exports.findAll = (req, res) => {
    Tmppayout.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmppayout."
            });
        });
};

// Find a single Tmppayout with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmppayout.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmppayout with id=" + id
            });
        });
};

// Update a Tmppayout by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmppayout.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmppayout was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmppayout with id=${id}. Maybe Tmppayout was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmppayout with id=" + id
            });
        });
};

// Delete a Tmppayout with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmppayout.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmppayout was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmppayout with id=${id}. Maybe Tmppayout was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmppayout from the database.
exports.deleteAll = (req, res) => {
    Tmppayout.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmppayout were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmppayout."
            });
        });
};
