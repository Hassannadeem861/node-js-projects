const Tbl_tmp_voucher = require("../../models/Database_host_model/tbl_tmp_voucher.modle");


// Create and Save a new Tbl_tmp_voucher
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Vocuher_no) {
        res.status(400).send({ message: "laddress can not be empty!" });
        return;
    }

    // Create a Tbl_tmp_voucher
    const tblTmpVoucherData = {
        Vocuher_no: req.body.Vocuher_no,
        DateTime: req.body.DateTime,
        Amount: req.body.Amount,
        User: req.body.User,
        VoucherType: req.body.VoucherType,
        Status: req.body.Status,
    };

    // Save Tbl_tmp_voucher in the database
    Tbl_tmp_voucher.create(tblTmpVoucherData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_tmp_voucher.",
            });
        });
};

// Retrieve all Tbl_tmp_voucher from the database.
exports.findAll = (req, res) => {
    Tbl_tmp_voucher.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_tmp_voucher.",
            });
        });
};

// Find a single Tbl_tmp_voucher with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_tmp_voucher.findByPk(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: "Not found Tbl_tmp_voucher with id " + id });
            } else {
                res.send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Error retrieving Tbl_tmp_voucher with id=" + id });
        });
};

// Update a Tbl_tmp_voucher by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_tmp_voucher.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Tbl_tmp_voucher was updated successfully." });
            } else {
                res.send({ message: `Cannot update Tbl_tmp_voucher with id=${id}. Maybe Tbl_tmp_voucher was not found or req.body is empty!` });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Error updating Tbl_tmp_voucher with id=" + id });
        });
};

// Delete a Tbl_tmp_voucher with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_tmp_voucher.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Tbl_tmp_voucher was deleted successfully!" });
            } else {
                res.send({ message: `Cannot delete Tbl_tmp_voucher with id=${id}. Maybe Tbl_tmp_voucher was not found!` });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Could not delete Tbl_tmp_voucher with id=" + id });
        });
};

// Delete all Tbl_tmp_voucher from the database.
exports.deleteAll = (req, res) => {
    Tbl_tmp_voucher.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tbl_tmp_voucher were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_tmp_voucher.",
            });
        });
};
