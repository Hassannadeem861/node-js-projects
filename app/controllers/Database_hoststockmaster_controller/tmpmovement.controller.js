// tmpmovement.controller.js
const Tmpmovement = require("../../models/Database_hoststockmaster_model/tmpmovement.model");


// Create and Save a new Tmpmovement
exports.create = (req, res) => {
    // Validate request
    if (!req.body.SoldDate) {
        res.status(400).send({ message: "SoldDate can not be empty!" });
        return;
    }

    const newRecord = {
        SoldDate: req.body.SoldDate,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        MajorNum: req.body.MajorNum,
        Sub1Num: req.body.Sub1Num,
        Sub2Num: req.body.Sub2Num,
        Open_QTY: req.body.Open_QTY,
        Close_QTY: req.body.Close_QTY,
        Sold_QTY: req.body.Sold_QTY,
        Received_QTY: req.body.Received_QTY,
        Adjust_QTY: req.body.Adjust_QTY,
        Stock_Take_Diff: req.body.Stock_Take_Diff,
        Sold_Excl_Selling: req.body.Sold_Excl_Selling,
        Sold_Excl_Cost: req.body.Sold_Excl_Cost,
        Received_Excl_Selling: req.body.Received_Excl_Selling,
        Received_Excl_Cost: req.body.Received_Excl_Cost,
        Used_In_Combined_Item: req.body.Used_In_Combined_Item,
        HisDay: req.body.HisDay,
        HisMonth: req.body.HisMonth,
        HisYear: req.body.HisYear,
    };




    // Save tmpmovement in the database
    Tmpmovement.create(newRecord)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the tmpmovement."
            });
        });
};

// Retrieve all Tmpmovement from the database.
exports.findAll = (req, res) => {
    Tmpmovement.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpmovement."
            });
        });
};

// Find a single Tmpmovement with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpmovement.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpmovement with id=" + id
            });
        });
};

// Update a Tmpmovement by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpmovement.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmovement was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpmovement with id=${id}. Maybe Tmpmovement was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpmovement with id=" + id
            });
        });
};

// Delete a Tmpmovement with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpmovement.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmovement was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpmovement with id=${id}. Maybe Tmpmovement was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpmovement from the database.
exports.deleteAll = (req, res) => {
    Tmpmovement.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpmovement were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpmovement."
            });
        });
};
