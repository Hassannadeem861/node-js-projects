const Tmpinvoicesearch = require("../../models/Database_host_model/tmpinvoicesearch.model");

// Create and Save a new Tmpinvoicesearch
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode || !req.body.StockDescription) {
        res.status(400).send({ message: "StockCode and StockDescription are required fields!" });
        return;
    }

    // Create a Tmpinvoicesearch
    const tmpinvoicesearch = {
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
        Sub2No: req.body.Sub2No
    };

    // Save Tmpinvoicesearch in the database
    Tmpinvoicesearch.create(tmpinvoicesearch)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpinvoicesearch."
            });
        });
};

// Retrieve all Tmpinvoicesearch from the database.
exports.findAll = (req, res) => {
    Tmpinvoicesearch.findAll()
        .then(Tmpinvoicesearch => {
            res.send(Tmpinvoicesearch);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpinvoicesearch."
            });
        });
};

// Find a single Tmpinvoicesearch with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpinvoicesearch.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpinvoicesearch with id=" + id
            });
        });
};

// Find all published Tmpinvoicesearch
exports.findAllPublished = (req, res) => {
    Tmpinvoicesearch.findAll({ where: { Published: true } })
        .then(Tmpinvoicesearch => {
            res.send(Tmpinvoicesearch);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpinvoicesearch."
            });
        });
};

// Update a Tmpinvoicesearch by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpinvoicesearch.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpinvoicesearch was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpinvoicesearch with id=${id}. Maybe Tmpinvoicesearch was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpinvoicesearch with id=" + id
            });
        });
};

// Delete a Tmpinvoicesearch with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpinvoicesearch.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpinvoicesearch was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpinvoicesearch with id=${id}. Maybe Tmpinvoicesearch was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpinvoicesearch with id=" + id
            });
        });
};

// Delete all Tmpinvoicesearch from the database.
exports.deleteAll = (req, res) => {
    Tmpinvoicesearch.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpinvoicesearch were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpinvoicesearch."
            });
        });
};
