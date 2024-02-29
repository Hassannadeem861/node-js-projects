const Tmpinvoicesearch2 = require("../../models/Database_host_model/tmpinvoicesearch2.model");

// Create and Save a new Tmpinvoicesearch2
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode || !req.body.StockDescription) {
        res.status(400).send({ message: "StockCode and StockDescription are required fields!" });
        return;
    }

    // Create a Tmpinvoicesearch2
    const tmpinvoicesearch2 = {
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

    // Save Tmpinvoicesearch2 in the database
    Tmpinvoicesearch2.create(tmpinvoicesearch2)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpinvoicesearch2."
            });
        });
};

// Retrieve all Tmpinvoicesearch2 from the database.
exports.findAll = (req, res) => {
    Tmpinvoicesearch2.findAll()
        .then(Tmpinvoicesearch2 => {
            res.send(Tmpinvoicesearch2);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpinvoicesearch2."
            });
        });
};

// Find a single Tmpinvoicesearch2 with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpinvoicesearch2.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpinvoicesearch2 with id=" + id
            });
        });
};

// Find all published Tmpinvoicesearch2
exports.findAllPublished = (req, res) => {
    Tmpinvoicesearch2.findAll({ where: { Published: true } })
        .then(Tmpinvoicesearch2 => {
            res.send(Tmpinvoicesearch2);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpinvoicesearch2."
            });
        });
};

// Update a Tmpinvoicesearch2 by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpinvoicesearch2.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpinvoicesearch2 was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpinvoicesearch2 with id=${id}. Maybe Tmpinvoicesearch2 was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpinvoicesearch2 with id=" + id
            });
        });
};

// Delete a Tmpinvoicesearch2 with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpinvoicesearch2.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpinvoicesearch2 was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpinvoicesearch2 with id=${id}. Maybe Tmpinvoicesearch2 was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpinvoicesearch2 with id=" + id
            });
        });
};

// Delete all Tmpinvoicesearch2 from the database.
exports.deleteAll = (req, res) => {
    Tmpinvoicesearch2.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpinvoicesearch2 were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpinvoicesearch2."
            });
        });
};
