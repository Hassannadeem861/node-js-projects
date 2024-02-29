// tbl_ibt_users_access.controller.js
const Tbl_ibt_users_access = require("../../models/Database_hoststockmaster_model/tbl_ibt_users_access.model");


// Create and Save a new Tbl_ibt_users_access
exports.create = (req, res) => {
    // Validate request
    if (!req.body.UserName) {
        res.status(400).send({ message: "UserName can not be empty!" });
        return;
    }


    const tblIbtUsersAccessData = {
        UserName: req.body.UserName,
        PermissionKey: req.body.PermissionKey,
        UModule: req.body.UModule,
        PositionKey: req.body.PositionKey,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };
    // Save Tbl_ibt_users_access in the database
    Tbl_ibt_users_access.create(tblIbtUsersAccessData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_users_access."
            });
        });
};

// Retrieve all Tbl_ibt_users_access from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_users_access.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_users_access."
            });
        });
};

// Find a single Tbl_ibt_users_access with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_users_access.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_users_access with id=" + id
            });
        });
};

// Update a Tbl_ibt_users_access by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_users_access.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_users_access was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_users_access with id=${id}. Maybe Tbl_ibt_users_access was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_users_access with id=" + id
            });
        });
};

// Delete a Tbl_ibt_users_access with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_users_access.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_users_access was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_users_access with id=${id}. Maybe Tbl_ibt_users_access was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_users_access with id=" + id
            });
        });
};

// Delete all Tbl_ibt_users_access from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_users_access.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_users_access were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_users_access."
            });
        });
};
