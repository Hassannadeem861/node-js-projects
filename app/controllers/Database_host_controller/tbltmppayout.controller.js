const Tbltmppayout = require("../../models/Database_host_model/tbltmppayout.modle");

// Create and Save a new Tmpdata_salesrep_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.TransactionNum) {
        res.status(400).send({ message: "StockCode cannot be empty!" });
        return;
    }

    // Create a Tmpdata_salesrep_tran
    const tbltmppayout = {
        TransactionNum: req.body.TransactionNum,
        datetime: req.body.datetime,
        Clerk_Name: req.body.Clerk_Name,
        Amount: req.body.Amount,
        Reason: req.body.Reason,
        CashupNum: req.body.CashupNum,
        Incashup: req.body.Incashup,
        Computername: req.body.Computername,
        PosPayout: req.body.PosPayout,
        ClerkCashup: req.body.ClerkCashup,
        Hisyear: req.body.Hisyear,
        HisMonth: req.body.HisMonth,
        Hisday: req.body.Hisday,
    };



    console.log("create data in dataase", tbltmppayout);


    // Save Tmpdata_salesrep_tran in the database
    Tbltmppayout.create(tbltmppayout)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the tbltmppayout."
            });
        });
};

// Retrieve all Tmpdata_salesrep_trans from the database.
exports.findAll = (req, res) => {
    Tbltmppayout.findAll()
        .then(Tbltmppayout => {
            res.send(Tbltmppayout);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmppayout."
            });
        });
};

// // Retrieve all published Tmpdata_salesrep_trans from the database
exports.findAllPublished = (req, res) => {
    Tbltmppayout.findAll({ where: { published: true } })
        .then(Tbltmppayout => {
            res.send(Tbltmppayout);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbltmppayout."
            });
        });
};


// // Find a single Tmpdata_salesrep_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmppayout.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbltmppayout with id=" + id
            });
        });
};

// Update a Tmpdata_salesrep_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmppayout.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmppayout was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmppayout with id=${id}. Maybe Tbltmppayout was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbltmppayout with id=" + id
            });
        });
};

// // Delete a Tmpdata_salesrep_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmppayout.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbltmppayout was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmppayout with id=${id}. Maybe Tbltmppayout was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbltmppayout with id=" + id
            });
        });
};

// // Delete all Tbltmpdebtransactionss from the database.
exports.deleteAll = (req, res) => {
    Tbltmppayout.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbltmppayout were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tbltmppayout."
            });
        });
};
