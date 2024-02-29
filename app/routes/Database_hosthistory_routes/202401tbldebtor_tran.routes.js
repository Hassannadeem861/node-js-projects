// routes/202310tbldata_current_tran.routes.js

module.exports = app => {
    const tbl_debtor_tran = require("../../controllers/Database_hosthistory_controller/202401tbldebtor_tran.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();

    // Create a new tbl_debtor_tran
    router.post("/", tbl_debtor_tran.create);

    // Retrieve all tbl_debtor_tran
    router.get("/", tbl_debtor_tran.findAll);

    // Retrieve a single tbl_debtor_tran with id
    router.get("/:id", tbl_debtor_tran.findOne);

    // Update a tbl_debtor_tran with id
    router.put("/:id", tbl_debtor_tran.update);

    // Delete a tbl_debtor_tran with id
    router.delete("/:id", tbl_debtor_tran.delete);

    // Delete all tbl_debtor_tran
    router.delete("/", tbl_debtor_tran.deleteAll);

    app.use('/api/202401tbldebtor_tran', router);
};
