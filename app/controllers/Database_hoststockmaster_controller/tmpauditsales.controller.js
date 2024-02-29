// tmpauditsales.controller.js
const Tmpauditsales = require("../../models/Database_hoststockmaster_model/tmpauditsales.model");


// Create and Save a new Tmpauditsales
exports.create = (req, res) => {
    // Validate request
    if (!req.body.SaleNum) {
        res.status(400).send({ message: "SaleNum can not be empty!" });
        return;
    }


    const tmpauditsales = {
        SaleNum: req.body.SaleNum,
        TransactionNum: req.body.TransactionNum,
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        Qty: req.body.Qty,
        UnitPrice: req.body.UnitPrice,
        VAT: req.body.VAT,
        Linetotal: req.body.Linetotal,
        CashupNum: req.body.CashupNum,
        InCashUp: req.body.InCashUp,
        PosSale: req.body.PosSale,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisday: req.body.hisday,
        ClerkCashup: req.body.ClerkCashup,
        ExclLineTotal: req.body.ExclLineTotal,
        lastcost: req.body.lastcost,
        averagecost: req.body.averagecost,
        MajorNo: req.body.MajorNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,
        Username: req.body.Username,
        PickingSlip: req.body.PickingSlip,
        SlipType: req.body.SlipType,
    };


    // Save Tmpauditsales in the database
    Tmpauditsales.create(tmpauditsales)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpauditsales."
            });
        });
};

// Retrieve all Tmpauditsales from the database.
exports.findAll = (req, res) => {
    Tmpauditsales.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditsales."
            });
        });
};

// Find a single Tmpauditsales with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpauditsales.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpauditsales with id=" + id
            });
        });
};

// Update a Tmpauditsales by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpauditsales.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditsales was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpauditsales with id=${id}. Maybe Tmpauditsales was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpauditsales with id=" + id
            });
        });
};

// Delete a Tmpauditsales with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpauditsales.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditsales was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpauditsales with id=${id}. Maybe Tmpauditsales was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpauditsales with id=" + id
            });
        });
};

// Delete all Tmpauditsales from the database.
exports.deleteAll = (req, res) => {
    Tmpauditsales.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpauditsales were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpauditsales."
            });
        });
};
