module.exports = (app) => {

    const tbl_ibt_transactions = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_transactions.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_transactions
    router.post("/", tbl_ibt_transactions.create);

    // Retrieve all tbl_ibt_transactionss
    router.get("/", tbl_ibt_transactions.findAll);

    // Retrieve a single tbl_ibt_transactions with id
    router.get("/:id", tbl_ibt_transactions.findOne);

    // Update a tbl_ibt_transactions with id
    router.put("/:id", tbl_ibt_transactions.update);

    // Delete a tbl_ibt_transactions with id
    router.delete("/:id", tbl_ibt_transactions.delete);

    // Delete all tbl_ibt_transactionss
    router.delete("/", tbl_ibt_transactions.deleteAll);

    app.use("/api/tbl_ibt_transactions", router);

};
