// tbl_ibt_locations.controller.js
const Tbl_ibt_locations = require("../../models/Database_hoststockmaster_model/tbl_ibt_locations.model");


// Create and Save a new Tbl_ibt_locations
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StoreName) {
        res.status(400).send({ message: "StoreName can not be empty!" });
        return;
    }


    const tbl_ibt_locations = {
        StoreName: req.body.StoreName,
        StoreODBC: req.body.StoreODBC,
        LocationStatus: req.body.LocationStatus,
        WarehouseDebtorCode: req.body.WarehouseDebtorCode,
    };

    // Save Tbl_ibt_locations in the database
    Tbl_ibt_locations.create(tbl_ibt_locations)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_locations."
            });
        });
};

// Retrieve all Tbl_ibt_locations from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_locations.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_locations."
            });
        });
};

// Find a single Tbl_ibt_locations with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_locations.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_locations with id=" + id
            });
        });
};

// Update a Tbl_ibt_locations by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_locations.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_locations was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_locations with id=${id}. Maybe Tbl_ibt_locations was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_locations with id=" + id
            });
        });
};

// Delete a Tbl_ibt_locations with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_locations.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_locations was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_locations with id=${id}. Maybe Tbl_ibt_locations was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_locations with id=" + id
            });
        });
};

// Delete all Tbl_ibt_locations from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_locations.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_locations were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_locations."
            });
        });
};
