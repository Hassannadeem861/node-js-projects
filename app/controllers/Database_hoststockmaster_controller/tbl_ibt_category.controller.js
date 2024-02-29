// tbleod.controller.js
const Tbl_ibt_category = require("../../models/Database_hoststockmaster_model/tbl_ibt_category.model");


// Create and Save a new Tbl_ibt_category
exports.create = (req, res) => {
    // Validate request
    if (!req.body.MajorNo) {
        res.status(400).send({ message: "MajorNo can not be empty!" });
        return;
    }

    // Create a Tbl_ibt_category
    const tblIBTCategory = {
        MajorNo: req.body.MajorNo,
        MajorDescription: req.body.MajorDescription,
        AvarageMarkup: req.body.AvarageMarkup,
        VatPercentage: req.body.VatPercentage,
        MaximumDiscount: req.body.MaximumDiscount,
        DefaultCalculation: req.body.DefaultCalculation,
        MenuItem: req.body.MenuItem,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };


    // Save Tbl_ibt_category in the database
    Tbl_ibt_category.create(tblIBTCategory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_category."
            });
        });
};

// Retrieve all Tbl_ibt_category from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_category.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_category."
            });
        });
};

// Find a single Tbl_ibt_category with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_category.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_category with id=" + id
            });
        });
};

// Update a Tbl_ibt_category by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_category.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_category was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_category with id=${id}. Maybe Tbl_ibt_category was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_category with id=" + id
            });
        });
};

// Delete a Tbl_ibt_category with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_category.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_category was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_category with id=${id}. Maybe Tbl_ibt_category was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_category with id=" + id
            });
        });
};

// Delete all Tbl_ibt_category from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_category.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_category were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_category."
            });
        });
};
