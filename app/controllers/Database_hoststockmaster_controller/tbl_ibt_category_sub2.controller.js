// Tbl_ibt_category_sub2.controller.js
const Tbl_ibt_category_sub2 = require("../../models/Database_hoststockmaster_model/tbl_ibt_category_sub2.model");


// Create and Save a new Tbl_ibt_category_sub2
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Sub1No) {
        res.status(400).send({ message: "Sub1No can not be empty!" });
        return;
    }

    // Create a Tbl_ibt_category_sub2
    const tbl_ibt_category_sub2 = {
        Sub1No: req.body.Sub1No,
        MajorNo: req.body.MajorNo,
        Sub2no: req.body.Sub2no,
        Sub2Description: req.body.Sub2Description,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };


    // Save Tbl_ibt_category_sub2 in the database
    Tbl_ibt_category_sub2.create(tbl_ibt_category_sub2)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_category_sub2."
            });
        });
};

// Retrieve all Tbl_ibt_category_sub2 from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_category_sub2.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_category_sub2."
            });
        });
};

// Find a single Tbl_ibt_category_sub2 with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_category_sub2.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_category_sub2 with id=" + id
            });
        });
};

// Update a Tbl_ibt_category_sub2 by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_category_sub2.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_category_sub2 was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_category_sub2 with id=${id}. Maybe Tbl_ibt_category_sub2 was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_category_sub2 with id=" + id
            });
        });
};

// Delete a Tbl_ibt_category_sub2 with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_category_sub2.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_category_sub2 was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_category_sub2 with id=${id}. Maybe Tbl_ibt_category_sub2 was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_category_sub2 with id=" + id
            });
        });
};

// Delete all Tbl_ibt_category_sub2 from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_category_sub2.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_category_sub2 were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_category_sub2."
            });
        });
};
