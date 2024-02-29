const Tbltransactionv = require("../../models/Database_host_model/tbltransactionv.modle");


// Create and Save a new Tbltransactionv
exports.create = (req, res) => {
    // Validate request
    if (!req.body.SaleNum) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tbltransactionvData = {
        SaleNum: req.body.SaleNum,
        TransactionNum: req.body.TransactionNum,
        Hismonth: req.body.Hismonth,
        Hisday: req.body.Hisday,
        Hisyear: req.body.Hisyear,
    };
    // Save Tbltransactionv in the database
    Tbltransactionv.create(tbltransactionvData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbltransactionv.",
            });
        });
};

// Retrieve all Tbltransactionv from the database.
exports.findAll = (req, res) => {
    const TransactionNum = req.query.TransactionNum;
    var condition = TransactionNum ? { TransactionNum: { [Op.like]: `%${TransactionNum}%` } } : null;

    Tbltransactionv.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltransactionv.",
            });
        });
};

// Find a single Tbltransactionv with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltransactionv.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tbltransactionv with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tbltransactionv with id=" + id,
            });
        });
};

// Update a Tbltransactionv by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltransactionv.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltransactionv was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tbltransactionv with id=${id}. Maybe Tbltransactionv was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tbltransactionv with id=" + id,
            });
        });
};

// Delete a Tbltransactionv with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltransactionv.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltransactionv was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltransactionv with id=${id}. Maybe Tbltransactionv was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tbltransactionv with id=" + id,
            });
        });
};

// Delete all Tbltransactionv from the database.
exports.deleteAll = (req, res) => {
    Tbltransactionv.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tbltransactionvs were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbltransactionvs.",
            });
        });
};

// Find all published Tbltransactionv
exports.findAllPublished = (req, res) => {
    Tbltransactionv.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltransactionv.",
            });
        });
};
