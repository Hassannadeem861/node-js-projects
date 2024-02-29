const Tbldata_current_tran = require("../../models/Database_host_model/tbldata_current_tran.model");


// Create and save a new Tbldata_current_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }

    // Create a Tbldata_current_tran
    const tbldata_current_tran = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum,
        TransactionNum: req.body.TransactionNum,
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        MajorNo: req.body.MajorNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,
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
        ClerkCashup: req.body.ClerkCashup
    };

    // Save Tbldata_current_tran in the database
    Tbldata_current_tran.create(tbldata_current_tran)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbldata_current_tran."
            });
        });
};

// Retrieve all Tbldata_current_tran from the database
exports.findAll = (req, res) => {
    Tbldata_current_tran.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbldata_current_tran."
            });
        });
};

// Find a single Tbldata_current_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbldata_current_tran.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbldata_current_tran with id=" + id
            });
        });
};

// Update a Tbldata_current_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbldata_current_tran.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbldata_current_tran was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbldata_current_tran with id=${id}. Maybe Tbldata_current_tran was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbldata_current_tran with id=" + id
            });
        });
};

// Delete a Tbldata_current_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbldata_current_tran.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbldata_current_tran was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbldata_current_tran with id=${id}. Maybe Tbldata_current_tran was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbldata_current_tran with id=" + id
            });
        });
};

// Delete all Tbldata_current_tran from the database
exports.deleteAll = (req, res) => {
    Tbldata_current_tran.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbldata_current_tran were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbldata_current_tran."
            });
        });
};
