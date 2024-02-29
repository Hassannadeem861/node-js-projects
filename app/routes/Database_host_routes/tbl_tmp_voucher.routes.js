module.exports = (app) => {

    const tbl_tmp_voucher = require("../../controllers/Database_host_controller/tbl_tmp_voucher.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_tmp_voucher
    router.post("/", tbl_tmp_voucher.create);

    // Retrieve all tbl_tmp_vouchers
    router.get("/", tbl_tmp_voucher.findAll);

    // Retrieve a single tbl_tmp_voucher with id
    router.get("/:id", tbl_tmp_voucher.findOne);

    // Update a tbl_tmp_voucher with id
    router.put("/:id", tbl_tmp_voucher.update);

    // Delete a tbl_tmp_voucher with id
    router.delete("/:id", tbl_tmp_voucher.delete);

    // Delete all tbl_tmp_vouchers
    router.delete("/", tbl_tmp_voucher.deleteAll);

    app.use("/api/tbl_tmp_voucher", router);

};
