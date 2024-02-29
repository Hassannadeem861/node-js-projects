const Tmpchartofaccounts_tran = require("../../models/Database_host_model/tmpchartofaccounts_tran.modle");


// Create and Save a new Tmpchartofaccounts_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpChartOfAccountsTranData = {
        DateTime: req.body.DateTime,
        Account_code: req.body.Account_code,
        Account_Name: req.body.Account_Name,
        SubAccountCode: req.body.SubAccountCode,
        SubAccountName: req.body.SubAccountName,
        AccComments: req.body.AccComments,
        AcctReason: req.body.AcctReason,
        AcctVatable: req.body.AcctVatable,
        Amount: req.body.Amount,
        VatAmount: req.body.VatAmount,
        DoneBy: req.body.DoneBy,
        BlankString1: req.body.BlankString1,
        BlankString2: req.body.BlankString2,
        CashupDone: req.body.CashupDone,
        CashupNo: req.body.CashupNo,
        HisDay: req.body.HisDay,
        HisMonth: req.body.HisMonth,
        HisYear: req.body.HisYear,
    };
    // Save Tmpchartofaccounts_tran in the database
    Tmpchartofaccounts_tran.create(tmpChartOfAccountsTranData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpchartofaccounts_tran.",
            });
        });
};

// Retrieve all Tmpchartofaccounts_tran from the database.
exports.findAll = (req, res) => {
    const Account_code = req.query.Account_code;
    var condition = Account_code ? { Account_code: { [Op.like]: `%${Account_code}%` } } : null;

    Tmpchartofaccounts_tran.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpchartofaccounts_tran.",
            });
        });
};

// Find a single Tmpchartofaccounts_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpchartofaccounts_tran.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpchartofaccounts_tran with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpchartofaccounts_tran with id=" + id,
            });
        });
};

// Update a Tmpchartofaccounts_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpchartofaccounts_tran.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpchartofaccounts_tran was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpchartofaccounts_tran with id=${id}. Maybe Tmpchartofaccounts_tran was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpchartofaccounts_tran with id=" + id,
            });
        });
};

// Delete a Tmpchartofaccounts_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpchartofaccounts_tran.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpchartofaccounts_tran was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpchartofaccounts_tran with id=${id}. Maybe Tmpchartofaccounts_tran was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpchartofaccounts_tran with id=" + id,
            });
        });
};

// Delete all Tmpchartofaccounts_tran from the database.
exports.deleteAll = (req, res) => {
    Tmpchartofaccounts_tran.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpchartofaccounts_trans were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpchartofaccounts_trans.",
            });
        });
};

// Find all published Tmpchartofaccounts_tran
exports.findAllPublished = (req, res) => {
    Tmpchartofaccounts_tran.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpchartofaccounts_tran.",
            });
        });
};
