const Tmpavgsale = require("../../models/Database_host_model/tmpavgsale.modle");


// Create and Save a new Tmpavgsale
exports.create = (req, res) => {
    // Validate request
    if (!req.body.SupplierName) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpAvgSaleData = {
        SupplierCode: req.body.SupplierCode,
        SupplierName: req.body.SupplierName,
        StockCode: req.body.StockCode,
        Description1: req.body.Description1,
        week1: req.body.week1,
        week2: req.body.week2,
        week3: req.body.week3,
        week4: req.body.week4,
        week5: req.body.week5,
        week6: req.body.week6,
        MinStock: req.body.MinStock,
        Maxstock: req.body.Maxstock,
        StockOnOrder: req.body.StockOnOrder,
        lastcost: req.body.lastcost,
        AvarageCostPrice: req.body.AvarageCostPrice,
        LastCostPrice: req.body.LastCostPrice,
        MajorNo: req.body.MajorNo,
        MajorName: req.body.MajorName,
        Sub1No: req.body.Sub1No,
        Sub1Name: req.body.Sub1Name,
        Sub2No: req.body.Sub2No,
        Sub2Name: req.body.Sub2Name,
    };

    // Save Tmpavgsale in the database
    Tmpavgsale.create(tmpAvgSaleData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpavgsale.",
            });
        });
};

// Retrieve all Tmpavgsale from the database.
exports.findAll = (req, res) => {
    const SupplierCode = req.query.SupplierCode;
    var condition = SupplierCode ? { SupplierCode: { [Op.like]: `%${SupplierCode}%` } } : null;

    Tmpavgsale.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpavgsale.",
            });
        });
};

// Find a single Tmpavgsale with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpavgsale.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpavgsale with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpavgsale with id=" + id,
            });
        });
};

// Update a Tmpavgsale by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpavgsale.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpavgsale was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpavgsale with id=${id}. Maybe Tmpavgsale was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpavgsale with id=" + id,
            });
        });
};

// Delete a Tmpavgsale with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpavgsale.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpavgsale was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpavgsale with id=${id}. Maybe Tmpavgsale was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpavgsale with id=" + id,
            });
        });
};

// Delete all Tmpavgsale from the database.
exports.deleteAll = (req, res) => {
    Tmpavgsale.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpavgsales were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpavgsales.",
            });
        });
};

// Find all published Tmpavgsale
exports.findAllPublished = (req, res) => {
    Tmpavgsale.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpavgsale.",
            });
        });
};
