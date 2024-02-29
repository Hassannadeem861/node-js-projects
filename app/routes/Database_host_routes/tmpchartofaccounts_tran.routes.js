module.exports = (app) => {

    const tmpchartofaccounts_tran = require("../../controllers/Database_host_controller/tmpchartofaccounts_tran.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpchartofaccounts_tran
    router.post("/", tmpchartofaccounts_tran.create);

    // Retrieve all tmpchartofaccounts_trans
    router.get("/", tmpchartofaccounts_tran.findAll);

    // Retrieve a single tmpchartofaccounts_tran with id
    router.get("/:id", tmpchartofaccounts_tran.findOne);

    // Update a tmpchartofaccounts_tran with id
    router.put("/:id", tmpchartofaccounts_tran.update);

    // Delete a tmpchartofaccounts_tran with id
    router.delete("/:id", tmpchartofaccounts_tran.delete);

    // Delete all tmpchartofaccounts_trans
    router.delete("/", tmpchartofaccounts_tran.deleteAll);

    app.use("/api/tmpchartofaccounts_tran", router);

};
