const Tbldrawer = require("../../models/Database_host_model/tbldrawer.model");


// Create and Save a new Tbldrawer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DrawerType) {
        res.status(400).send({ message: "All fields must be filled!" });
        return;
    }

    // Create a Tbldrawer
    const tbldrawer = {
        DrawerType: req.body.DrawerType,
        Range: req.body.Range,
        Connector: req.body.Connector,
        Pulse: req.body.Pulse
    };

    // Save Tbldrawer in the database
    Tbldrawer.create(tbldrawer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tbldrawer."
            });
        });
};

// Retrieve all Tbldrawer from the database.
exports.findAll = (req, res) => {
    Tbldrawer.findAll()
        .then(tbldrawers => {
            res.send(tbldrawers);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbldrawer."
            });
        });
};

// Find a single Tbldrawer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbldrawer.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbldrawer with id=" + id
            });
        });
};

// Update a Tbldrawer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbldrawer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbldrawer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbldrawer with id=${id}. Maybe Tbldrawer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbldrawer with id=" + id
            });
        });
};

// Delete a Tbldrawer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbldrawer.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbldrawer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbldrawer with id=${id}. Maybe Tbldrawer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbldrawer with id=" + id
            });
        });
};

// Delete all Tbldrawer from the database.
exports.deleteAll = (req, res) => {
    Tbldrawer.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbldrawer were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tbldrawer."
            });
        });
};
