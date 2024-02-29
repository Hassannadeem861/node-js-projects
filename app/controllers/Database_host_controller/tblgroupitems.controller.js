const Tblgroupitems = require("../../models/Database_host_model/tblgroupitems.model");


// Create and Save a new Group Item
exports.create = (req, res) => {
    if (!req.body.GroupNo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const groupItem = {
        GroupNo: req.body.GroupNo,
        GroupName: req.body.GroupName,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        GPosition: req.body.GPosition
    };

    Tblgroupitems.create(groupItem)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Group Item."
            });
        });
};

// Retrieve all Group Items from the database.
exports.findAll = (req, res) => {
    Tblgroupitems.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving group items."
            });
        });
};

// Find a single Group Item with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblgroupitems.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Group Item with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Group Item with id=" + id
            });
        });
};

// Update a Group Item by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblgroupitems.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Group Item was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Group Item with id=${id}. Maybe Group Item was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Group Item with id=" + id
            });
        });
};

// Delete a Group Item with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblgroupitems.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Group Item was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Group Item with id=${id}. Maybe Group Item was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Group Item with id=" + id
            });
        });
};

// Delete all Group Items from the database.
exports.deleteAll = (req, res) => {
    Tblgroupitems.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Group Items were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all group items."
            });
        });
};
