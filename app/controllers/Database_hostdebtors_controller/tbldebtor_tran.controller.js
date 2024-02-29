const Tbldebtor_tran = require("../../models/Database_hostdebtors_model/tbldebtor_tran.model");

// Create a new tbldebtor_tran
exports.create = (req, res) => {
    // Validate request
    if (!req?.body?.Description) {
        res.status(400).send({
            message: "Missing required fields!"
        });
        return;
    }

    // Create a tbldebtor_tran
    const tbldebtor_tran = {
        DateTime: req?.body?.DateTime,
        DebtorCode: req?.body?.DebtorCode,
        Reference: req?.body?.Reference,
        Description: req?.body?.Description,
        TransType: req?.body?.TransType,
        Amount: req?.body?.Amount,
        OrderNo: req?.body?.OrderNo,
        hisYear: req?.body?.hisYear,
        hisMonth: req?.body?.hisMonth,
        hisDay: req?.body?.hisDay,
        DayEndFinalize: req?.body?.DayEndFinalize,
        AccountSystem: req?.body?.AccountSystem,
        Vat: req?.body?.Vat,
        BFDate: req?.body?.BFDate,
        UserName: req?.body?.UserName,
        DebtorName: req?.body?.DebtorName
    };
    console.log("create data", tbldebtor_tran);

    // Save tbldebtor_tran in the database
    Tbldebtor_tran.create(tbldebtor_tran)
        .then(data => {
            console.log("create data", data);
            res.send(data);
        })
        .catch(err => {
            console.log("create data", err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the tbldebtor_tran."
            });
        });
};

// Retrieve all tbldebtor_trans from the database
exports.findAll = (req, res) => {
    Tbldebtor_tran.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving debtor transactions."
            });
        });
};

// Find a single tbldebtor_tran with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbldebtor_tran.findByPk(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "tbldebtor_tran not found with id " + id
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving tbldebtor_tran with id=" + id
            });
        });
};

// Update a tbldebtor_tran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbldebtor_tran.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "tbldebtor_tran was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update tbldebtor_tran with id=${id}. Maybe tbldebtor_tran was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating tbldebtor_tran with id=" + id
            });
        });
};

// Delete a tbldebtor_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbldebtor_tran.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "tbldebtor_tran was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete tbldebtor_tran with id=${id}. Maybe tbldebtor_tran was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete tbldebtor_tran with id=" + id
            });
        });
};

// Delete all tbldebtor_trans from the database
exports.deleteAll = (req, res) => {
    Tbldebtor_tran.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} tbldebtor_trans were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all debtor transactions."
            });
        });
};
