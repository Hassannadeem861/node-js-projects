// Tmpprodperf.controller.js
const Tmpprodperf = require("../../models/Database_hoststockmaster_model/tmpprodperf.model");


// Create and Save a new Tmpprodperf
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }

    const tmpprodperf = {
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        MajorNo: req.body.MajorNo,
        MajorDesc: req.body.MajorDesc,
        Sub1No: req.body.Sub1No,
        Sub1Desc: req.body.Sub1Desc,
        Sub2No: req.body.Sub2No,
        Sub2Desc: req.body.Sub2Desc,
        Quantity: req.body.Quantity,
        QuantityOnHand: req.body.QuantityOnHand,
        'Total Excl Cost': req.body['Total Excl Cost'],
        'Total Excl Selling': req.body['Total Excl Selling'],
        'Total Incl Selling': req.body['Total Incl Selling'],
        'GP %': req.body['GP %'],
        'GP Value': req.body['GP Value'],
        GMajorGP: req.body.GMajorGP,
        GSub1GP: req.body.GSub1GP,
        GSub2GP: req.body.GSub2GP,
        GGP: req.body.GGP,
        GMajorTurnP: req.body.GMajorTurnP,
    };




    // Save Tmpprodperf in the database
    Tmpprodperf.create(tmpprodperf)
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

// Retrieve all Tmpprodperf from the database.
exports.findAll = (req, res) => {
    Tmpprodperf.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpprodperf."
            });
        });
};

// Find a single Tmpprodperf with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpprodperf.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpprodperf with id=" + id
            });
        });
};

// Update a Tmpprodperf by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpprodperf.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpprodperf was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpprodperf with id=${id}. Maybe Tmpprodperf was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpprodperf with id=" + id
            });
        });
};

// Delete a Tmpprodperf with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpprodperf.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpprodperf was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpprodperf with id=${id}. Maybe Tmpprodperf was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpprodperf from the database.
exports.deleteAll = (req, res) => {
    Tmpprodperf.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpprodperf were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpprodperf."
            });
        });
};
