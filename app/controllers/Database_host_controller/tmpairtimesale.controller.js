const Tmpairtimesale = require("../../models/Database_host_model/tmpairtimesale.modle");


// Create and Save a new Tmpairtimesale
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Salenum) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpAirtimeSaleData = {
        Salenum: req.body.Salenum,
        TranNo: req.body.TranNo,
        StockCode: req.body.StockCode,
        ItemDescription: req.body.ItemDescription,
        VoucherSerialNo: req.body.VoucherSerialNo,
        VoucherString: req.body.VoucherString,
        VoucherCode: req.body.VoucherCode,
        VoucherName: req.body.VoucherName,
        VocuherCost: req.body.VocuherCost,
        VoucherVAT: req.body.VoucherVAT,
        VocuherIsVAT: req.body.VocuherIsVAT,
        ComputerName: req.body.ComputerName,
        UserName: req.body.UserName,
    };

    // Save Tmpairtimesale in the database
    Tmpairtimesale.create(tmpAirtimeSaleData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpairtimesale.",
            });
        });
};

// Retrieve all Tmpairtimesale from the database.
exports.findAll = (req, res) => {
    const Salenum = req.query.Salenum;
    var condition = Salenum ? { Salenum: { [Op.like]: `%${Salenum}%` } } : null;

    Tmpairtimesale.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpairtimesale.",
            });
        });
};

// Find a single Tmpairtimesale with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpairtimesale.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpairtimesale with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpairtimesale with id=" + id,
            });
        });
};

// Update a Tmpairtimesale by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpairtimesale.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpairtimesale was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpairtimesale with id=${id}. Maybe Tmpairtimesale was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpairtimesale with id=" + id,
            });
        });
};

// Delete a Tmpairtimesale with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpairtimesale.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpairtimesale was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpairtimesale with id=${id}. Maybe Tmpairtimesale was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpairtimesale with id=" + id,
            });
        });
};

// Delete all Tmpairtimesale from the database.
exports.deleteAll = (req, res) => {
    Tmpairtimesale.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpairtimesales were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpairtimesales.",
            });
        });
};

// Find all published Tmpairtimesale
exports.findAllPublished = (req, res) => {
    Tmpairtimesale.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpairtimesale.",
            });
        });
};
