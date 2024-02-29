const Tblgroupitemsa = require("../../models/Database_host_model/tblgroupitemsa.model");


// Create and Save a new Tblgroupitemsaa
exports.create = (req, res) => {
    if (!req.body.GroupNo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const tblgroupitemsa = {
        GroupNo: req.body.GroupNo,
        GroupName: req.body.GroupName,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        GPosition: req.body.GPosition
    };

    Tblgroupitemsa.create(tblgroupitemsa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tblgroupitemsaa."
            });
        });
};

// Retrieve all Tblgroupitemsaas from the database.
exports.findAll = (req, res) => {
    Tblgroupitemsa.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving group items."
            });
        });
};

// Find a single Tblgroupitemsaa with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblgroupitemsa.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tblgroupitemsaa with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblgroupitemsaa with id=" + id
            });
        });
};

// Update a Tblgroupitemsaa by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblgroupitemsa.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblgroupitemsaa was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblgroupitemsaa with id=${id}. Maybe Tblgroupitemsaa was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblgroupitemsaa with id=" + id
            });
        });
};

// Delete a Tblgroupitemsaa with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblgroupitemsa.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblgroupitemsaa was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tblgroupitemsaa with id=${id}. Maybe Tblgroupitemsaa was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tblgroupitemsaa with id=" + id
            });
        });
};

// Delete all Tblgroupitemsaas from the database.
exports.deleteAll = (req, res) => {
    Tblgroupitemsa.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tblgroupitemsaas were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all group items."
            });
        });
};
