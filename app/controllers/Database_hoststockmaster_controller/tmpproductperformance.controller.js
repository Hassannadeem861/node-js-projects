// tmpproductperformance.controller.js
const Tmpproductperformance = require("../../models/Database_hoststockmaster_model/tmpproductperformance.model");


// Create and Save a new tmpproductperformance
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }

    const tmpproductperformance = {
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        MajorNo: req.body.MajorNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,
        Quantity: req.body.Quantity,
        'Total Cost Price': req.body['Total Cost Price'],
        'Avg Excl Selling': req.body['Avg Excl Selling'],
        'Total Excl Selling': req.body['Total Excl Selling'],
        'Total Incl Selling': req.body['Total Incl Selling'],
        'GP %': req.body['GP %'],
        'GP Value': req.body['GP Value'],
        VAT: req.body.VAT,
        GMajorGP: req.body.GMajorGP,
        GSub1GP: req.body.GSub1GP,
        GSub2GP: req.body.GSub2GP,
        GGP: req.body.GGP,
    };




    // Save tmpproductperformance in the database
    Tmpproductperformance.create(tmpproductperformance)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpprodperf."
            });
        });
};

// Retrieve all Tmpproductperformance from the database.
exports.findAll = (req, res) => {
    Tmpproductperformance.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpproductperformance."
            });
        });
};

// Find a single Tmpproductperformance with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpproductperformance.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpproductperformance with id=" + id
            });
        });
};

// Update a Tmpproductperformance by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpproductperformance.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpproductperformance was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpproductperformance with id=${id}. Maybe Tmpproductperformance was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpproductperformance with id=" + id
            });
        });
};

// Delete a Tmpproductperformance with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpproductperformance.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpproductperformance was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpproductperformance with id=${id}. Maybe Tmpproductperformance was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpproductperformance from the database.
exports.deleteAll = (req, res) => {
    Tmpproductperformance.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpproductperformance were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpproductperformance."
            });
        });
};
