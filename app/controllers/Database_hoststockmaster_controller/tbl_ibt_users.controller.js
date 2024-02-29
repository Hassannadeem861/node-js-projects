// tbl_ibt_users.controller.js
const Tbl_ibt_users = require("../../models/Database_hoststockmaster_model/tbl_ibt_users.model");


// Create and Save a new tbl_ibt_users
exports.create = (req, res) => {
    // Validate request
    if (!req.body.UserName) {
        res.status(400).send({ message: "UserName can not be empty!" });
        return;
    }


    const tbl_ibt_users = {
        UserName: req.body.UserName,
        UserDescription: req.body.UserDescription,
        Password: req.body.Password,
        Suspended: req.body.Suspended,
        LastAccessed: req.body.LastAccessed,
        Created: req.body.Created,
        LoggedIn: req.body.LoggedIn,
        SignedOff: req.body.SignedOff,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };

    // Save Tbl_ibt_users in the database
    Tbl_ibt_users.create(tbl_ibt_users)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_users."
            });
        });
};

// Retrieve all Tbl_ibt_users from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_users."
            });
        });
};

// Find a single Tbl_ibt_users with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_users.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_users with id=" + id
            });
        });
};

// Update a Tbl_ibt_users by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_users.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_users was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_users with id=${id}. Maybe Tbl_ibt_users was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_users with id=" + id
            });
        });
};

// Delete a Tbl_ibt_users with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_users.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_users was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_users with id=${id}. Maybe Tbl_ibt_users was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_users with id=" + id
            });
        });
};

// Delete all Tbl_ibt_users from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_users.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_users."
            });
        });
};
