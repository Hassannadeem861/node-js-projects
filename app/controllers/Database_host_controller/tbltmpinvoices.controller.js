const Tbltmpinvoices = require("../../models/Database_host_model/tbltmpinvoices.modle");

// Create and Save a new Tmpdata_salesrep_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "StockCode cannot be empty!" });
        return;
    }

    // Create a Tmpdata_salesrep_tran
    const tbltmpinvoices = {
        DateTime: req.body.DateTime,
        invoiceNo: req.body.invoiceNo,
        PaymentType: req.body.PaymentType,
        InvoiceTotal: req.body.InvoiceTotal,
        CashierName: req.body.CashierName,
        AccountNum: req.body.AccountNum,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisDay: req.body.hisDay,
        Vat: req.body.Vat,
        ComputerName: req.body.ComputerName,
    };


    console.log("create data in dataase", tbltmpinvoices);


    // Save Tmpdata_salesrep_tran in the database
    Tbltmpinvoices.create(tbltmpinvoices)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the tbltmpinvoices."
            });
        });
};

// Retrieve all Tmpdata_salesrep_trans from the database.
exports.findAll = (req, res) => {
    Tbltmpinvoices.findAll()
        .then(Tbltmpinvoices => {
            res.send(Tbltmpinvoices);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmpinvoices."
            });
        });
};

// // Retrieve all published Tmpdata_salesrep_trans from the database
exports.findAllPublished = (req, res) => {
    Tbltmpinvoices.findAll({ where: { published: true } })
        .then(Tbltmpinvoices => {
            res.send(Tbltmpinvoices);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmpinvoices."
            });
        });
};


// // Find a single Tmpdata_salesrep_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmpinvoices.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbltmpinvoices with id=" + id
            });
        });
};

// Update a Tmpdata_salesrep_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmpinvoices.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpinvoices was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmpinvoices with id=${id}. Maybe Tbltmpinvoices was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbltmpinvoices with id=" + id
            });
        });
};

// // Delete a Tmpdata_salesrep_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmpinvoices.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpinvoices was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmpinvoices with id=${id}. Maybe Tbltmpinvoices was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbltmpinvoices with id=" + id
            });
        });
};

// // Delete all Tbltmpdebtransactionss from the database.
exports.deleteAll = (req, res) => {
    Tbltmpinvoices.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbltmpinvoices were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tbltmpinvoices."
            });
        });
};
