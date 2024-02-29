const Tmpmaindelete = require("../../models/Database_host_model/tmpmaindelete.model");

// Create and Save a new Tmpmaindelete
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode is required!" });
        return;
    }

    // Create a Tmpmaindelete
    const tmpmaindelete = {
        StockCode: req.body.StockCode,
        StockBarcode: req.body.StockBarcode,
        Description1: req.body.Description1,
        Description2: req.body.Description2,
        MajorNo: req.body.MajorNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,
        StockOnHand: req.body.StockOnHand
    };

    // Save Tmpmaindelete in the database
    Tmpmaindelete.create(tmpmaindelete)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpmaindelete."
            });
        });
};

// Retrieve all Tmpmaindelete from the database.
exports.findAll = (req, res) => {
    Tmpmaindelete.findAll()
        .then(Tmpmaindelete => {
            res.send(Tmpmaindelete);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpmaindelete."
            });
        });
};

// Find a single Tmpmaindelete with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpmaindelete.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpmaindelete with id=" + id
            });
        });
};

// Update a Tmpmaindelete by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpmaindelete.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmaindelete was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpmaindelete with id=${id}. Maybe Tmpmaindelete was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpmaindelete with id=" + id
            });
        });
};

// Delete a Tmpmaindelete with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpmaindelete.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmaindelete was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpmaindelete with id=${id}. Maybe Tmpmaindelete was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpmaindelete with id=" + id
            });
        });
};

// Delete all Tmpmaindelete from the database.
exports.deleteAll = (req, res) => {
    Tmpmaindelete.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpmaindelete were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpmaindelete."
            });
        });
};

// Find all published Tmpmaindelete
exports.findAllPublished = (req, res) => {
    Tmpmaindelete.findAll({ where: { Published: true } })
        .then(Tmpmaindelete => {
            res.send(Tmpmaindelete);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpmaindelete."
            });
        });
};
