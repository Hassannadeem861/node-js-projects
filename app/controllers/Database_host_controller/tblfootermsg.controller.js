const Tblfootermsg = require("../../models/Database_host_model/tblfootermsg.model");


// Create and Save a new Footer Message
exports.create = (req, res) => {
    // Validate request
    if (!req.body.FooterMsg) {
        res.status(400).send({
            message: "Footer message content can not be empty!"
        });
        return;
    }

    // Create a Footer Message
    const footerMsg = {
        Sno: req.body.Sno,
        FooterMsg: req.body.FooterMsg
    };

    // Save Footer Message in the database
    Tblfootermsg.create(footerMsg)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Footer Message."
            });
        });
};

// Retrieve all Footer Messages from the database.
exports.findAll = (req, res) => {
    Tblfootermsg.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving footer messages."
            });
        });
};

// Find a single Footer Message with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblfootermsg.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Footer Message with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Footer Message with id=" + id
            });
        });
};

// Update a Footer Message by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblfootermsg.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Footer Message was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Footer Message with id=${id}. Maybe Footer Message was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Footer Message with id=" + id
            });
        });
};

// Delete a Footer Message with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblfootermsg.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Footer Message was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Footer Message with id=${id}. Maybe Footer Message was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Footer Message with id=" + id
            });
        });
};

// Delete all Footer Messages from the database.
exports.deleteAll = (req, res) => {
    Tblfootermsg.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Footer Messages were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all footer messages."
            });
        });
};
