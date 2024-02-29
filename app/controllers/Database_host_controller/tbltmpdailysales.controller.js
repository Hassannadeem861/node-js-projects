const Tbltmpdailysales = require("../../models/Database_host_model/tbltmpdailysales.model");

// Create and Save a new Tmpdata_salesrep_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "StockCode cannot be empty!" });
        return;
    }

    // Create a Tmpdata_salesrep_tran
    const tbltmpdailysales = {
        DateTime: req.body.DateTime,
        CashSales: req.body.CashSales,
        CardSales: req.body.CardSales,
        ChequeSales: req.body.ChequeSales,
        AccountSales: req.body.AccountSales,
        TotalExclCost: req.body.TotalExclCost,
        TotalInclCost: req.body.TotalInclCost,
        TotalExclSelling: req.body.TotalExclSelling,
        TotalInclSelling: req.body.TotalInclSelling,
        DayProfit: req.body.DayProfit,
        hisyear: req.body.hisyear,
        hisMonth: req.body.hisMonth,
        hisDay: req.body.hisDay,
        Vat: req.body.Vat,
        // Remove the fields that are not in tbltmpdailysales
    };

    console.log("create data in dataase", tbltmpdailysales);


    // Save Tmpdata_salesrep_tran in the database
    Tbltmpdailysales.create(tbltmpdailysales)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the tmpdata_salesrep_tran."
            });
        });
};

// Retrieve all Tmpdata_salesrep_trans from the database.
exports.findAll = (req, res) => {
    Tbltmpdailysales.findAll()
        .then(Tbltmpdailysales => {
            res.send(Tbltmpdailysales);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmpdailysales."
            });
        });
};

// // Retrieve all published Tmpdata_salesrep_trans from the database
exports.findAllPublished = (req, res) => {
    Tbltmpdailysales.findAll({ where: { published: true } })
        .then(Tbltmpdailysales => {
            res.send(Tbltmpdailysales);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmpdailysales."
            });
        });
};


// // Find a single Tmpdata_salesrep_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmpdailysales.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbltmpdailysales with id=" + id
            });
        });
};

// Update a Tmpdata_salesrep_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmpdailysales.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpdailysales was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmpdailysales with id=${id}. Maybe Tbltmpdailysales was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbltmpdailysales with id=" + id
            });
        });
};

// // Delete a Tmpdata_salesrep_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmpdailysales.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpdailysales was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmpdailysales with id=${id}. Maybe Tbltmpdailysales was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbltmpdailysales with id=" + id
            });
        });
};

// // Delete all Tbltmpdailysaless from the database.
exports.deleteAll = (req, res) => {
    Tbltmpdailysales.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbltmpdailysaless were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tbltmpdailysaless."
            });
        });
};
