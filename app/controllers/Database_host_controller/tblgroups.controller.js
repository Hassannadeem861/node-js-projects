const Tblgroups = require("../../models/Database_host_model/tblgroups.model");


// Create and Save a new Tblgroups
exports.create = (req, res) => {
    if (!req.body.GroupNo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const tblgroups = {
        GroupNo: req.body.GroupNo,
        GroupName: req.body.GroupName,
    };

    Tblgroups.create(tblgroups)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tblgroups."
            });
        });
};

// Retrieve all Tblgroupss from the database.
exports.findAll = (req, res) => {
    Tblgroups.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving group items."
            });
        });
};

// Find a single Tblgroups with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblgroups.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tblgroups with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblgroups with id=" + id
            });
        });
};

// Update a Tblgroups by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblgroups.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblgroups was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblgroups with id=${id}. Maybe Tblgroups was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblgroups with id=" + id
            });
        });
};

// Delete a Tblgroups with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblgroups.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblgroups was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tblgroups with id=${id}. Maybe Tblgroups was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tblgroups with id=" + id
            });
        });
};

// Delete all Tblgroupss from the database.
exports.deleteAll = (req, res) => {
    Tblgroups.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tblgroupss were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all group items."
            });
        });
};
