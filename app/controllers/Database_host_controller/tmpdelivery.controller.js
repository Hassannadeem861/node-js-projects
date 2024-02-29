const Tmpdelivery = require("../../models/Database_host_model/tmpdelivery.model");


// Create and Save a new Tmpdelivery
exports.create = (req, res) => {

    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode and Description are required fields!" });
        return;
    }

    // Create a Tmpdelivery
    const tmpdelivery = {
        InvoiceNo: req.body.InvoiceNo,
        DelNo: req.body.DelNo,
        LineNo: req.body.LineNo,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        SoldQty: req.body.SoldQty,
        DeliveredQty: req.body.DeliveredQty,
        DispatchQty: req.body.DispatchQty,
        BalanceQty: req.body.BalanceQty
    };

    // Save Tmpdelivery in the database
    Tmpdelivery.create(tmpdelivery)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpdelivery."
            });
        });
};

// Retrieve all Tmpdelivery from the database.
exports.findAll = (req, res) => {
    Tmpdelivery.findAll()
        .then(Tmpdeliverys => {
            res.send(Tmpdeliverys);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpdelivery."
            });
        });
};

// Find a single Tmpdelivery with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpdelivery.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpdelivery with id=" + id
            });
        });
};

// Find all published Tmpserialsale
exports.findAllPublished = (req, res) => {
    Tmpserialsale.findAll({ where: { Published: true } })
        .then(tmpserialsales => {
            res.send(tmpserialsales);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpserialsale."
            });
        });
};


// Update a Tmpdelivery by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpdelivery.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdelivery was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpdelivery with id=${id}. Maybe Tmpdelivery was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpdelivery with id=" + id
            });
        });
};

// Delete a Tmpdelivery with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpdelivery.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdelivery was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpdelivery with id=${id}. Maybe Tmpdelivery was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpdelivery with id=" + id
            });
        });
};

// Delete all Tmpdelivery from the database.
exports.deleteAll = (req, res) => {
    Tmpdelivery.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpdelivery were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpdelivery."
            });
        });
};
