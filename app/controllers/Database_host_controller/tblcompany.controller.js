const Tblcompany = require("../../models/Database_host_model/tblcompany.model");


// Create and Save a new Tblcompany
exports.create = (req, res) => {
    // Validate request
    if (!req.body.CompanyName) {
        res.status(400).send({ message: "Company name cannot be empty!" });
        return;
    }

    // Create a Tblcompany
    const tblcompany = {
        CompanyName: req.body.CompanyName,
        Address1: req.body.Address1,
        Address2: req.body.Address2,
        Address3: req.body.Address3
    };

    // Save Tblcompany in the database
    Tblcompany.create(tblcompany)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tblcompany."
            });
        });
};

// Retrieve all Tblcompany from the database.
exports.findAll = (req, res) => {
    Tblcompany.findAll()
        .then(tblcompany => {
            res.send(tblcompany);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tblcompany."
            });
        });
};

// Find a single Tblcompany with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblcompany.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblcompany with id=" + id
            });
        });
};

// Update a Tblcompany by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblcompany.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblcompany was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblcompany with id=${id}. Maybe Tblcompany was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblcompany with id=" + id
            });
        });
};

// Delete a Tblcompany with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblcompany.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblcompany was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tblcompany with id=${id}. Maybe Tblcompany was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tblcompany with id=" + id
            });
        });
};

// Delete all Tblcompany from the database.
exports.deleteAll = (req, res) => {
    Tblcompany.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tblcompany were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tblcompany."
            });
        });
};
