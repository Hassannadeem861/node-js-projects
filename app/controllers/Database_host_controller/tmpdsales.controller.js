const Tmpdsales = require("../../models/Database_host_model/tmpdsales.model");

// Create and Save a new Tmpdsales
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode and Description are required fields!" });
        return;
    }

    // Create a Tmpdsales
    const tmpdsales = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum ,
        TransactionNum: req.body.TransactionNum ,
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
        ClerkCashup: req.body.ClerkCashup,
    };

    // Save Tmpdsales in the database
    Tmpdsales.create(tmpdsales)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpdsales."
            });
        });
};

// Retrieve all Tmpdsales from the database.
exports.findAll = (req, res) => {
    Tmpdsales.findAll()
        .then(Tmpdeliveries => {
            res.send(Tmpdeliveries);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpdsales."
            });
        });
};

// Find a single Tmpdsales with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpdsales.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpdsales with id=" + id
            });
        });
};

// Find all published Tmpserialsale
exports.findAllPublished = (req, res) => {
    Tmpserialsale.findAll({ where: { Published: true } })
        .then(tmpserialsales => {
            res.send(tmpserialsales);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpserialsale."
            });
        });
};


// Update a Tmpdsales by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpdsales.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdsales was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpdsales with id=${id}. Maybe Tmpdsales was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpdsales with id=" + id
            });
        });
};

// Delete a Tmpdsales with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpdsales.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdsales was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpdsales with id=${id}. Maybe Tmpdsales was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpdsales with id=" + id
            });
        });
};

// Delete all Tmpdsales from the database.
exports.deleteAll = (req, res) => {
    Tmpdsales.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpdsales were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpdsales."
            });
        });
};
