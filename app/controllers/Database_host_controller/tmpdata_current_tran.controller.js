const Tmpdata_current_tran = require("../../models/Database_host_model/tmpdata_current_tran.modle");


// Create and Save a new Tmpdata_current_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpdata_current_tran = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum,
        TransactionNum: req.body.TransactionNum,
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        MajorNo: req.body.MajorNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,
        CreditInvoiceNo: req.body.CreditInvoiceNo,
        UnitVAT: req.body.UnitVAT,
        ItemVAT: req.body.ItemVAT,
        Qty: req.body.Qty,
        StockUnitPrice: req.body.StockUnitPrice,
        VatPercentage: req.body.VatPercentage,
        VatFlag: req.body.VatFlag,
        PercDiscount: req.body.PercDiscount,
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
        PickingSlip: req.body.PickingSlip,
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
        sliptype: req.body.sliptype,
        ClerkCashup: req.body.ClerkCashup,
    };

    // Save Tmpdata_current_tran in the database
    Tmpdata_current_tran.create(tmpdata_current_tran)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpdata_current_tran.",
            });
        });
};

// Retrieve all Tmpdata_current_tran from the database.
exports.findAll = (req, res) => {
    const DateTime = req.query.DateTime;
    var condition = DateTime ? { DateTime: { [Op.like]: `%${DateTime}%` } } : null;

    Tmpdata_current_tran.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpdata_current_tran.",
            });
        });
};

// Find a single Tmpdata_current_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpdata_current_tran.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpdata_current_tran with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpdata_current_tran with id=" + id,
            });
        });
};

// Update a Tmpdata_current_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpdata_current_tran.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpdata_current_tran was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpdata_current_tran with id=${id}. Maybe Tmpdata_current_tran was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpdata_current_tran with id=" + id,
            });
        });
};

// Delete a Tmpdata_current_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpdata_current_tran.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpdata_current_tran was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpdata_current_tran with id=${id}. Maybe Tmpdata_current_tran was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpdata_current_tran with id=" + id,
            });
        });
};

// Delete all Tmpdata_current_tran from the database.
exports.deleteAll = (req, res) => {
    Tmpdata_current_tran.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpdata_current_tran were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpdata_current_tran.",
            });
        });
};

// Find all published Tmpdata_current_tran
exports.findAllPublished = (req, res) => {
    Tmpdata_current_tran.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpdata_current_tran.",
            });
        });
};
