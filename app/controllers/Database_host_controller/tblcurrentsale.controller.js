const Tblcurrentsale = require("../../models/Database_host_model/tblcurrentsale.model");


// Create a new record
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({
            message: "All fields are required!"
        });
        return;
    }
    // Create a Tblcurrentsale object
    const tblcurrentsale = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum,
        TransactionNum: req.body.TransactionNum,
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
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
        CookingMsg: req.body.CookingMsg,
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

    // Save Tblcurrentsale object to the database
    Tblcurrentsale.create(tblcurrentsale)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tblcurrentsale."
            });
        });
};

// Retrieve all records
exports.findAll = (req, res) => {
    Tblcurrentsale.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tblcurrentsale records."
            });
        });
};


// Retrieve a single record by ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblcurrentsale.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblcurrentsale with id=" + id
            });
        });
};

// Update a record by ID
exports.update = (req, res) => {
    const id = req.params.id;

    Tblcurrentsale.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblcurrentsale record was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblcurrentsale with id=${id}. Maybe Tblcurrentsale record was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblcurrentsale record with id=" + id
            });
        });
};

// Delete a record by ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblcurrentsale.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblcurrentsale record was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tblcurrentsale with id=${id}. Maybe Tblcurrentsale record was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tblcurrentsale record with id=" + id
            });
        });
};

// Delete all records
exports.deleteAll = (req, res) => {
    Tblcurrentsale.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tblcurrentsale records were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tblcurrentsale records."
            });
        });
};
