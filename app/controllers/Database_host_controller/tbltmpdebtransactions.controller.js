const Tbltmpdebtransactions = require("../../models/Database_host_model/tbltmpdebtransactions.modle");

// Create and Save a new Tmpdata_salesrep_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "StockCode cannot be empty!" });
        return;
    }

    // Create a Tmpdata_salesrep_tran
    const tbltmpdebtransactions = {
        DateTime: req.body.DateTime,
        DebtorCode: req.body.DebtorCode,
        Reference: req.body.Reference,
        Description: req.body.Description,
        TransType: req.body.TransType,
        Amount: req.body.Amount,
        AccInvoiceNum: req.body.AccInvoiceNum,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisDay: req.body.hisDay,
        OpenItemStateNum: req.body.OpenItemStateNum,
        InvNum: req.body.InvNum,
        Vat: req.body.Vat,
        BFDate: req.body.BFDate,
        UserName: req.body.UserName,
        DebtorName: req.body.DebtorName,
        // Remove the fields that are not in Tbltmpdebtransactions
    };


    console.log("create data in dataase", tbltmpdebtransactions);


    // Save Tmpdata_salesrep_tran in the database
    Tbltmpdebtransactions.create(tbltmpdebtransactions)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tbltmpdebtransactions."
            });
        });
};

// Retrieve all Tmpdata_salesrep_trans from the database.
exports.findAll = (req, res) => {
    Tbltmpdebtransactions.findAll()
        .then(Tbltmpdebtransactions => {
            res.send(Tbltmpdebtransactions);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmpdebtransactions."
            });
        });
};

// // Retrieve all published Tmpdata_salesrep_trans from the database
exports.findAllPublished = (req, res) => {
    Tbltmpdebtransactions.findAll({ where: { published: true } })
        .then(Tbltmpdebtransactions => {
            res.send(Tbltmpdebtransactions);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmpdebtransactions."
            });
        });
};


// // Find a single Tmpdata_salesrep_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmpdebtransactions.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbltmpdebtransactions with id=" + id
            });
        });
};

// Update a Tmpdata_salesrep_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmpdebtransactions.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpdebtransactions was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmpdebtransactions with id=${id}. Maybe Tbltmpdebtransactions was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbltmpdebtransactions with id=" + id
            });
        });
};

// // Delete a Tmpdata_salesrep_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmpdebtransactions.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpdebtransactions was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmpdebtransactions with id=${id}. Maybe Tbltmpdebtransactions was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbltmpdebtransactions with id=" + id
            });
        });
};

// // Delete all Tbltmpdebtransactionss from the database.
exports.deleteAll = (req, res) => {
    Tbltmpdebtransactions.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbltmpdebtransactionss were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tbltmpdebtransactionss."
            });
        });
};
