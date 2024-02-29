const Tmpcashbank_tran = require("../../models/Database_host_model/tmpcashbank_tran.modle");


// Create and Save a new Tmpcashbank_tran
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Reason) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpCashBankTranData = {
        DateTime: req.body.DateTime,
        Description: req.body.Description,
        Reason: req.body.Reason,
        DoneBy: req.body.DoneBy,
        AmountDebt: req.body.AmountDebt,
        AmountCredit: req.body.AmountCredit,
        RunningTotal: req.body.RunningTotal,
        Blank1: req.body.Blank1,
        Blank2: req.body.Blank2,
        Blank3: req.body.Blank3,
        Blank5: req.body.Blank5,
        TranType: req.body.TranType,
        TranDay: req.body.TranDay,
        TranMonth: req.body.TranMonth,
        TranYear: req.body.TranYear,
    };

    // Save Tmpcashbank_tran in the database
    Tmpcashbank_tran.create(tmpCashBankTranData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpcashbank_tran.",
            });
        });
};

// Retrieve all Tmpcashbank_tran from the database.
exports.findAll = (req, res) => {
    const Reason = req.query.Reason;
    var condition = Reason ? { Reason: { [Op.like]: `%${Reason}%` } } : null;

    Tmpcashbank_tran.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpcashbank_tran.",
            });
        });
};

// Find a single Tmpcashbank_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpcashbank_tran.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpcashbank_tran with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpcashbank_tran with id=" + id,
            });
        });
};

// Update a Tmpcashbank_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpcashbank_tran.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpcashbank_tran was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpcashbank_tran with id=${id}. Maybe Tmpcashbank_tran was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpcashbank_tran with id=" + id,
            });
        });
};

// Delete a Tmpcashbank_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpcashbank_tran.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpcashbank_tran was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpcashbank_tran with id=${id}. Maybe Tmpcashbank_tran was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpcashbank_tran with id=" + id,
            });
        });
};

// Delete all Tmpcashbank_tran from the database.
exports.deleteAll = (req, res) => {
    Tmpcashbank_tran.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpcashbank_trans were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpcashbank_trans.",
            });
        });
};

// Find all published Tmpcashbank_tran
exports.findAllPublished = (req, res) => {
    Tmpcashbank_tran.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpcashbank_tran.",
            });
        });
};
