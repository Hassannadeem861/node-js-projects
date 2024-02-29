const Tmprefunds = require("../../models/Database_host_model/tmprefunds.model");

// Create and Save a new Tmprefunds
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode || !req.body.StockDescription) {
        res.status(400).send({ message: "StockCode and StockDescription are required fields!" });
        return;
    }

    // Create a Tmprefunds
    const tmprefunds = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum,
        TransactionNum: req.body.TransactionNum,
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        MajorNo: req.body.MajorNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,
        TableDiscount: req.body.TableDiscount,
        ItemDiscount: req.body.ItemDiscount,
        ValueDiscount: req.body.ValueDiscount,
        Qty: req.body.Qty,
        StockUnitPrice: req.body.StockUnitPrice,
        VatPercentage: req.body.VatPercentage,
        VatFlag: req.body.VatFlag,
        ClerkNum: req.body.ClerkNum,
        ClerkName: req.body.ClerkName,
        PaymentType: req.body.PaymentType,
        ChequeNum: req.body.ChequeNum,
        CardNum: req.body.CardNum,
        AccountNum: req.body.AccountNum,
        Carwash: req.body.Carwash,
        ExternalOrderNum: req.body.ExternalOrderNum,
        SerialItem: req.body.SerialItem,
        ComputerName: req.body.ComputerName,
        SerialNum: req.body.SerialNum,
        AverageCostPrice: req.body.AverageCostPrice,
        LastCostPrice: req.body.LastCostPrice,
        LineTotal: req.body.LineTotal,
        InvoiceTotal: req.body.InvoiceTotal,
        TipAmount: req.body.TipAmount,
        AccInvoiceNum: req.body.AccInvoiceNum,
        Comment: req.body.Comment,
        CashupNum: req.body.CashupNum,
        InCashUp: req.body.InCashUp,
        PosSale: req.body.PosSale,
        Transfer: req.body.Transfer,
        Tendered: req.body.Tendered,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisday: req.body.hisday,
        PersonCnt: req.body.PersonCnt,
        ClerkCashup: req.body.ClerkCashup
    };

    // Save Tmprefunds in the database
    Tmprefunds.create(tmprefunds)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmprefunds."
            });
        });
};

// Retrieve all Tmprefunds from the database.
exports.findAll = (req, res) => {
    Tmprefunds.findAll()
        .then(Tmprefunds => {
            res.send(Tmprefunds);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmprefunds."
            });
        });
};

// Find a single Tmprefunds with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmprefunds.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmprefunds with id=" + id
            });
        });
};

// Update a Tmprefunds by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmprefunds.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmprefunds was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmprefunds with id=${id}. Maybe Tmprefunds was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmprefunds with id=" + id
            });
        });
};

// Delete a Tmprefunds with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmprefunds.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmprefunds was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmprefunds with id=${id}. Maybe Tmprefunds was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmprefunds with id=" + id
            });
        });
};

// Delete all Tmprefunds from the database.
exports.deleteAll = (req, res) => {
    Tmprefunds.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmprefunds were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmprefunds."
            });
        });
};


// Find all published Tmprefunds
exports.findAllPublished = (req, res) => {
    Tmprefunds.findAll({ where: { Published: true } })
        .then(Tmprefunds => {
            res.send(Tmprefunds);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmprefunds."
            });
        });
};
