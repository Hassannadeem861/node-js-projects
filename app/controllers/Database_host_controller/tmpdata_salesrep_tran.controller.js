const Tmpdata_salesrep_tran = require("../../models/Database_host_model/tmpdata_salesrep_tran.model");

// Create and Save a new Tmpdata_salesrep_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode cannot be empty!" });
        return;
    }

    // Create a Tmpdata_salesrep_tran
    const tmpdata_salesrep_tran = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum ,
        TransactionNum: req.body.TransactionNum ,
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
        SalesRepCode: req.body.SalesRepCode,
        SalesRepName: req.body.SalesRepName
    };

    // Save Tmpdata_salesrep_tran in the database
    Tmpdata_salesrep_tran.create(tmpdata_salesrep_tran)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpdata_salesrep_tran."
            });
        });
};

// Retrieve all Tmpdata_salesrep_trans from the database.
exports.findAll = (req, res) => {
    Tmpdata_salesrep_tran.findAll()
        .then(Tmpdata_salesrep_trans => {
            res.send(Tmpdata_salesrep_trans);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpdata_salesrep_trans."
            });
        });
};

// Retrieve all published Tmpdata_salesrep_trans from the database
exports.findAllPublished = (req, res) => {
    Tmpdata_salesrep_tran.findAll({ where: { published: true } })
        .then(Tmpdata_salesrep_trans => {
            res.send(Tmpdata_salesrep_trans);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpdata_salesrep_trans."
            });
        });
};


// Find a single Tmpdata_salesrep_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpdata_salesrep_tran.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpdata_salesrep_tran with id=" + id
            });
        });
};

// Update a Tmpdata_salesrep_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpdata_salesrep_tran.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdata_salesrep_tran was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpdata_salesrep_tran with id=${id}. Maybe Tmpdata_salesrep_tran was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpdata_salesrep_tran with id=" + id
            });
        });
};

// Delete a Tmpdata_salesrep_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpdata_salesrep_tran.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdata_salesrep_tran was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpdata_salesrep_tran with id=${id}. Maybe Tmpdata_salesrep_tran was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpdata_salesrep_tran with id=" + id
            });
        });
};

// Delete all Tmpdata_salesrep_trans from the database.
exports.deleteAll = (req, res) => {
    Tmpdata_salesrep_tran.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpdata_salesrep_trans were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpdata_salesrep_trans."
            });
        });
};
